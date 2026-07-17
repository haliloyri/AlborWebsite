import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms of Use — Albor",
  description: "Terms that govern use of the Albor app and related services.",
};

export default function TermsPage() {
  return <LegalPage kind="terms" />;
}

