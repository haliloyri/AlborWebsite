"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { localizedPath } from "./locale-paths";
import type { Locale } from "./translations";

type WaitlistCopy = {
  emailLabel: string;
  emailPlaceholder: string;
  consent: string;
  privacy: string;
  submit: string;
  submitting: string;
  success: string;
  duplicate: string;
  verification: string;
  error: string;
};

type TurnstileApi = {
  render(container: HTMLElement, options: {
    sitekey: string;
    action: string;
    theme: "dark";
    callback(token: string): void;
    "expired-callback"(): void;
    "error-callback"(errorCode: string): boolean;
    "unsupported-callback"(): void;
  }): string;
  reset(widgetId?: string): void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function WaitlistForm({ locale, copy }: { locale: Locale; copy: WaitlistCopy }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [turnstileSiteKey, setTurnstileSiteKey] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "duplicate" | "verification" | "error">("idle");
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/waitlist", { headers: { Accept: "application/json" } })
      .then((response) => response.json())
      .then((data: { turnstileSiteKey?: string | null }) => {
        if (!cancelled && data.turnstileSiteKey) setTurnstileSiteKey(data.turnstileSiteKey);
      })
      .catch(() => undefined);

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileContainer.current) return;
    let disposed = false;
    let retryTimer: number | undefined;

    const verificationFailed = () => {
      if (!disposed) {
        setTurnstileToken("");
        setStatus("verification");
      }
    };

    const renderWidget = () => {
      if (disposed || !window.turnstile || !turnstileContainer.current || widgetId.current !== undefined) return false;

      try {
        widgetId.current = window.turnstile.render(turnstileContainer.current, {
          sitekey: turnstileSiteKey,
          action: "waitlist",
          theme: "dark",
          callback: (token) => {
            setTurnstileToken(token);
            setStatus((current) => current === "verification" ? "idle" : current);
          },
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => {
            verificationFailed();
            return true;
          },
          "unsupported-callback": verificationFailed,
        });
        return true;
      } catch {
        verificationFailed();
        return false;
      }
    };

    const existing = document.querySelector<HTMLScriptElement>("script[data-albor-turnstile]");
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.alborTurnstile = "true";
      script.addEventListener("error", verificationFailed, { once: true });
      document.head.appendChild(script);
    }

    let attempts = 0;
    if (!renderWidget()) {
      retryTimer = window.setInterval(() => {
        attempts += 1;
        if (renderWidget() || attempts >= 40) {
          window.clearInterval(retryTimer);
          if (attempts >= 40 && widgetId.current === undefined) verificationFailed();
        }
      }, 250);
    }

    return () => {
      disposed = true;
      if (retryTimer !== undefined) window.clearInterval(retryTimer);
    };
  }, [turnstileSiteKey]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("verification");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, consent, website, locale, turnstileToken }),
      });
      const result = (await response.json()) as { code?: string };

      if (response.ok) {
        setStatus(result.code === "already_joined" ? "duplicate" : "success");
        setEmail("");
        setConsent(false);
        setTurnstileToken("");
        if (window.turnstile && widgetId.current) window.turnstile.reset(widgetId.current);
        return;
      }

      setStatus(result.code === "turnstile_failed" ? "verification" : "error");
      if (window.turnstile && widgetId.current) window.turnstile.reset(widgetId.current);
      setTurnstileToken("");
    } catch {
      setStatus("error");
    }
  }

  const message = status === "success" ? copy.success : status === "duplicate" ? copy.duplicate : status === "verification" ? copy.verification : status === "error" ? copy.error : null;

  return (
    <form className="waitlist-form" onSubmit={submit}>
      <label className="waitlist-email">
        <span className="sr-only">{copy.emailLabel}</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={copy.emailPlaceholder}
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          required
        />
      </label>
      <label className="waitlist-honeypot" aria-hidden="true">
        Website
        <input name="website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-light" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? copy.submitting : copy.submit} <span className="download-arrow" aria-hidden="true">→</span>
      </button>
      <label className="waitlist-consent">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />
        <span>{copy.consent} <a href={localizedPath("/privacy", locale)}>{copy.privacy}</a></span>
      </label>
      {turnstileSiteKey ? <div className="waitlist-turnstile" ref={turnstileContainer} /> : null}
      <p className={`waitlist-message ${status}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
