import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Nothing is disallowed: the site has no private routes, and noindex pages must
// stay crawlable so search engines can read their noindex directive.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
