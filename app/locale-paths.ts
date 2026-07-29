import { locales, type Locale } from "./translations";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function homePath(locale: Locale): string {
  return `/${locale}`;
}

export function localizedPath(path: string, locale: Locale): string {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${normalizedPath}/${locale}`;
}
