import { notFound } from "next/navigation";
import Home from "../page";
import { isLocale } from "../locale-paths";
import { locales } from "../translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <Home initialLocale={locale} />;
}
