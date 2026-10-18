import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  style: ["italic"],
  weight: ["400", "500"],
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export function generateMetadata(): Metadata {
  const title = "Albor — One idea a day, a clearer perspective.";
  const description = "Albor turns ideas from powerful books and real stories into short, thoughtful experiences in just a few minutes.";

  return {
    title,
    description,
    metadataBase: new URL("https://alborapp.com"),
    alternates: {
      languages: { tr: "/tr", en: "/en", de: "/de", es: "/es" },
    },
    icons: {
      icon: [{ url: "/albor-logo.png?v=2", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/albor-logo.png?v=2", type: "image/png", sizes: "512x512" }],
    },
    openGraph: { title, description, type: "website", locale: "en_US", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Albor — One idea a day. A clearer perspective." }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
