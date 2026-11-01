import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Home from "../page";
import { isLocale } from "../locale-paths";
import { locales } from "../translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const metadataByLocale: Record<string, { title: string; description: string }> = {
  tr: { title: "Albor — Güçlü kitaplardan fikirler, günlük hayatında.", description: "Albor, güçlü kitaplardan ve gerçek hikâyelerden her gün tek bir fikir getirir. Oku ya da dinle, sohbetinde kullan." },
  en: { title: "Albor — Ideas from great books, in your everyday life.", description: "Albor brings one idea a day from great books and true stories. Read or listen, then use it in conversation." },
  de: { title: "Albor — Ideen aus großen Büchern, in deinem Alltag.", description: "Albor bringt dir jeden Tag eine Idee aus starken Büchern und wahren Geschichten. Lesen oder hören, im Gespräch nutzen." },
  es: { title: "Albor — Ideas de grandes libros, en tu día a día.", description: "Albor te trae cada día una idea de grandes libros e historias reales. Léela o escúchala y úsala en tus conversaciones." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = metadataByLocale[locale] ?? metadataByLocale.tr;
  return { ...copy, alternates: { canonical: `https://alborapp.com/${locale}` } };
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <Home initialLocale={locale} />;
}
