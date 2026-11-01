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
  const title = "Albor — Ideas from great books, in your everyday life.";
  const description = "Albor brings one idea a day from great books and true stories. Read or listen, then use it in conversation.";

  return {
    title,
    description,
    metadataBase: new URL("https://alborapp.com"),
    alternates: {
      languages: { tr: "/tr", en: "/en", de: "/de", es: "/es" },
    },
    icons: {
      icon: [
        { url: "/favicon.png?v=3", type: "image/png", sizes: "64x64" },
        { url: "/icon-192.png?v=3", type: "image/png", sizes: "192x192" },
        { url: "/albor-logo.png?v=3", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-touch-icon.png?v=3", type: "image/png", sizes: "180x180" }],
    },
    openGraph: { title, description, type: "website", locale: "en_US", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Albor — One idea a day. A clearer perspective." }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
