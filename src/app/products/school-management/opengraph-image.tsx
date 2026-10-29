import { renderShareImage } from "@/lib/shareImage";

// Social share card for /products/school-management (see lib/shareImage.tsx).
export const alt = "Small School Management Module | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/products/school-management", eyebrow: "Product 02 · School Management", title: "Small School Management Module" });
}
