import type { Metadata } from "next";

export const SITE_URL = "https://maaptrix.com";

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
