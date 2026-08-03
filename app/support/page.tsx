import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Albor Destek | Albor",
  description: "Hesap, abonelik, içerik ve teknik sorunlar için Albor destek merkezi.",
  alternates: { canonical: "https://alborapp.com/support" },
};

export default function SupportPage() {
  return <LegalPage kind="support" />;
}
