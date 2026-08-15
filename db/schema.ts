import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const waitlistEntries = sqliteTable("waitlist_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  locale: text("locale").notNull().default("en"),
  status: text("status").notNull().default("pending"),
  consentVersion: text("consent_version").notNull(),
  turnstileVerified: integer("turnstile_verified", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_waitlist_entries_email").on(table.email),
]);
