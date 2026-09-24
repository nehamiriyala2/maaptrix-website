"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Bus,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  LayoutDashboard,
  LayoutGrid,
  LocateFixed,
  Menu,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  Route,
  Search,
  Settings,
  Signal,
  Users,
  Wifi,
  BatteryFull,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/*
 * Laptop + phone live-tracking product visual for the Why Maaptrix hero.
 * Drawn on a fixed 960×612 design canvas and scaled to fit its container,
 * so every element keeps its proportions at any viewport width.
 */
const CANVAS_W = 960;
const CANVAS_H = 612;

const BLUE = "#1683F5";
const NAVY = "#0B1B36";
const RED = "#E5484D";
const GREEN = "#1FA971";

function useFitScale(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1.1, el.clientWidth / designWidth));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  return { ref, scale };
}

/* ---------------------------------------------------------------- Map art */

// Deterministic pseudo-random numbers so server and client render the same map.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const MAP_W = 623;
const MAP_H = 337;
// Coastline: land to the left, sea to the right.
const coastX = (y: number) => 505 + 28 * Math.sin(y / 48) + y * 0.22;

function buildMap() {
  const r = rng(7);
  const blocks: { x: number; y: number; w: number; h: number; park: boolean }[] = [];
  for (let gy = 0; gy < MAP_H; gy += 17) {
    for (let gx = 0; gx < MAP_W; gx += 21) {
      const x = gx + r() * 3;
      const y = gy + r() * 3;
      if (x + 16 > coastX(y) - 6) continue;
      const roll = r();
      if (roll < 0.22) continue;
      blocks.push({ x, y, w: 12 + r() * 7, h: 9 + r() * 6, park: roll > 0.965 });
    }
  }
  return blocks;
}
const BLOCKS = buildMap();

// Irregular minor streets layered over the block grid
const MINOR_STREETS = (() => {
  const r = rng(31);
  const out: string[] = [];
  for (let i = 0; i < 26; i++) {
    const x = r() * 470;
    const y = r() * MAP_H;
    const a = (r() - 0.5) * 1.6;
    const len = 60 + r() * 120;
    const x2 = Math.min(x + Math.cos(a) * len, coastX(y) - 8);
    const y2 = y + Math.sin(a) * len;
    out.push(`M${x.toFixed(1)} ${y.toFixed(1)} Q ${((x + x2) / 2 + (r() - 0.5) * 30).toFixed(1)} ${((y + y2) / 2 + (r() - 0.5) * 30).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`);
  }
  return out;
})();

// Secondary roads (white with a soft casing)
const MAJOR_ROADS = [
  "M-10 60 C 90 70 170 40 260 58 S 420 96 520 70",
  "M-10 250 C 80 238 150 262 240 250 S 380 228 470 262 S 540 300 560 340",
  "M60 -10 C 70 80 40 170 70 250 S 90 320 84 350",
  "M300 -10 C 290 70 320 140 306 210 S 290 300 312 350",
  "M150 -10 C 170 100 130 190 190 260 S 250 330 240 350",
  "M-10 150 C 120 160 220 120 330 140 S 440 170 500 150",
  "M400 -10 C 420 90 380 180 430 250 S 470 320 460 350",
];
// Highways (slightly wider)
const HIGHWAYS = ["M-10 118 C 110 100 230 130 360 106 S 470 90 520 118", "M232 -10 C 222 110 260 210 228 350"];

// Primary transport route
const ROUTE = "M85 177 L120 209 L152 203 L174 192 L210 195 L270 203 L300 210 L332 245 M300 210 L362 233 L387 218 L407 183";
const BRANCH = "M210 195 L203 160 L192 126";
const NODES: [number, number][] = [
  [120, 209],
  [152, 203],
  [210, 195],
  [270, 203],
  [362, 233],
];

function MapArt({ viewBox = `0 0 ${MAP_W} ${MAP_H}`, detail = true }: { viewBox?: string; detail?: boolean }) {
  const sea = `M${coastX(0)} 0 ${Array.from({ length: 18 }, (_, i) => {
    const y = (i + 1) * 20;
    return `L${coastX(y).toFixed(1)} ${y}`;
  }).join(" ")} L${MAP_W + 20} ${MAP_H + 20} L${MAP_W + 20} -20 Z`;

  return (
    <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <rect x="-20" y="-20" width={MAP_W + 40} height={MAP_H + 40} fill="#F1F3F5" />
      {/* city blocks + parks */}
      {BLOCKS.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="1.5" fill={b.park ? "#DDEEDC" : "#E8EBEF"} />
      ))}
      <rect x="236" y="276" width="46" height="30" rx="4" fill="#DDEEDC" />
      <rect x="18" y="12" width="38" height="24" rx="4" fill="#DDEEDC" />
      {MINOR_STREETS.map((d) => (
        <path key={d} d={d} fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      ))}
      {/* river / canal */}
      <path d="M-10 300 C 60 290 110 318 170 300 S 260 280 300 296" fill="none" stroke="#C9E1F6" strokeWidth="5" />
      {/* sea */}
      <path d={sea} fill="#C9E1F6" />
      <path d={sea} fill="none" stroke="#B6D5F1" strokeWidth="1.2" />
      {/* roads */}
      {MAJOR_ROADS.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#D6DBE1" strokeWidth="5.5" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#FFFFFF" strokeWidth="3.6" strokeLinecap="round" />
        </g>
      ))}
      {HIGHWAYS.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#CBD2DA" strokeWidth="8" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#FFFFFF" strokeWidth="5.6" strokeLinecap="round" />
        </g>
      ))}
      {detail && (
        <>
          {/* highway shields */}
          {[
            [366, 18, "16"],
            [70, 58, "216"],
            [215, 318, "16"],
          ].map(([x, y, t]) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <rect x="-9" y="-6" width="18" height="12" rx="2.5" fill="#FFFFFF" stroke="#B9C2CC" strokeWidth="0.8" />
              <text x="0" y="3" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6B7785">
                {t}
              </text>
            </g>
          ))}
        </>
      )}
      {/* route */}
      <path d={ROUTE} fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d={BRANCH} fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d={ROUTE} fill="none" stroke={BLUE} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d={BRANCH} fill="none" stroke={BLUE} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      {NODES.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.2" fill="#FFFFFF" stroke={BLUE} strokeWidth="2.4" />
      ))}
      <circle cx="387" cy="218" r="5" fill="#FFFFFF" stroke={GREEN} strokeWidth="2.6" />
      {detail && (
        <text x="206" y="221" textAnchor="middle" fontSize="15" fontWeight="600" fill="#1F2A37" stroke="#FFFFFF" strokeWidth="3" paintOrder="stroke">
          Ongole
        </text>
      )}
    </svg>
  );
}

function Pin({ x, y, color = BLUE, size = 22 }: { x: number; y: number; color?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 30"
      width={size}
      height={size * 1.25}
      className="absolute drop-shadow-[0_2px_2px_rgba(11,27,54,0.25)]"
      style={{ left: x - size / 2, top: y - size * 1.2 }}
      aria-hidden
    >
      <path d="M12 29C12 29 22 18.5 22 11A10 10 0 0 0 2 11c0 7.5 10 18 10 18Z" fill={color} />
      <circle cx="12" cy="11" r="4.2" fill="#FFFFFF" />
    </svg>
  );
}

function BusMarker({ x, y, color, rotate = 0 }: { x: number; y: number; color: string; rotate?: number }) {
  return (
    <span
      className="absolute flex h-[22px] w-[30px] items-center justify-center rounded-[6px] border-2 border-white shadow-[0_3px_6px_rgba(11,27,54,0.3)]"
      style={{ left: x - 15, top: y - 11, background: color, transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <Bus className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
    </span>
  );
}

function BusPopup({
  x,
  y,
  name,
  status,
  students,
  tone,
  small = false,
}: {
  x: number;
  y: number;
  name: string;
  status: string;
  students: string;
  tone: "blue" | "red";
  small?: boolean;
}) {
  const c = tone === "red" ? RED : BLUE;
  return (
    <div
      className="absolute rounded-[8px] border border-[#D5E8FF] bg-white shadow-[0_6px_16px_rgba(11,27,54,0.14)]"
      style={{ left: x, top: y, padding: small ? "5px 8px" : "7px 11px" }}
    >
      <p className="font-semibold leading-tight" style={{ color: NAVY, fontSize: small ? 11 : 12.5 }}>
        {name}
      </p>
      <p className="font-medium leading-tight" style={{ color: c, fontSize: small ? 9.5 : 10.5 }}>
        {status}
      </p>
      <p className="leading-tight" style={{ color: tone === "red" ? "#52657D" : c, fontSize: small ? 9.5 : 10.5 }}>
        {students}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------ Laptop UI */

const SIDEBAR: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Bus, label: "Transport" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: Route, label: "Routes" },
  { icon: Users, label: "Students" },
  { icon: Bell, label: "Notifications" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const METRICS: { icon: LucideIcon; value: string; label: string; alert?: boolean }[] = [
  { icon: Bus, value: "248", label: "Active Buses" },
  { icon: Users, value: "12,480", label: "Students" },
  { icon: MapPin, value: "42", label: "Active Routes" },
  { icon: Bell, value: "3", label: "Delay Alerts", alert: true },
];

function LogoMark({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" fill="none" stroke={NAVY} strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 2 21 7l-9 5-9-5 9-5Z" fill={BLUE} />
      <path d="M12 12v10" stroke={NAVY} strokeWidth="2" />
    </svg>
  );
}

function LaptopScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-left" style={{ color: NAVY }}>
      {/* Header */}
      <div className="absolute inset-x-0 top-0 flex h-[58px] items-center border-b border-[#EDF2F8] pr-4">
        <div className="flex w-[135px] items-center gap-2 pl-4">
          <LogoMark size={22} />
          <span className="font-display text-[15px] font-bold">Maaptrix</span>
        </div>
        <div className="ml-[13px] flex h-[30px] w-[334px] items-center gap-2 rounded-[8px] border border-[#DDE6F0] px-3 text-[10.5px] text-[#8A97A8]">
          <Search className="h-3.5 w-3.5" />
          Search bus, route, or student...
        </div>
        <div className="ml-[11px] flex h-[30px] w-[116px] items-center justify-between rounded-[8px] border border-[#DDE6F0] px-2.5 text-[10px] font-medium">
          Fri, 25 Sep 2026
          <ChevronDown className="h-3 w-3 text-[#8A97A8]" />
        </div>
        <span className="relative ml-[26px]">
          <Bell className="h-[17px] w-[17px]" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-white" style={{ background: RED }} />
        </span>
        <span className="ml-[24px] flex h-[26px] w-[26px] items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: BLUE }}>
          M
        </span>
        <span className="ml-2 text-[11px] font-medium">Admin</span>
        <ChevronDown className="ml-2 h-3 w-3 text-[#8A97A8]" />
      </div>

      {/* Sidebar */}
      <div className="absolute bottom-0 left-0 top-[58px] w-[135px] border-r border-[#EDF2F8] bg-[#FBFCFE] px-2.5 pt-3">
        {SIDEBAR.map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`mb-[3px] flex h-[30px] items-center gap-2.5 rounded-[7px] px-2.5 text-[11.5px] ${
              active ? "font-semibold text-white" : "text-[#3A4A60]"
            }`}
            style={active ? { background: BLUE } : undefined}
          >
            <Icon className="h-[14px] w-[14px]" />
            {label}
          </div>
        ))}
      </div>

      {/* Metric cards */}
      <div className="absolute left-[148px] right-[11px] top-[73px] grid grid-cols-4 gap-[10px]">
        {METRICS.map(({ icon: Icon, value, label, alert }) => (
          <div key={label} className="flex h-[58px] items-center gap-2.5 rounded-[9px] border border-[#D5E8FF] bg-white px-3 shadow-[0_4px_12px_rgba(20,90,160,0.06)]">
            <span
              className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]"
              style={{ background: alert ? "#FDECEC" : "#EFF7FF", color: alert ? RED : BLUE }}
            >
              <Icon className="h-[17px] w-[17px]" strokeWidth={2.2} />
            </span>
            <span>
              <span className="block text-[15px] font-bold leading-none">{value}</span>
              <span className="mt-1 block text-[9.5px] text-[#52657D]">{label}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="absolute bottom-0 left-[148px] right-0 top-[143px] overflow-hidden rounded-tl-[10px] border-l border-t border-[#D5E8FF]">
        <MapArt />
        <BusMarker x={85} y={177} color={BLUE} rotate={28} />
        <BusMarker x={407} y={183} color={RED} rotate={-20} />
        <Pin x={37} y={206} color="#7FA6D6" />
        <Pin x={192} y={128} />
        <Pin x={299} y={208} />
        <Pin x={332} y={249} />
        <BusPopup x={74} y={112} name="Bus MP-07" status="On Route" students="28 Students" tone="blue" />
        <BusPopup x={205} y={84} name="Bus MP-03" status="On Route" students="32 Students" tone="blue" />
        <BusPopup x={412} y={109} name="Bus MP-12" status="Delayed (5 min)" students="30 Students" tone="red" />
        {/* controls */}
        <div className="absolute right-[12px] top-[16px] overflow-hidden rounded-[8px] border border-[#DDE6F0] bg-white shadow-[0_4px_10px_rgba(11,27,54,0.1)]">
          <span className="flex h-[32px] w-[32px] items-center justify-center border-b border-[#EDF2F8]" style={{ color: BLUE }}>
            <Plus className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="flex h-[32px] w-[32px] items-center justify-center" style={{ color: BLUE }}>
            <Minus className="h-4 w-4" strokeWidth={2.4} />
          </span>
        </div>
        <span className="absolute bottom-[70px] right-[12px] flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-[#DDE6F0] bg-white shadow-[0_4px_10px_rgba(11,27,54,0.1)]">
          <LocateFixed className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Phone UI */

function PhoneScreen() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[25px] bg-white text-left" style={{ color: NAVY }}>
      {/* status bar */}
      <div className="flex h-[24px] shrink-0 items-center justify-between px-4 pt-1 text-[10px] font-semibold">
        9:41
        <span className="flex items-center gap-1">
          <Signal className="h-2.5 w-2.5" />
          <Wifi className="h-2.5 w-2.5" />
          <BatteryFull className="h-3 w-3" />
        </span>
      </div>
      <span className="absolute left-1/2 top-[6px] h-[15px] w-[56px] -translate-x-1/2 rounded-full bg-[#0D0D0F]" aria-hidden />
      {/* header */}
      <div className="flex h-[34px] shrink-0 items-center justify-between px-3">
        <Menu className="h-4 w-4" />
        <span className="font-display text-[13px] font-bold">Maaptrix</span>
        <span className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 h-[7px] w-[7px] rounded-full border border-white" style={{ background: RED }} />
        </span>
      </div>
      {/* tabs */}
      <div className="flex h-[30px] shrink-0 items-center gap-1.5 px-2.5">
        {["Live", "Routes", "Students"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-2.5 py-[5px] text-[9.5px] font-semibold ${i === 0 ? "text-white" : "bg-[#F1F5FA] text-[#3A4A60]"}`}
            style={i === 0 ? { background: BLUE, paddingInline: 13 } : undefined}
          >
            {t}
          </span>
        ))}
      </div>
      {/* map */}
      <div className="relative mt-1 h-[186px] shrink-0 overflow-hidden">
        <MapArt viewBox="20 110 175 180" detail={false} />
        {/* viewBox 20 110 → phone px: ((x-20)*1.033, (y-110)*1.033) */}
        <BusMarker x={66} y={69} color={BLUE} rotate={28} />
        <Pin x={103} y={104} size={18} />
        <Pin x={17} y={98} size={16} color="#7FA6D6" />
        <BusPopup x={80} y={16} name="Bus MP-07" status="On Route" students="28 Students" tone="blue" small />
      </div>
      {/* bus card */}
      <div className="mx-2 mt-2 shrink-0 rounded-[10px] border border-[#D5E8FF] bg-white px-2.5 py-2 shadow-[0_4px_12px_rgba(20,90,160,0.08)]">
        <div className="flex items-center gap-2">
          <Bus className="h-4 w-4" style={{ color: BLUE }} />
          <div className="flex-1">
            <p className="text-[10.5px] font-semibold leading-tight">Bus MP-07</p>
            <p className="text-[8.5px] leading-tight text-[#52657D]">On Route · 28 Students</p>
          </div>
          <ChevronRight className="h-3.5 w-3.5 text-[#8A97A8]" />
        </div>
        <div className="mt-2 flex items-center gap-2 border-t border-[#EDF2F8] pt-2">
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#DDEBFA] text-[8px] font-bold" style={{ color: NAVY }}>
            RK
          </span>
          <div className="flex-1">
            <p className="text-[9.5px] font-semibold leading-tight">Ravi Kumar</p>
            <p className="text-[8px] leading-tight text-[#52657D]">Driver</p>
          </div>
          <Phone className="h-3.5 w-3.5" style={{ color: BLUE }} />
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px]" style={{ background: BLUE }}>
            <MessageSquare className="h-2.5 w-2.5 text-white" />
          </span>
        </div>
      </div>
      {/* bottom nav */}
      <div className="mt-auto flex h-[44px] shrink-0 items-center justify-around border-t border-[#EDF2F8] pb-1">
        {[
          { icon: Home, label: "Home" },
          { icon: Bus, label: "Transport", active: true },
          { icon: CalendarCheck, label: "Attendance" },
          { icon: LayoutGrid, label: "More" },
        ].map(({ icon: Icon, label, active }) => (
          <span key={label} className="flex flex-col items-center gap-0.5 text-[7.5px] font-medium" style={{ color: active ? BLUE : "#6B7785" }}>
            <Icon className="h-[15px] w-[15px]" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- Export */

export default function TrackingMockup() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}
        role="img"
        aria-label="Maaptrix school transport dashboard on a laptop showing live bus tracking on a map of Ongole, with the matching mobile tracking app on a phone"
      >
        {/* Laptop */}
        <div className="absolute left-[113px] top-0 w-[795px]">
          <div className="relative rounded-[22px] bg-[#16181C] p-[12px] pt-[14px] shadow-[0_30px_60px_-28px_rgba(11,27,54,0.45)] ring-1 ring-[#2A2D33]">
            <span className="absolute left-1/2 top-[5px] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#3A3D44]" aria-hidden />
            <div className="h-[480px] overflow-hidden rounded-[6px]">
              <LaptopScreen />
            </div>
          </div>
          {/* base */}
          <div className="relative -mx-[20px] -mt-[2px] h-[16px] rounded-b-[18px] bg-gradient-to-b from-[#E4E7EB] via-[#C9CED5] to-[#A9B0B9] shadow-[0_18px_24px_-14px_rgba(11,27,54,0.45)]">
            <span className="absolute left-1/2 top-0 h-[6px] w-[150px] -translate-x-1/2 rounded-b-[8px] bg-[#B3BAC3]" />
          </div>
        </div>

        {/* Phone (in front of the laptop, lower-left) */}
        <div className="absolute left-0 top-[183px] h-[427px] w-[193px] rounded-[32px] bg-[#111214] p-[7px] shadow-[0_28px_50px_-18px_rgba(11,27,54,0.55)] ring-1 ring-[#2E3036]">
          <PhoneScreen />
        </div>
      </div>
    </div>
  );
}
