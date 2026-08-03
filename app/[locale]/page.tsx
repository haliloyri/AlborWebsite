import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Home from "../page";
import { isLocale } from "../locale-paths";
import { locales } from "../translations";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const metadataByLocale: Record<string, { title: string; description: string }> = {
  tr: { title: "Albor — Her gün bir fikir, daha açık bir bakış.", description: "Güçlü kitaplardan ve gerçek hikâyelerden gelen fikirleri birkaç dakikalık kısa deneyimlerde keşfedin." },
  en: { title: "Albor — One idea a day, a clearer perspective.", description: "Discover ideas from powerful books and real stories through short, thoughtful reading experiences." },
  de: { title: "Albor — Jeden Tag eine Idee, ein klarerer Blick.", description: "Entdecke Ideen aus starken Büchern und wahren Geschichten in kurzen Leseerlebnissen." },
  es: { title: "Albor — Una idea al día, una mirada más clara.", description: "Descubre ideas de grandes libros e historias reales en breves experiencias de lectura." },
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
