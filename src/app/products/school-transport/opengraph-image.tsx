import { renderShareImage } from "@/lib/shareImage";

// Social share card for /products/school-transport (see lib/shareImage.tsx).
export const alt = "School Transport Management System | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/products/school-transport", eyebrow: "Product 01 · School Transport", title: "School Transport Management System" });
}
