import { renderShareImage } from "@/lib/shareImage";

// Social share card for /data-security (see lib/shareImage.tsx).
export const alt = "Maaptrix Data & Security | Maaptrix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage({ path: "/data-security", eyebrow: "Legal", title: "Data & Security" });
}
