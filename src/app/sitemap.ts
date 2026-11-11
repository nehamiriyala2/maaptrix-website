import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Generated once at build time as out/sitemap.xml (static export).
export const dynamic = "force-static";

// Indexable public routes only. The legal pages (privacy-policy, terms-of-use,
// data-security) are excluded while they carry LEGAL_DRAFT_ROBOTS (noindex).
const ROUTES = [
  "/",
  "/about",
  "/products",
  "/products/school-management",
  "/products/school-transport",
  "/how-we-work",
  "/why-maaptrix",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Trailing slash on every URL to match the canonical URLs (next.config trailingSlash).
  return ROUTES.map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`,
  }));
}
