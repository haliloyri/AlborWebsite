import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Data Deletion — Albor",
  description: "How to request deletion of information stored by Albor.",
};

export default function DataDeletionPage() {
  return <LegalPage kind="deletion" />;
}

