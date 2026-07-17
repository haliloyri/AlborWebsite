import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Support — Albor",
  description: "Contact Albor support for product, privacy, and data questions.",
};

export default function SupportPage() {
  return <LegalPage kind="support" />;
}

