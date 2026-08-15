import { env } from "cloudflare:workers";

type RuntimeEnv = {
  DB?: D1Database;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
};

const runtimeEnv = env as unknown as RuntimeEnv;
const consentVersion = "waitlist-2026-08-15";
let schemaReady: Promise<void> | undefined;

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

async function ensureSchema(db: D1Database) {
  if (!schemaReady) {
    schemaReady = db.batch([
      db.prepare(`CREATE TABLE IF NOT EXISTS waitlist_entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        locale TEXT NOT NULL DEFAULT 'en',
        status TEXT NOT NULL DEFAULT 'pending',
        consent_version TEXT NOT NULL,
        turnstile_verified INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`),
      db.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_waitlist_entries_email ON waitlist_entries (email)"),
      db.prepare("PRAGMA optimize"),
    ]).then(() => undefined).catch((error: unknown) => {
      schemaReady = undefined;
      throw error;
    });
  }
  return schemaReady;
}

async function verifyTurnstile(token: string) {
  const secret = runtimeEnv.TURNSTILE_SECRET_KEY?.trim();
  const siteKey = runtimeEnv.TURNSTILE_SITE_KEY?.trim();
  if (!secret || !siteKey) return { configured: false, valid: true };
  if (!token) return { configured: true, valid: false };

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token }),
  });
  if (!response.ok) return { configured: true, valid: false };

  const result = (await response.json()) as { success?: boolean; action?: string };
  return {
    configured: true,
    valid: result.success === true && (!result.action || result.action === "waitlist"),
  };
}

export async function GET() {
  const siteKey = runtimeEnv.TURNSTILE_SITE_KEY?.trim() || null;
  const configured = Boolean(siteKey && runtimeEnv.TURNSTILE_SECRET_KEY?.trim());
  return json({ turnstileSiteKey: configured ? siteKey : null });
}

export async function POST(request: Request) {
  if ((Number(request.headers.get("content-length")) || 0) > 4096) return json({ code: "invalid_request" }, 413);

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return json({ code: "invalid_origin" }, 403);

  let payload: { email?: unknown; consent?: unknown; website?: unknown; locale?: unknown; turnstileToken?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ code: "invalid_request" }, 400);
  }

  if (typeof payload.website === "string" && payload.website.trim()) return json({ code: "accepted" }, 201);
  if (payload.consent !== true) return json({ code: "consent_required" }, 400);

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const locale = typeof payload.locale === "string" && ["en", "de", "es", "tr"].includes(payload.locale) ? payload.locale : "en";
  const validEmail = email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) return json({ code: "invalid_email" }, 400);

  const turnstile = await verifyTurnstile(typeof payload.turnstileToken === "string" ? payload.turnstileToken : "");
  if (!turnstile.valid) return json({ code: "turnstile_failed" }, 403);

  const db = runtimeEnv.DB;
  if (!db) return json({ code: "storage_unavailable" }, 503);

  try {
    await ensureSchema(db);
    const result = await db.prepare(`INSERT OR IGNORE INTO waitlist_entries
      (email, locale, status, consent_version, turnstile_verified)
      VALUES (?1, ?2, 'pending', ?3, ?4)`)
      .bind(email, locale, consentVersion, turnstile.configured ? 1 : 0)
      .run();

    return json({ code: result.meta.changes === 0 ? "already_joined" : "joined" }, result.meta.changes === 0 ? 200 : 201);
  } catch (error) {
    console.error("Waitlist write failed", error);
    return json({ code: "storage_unavailable" }, 503);
  }
}
