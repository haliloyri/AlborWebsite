import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Albor",
  description: "Albor’un kişisel verileri nasıl topladığı, kullandığı, sakladığı ve silme taleplerini nasıl ele aldığı.",
  alternates: { canonical: "https://alborapp.com/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}
