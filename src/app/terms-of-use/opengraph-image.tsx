import { renderShareImage } from "@/lib/shareImage";

// Social share card for /terms-of-use (see lib/shareImage.tsx).
export const alt = "Maaptrix Terms of Use | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/terms-of-use", eyebrow: "Legal", title: "Terms of Use" });
}
