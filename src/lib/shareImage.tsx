import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

/*
 * Branded 1200×630 social share card (og:image / twitter:image). Each route's
 * opengraph-image.tsx calls this with its own label and headline (the page H1),
 * so a shared link previews the page it points to. Rendered at build time.
 */

export const SHARE_IMAGE_SIZE = { width: 1200, height: 630 };

let logo: Promise<string> | undefined;
const loadLogo = () =>
  (logo ??= readFile(join(process.cwd(), "public/brand/logo-original.jpeg"), "base64").then(
    (b64) => `data:image/jpeg;base64,${b64}`,
  ));

export async function renderShareImage({
  path,
  eyebrow,
  title,
  description,
}: {
  /** Route path, shown as the page address in the footer. */
  path: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  const src = await loadLogo();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px 64px",
          background: "linear-gradient(120deg, #1683F7 0%, #0E71E6 55%, #0757C9 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ display: "flex", background: "#FFFFFF", borderRadius: 20, padding: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={68} height={68} alt="" />
          </div>
          <div style={{ fontSize: 44, letterSpacing: -1 }}>Maaptrix</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div style={{ fontSize: 26, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
              {eyebrow}
            </div>
          )}
          {/* One box per word so lines break only at spaces, never inside "Real-World". */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: 18,
              marginTop: eyebrow ? 18 : 0,
              fontSize: 66,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title.split(" ").map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
          {description && (
            <div style={{ marginTop: 22, fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.85)", maxWidth: 940 }}>
              {description}
            </div>
          )}
        </div>

        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.75)" }}>{`maaptrix.com${path === "/" ? "" : path}`}</div>
      </div>
    ),
    SHARE_IMAGE_SIZE,
  );
}
