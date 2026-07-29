import { notFound } from "next/navigation";
import { LegalPage } from "../../legal-page";
import { isLocale } from "../../locale-paths";
import { locales } from "../../translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedDataDeletionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LegalPage kind="deletion" initialLocale={locale} />;
}
