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
  const title = "Albor — A New Spark Every Day";
  const description = "Discover the world’s big ideas through short, memorable stories—just a few minutes a day.";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: "en_US", images: [{ url: `${origin}/og-en.png`, width: 1536, height: 914, alt: "Albor — 3 minutes a day" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og-en.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
