import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Albor",
  description: "Albor uygulaması ve bağlantılı hizmetlerin kullanımını düzenleyen koşullar.",
  alternates: { canonical: "https://alborapp.com/terms" },
};

export default function TermsPage() {
  return <LegalPage kind="terms" />;
}
