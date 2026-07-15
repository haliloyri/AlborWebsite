import type { Locale } from "./translations";

const screenshotNames = ["home", "onboarding", "story-detail", "library", "progress", "profile"] as const;
type ScreenshotName = (typeof screenshotNames)[number];

function screenshotsFor(locale: Locale): Record<ScreenshotName, string> {
  return Object.fromEntries(
    screenshotNames.map((name) => [name, `/screenshots/${name}_${locale}.png`]),
  ) as Record<ScreenshotName, string>;
}

export const siteConfig = {
  brand: "Albor",
  defaultLocale: "en" as Locale,
  storeLinks: {
    appStore: null as string | null,
    googlePlay: null as string | null,
  },
  screenshots: {
    en: screenshotsFor("en"),
    de: screenshotsFor("de"),
    es: screenshotsFor("es"),
    tr: screenshotsFor("tr"),
  },
} as const;
