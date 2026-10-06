// Colored, slightly dimensional icons for the Student Safety strip.
// Shared 32×32 grid, gradient fill + soft highlight so all six carry the same visual weight.

type IconProps = { className?: string };

function Grad({ id, from, to }: { id: string; from: string; to: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor={from} />
      <stop offset="1" stopColor={to} />
    </linearGradient>
  );
}

export function GpsPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <Grad id="ss-pin" from="#34D399" to="#059669" />
      </defs>
      <ellipse cx="16" cy="29.4" rx="5" ry="1.3" fill="#059669" opacity="0.22" />
      <path
        d="M16 2.5c-5.8 0-10.5 4.6-10.5 10.3 0 7.4 8.6 15.6 9.4 16.3a1.6 1.6 0 0 0 2.2 0c.8-.7 9.4-8.9 9.4-16.3C26.5 7.1 21.8 2.5 16 2.5Z"
        fill="url(#ss-pin)"
      />
      <circle cx="16" cy="12.8" r="4.2" fill="#fff" />
      <circle cx="16" cy="12.8" r="1.8" fill="#10B981" />
      <path d="M9.6 10.2a7 7 0 0 1 4.4-4.6" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function AttendanceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <Grad id="ss-ppl-front" from="#FB923C" to="#EA580C" />
        <Grad id="ss-ppl-back" from="#FED7AA" to="#FDBA74" />
      </defs>
      {/* back student */}
      <circle cx="21" cy="9" r="3.6" fill="url(#ss-ppl-back)" />
      <path d="M15.2 25.5c0-4.6 2.6-8.1 5.9-8.1s5.9 3.5 5.9 8.1c0 .8-.6 1.4-1.4 1.4h-9c-.8 0-1.4-.6-1.4-1.4Z" fill="url(#ss-ppl-back)" />
      {/* front student */}
      <circle cx="12" cy="10.2" r="4.3" fill="url(#ss-ppl-front)" />
      <path d="M3.8 25.6c0-4.7 3.7-8.4 8.2-8.4s8.2 3.7 8.2 8.4c0 .8-.6 1.4-1.4 1.4H5.2c-.8 0-1.4-.6-1.4-1.4Z" fill="url(#ss-ppl-front)" />
      <path d="M9.4 8.6a3 3 0 0 1 2.2-1.6" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* attendance check */}
      <circle cx="24.2" cy="23.2" r="5.6" fill="#C2410C" stroke="#fff" strokeWidth="1.6" />
      <path d="M21.7 23.3l1.7 1.7 3.2-3.4" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function SpeedometerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <Grad id="ss-speed" from="#F87171" to="#DC2626" />
      </defs>
      <circle cx="16" cy="16.5" r="13" fill="url(#ss-speed)" />
      <circle cx="16" cy="16.5" r="12.4" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1" />
      <g stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6.5 16.5h2" />
        <path d="M9.3 9.8l1.4 1.4" />
        <path d="M16 7v2" />
        <path d="M22.7 9.8l-1.4 1.4" />
        <path d="M25.5 16.5h-2" />
      </g>
      <path d="M16 16.5l4-6.3" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" />
      <circle cx="16" cy="16.5" r="2.4" fill="#fff" />
      <circle cx="16" cy="16.5" r="1" fill="#DC2626" />
      <rect x="11.5" y="21.6" width="9" height="3.2" rx="1.6" fill="#fff" fillOpacity="0.3" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <Grad id="ss-bell" from="#60A5FA" to="#2563EB" />
      </defs>
      <circle cx="16" cy="4.2" r="1.8" fill="#2563EB" />
      <path
        d="M16 5c-4.4 0-7.8 3.5-7.8 7.9v4.9l-2.1 3.4c-.5.9.1 2 1.1 2h17.6c1 0 1.6-1.1 1.1-2l-2.1-3.4v-4.9C23.8 8.5 20.4 5 16 5Z"
        fill="url(#ss-bell)"
      />
      <path d="M12.6 24.6a3.4 3.4 0 0 0 6.8 0Z" fill="#1D4ED8" />
      <path d="M11.3 13.2c0-2.5 1.5-4.5 3.7-5.2" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="23.8" cy="7.6" r="3.6" fill="#EF4444" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

export function SirenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <Grad id="ss-siren" from="#F87171" to="#DC2626" />
        <Grad id="ss-siren-base" from="#475569" to="#1E293B" />
      </defs>
      <g stroke="#EF4444" strokeWidth="1.9" strokeLinecap="round">
        <path d="M16 1.8v2.4" />
        <path d="M7.2 5.2l1.6 1.6" />
        <path d="M24.8 5.2l-1.6 1.6" />
        <path d="M3.2 13.5h2.3" />
        <path d="M28.8 13.5h-2.3" />
      </g>
      <path d="M8.6 22.2v-6.4c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4v6.4Z" fill="url(#ss-siren)" />
      <rect x="14.6" y="13.6" width="2.8" height="6.6" rx="1.4" fill="#fff" fillOpacity="0.9" />
      <path d="M11.6 16c0-2.1 1.5-3.9 3.4-4.3" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <rect x="5.6" y="22" width="20.8" height="5.4" rx="1.8" fill="url(#ss-siren-base)" />
    </svg>
  );
}

export function RouteReplayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <Grad id="ss-replay" from="#A78BFA" to="#7C3AED" />
      </defs>
      <circle cx="16" cy="16" r="13" fill="url(#ss-replay)" />
      <circle cx="16" cy="16" r="12.4" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M9.7 12.4A7.4 7.4 0 1 1 9.4 19.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M7.2 10.6l2.6 1.9 1.4-2.9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 11.8V16l2.9 1.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
