import { renderShareImage } from "@/lib/shareImage";

// Social share card for /how-we-work (see lib/shareImage.tsx).
export const alt = "Products Built Around Real Problems | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/how-we-work", eyebrow: "How We Work", title: "Products Built Around Real Problems" });
}
