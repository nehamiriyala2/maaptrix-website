/*
 * Shaded, realistic-style calendar and document icons for the legal pages.
 * Inline SVG so they stay sharp at any size. Each renders once per page, so
 * gradient ids are static.
 */

type IconProps = { className?: string; title: string };

/** Desk calendar with binder rings, blue header and a date grid. */
export function CalendarIcon({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id="li-c-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E4E9F0" />
        </linearGradient>
        <linearGradient id="li-c-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4BA3FF" />
          <stop offset="1" stopColor="#0B5FD3" />
        </linearGradient>
        <linearGradient id="li-c-ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5D6570" />
          <stop offset="0.5" stopColor="#E8ECF1" />
          <stop offset="1" stopColor="#4E5560" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="58.5" rx="23" ry="2.6" fill="#0B1B36" opacity="0.18" />
      {/* page stack edge */}
      <rect x="9.5" y="14" width="45" height="43" rx="6" fill="#C5CEDA" />
      {/* main page */}
      <rect x="8" y="12" width="45" height="43" rx="6" fill="url(#li-c-page)" stroke="#C3CCD8" strokeWidth="0.8" />
      {/* header */}
      <path d="M8 18a6 6 0 0 1 6-6h33a6 6 0 0 1 6 6v6H8Z" fill="url(#li-c-head)" />
      <path d="M10 17.5a4.5 4.5 0 0 1 4.5-4.5h32" fill="none" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.2" strokeLinecap="round" />
      {/* binder holes + rings */}
      {[20, 41].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="16" rx="2.3" ry="1.6" fill="#073E8C" />
          <rect x={x - 1.6} y="6" width="3.2" height="11.5" rx="1.6" fill="url(#li-c-ring)" />
        </g>
      ))}
      {/* date grid: 4 rows x 5 columns, last column highlighted */}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) =>
          r === 3 && c > 2 ? null : (
            <rect
              key={`${r}-${c}`}
              x={13.5 + c * 7.6}
              y={28.5 + r * 6.3}
              width="4.6"
              height="3.8"
              rx="1"
              fill={c === 4 ? "#E5484D" : r === 1 && c === 2 ? "#1683F7" : "#8B96A5"}
              opacity={c === 4 ? 0.9 : 0.85}
            />
          ),
        ),
      )}
    </svg>
  );
}

/** Stack of paper documents with a folded corner and text lines. */
export function DocumentIcon({ className, title }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id="li-d-page" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DCE6F3" />
        </linearGradient>
        <linearGradient id="li-d-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B9CDEA" />
          <stop offset="1" stopColor="#8EAAD6" />
        </linearGradient>
        <linearGradient id="li-d-fold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6F9FD" />
          <stop offset="1" stopColor="#B7C6DA" />
        </linearGradient>
      </defs>
      <ellipse cx="33" cy="59" rx="20" ry="2.4" fill="#0B1B36" opacity="0.18" />
      {/* back sheets */}
      <rect x="9" y="11" width="34" height="44" rx="3.5" transform="rotate(-8 26 33)" fill="url(#li-d-back)" />
      <rect x="12" y="9" width="34" height="45" rx="3.5" transform="rotate(-3 29 31)" fill="#D3DFF0" stroke="#A9BCD8" strokeWidth="0.6" />
      {/* front sheet with folded corner */}
      <path d="M18.5 6h20l11 11v37a3.5 3.5 0 0 1-3.5 3.5H18.5A3.5 3.5 0 0 1 15 54V9.5A3.5 3.5 0 0 1 18.5 6Z" fill="url(#li-d-page)" stroke="#AFC0D6" strokeWidth="0.8" />
      <path d="M38.5 6v7.5a3.5 3.5 0 0 0 3.5 3.5h7.5Z" fill="url(#li-d-fold)" stroke="#AFC0D6" strokeWidth="0.6" />
      {/* heading bar + text lines */}
      <rect x="20" y="13" width="13" height="4.2" rx="1" fill="#1683F7" />
      {[22, 26.5, 31, 35.5, 40, 44.5].map((y, i) => (
        <rect key={y} x="20" y={y} width={i === 5 ? 14 : i % 2 ? 22 : 25} height="1.9" rx="0.95" fill="#7F93AF" opacity="0.85" />
      ))}
      <rect x="35" y="50" width="9" height="1.6" rx="0.8" fill="#9FB0C6" />
    </svg>
  );
}
