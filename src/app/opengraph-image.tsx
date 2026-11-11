import { renderShareImage } from "@/lib/shareImage";
import { SITE_DESCRIPTION } from "@/lib/seo";

// Social share card for / (see lib/shareImage.tsx).
export const alt = "Maaptrix: technology that simplifies real-world operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Rendered once at build time (required by the static export).
export const dynamic = "force-static";

export default function Image() {
  return renderShareImage({ path: "/", title: "Technology That Simplifies Real-World Operations", description: SITE_DESCRIPTION });
}
