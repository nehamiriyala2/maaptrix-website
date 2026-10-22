/*
 * Shaded, 3D-style illustrations for the homepage "How We Work" steps
 * (Understand, Simplify, Deliver, Evolve). Pure inline SVG, so no image assets
 * are needed. Each is rendered once on the page, so gradient ids are static.
 */

type IconProps = { className?: string };

/** Understand: magnifying glass over a document. */
export function UnderstandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="pi-u-paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DCE3EC" />
        </linearGradient>
        <linearGradient id="pi-u-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9EDF2" />
          <stop offset="0.5" stopColor="#8E98A5" />
          <stop offset="1" stopColor="#4A525D" />
        </linearGradient>
        <radialGradient id="pi-u-lens" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#D6E9FB" stopOpacity="0.6" />
          <stop offset="1" stopColor="#9CC4EC" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient id="pi-u-handle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B616B" />
          <stop offset="1" stopColor="#15181D" />
        </linearGradient>
      </defs>
      {/* back sheet */}
      <rect x="7" y="9" width="32" height="42" rx="3" transform="rotate(-9 23 30)" fill="#C9D2DD" />
      {/* front sheet */}
      <rect x="11" y="8" width="32" height="44" rx="3" fill="url(#pi-u-paper)" stroke="#C4CEDA" strokeWidth="0.8" />
      <rect x="15" y="13" width="14" height="2.4" rx="1.2" fill="#6F9FD8" />
      {[19, 23.5, 28, 32.5, 37, 41.5].map((y, i) => (
        <rect key={y} x="15" y={y} width={i % 2 ? 18 : 23} height="1.8" rx="0.9" fill="#B5BFCB" />
      ))}
      {/* magnifier */}
      <line x1="45" y1="45" x2="56" y2="56" stroke="#0F1216" strokeOpacity="0.25" strokeWidth="8" strokeLinecap="round" transform="translate(1.5 1.5)" />
      <line x1="45" y1="45" x2="56" y2="56" stroke="url(#pi-u-handle)" strokeWidth="7" strokeLinecap="round" />
      <circle cx="36" cy="35" r="12.5" fill="url(#pi-u-lens)" />
      <circle cx="36" cy="35" r="12.5" fill="none" stroke="url(#pi-u-ring)" strokeWidth="3.6" />
      <path d="M28.5 31.5a9 9 0 0 1 6-5.6" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

/** Simplify: glowing light bulb. */
export function SimplifyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <radialGradient id="pi-s-glow" cx="0.5" cy="0.45" r="0.5">
          <stop offset="0" stopColor="#FFD54A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFD54A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pi-s-glass" cx="0.5" cy="0.55" r="0.62">
          <stop offset="0" stopColor="#FFFBE0" />
          <stop offset="0.35" stopColor="#FFE07A" />
          <stop offset="0.75" stopColor="#FFB321" />
          <stop offset="1" stopColor="#E47A00" />
        </radialGradient>
        <linearGradient id="pi-s-base" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7E8792" />
          <stop offset="0.45" stopColor="#F1F3F6" />
          <stop offset="1" stopColor="#6B737E" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="25" r="26" fill="url(#pi-s-glow)" />
      <path
        d="M32 6C21.5 6 14 13.8 14 23.6c0 6.6 3.4 10.4 6.6 13.8 2 2.1 3.4 4.4 3.4 7.6v1h16v-1c0-3.2 1.4-5.5 3.4-7.6 3.2-3.4 6.6-7.2 6.6-13.8C50 13.8 42.5 6 32 6Z"
        fill="url(#pi-s-glass)"
        stroke="#D97706"
        strokeOpacity="0.5"
        strokeWidth="0.8"
      />
      {/* filament */}
      <path d="M28.5 45V35.5M35.5 45V35.5" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M28.5 35.5c.8-3.2 2.2-3.2 2.4 0 .3-3.2 1.8-3.2 2.2 0 .3-3.2 1.8-3.2 2.4 0"
        fill="none"
        stroke="#FFFDF2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="24.5" cy="17.5" rx="3.2" ry="6" transform="rotate(28 24.5 17.5)" fill="#FFFFFF" opacity="0.7" />
      {/* screw base */}
      <rect x="23.5" y="45.5" width="17" height="10.5" rx="2.2" fill="url(#pi-s-base)" />
      {[48.8, 52.2].map((y) => (
        <path key={y} d={`M23.8 ${y}h16.4`} stroke="#5D646E" strokeWidth="1" strokeOpacity="0.7" />
      ))}
      <path d="M27 56h10l-2 3.6h-6Z" fill="#3B4149" />
    </svg>
  );
}

/* Gear outline: alternating outer/root radii, computed once at module load. */
const GEAR_PATH = (() => {
  const teeth = 10;
  const outer = 26;
  const root = 20.5;
  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const step = (Math.PI * 2) / teeth;
    const angles: [number, number][] = [
      [a - step * 0.3, root],
      [a - step * 0.18, outer],
      [a + step * 0.18, outer],
      [a + step * 0.3, root],
    ];
    for (const [ang, r] of angles) pts.push(`${(32 + r * Math.cos(ang)).toFixed(2)} ${(32 + r * Math.sin(ang)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
})();

/** Deliver: metallic gear. */
export function DeliverIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="pi-d-metal" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#F4F6F8" />
          <stop offset="0.45" stopColor="#A9B1BC" />
          <stop offset="1" stopColor="#59616C" />
        </linearGradient>
        <linearGradient id="pi-d-hub" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#EEF1F4" />
          <stop offset="1" stopColor="#6E7681" />
        </linearGradient>
        <radialGradient id="pi-d-hole" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#2B3037" />
          <stop offset="1" stopColor="#4D545E" />
        </radialGradient>
      </defs>
      <path d={GEAR_PATH} fill="#323840" opacity="0.45" transform="translate(1.8 2.2)" />
      <path d={GEAR_PATH} fill="url(#pi-d-metal)" stroke="#4E5661" strokeWidth="0.9" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="14" fill="url(#pi-d-hub)" stroke="#5B636E" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="7.5" fill="url(#pi-d-hole)" />
      <path d="M21 25a13 13 0 0 1 9-7" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/** Evolve: rising bar chart with an upward arrow. */
export function EvolveIcon({ className }: IconProps) {
  const bars = [
    { x: 10, h: 15, front: "pi-e-grey", side: "#8D96A2" },
    { x: 24, h: 25, front: "pi-e-light", side: "#5E95D6" },
    { x: 38, h: 35, front: "pi-e-blue", side: "#0B4FB0" },
  ];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="pi-e-grey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3E7EC" />
          <stop offset="1" stopColor="#AEB6C1" />
        </linearGradient>
        <linearGradient id="pi-e-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B9D8FB" />
          <stop offset="1" stopColor="#7DB0EE" />
        </linearGradient>
        <linearGradient id="pi-e-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B9BFF" />
          <stop offset="1" stopColor="#1166DA" />
        </linearGradient>
        <linearGradient id="pi-e-arrow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#2F8CFF" />
          <stop offset="1" stopColor="#0A56C8" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="58" rx="25" ry="2.4" fill="#1C2C44" opacity="0.15" />
      {bars.map(({ x, h, front, side }) => (
        <g key={x}>
          <path d={`M${x + 11} ${57 - h}l3 -2.2v${h}l-3 2.2Z`} fill={side} />
          <path d={`M${x} ${57 - h}l3 -2.2h11l-3 2.2Z`} fill="#FFFFFF" opacity="0.75" />
          <rect x={x} y={57 - h} width="11" height={h} fill={`url(#${front})`} />
        </g>
      ))}
      <path d="M7 37C19 33 31 26 47 11" fill="none" stroke="#0A2A5C" strokeOpacity="0.2" strokeWidth="5" strokeLinecap="round" transform="translate(1 1.5)" />
      <path d="M7 37C19 33 31 26 47 11" fill="none" stroke="url(#pi-e-arrow)" strokeWidth="4.4" strokeLinecap="round" />
      <path d="M41 7.5 55 4 51.6 18Z" fill="#0A56C8" />
      <path d="M8 36.3C19.5 32.4 30.5 25.8 45.5 11.8" fill="none" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
