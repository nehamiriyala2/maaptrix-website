import { renderShareImage } from "@/lib/shareImage";

// Social share card for /data-security (see lib/shareImage.tsx).
export const alt = "Maaptrix Data & Security | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Rendered once at build time (required by the static export).
export const dynamic = "force-static";

export default function Image() {
  return renderShareImage({ path: "/data-security", eyebrow: "Legal", title: "Data & Security" });
}
