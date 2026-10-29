import { renderShareImage } from "@/lib/shareImage";

// Social share card for /why-maaptrix (see lib/shareImage.tsx).
export const alt = "Built Differently, On Purpose. | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/why-maaptrix", eyebrow: "Why Maaptrix", title: "Built Differently, On Purpose." });
}
