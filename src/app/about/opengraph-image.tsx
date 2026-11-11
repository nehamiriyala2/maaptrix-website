import { renderShareImage } from "@/lib/shareImage";

// Social share card for /about (see lib/shareImage.tsx).
export const alt = "Practical Technology for Real-World Needs | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Rendered once at build time (required by the static export).
export const dynamic = "force-static";

export default function Image() {
  return renderShareImage({ path: "/about", eyebrow: "About Maaptrix", title: "Practical Technology for Real-World Needs" });
}
