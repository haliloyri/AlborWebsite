import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Albor",
  description: "How Albor collects, uses, stores, and deletes personal information.",
};

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}

