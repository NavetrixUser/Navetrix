import type { MetadataRoute } from "next";
import { SERVICES } from "./services/content";
import { SITE_URL } from "./seo";

// Served at /sitemap.xml. Service URLs come from services/content.ts,
// so adding a service there adds it here automatically.
// Bump this date when page content changes meaningfully.
const CONTENT_UPDATED = new Date("2026-09-27");

export const SITEMAP_PATHS = [
  "/",
  ...SERVICES.map((s) => `/services/${s.slug}`),
  "/team",
  "/privacy-policy",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: CONTENT_UPDATED,
  }));
}
