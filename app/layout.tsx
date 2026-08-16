import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
