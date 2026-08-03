import type { MetadataRoute } from "next";

const baseUrl = "https://alborapp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-29");
  return ["", "/privacy", "/terms", "/refund", "/support", "/tr", "/en", "/de", "/es"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.length === 3 ? 0.8 : 0.5,
  }));
}
