import { renderShareImage } from "@/lib/shareImage";

// Social share card for /products (see lib/shareImage.tsx).
export const alt = "Software Built Around Real Operational Needs | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/products", eyebrow: "Our Products", title: "Software Built Around Real Operational Needs" });
}
