import type { LucideIcon } from "lucide-react";
import { Bus, Check, MapPin, Send } from "lucide-react";

/*
 * Small illustrative product screens used by the scroll-storytelling sections.
 * All values are sample data (labelled as such in the frame footer).
 */

export type Tone = "blue" | "green" | "gray" | "red";

export type MiniVisual =
  | { kind: "list"; rows: { a: string; b: string; tag?: string; tone?: Tone; initials?: string }[] }
  | { kind: "stats"; stats: { label: string; value: string }[]; bars?: number[]; barLabel?: string }
  | { kind: "chat"; messages: { from: string; text: string; me?: boolean }[] }
  | { kind: "map"; caption: string; status: string }
  | { kind: "network"; center: string; nodes: string[] };

const TONES: Record<Tone, { bg: string; fg: string }> = {
  blue: { bg: "#EAF5FF", fg: "#1683F5" },
  green: { bg: "#E8F7EF", fg: "#15803D" },
  gray: { bg: "#EEF2F6", fg: "#52657D" },
  red: { bg: "#FDECEC", fg: "#D63B3F" },
};

function ListUI({ rows }: Extract<MiniVisual, { kind: "list" }>) {
  return (
    <ul className="divide-y divide-[#EDF3FA]">
      {rows.map(({ a, b, tag, tone = "blue", initials }) => (
        <li key={a + b} className="flex items-center gap-3 py-2.5">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
            style={{ background: TONES[tone].bg, color: TONES[tone].fg }}
          >
            {initials ?? a.slice(0, 2).toUpperCase()}
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate text-[13px] font-semibold text-[#0B1B36]">{a}</span>
            <span className="block truncate text-[11.5px] text-[#6B7C93]">{b}</span>
          </span>
          {tag && (
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold"
              style={{ background: TONES[tone].bg, color: TONES[tone].fg }}
            >
              {tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function StatsUI({ stats, bars, barLabel }: Extract<MiniVisual, { kind: "stats" }>) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {stats.map(({ label, value }) => (
          <div key={label} className="rounded-[10px] border border-[#E1ECF8] bg-white px-2.5 py-2">
            <p className="text-[16px] font-bold leading-none text-[#0B1B36]">{value}</p>
            <p className="mt-1 truncate text-[10.5px] text-[#6B7C93]">{label}</p>
          </div>
        ))}
      </div>
      {bars && (
        <div className="mt-3 rounded-[10px] border border-[#E1ECF8] bg-white p-3">
          {barLabel && <p className="text-[11px] font-semibold text-[#52657D]">{barLabel}</p>}
          <div className="mt-2 flex h-[92px] items-end gap-[7px]">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-[4px]"
                style={{
                  height: `${h}%`,
                  background: i === bars.length - 1 ? "#1683F5" : "linear-gradient(180deg,#9BCBFB,#CFE6FD)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ChatUI({ messages }: Extract<MiniVisual, { kind: "chat" }>) {
  return (
    <div className="flex h-full flex-col gap-2">
      {messages.map(({ from, text, me }, i) => (
        <div key={i} className={`flex ${me ? "justify-end" : "justify-start"}`}>
          <div
            className={`max-w-[82%] rounded-[12px] px-3 py-2 text-[12px] leading-snug ${
              me ? "rounded-br-[4px] bg-[#1683F5] text-white" : "rounded-bl-[4px] border border-[#E1ECF8] bg-white text-[#0B1B36]"
            }`}
          >
            <p className={`text-[10.5px] font-semibold ${me ? "text-white/80" : "text-[#1683F5]"}`}>{from}</p>
            {text}
          </div>
        </div>
      ))}
      <div className="mt-auto flex items-center gap-2 rounded-[10px] border border-[#E1ECF8] bg-white px-3 py-2 text-[11.5px] text-[#8A97A8]">
        <span className="flex-1">Write a message…</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1683F5] text-white">
          <Send className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}

function MapUI({ caption, status }: Extract<MiniVisual, { kind: "map" }>) {
  return (
    <div className="relative h-full min-h-[150px] overflow-hidden rounded-[10px] border border-[#E1ECF8] bg-[#EAF0F7]">
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        {[30, 70, 110, 150, 190].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="320" y2={y + 12} stroke="#FFFFFF" strokeWidth="2" />
        ))}
        {[40, 100, 160, 220, 280].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x - 14} y2="200" stroke="#FFFFFF" strokeWidth="2" />
        ))}
        <path d="M-10 120 C 60 100 120 150 200 120 S 300 60 340 80" fill="none" stroke="#FFFFFF" strokeWidth="7" />
        <path d="M230 150 C 250 130 290 140 320 170 L320 200 L220 200Z" fill="#C6DDF5" />
        <path d="M20 40 C 40 28 70 34 72 52 S 40 70 26 62 S 10 48 20 40Z" fill="#D6EBD4" />
        <path d="M40 150 C 80 120 110 130 140 100 S 200 70 250 60" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        <path d="M40 150 C 80 120 110 130 140 100 S 200 70 250 60" fill="none" stroke="#1683F5" strokeWidth="4" strokeLinecap="round" />
        {[
          [40, 150],
          [140, 100],
          [250, 60],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5" fill="#FFFFFF" stroke="#1683F5" strokeWidth="3" />
        ))}
      </svg>
      <span className="absolute left-[40%] top-[34%] flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1683F5] text-white shadow-[0_4px_10px_rgba(22,131,245,0.45)]">
        <Bus className="h-3.5 w-3.5" />
      </span>
      <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 rounded-[10px] border border-[#D5E8FA] bg-white px-3 py-2 shadow-[0_6px_16px_rgba(30,90,150,0.12)]">
        <MapPin className="h-4 w-4 shrink-0 text-[#1683F5]" />
        <span className="min-w-0 flex-1 leading-tight">
          <span className="block truncate text-[12px] font-semibold text-[#0B1B36]">{caption}</span>
          <span className="block truncate text-[10.5px] text-[#6B7C93]">{status}</span>
        </span>
      </div>
    </div>
  );
}

function NetworkUI({ center, nodes }: Extract<MiniVisual, { kind: "network" }>) {
  const pos = [
    [16, 18],
    [84, 18],
    [16, 82],
    [84, 82],
  ];
  return (
    <div className="relative h-full min-h-[170px]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {pos.slice(0, nodes.length).map(([x, y]) => (
          <line key={`${x}${y}`} x1="50" y1="50" x2={x} y2={y} stroke="#9BCBFB" strokeWidth="0.8" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-[12px] bg-[#1683F5] px-3.5 py-2 text-[12.5px] font-semibold text-white shadow-[0_8px_18px_-6px_rgba(22,131,245,0.7)]">
        {center}
      </span>
      {nodes.map((n, i) => (
        <span
          key={n}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-[10px] border border-[#D5E8FA] bg-white px-2.5 py-1.5 text-[11.5px] font-semibold text-[#0B1B36] shadow-[0_4px_12px_rgba(30,90,150,0.10)]"
          style={{ left: `${pos[i][0]}%`, top: `${pos[i][1]}%` }}
        >
          <Check className="h-3 w-3 text-[#1683F5]" strokeWidth={3} />
          {n}
        </span>
      ))}
    </div>
  );
}

export function MiniFrame({
  title,
  icon: Icon,
  visual,
  className = "",
}: {
  title: string;
  icon: LucideIcon;
  visual: MiniVisual;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-[18px] border border-[#D5E8FA] bg-[#F8FBFF] shadow-[0_18px_40px_-24px_rgba(20,90,160,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2.5 border-b border-[#E3EEF9] bg-white px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EAF5FF] text-[#1683F5]">
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex-1 truncate text-[13px] font-semibold text-[#0B1B36]">{title}</span>
        <span className="flex gap-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-[#DCE7F3]" />
          <span className="h-2 w-2 rounded-full bg-[#DCE7F3]" />
          <span className="h-2 w-2 rounded-full bg-[#DCE7F3]" />
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-3.5">
        {visual.kind === "list" && <ListUI {...visual} />}
        {visual.kind === "stats" && <StatsUI {...visual} />}
        {visual.kind === "chat" && <ChatUI {...visual} />}
        {visual.kind === "map" && <MapUI {...visual} />}
        {visual.kind === "network" && <NetworkUI {...visual} />}
      </div>
      <p className="border-t border-[#E3EEF9] bg-white px-4 py-1.5 text-right text-[10px] font-medium text-[#98A6B7]">Sample data</p>
    </div>
  );
}
