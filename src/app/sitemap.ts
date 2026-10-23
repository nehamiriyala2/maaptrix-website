import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

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
  return ROUTES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));
}
