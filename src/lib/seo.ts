import type { Metadata } from "next";

export const SITE_URL = "https://maaptrix.com";

/** Homepage / site-wide default title and description (approved company messaging). */
export const SITE_TITLE = "Maaptrix | Technology That Simplifies Everyday Operations";
export const SITE_DESCRIPTION =
  "Maaptrix builds practical digital products that make everyday operations simpler, safer and more connected.";

/** Unique title, description, canonical URL and Open Graph data for a route. */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Maaptrix`,
      description,
      url: path,
      siteName: "Maaptrix",
      type: "website",
    },
  };
}
