import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { SITE_DESCRIPTION } from "@/lib/seo";

// Site-wide social share image (og:image / twitter:image), rendered at build time.
export const alt = "Maaptrix: technology that simplifies real-world operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public/brand/logo-original.jpeg"), "base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 88px",
          background: "linear-gradient(120deg, #1683F7 0%, #0E71E6 55%, #0757C9 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ display: "flex", background: "#FFFFFF", borderRadius: 28, padding: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} width={112} height={112} alt="" />
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>Maaptrix</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 56, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 960 }}>
          Technology That Simplifies Real-World Operations
        </div>
        <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.85)", maxWidth: 940 }}>
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    size,
  );
}
