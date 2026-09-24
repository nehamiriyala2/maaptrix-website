"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  Bus,
  Check,
  ChevronRight,
  House,
  LocateFixed,
  MapPin,
  Maximize2,
  Minus,
  Navigation2,
  PersonStanding,
  Plus,
} from "lucide-react";

/*
 * School Transport live operations map.
 * Everything is laid out in one 902×727 design space: the SVG map stretches
 * to the container (strokes stay crisp via non-scaling-stroke) and the HTML
 * overlays (markers, cards, labels) are anchored to the same coordinates in %.
 */

type FilterType = "all" | "transit" | "stop" | "idle";
type MapMode = "live" | "satellite";
type BusId = "MPX-07" | "MPX-11" | "MPX-03";

const VW = 902;
const VH = 727;

const BLUE = "#1683F5";
const NAVY = "#0B1B36";
const MUTED = "#6B7C93";
const GREEN = "#1FA971";
const SKY = "#38A9F5";

const BUSES: Record<BusId, { status: "transit" | "stop"; students: number; fill: string }> = {
  "MPX-07": { status: "transit", students: 24, fill: "86%" },
  "MPX-11": { status: "transit", students: 28, fill: "100%" },
  "MPX-03": { status: "stop", students: 18, fill: "64%" },
};

/* ------------------------------------------------------------- Map art */

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Neighbourhood street grids: small rotated patches of parallel streets.
const PATCHES = (() => {
  const r = rng(11);
  return Array.from({ length: 70 }, () => {
    const w = 60 + r() * 90;
    const h = 45 + r() * 70;
    const gap = 11 + r() * 6;
    return { cx: r() * VW, cy: r() * VH, rot: (r() - 0.5) * 60, w, h, gap };
  });
})();

// Secondary roads: long gentle curves.
const SECONDARY = (() => {
  const r = rng(29);
  return Array.from({ length: 26 }, () => {
    const x = r() * VW;
    const y = r() * VH;
    const a = r() * Math.PI;
    const len = 160 + r() * 260;
    const x2 = x + Math.cos(a) * len;
    const y2 = y + Math.sin(a) * len;
    const mx = (x + x2) / 2 + (r() - 0.5) * 80;
    const my = (y + y2) / 2 + (r() - 0.5) * 80;
    return `M${x.toFixed(0)} ${y.toFixed(0)} Q${mx.toFixed(0)} ${my.toFixed(0)} ${x2.toFixed(0)} ${y2.toFixed(0)}`;
  });
})();

const MAJOR = [
  "M-20 250 C 200 238 350 200 520 180 S 800 118 930 96",
  "M-20 470 C 150 430 300 470 420 452 S 700 418 930 440",
  "M168 -20 C 190 150 150 300 200 450 S 232 650 250 750",
  "M650 -20 C 640 120 700 200 690 300 S 722 500 782 750",
  "M-20 120 C 120 100 260 62 400 70 S 620 42 930 22",
  "M-20 648 C 200 604 450 642 620 604 S 800 582 930 602",
  "M40 750 C 200 562 350 382 520 262 S 800 62 880 -20",
  "M300 750 C 330 640 300 560 360 520",
];

const WATER = [
  "M118 128 C 138 112 172 116 184 134 S 178 170 150 172 S 104 150 118 128Z",
  "M328 338 C 356 318 398 334 410 360 S 468 378 472 408 S 444 452 404 442 S 358 402 344 386 S 308 358 328 338Z",
  "M250 290 C 262 282 292 284 300 294 S 280 306 262 304 S 242 298 250 290Z",
  "M838 182 C 852 172 872 178 874 194 S 858 212 844 206 S 828 192 838 182Z",
  "M868 470 C 880 462 896 468 894 482 S 876 494 866 486 S 860 476 868 470Z",
  "M44 470 C 56 462 76 466 76 478 S 58 490 48 484 S 36 476 44 470Z",
  "M712 304 C 720 298 734 302 732 312 S 718 320 712 316 S 706 308 712 304Z",
  "M548 620 C 566 606 598 612 600 630 S 578 654 558 646 S 534 632 548 620Z",
];

const PARKS = [
  "M738 204 C 776 160 860 148 910 168 L910 334 C 860 344 800 322 770 292 S 718 240 738 204Z",
  "M96 306 C 118 290 164 296 176 322 S 170 372 140 380 S 88 362 86 338 S 84 316 96 306Z",
  "M18 566 C 44 548 98 556 110 584 S 98 636 62 640 S 12 616 10 594 S 8 576 18 566Z",
  "M478 420 C 492 410 516 416 520 434 S 512 468 494 468 S 470 452 470 438 S 470 426 478 420Z",
  "M700 566 C 718 552 756 558 762 580 S 748 614 722 612 S 694 598 694 584 S 692 574 700 566Z",
  "M404 604 C 420 594 452 598 460 614 S 452 642 428 642 S 398 630 398 618 S 398 608 404 604Z",
  "M232 344 C 246 336 280 340 288 354 S 276 374 256 372 S 226 362 226 354 S 226 348 232 344Z",
  "M20 40 C 40 28 80 32 88 52 S 76 84 50 82 S 12 68 12 56 S 12 46 20 40Z",
];

// Routes
const ROUTE_A = [
  "M296 163 C 310 178 330 182 353 178", // behind the bus
  "M409 200 C 418 225 425 262 445 285 S 480 300 505 305 S 538 318 540 340 L540 356 C 548 385 570 410 600 450 C 615 462 630 470 630 490 L632 510 C 640 520 650 520 660 518",
];
const ROUTE_A_DASHED = "M353 178 C 375 176 395 185 409 200";
const ROUTE_11 = "M432 494 C 450 510 480 520 507 508 C 540 505 565 520 585 535";
const ROUTE_03 = "M624 362 C 640 372 660 377 682 375";
const ROUTE_GRAY =
  "M585 535 C 592 552 600 566 614 566 S 650 556 672 548 S 715 520 728 464 C 734 440 742 425 740 408 C 730 392 705 380 682 375";

function MapArt({ satellite }: { satellite: boolean }) {
  const c = satellite
    ? { land: "#DCE3D8", street: "#EEF1EA", casing: "#C7CFC2", water: "#9FC3E3", park: "#B9D4AE" }
    : { land: "#EAF0F7", street: "#FFFFFF", casing: "#D7E1EC", water: "#C6DDF5", park: "#D6EBD4" };
  const ns = { vectorEffect: "non-scaling-stroke" as const };

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <rect width={VW} height={VH} fill={c.land} />

      {/* neighbourhood streets */}
      {PATCHES.map((p, i) => (
        <g key={i} transform={`translate(${p.cx} ${p.cy}) rotate(${p.rot})`}>
          {Array.from({ length: Math.floor(p.h / p.gap) + 1 }, (_, k) => {
            const y = -p.h / 2 + k * p.gap;
            return <line key={`h${k}`} x1={-p.w / 2} y1={y} x2={p.w / 2} y2={y} stroke={c.street} strokeWidth="1.3" style={ns} />;
          })}
          {Array.from({ length: Math.floor(p.w / (p.gap * 1.6)) + 1 }, (_, k) => {
            const x = -p.w / 2 + k * p.gap * 1.6;
            return <line key={`v${k}`} x1={x} y1={-p.h / 2} x2={x} y2={p.h / 2} stroke={c.street} strokeWidth="1.3" style={ns} />;
          })}
        </g>
      ))}

      {PARKS.map((d) => (
        <path key={d} d={d} fill={c.park} />
      ))}

      {/* secondary + major roads */}
      {SECONDARY.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke={c.casing} strokeWidth="4.6" strokeLinecap="round" style={ns} />
          <path d={d} fill="none" stroke={c.street} strokeWidth="3" strokeLinecap="round" style={ns} />
        </g>
      ))}
      {MAJOR.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke={c.casing} strokeWidth="8" strokeLinecap="round" style={ns} />
          <path d={d} fill="none" stroke={c.street} strokeWidth="5.6" strokeLinecap="round" style={ns} />
        </g>
      ))}

      {WATER.map((d) => (
        <path key={d} d={d} fill={c.water} />
      ))}

      {/* secondary (gray) route */}
      <path d={ROUTE_GRAY} fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" style={ns} />
      <path d={ROUTE_GRAY} fill="none" stroke="#98A6B7" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" style={ns} />

      {/* MPX-11 and MPX-03 approach segments */}
      <path d={ROUTE_11} fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" style={ns} />
      <path d={ROUTE_11} fill="none" stroke="#6FB3F8" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" style={ns} />
      <path d={ROUTE_03} fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" style={ns} />
      <path d={ROUTE_03} fill="none" stroke="#6FB3F8" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" style={ns} />

      {/* primary route: halo + line */}
      {ROUTE_A.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke={BLUE} strokeOpacity="0.16" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" style={ns} />
          <path d={d} fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" style={ns} />
          <path d={d} fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={ns} />
        </g>
      ))}
      <path d={ROUTE_A_DASHED} fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" style={ns} />
      <path d={ROUTE_A_DASHED} fill="none" stroke={BLUE} strokeWidth="4" strokeDasharray="7 6" strokeLinecap="round" style={ns} />
    </svg>
  );
}

/* ------------------------------------------------------------ Overlays */

function At({ x, y, className = "", children }: { x: number; y: number; className?: string; children: ReactNode }) {
  return (
    <div className={`absolute ${className}`} style={{ left: `${(x / VW) * 100}%`, top: `${(y / VH) * 100}%` }}>
      {children}
    </div>
  );
}

const CARD = "rounded-[12px] border border-[#D5E8FA] bg-white shadow-[0_8px_24px_rgba(30,90,150,0.10)]";

function UpcomingStop({ x, y, gray = false }: { x: number; y: number; gray?: boolean }) {
  return (
    <At x={x} y={y}>
      <span
        className="block h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] bg-white"
        style={{ borderColor: gray ? "#8B99AA" : BLUE }}
      />
    </At>
  );
}

function CompletedStop({ x, y }: { x: number; y: number }) {
  return (
    <At x={x} y={y}>
      <span
        className="flex h-[17px] w-[17px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white shadow-[0_1px_3px_rgba(11,27,54,0.3)]"
        style={{ background: GREEN }}
      >
        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
      </span>
    </At>
  );
}

function BusPin({
  x,
  y,
  id,
  dim,
  selected,
  onSelect,
}: {
  x: number;
  y: number;
  id: BusId;
  dim: boolean;
  selected: boolean;
  onSelect: (id: BusId) => void;
}) {
  return (
    <At x={x} y={y} className="z-20">
      <button
        type="button"
        onClick={() => onSelect(id)}
        aria-label={`Select bus ${id}`}
        aria-pressed={selected}
        className="relative block -translate-x-1/2 -translate-y-full cursor-pointer transition-[opacity,transform] duration-300 hover:scale-105"
        style={{ opacity: dim ? 0.25 : 1 }}
      >
        {selected && <span className="absolute left-1/2 top-[15px] h-9 w-9 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#1683F5]/25" />}
        <svg viewBox="0 0 32 42" width="30" height="40" className="relative drop-shadow-[0_4px_6px_rgba(11,27,54,0.28)]" aria-hidden>
          <path d="M16 41C16 41 31 26.5 31 16A15 15 0 0 0 1 16c0 10.5 15 25 15 25Z" fill={BLUE} stroke="#FFFFFF" strokeWidth="2" />
        </svg>
        <Bus className="absolute left-1/2 top-[7px] h-[16px] w-[16px] -translate-x-1/2 text-white" strokeWidth={2.4} />
      </button>
    </At>
  );
}

function BusCard({ x, y, id, dim }: { x: number; y: number; id: BusId; dim: boolean }) {
  const b = BUSES[id];
  const atStop = b.status === "stop";
  return (
    <At x={x} y={y} className="z-10 hidden sm:block">
      <div className={`${CARD} px-3.5 py-2.5 transition-opacity duration-300`} style={{ opacity: dim ? 0.3 : 1 }}>
        <p className="whitespace-nowrap text-[13.5px] font-bold leading-tight" style={{ color: NAVY }}>
          Bus {id}
        </p>
        <p className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[12px] leading-tight">
          <span className="font-medium" style={{ color: atStop ? NAVY : GREEN }}>
            {atStop ? "At stop" : "On route"}
          </span>
          <span className="h-[5px] w-[5px] rounded-full" style={{ background: atStop ? SKY : GREEN }} />
          <span style={{ color: MUTED }}>{b.students} students</span>
        </p>
      </div>
    </At>
  );
}

const LABELS: { x: number; y: number; text: string; small?: boolean; park?: boolean }[] = [
  { x: 228, y: 84, text: "Kondapur" },
  { x: 543, y: 114, text: "Madhapur" },
  { x: 686, y: 127, text: "HITEC City" },
  { x: 110, y: 224, text: "Gachibowli" },
  { x: 280, y: 276, text: "HITEC City" },
  { x: 386, y: 304, text: "Cyber Towers", small: true },
  { x: 246, y: 339, text: "Raidurg" },
  { x: 378, y: 401, text: "Durgam Cheruvu", small: true },
  { x: 808, y: 256, text: "KBR\nNational Park", park: true },
];

const POIS: [number, number][] = [
  [337, 309],
  [646, 280],
  [196, 540],
];

/* ------------------------------------------------------------- Export */

export default function TransportDashboard() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [mapMode, setMapMode] = useState<MapMode>("live");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedBus, setSelectedBus] = useState<BusId>("MPX-07");

  const isDim = (id: BusId) => filter !== "all" && BUSES[id].status !== filter;
  const sel = BUSES[selectedBus];

  const toggleFullscreen = () => {
    const el = rootRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.().catch(() => {});
  };

  const FILTERS: { id: FilterType; label: string; count: number; dot?: string }[] = [
    { id: "all", label: "All Buses", count: 12 },
    { id: "transit", label: "In Transit", count: 9, dot: GREEN },
    { id: "stop", label: "At Stop", count: 2, dot: SKY },
    { id: "idle", label: "Idle", count: 1, dot: "#94A3B8" },
  ];

  return (
    <div
      ref={rootRef}
      className="relative h-[520px] w-full select-none overflow-hidden rounded-[22px] border border-[#D8E9FA] bg-[#EAF0F7] shadow-[0_12px_32px_-14px_rgba(30,90,150,0.22)] sm:h-[560px] lg:h-[600px]"
    >
      {/* Map + anchored overlays (zoomable) */}
      <div
        className="absolute inset-0 origin-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        <MapArt satellite={mapMode === "satellite"} />

        {/* place labels */}
        {LABELS.map(({ x, y, text, small, park }) => (
          <At key={`${text}-${x}`} x={x} y={y} className="pointer-events-none">
            <span
              className={`block -translate-x-1/2 -translate-y-1/2 whitespace-pre text-center leading-tight ${
                small ? "text-[11.5px]" : "text-[13px]"
              } ${text === "Cyber Towers" || text === "Durgam Cheruvu" ? "hidden md:block" : ""}`}
              style={{
                color: park ? "#4F7A5C" : MUTED,
                fontWeight: 500,
                textShadow: "0 0 3px #fff, 0 0 3px #fff",
              }}
            >
              {text}
            </span>
          </At>
        ))}
        {POIS.map(([x, y]) => (
          <At key={`${x}-${y}`} x={x} y={y}>
            <span className="block h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#A3B0C0]" />
          </At>
        ))}

        {/* stops */}
        {[
          [353, 178],
          [462, 296],
          [540, 356],
          [600, 450],
          [507, 508],
        ].map(([x, y]) => (
          <UpcomingStop key={`${x}-${y}`} x={x} y={y} />
        ))}
        <UpcomingStop x={682} y={375} gray />
        <UpcomingStop x={728} y={464} gray />
        <CompletedStop x={409} y={200} />
        <CompletedStop x={740} y={408} />
        <CompletedStop x={585} y={535} />

        {/* school */}
        <At x={672} y={518} className="z-10">
          <span className="flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[12px] border-[3px] border-white bg-[#1683F5] shadow-[0_6px_14px_rgba(22,131,245,0.4)]">
            <House className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
        </At>
        <At x={692} y={490} className="z-10 hidden sm:block">
          <div className={`${CARD} px-3.5 py-2`}>
            <p className="whitespace-nowrap text-[13px] font-bold leading-tight" style={{ color: NAVY }}>
              Greenfield
              <br />
              International School
            </p>
          </div>
        </At>

        {/* next stop card */}
        <At x={432} y={186} className="z-10 hidden md:block">
          <div className={`${CARD} relative flex items-center gap-2.5 py-2.5 pl-2.5 pr-4`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5FF]" style={{ color: BLUE }}>
              <PersonStanding className="h-4.5 w-4.5" strokeWidth={2.2} />
            </span>
            <span className="leading-tight">
              <span className="block text-[11.5px]" style={{ color: MUTED }}>
                Next Stop
              </span>
              <span className="block whitespace-nowrap text-[13.5px] font-semibold" style={{ color: NAVY }}>
                Maple Residency
              </span>
              <span className="mt-0.5 block text-[11.5px] font-semibold" style={{ color: NAVY }}>
                2 mins <span style={{ color: MUTED }}>• 0.8 km</span>
              </span>
            </span>
            <span className="absolute -bottom-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-[#D5E8FA] bg-white" />
          </div>
        </At>

        {/* buses */}
        <BusCard x={313} y={98} id="MPX-07" dim={isDim("MPX-07")} />
        <BusCard x={637} y={298} id="MPX-03" dim={isDim("MPX-03")} />
        <BusCard x={447} y={430} id="MPX-11" dim={isDim("MPX-11")} />
        <BusPin x={292} y={166} id="MPX-07" dim={isDim("MPX-07")} selected={selectedBus === "MPX-07"} onSelect={setSelectedBus} />
        <BusPin x={620} y={366} id="MPX-03" dim={isDim("MPX-03")} selected={selectedBus === "MPX-03"} onSelect={setSelectedBus} />
        <BusPin x={430} y={496} id="MPX-11" dim={isDim("MPX-11")} selected={selectedBus === "MPX-11"} onSelect={setSelectedBus} />
      </div>

      {/* Top-left filters */}
      <div className="absolute left-3 top-3 z-30 flex max-w-[calc(100%-24px)] flex-wrap gap-2 sm:left-4 sm:top-4 md:max-w-[62%]">
        {FILTERS.map(({ id, label, count, dot }) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={active}
              className={`${id === "idle" ? "hidden sm:inline-flex" : "inline-flex"} h-8 cursor-pointer items-center gap-1.5 rounded-[10px] px-2.5 text-[12px] font-semibold transition-colors duration-200 sm:h-10 sm:gap-2 sm:px-3.5 sm:text-[13px] ${
                active
                  ? "bg-[#1683F5] text-white shadow-[0_6px_16px_-6px_rgba(22,131,245,0.7)]"
                  : "border border-[#D5E8FA] bg-white text-[#0B1B36] shadow-[0_4px_12px_rgba(30,90,150,0.08)] hover:border-[#1683F5]"
              }`}
            >
              {dot && <span className="h-2 w-2 rounded-full" style={{ background: dot }} />}
              {label}
              <span
                className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                  active ? "bg-white/25 text-white" : "bg-[#EEF3F9] text-[#52657D]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Top-right: Live / Satellite + fullscreen */}
      <div className="absolute right-3 top-3 z-30 hidden items-center gap-2.5 sm:right-4 sm:top-4 sm:flex">
        <div className="flex items-center rounded-[12px] border border-[#D5E8FA] bg-white p-1 shadow-[0_4px_12px_rgba(30,90,150,0.08)]">
          {(["live", "satellite"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMapMode(m)}
              aria-pressed={mapMode === m}
              className={`h-8 cursor-pointer rounded-[9px] px-4 text-[13px] font-semibold capitalize transition-colors ${
                mapMode === m ? "bg-[#1683F5] text-white" : "text-[#0B1B36] hover:text-[#1683F5]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[12px] border border-[#D5E8FA] bg-white text-[#0B1B36] shadow-[0_4px_12px_rgba(30,90,150,0.08)] hover:text-[#1683F5]"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Right-side map controls */}
      <div className="absolute bottom-4 right-3 z-30 flex flex-col items-center gap-2 sm:right-4">
        <button
          type="button"
          onClick={() => setZoomLevel(1)}
          aria-label="Reset north"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[12px] border border-[#D5E8FA] bg-white text-[#0B1B36] shadow-[0_4px_12px_rgba(30,90,150,0.1)] hover:text-[#1683F5]"
        >
          <Navigation2 className="h-4 w-4" />
        </button>
        <div className="flex flex-col overflow-hidden rounded-[12px] border border-[#D5E8FA] bg-white shadow-[0_4px_12px_rgba(30,90,150,0.1)]">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(1.4, +(z + 0.1).toFixed(2)))}
            aria-label="Zoom in"
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#0B1B36] hover:text-[#1683F5]"
          >
            <Plus className="h-4 w-4" />
          </button>
          <span className="h-px bg-[#E3EEF9]" />
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(1, +(z - 0.1).toFixed(2)))}
            aria-label="Zoom out"
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#0B1B36] hover:text-[#1683F5]"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => setZoomLevel(1)}
          aria-label="Recenter map"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[12px] border border-[#D5E8FA] bg-white text-[#0B1B36] shadow-[0_4px_12px_rgba(30,90,150,0.1)] hover:text-[#1683F5]"
        >
          <LocateFixed className="h-4 w-4" />
        </button>
      </div>

      {/* Selected bus panel (bottom-left) */}
      <div className="absolute bottom-3 left-3 z-30 w-[214px] sm:bottom-4 sm:left-4 sm:w-[300px] lg:w-[316px]">
        <div className="rounded-[16px] border border-[#D5E8FA] bg-white p-3 shadow-[0_8px_24px_rgba(30,90,150,0.12)] sm:rounded-[18px] sm:p-4">
          <div className="flex items-start gap-3">
            <div className="relative hidden h-[58px] w-[80px] shrink-0 overflow-hidden rounded-[10px] sm:block">
              <Image src="/transport/school-bus-thumb.jpg" alt="School bus" fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-1 items-start justify-between gap-2 pt-1">
              <span className="whitespace-nowrap font-display text-[15px] font-bold sm:text-[17px]" style={{ color: NAVY }}>
                {selectedBus}
              </span>
              <span
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[8px] px-2.5 py-1 text-[11.5px] font-semibold sm:text-[12.5px]"
                style={
                  sel.status === "stop"
                    ? { background: "#EAF5FF", color: BLUE }
                    : { background: "#E8F7EF", color: "#15803D" }
                }
              >
                <span className="h-2 w-2 rounded-full" style={{ background: sel.status === "stop" ? SKY : GREEN }} />
                {sel.status === "stop" ? "At Stop" : "On Route"}
              </span>
            </div>
          </div>

          <p className="mt-2 text-[13px] font-semibold sm:mt-3 sm:text-[15px]" style={{ color: NAVY }}>
            Route A - West Zone
          </p>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#E3EEF9]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#1683F5] to-[#5AAEFA] transition-[width] duration-500"
                style={{ width: sel.fill }}
              />
            </div>
            <span className="text-right leading-tight">
              <span className="block text-[14px] font-bold sm:text-[15px]" style={{ color: NAVY }}>
                {sel.students}/28
              </span>
              <span className="block text-[11px]" style={{ color: MUTED }}>
                Students
              </span>
            </span>
          </div>

          <div className="mt-2.5 flex items-center gap-2.5 rounded-[12px] border border-[#E1ECF8] bg-white px-2.5 py-2 sm:mt-3 sm:gap-3 sm:px-3 sm:py-2.5">
            <MapPin className="h-5 w-5 shrink-0" style={{ color: BLUE }} fill="#1683F5" fillOpacity={0.15} />
            <span className="flex-1 leading-tight">
              <span className="block text-[11.5px]" style={{ color: MUTED }}>
                Next Stop
              </span>
              <span className="block text-[13.5px] font-semibold" style={{ color: NAVY }}>
                Maple Residency
              </span>
              <span className="block text-[11.5px]" style={{ color: MUTED }}>
                2 mins • 0.8 km
              </span>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5FF]" style={{ color: BLUE }}>
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Legend (bottom-center) */}
      <div className="absolute bottom-4 left-[calc(50%+90px)] z-20 hidden -translate-x-1/2 items-center gap-5 rounded-[12px] border border-[#D5E8FA] bg-white px-5 py-2.5 text-[12.5px] text-[#3A4A60] shadow-[0_8px_24px_rgba(30,90,150,0.10)] xl:flex 2xl:left-1/2">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#1683F5]" />
          Bus
        </span>
        <span className="flex items-center gap-2">
          <span className="h-[3px] w-4 rounded-full bg-[#1683F5]" />
          Route
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-[2.5px] border-[#1683F5] bg-white" />
          Upcoming Stop
        </span>
        <span className="flex items-center gap-2">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full" style={{ background: GREEN }}>
            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
          </span>
          Completed Stop
        </span>
        <span className="flex items-center gap-2">
          <House className="h-3.5 w-3.5 text-[#1683F5]" strokeWidth={2.6} />
          School
        </span>
      </div>
    </div>
  );
}
