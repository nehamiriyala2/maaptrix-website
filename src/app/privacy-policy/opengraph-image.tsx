import { renderShareImage } from "@/lib/shareImage";

// Social share card for /privacy-policy (see lib/shareImage.tsx).
export const alt = "Maaptrix Privacy Policy | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/privacy-policy", eyebrow: "Legal", title: "Privacy Policy" });
}
