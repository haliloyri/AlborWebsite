import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Albor — Her Gün Yeni Bir Kıvılcım";
  const description = "Dünyanın büyük fikirlerini kısa ve akılda kalıcı hikâyelerle her gün birkaç dakikada keşfet.";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og.png`, width: 1536, height: 914, alt: "Albor — Her gün 3 dakika" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
