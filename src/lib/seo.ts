import type { Metadata } from "next";

export const SITE_URL = "https://maaptrix.com";

/** Homepage / site-wide default title and description (approved company messaging). */
export const SITE_TITLE = "Technology That Simplifies Real-World Operations | Maaptrix";
export const SITE_DESCRIPTION =
  "Maaptrix builds practical digital products that make everyday operations simpler, safer and more connected.";

/**
 * Unique title, description, canonical URL, Open Graph and Twitter card data for a route.
 * `title` gets the " | Maaptrix" suffix unless `absolute` is set. The share image is
 * the route's own opengraph-image.tsx; it is listed explicitly so twitter:image matches.
 */
export function pageMetadata(
  path: string,
  title: string,
  description: string,
  { absolute = false }: { absolute?: boolean } = {},
): Metadata {
  const fullTitle = absolute ? title : `${title} | Maaptrix`;
  const shareImage = {
    url: `${path === "/" ? "" : path}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: fullTitle,
  };
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Maaptrix",
      type: "website",
      locale: "en_IN",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
