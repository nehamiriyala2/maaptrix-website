import { renderShareImage } from "@/lib/shareImage";

// Social share card for /contact (see lib/shareImage.tsx).
export const alt = "Let’s Talk About What You’re Building. | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/contact", eyebrow: "Contact Maaptrix", title: "Let’s Talk About What You’re Building." });
}
