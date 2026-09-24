"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  ArrowRight,
  Bell,
  Bus,
  CalendarCheck,
  FileText,
  LayoutDashboard,
  RefreshCw,
  Route,
  Search,
  Settings,
  UserCheck,
  Users,
} from "lucide-react";
import Logo from "@/components/Logo";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

/* ------------------------------------------------------------------------ */
/* Laptop + phone product visual — fixed canvas scaled to its column        */
/* ------------------------------------------------------------------------ */

const CANVAS_W = 800;
const CANVAS_H = 470;

function useFitScale(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / designWidth));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  return { ref, scale };
}

const NAV: { icon: Icon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Bus, label: "Transport" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: Route, label: "Routes" },
  { icon: Bell, label: "Notifications" },
  { icon: Users, label: "Students" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

/* Sample interface data, mirroring the reference mock-up (not real Maaptrix figures). */
const STATS = [
  { value: "248", label: "Active Students" },
  { value: "12", label: "Active Buses" },
  { value: "98%", label: "On-Time" },
  { value: "0", label: "Safety Alerts" },
];

const ALERTS = [
  { title: "Bus arrived at", sub: "Sector 4 Pickup Point", time: "09:24 AM" },
  { title: "Route deviation detected", sub: "", time: "08:17 AM" },
  { title: "Student boarded", sub: "(Awani R.)", time: "08:12 AM" },
];

const WEEK = [
  { d: "Mon", h: 22 },
  { d: "Tue", h: 30 },
  { d: "Wed", h: 34 },
  { d: "Thu", h: 52 },
  { d: "Fri", h: 86 },
  { d: "Sat", h: 44 },
  { d: "Sun", h: 20 },
];

/** Stylised street map with a highlighted bus route. */
function StreetMap({ className, variant = "laptop" }: { className: string; variant?: "laptop" | "phone" }) {
  return (
    <svg viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden>
      <rect width="240" height="130" fill="#EEF4FB" />
      {/* blocks */}
      {[
        [8, 8, 46, 26],
        [70, 6, 52, 22],
        [150, 10, 40, 30],
        [200, 40, 34, 26],
        [16, 52, 38, 30],
        [96, 50, 44, 24],
        [168, 80, 56, 30],
        [40, 98, 52, 24],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill={i % 3 === 0 ? "#DDEBFA" : "#E5EEF8"} />
      ))}
      {/* streets */}
      <path d="M-5 42 L245 30" stroke="#FFFFFF" strokeWidth="7" />
      <path d="M-5 92 L245 76" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M62 -5 L84 135" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M142 -5 L156 135" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M195 -5 C190 40 205 80 196 135" stroke="#FFFFFF" strokeWidth="4" fill="none" />
      {/* route */}
      {variant === "laptop" ? (
        <>
          <path
            d="M34 112 L70 86 L96 78 L118 58 L150 50 L176 30"
            stroke="#147DFF"
            strokeWidth="2.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="112" r="5" fill="#147DFF" />
          <circle cx="34" cy="112" r="2" fill="#fff" />
          <circle cx="118" cy="58" r="3" fill="#fff" stroke="#147DFF" strokeWidth="1.8" />
        </>
      ) : (
        <>
          <path
            d="M20 112 L60 94 L96 90 L128 70 L170 58 L214 30"
            stroke="#147DFF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="112" r="4" fill="#fff" stroke="#147DFF" strokeWidth="2.4" />
          <circle cx="214" cy="30" r="4" fill="#fff" stroke="#147DFF" strokeWidth="2.4" />
        </>
      )}
    </svg>
  );
}

function LaptopScreen() {
  return (
    <div className="flex h-full overflow-hidden rounded-[6px] bg-[#F4F7FB] text-brand-navy">
      {/* Sidebar */}
      <div className="flex w-[112px] shrink-0 flex-col bg-brand-navy px-2 py-3">
        <span className="flex items-center gap-1.5 px-1">
          <span className="rounded bg-white p-[2px]">
            <Logo showWordmark={false} imageClassName="h-[14px] w-[14px]" />
          </span>
          <span className="font-display text-[11.5px] font-bold text-white">Maaptrix</span>
        </span>
        <div className="mt-4 space-y-0.5">
          {NAV.map(({ icon: I, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 rounded-md px-2 py-[5px] text-[8.5px] font-medium ${
                active ? "bg-brand-blue text-white" : "text-white/70"
              }`}
            >
              <I className="h-[10px] w-[10px]" strokeWidth={2} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 overflow-hidden p-2.5">
        {/* Top bar */}
        <div className="flex items-center gap-2">
          <span className="flex h-[18px] flex-1 items-center gap-1 rounded-md bg-white px-2 text-[7px] text-slate-400 ring-1 ring-slate-200">
            <Search className="h-2 w-2" /> Search anything...
          </span>
          <span className="rounded border border-slate-200 bg-white px-1.5 py-[2px] text-[6px] font-semibold uppercase tracking-wider text-slate-400">
            Sample interface
          </span>
          <Bell className="h-2.5 w-2.5 text-slate-600" />
          <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-slate-300 text-[7px] font-bold text-slate-700">
            A
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-1.5">
          {STATS.map(({ value, label }) => (
            <div key={label} className="rounded-md bg-white px-2 py-1.5 ring-1 ring-slate-200/80">
              <p className="font-display text-[14px] font-bold leading-none">{value}</p>
              <p className="mt-1 text-[6.5px] text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Live tracking + alerts */}
        <div className="grid min-h-0 flex-1 grid-cols-[1.5fr_1fr] gap-1.5 overflow-hidden">
          <div className="flex min-h-0 flex-col rounded-md bg-white p-2 ring-1 ring-slate-200/80">
            <p className="flex items-center justify-between text-[8.5px] font-bold">
              <span className="flex items-center gap-1">
                <RefreshCw className="h-2.5 w-2.5 text-brand-blue" /> Live Tracking
              </span>
              <ArrowRight className="h-2.5 w-2.5 text-slate-400" />
            </p>
            <div className="relative mt-1 min-h-0 flex-1 overflow-hidden rounded">
              <StreetMap className="absolute inset-0 h-full w-full" />
              <span className="absolute left-[50%] top-[10%] rounded bg-white px-1.5 py-1 text-[6.5px] leading-tight shadow-[0_4px_10px_-4px_rgba(10,10,10,0.35)]">
                <span className="block font-bold">Bus TS08AB1234</span>
                <span className="block text-slate-500">On Route · 2:34 PM</span>
              </span>
              <span className="absolute left-[38%] top-[34%] flex h-4 w-4 items-center justify-center rounded bg-brand-blue text-white shadow-[0_0_0_3px_rgba(20,125,255,0.25)]">
                <Bus className="h-2.5 w-2.5" strokeWidth={2.4} />
              </span>
            </div>
          </div>
          <div className="flex min-h-0 flex-col rounded-md bg-white p-2 ring-1 ring-slate-200/80">
            <p className="text-[8.5px] font-bold">Recent Alerts</p>
            <ul className="mt-1.5 space-y-1.5">
              {ALERTS.map(({ title, sub, time }) => (
                <li key={title} className="flex items-start justify-between gap-1 text-[6.5px]">
                  <span className="flex items-start gap-1">
                    <span className="mt-[1px] h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                    <span>
                      <span className="block font-semibold text-brand-navy">{title}</span>
                      {sub && <span className="block text-slate-500">{sub}</span>}
                    </span>
                  </span>
                  <span className="shrink-0 text-slate-400">{time}</span>
                </li>
              ))}
            </ul>
            <span className="mt-auto self-end text-[6.5px] font-semibold text-brand-blue">View All</span>
          </div>
        </div>

        {/* Attendance + fleet */}
        <div className="grid h-[84px] shrink-0 grid-cols-[1.5fr_1fr] gap-1.5">
          <div className="flex min-h-0 flex-col overflow-hidden rounded-md bg-white p-2 ring-1 ring-slate-200/80">
            <p className="text-[8.5px] font-bold">Attendance Overview</p>
            <div className="mt-1 flex min-h-0 flex-1 items-end gap-2.5 px-1">
              {WEEK.map(({ d, h }) => (
                <span key={d} className="flex h-full flex-1 flex-col items-center justify-end gap-[2px]">
                  <span
                    className={`w-full rounded-t-[2px] ${d === "Fri" ? "bg-brand-blue" : "bg-brand-blue/35"}`}
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[5.5px] text-slate-400">{d}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex min-h-0 flex-col overflow-hidden rounded-md bg-white p-2 ring-1 ring-slate-200/80">
            <p className="text-[8.5px] font-bold">Fleet Performance</p>
            <div className="mt-1 flex flex-1 items-center gap-2">
              <span className="relative h-[44px] w-[44px] shrink-0">
                <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90">
                  <circle cx="21" cy="21" r="16" fill="none" stroke="#DCEAFF" strokeWidth="5" />
                  <circle cx="21" cy="21" r="16" fill="none" stroke="#147DFF" strokeWidth="5" strokeDasharray="88 100.5" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold">88%</span>
              </span>
              <span className="text-[7.5px] font-semibold text-brand-blue">+5%</span>
              <span className="ml-auto self-end text-[6.5px] font-semibold text-brand-blue">View Report</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-2.5 pb-2 pt-5 text-brand-navy">
      <div className="flex items-center justify-between text-[8px] font-semibold text-brand-navy">
        <ArrowRight className="h-2.5 w-2.5 rotate-180" />
        <span>Parent Portal</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-300 text-[7px] font-bold text-slate-700">P</span>
      </div>
      <p className="mt-3 text-[9px] text-slate-600">Good Morning</p>
      <p className="font-display text-[13px] font-bold leading-tight">Priya</p>
      <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-brand-blue-light px-2 py-1.5">
        <Bus className="h-3 w-3 text-brand-blue" />
        <span>
          <span className="block text-[7.5px] font-bold">Bus is on route</span>
          <span className="block text-[6.5px] text-slate-500">Arriving in 12 min</span>
        </span>
      </div>
      <div className="relative mt-2 h-[78px] overflow-hidden rounded-lg">
        <StreetMap variant="phone" className="absolute inset-0 h-full w-full" />
        <span className="absolute left-[44%] top-[40%] flex h-4 w-4 items-center justify-center rounded bg-brand-blue text-white">
          <Bus className="h-2.5 w-2.5" strokeWidth={2.4} />
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-lg px-1.5 py-1 ring-1 ring-slate-200">
        <span className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-[7px] font-bold text-slate-700">A</span>
          <span>
            <span className="block text-[8px] font-bold">Arjun</span>
            <span className="block text-[6.5px] text-slate-500">Grade 6</span>
          </span>
        </span>
        <span className="text-right">
          <span className="flex items-center gap-0.5 text-[7px] font-semibold text-brand-blue">
            <UserCheck className="h-2.5 w-2.5" /> Picked up
          </span>
          <span className="block text-[6px] text-slate-400">08:12 AM</span>
        </span>
      </div>
      <p className="mt-2 flex items-center justify-between text-[8px] font-bold">
        <span className="flex items-center gap-1">
          <Bell className="h-2.5 w-2.5" /> Notifications
        </span>
        <span className="text-[6.5px] font-semibold text-brand-blue">View All</span>
      </p>
      <p className="mt-1 flex items-start justify-between gap-1 text-[6.5px] text-slate-500">
        <span className="flex items-start gap-1">
          <span className="mt-[2px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
          <span>
            Bus arrived at
            <br />
            Sector 4 Pickup Point
          </span>
        </span>
        <span className="text-slate-400">09:24 AM</span>
      </p>
      <span className="mx-auto mt-auto h-1 w-12 rounded-full bg-slate-300" />
    </div>
  );
}

/** Laptop (school transport dashboard) + phone (parent portal) mock-up, scaled to its container. */
export default function DeviceMockup() {
  const { ref, scale } = useFitScale(CANVAS_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: CANVAS_H * scale }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}
        role="img"
        aria-label="Maaptrix school transport dashboard on a laptop, with the parent app on a phone"
      >
        {/* Laptop */}
        <div className="absolute right-0 top-0 w-[640px]">
          <div className="rounded-[18px] bg-[#1C1C1E] p-[9px] pt-[14px] shadow-[0_40px_80px_-40px_rgba(10,10,10,0.55)]">
            <span className="absolute left-1/2 top-[5px] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#3A3A3C]" aria-hidden />
            <div className="h-[378px]">
              <LaptopScreen />
            </div>
          </div>
          <div className="relative -mx-[26px] h-[14px] rounded-b-[16px] bg-gradient-to-b from-[#D8DCE2] to-[#AEB4BD] shadow-[0_14px_20px_-12px_rgba(10,10,10,0.5)]">
            <span className="absolute left-1/2 top-0 h-[5px] w-[90px] -translate-x-1/2 rounded-b-[6px] bg-[#9AA1AB]" />
          </div>
        </div>

        {/* Phone */}
        <div className="absolute bottom-[2px] left-[14px] w-[178px] rounded-[28px] bg-[#1C1C1E] p-[6px] shadow-[0_30px_60px_-24px_rgba(10,10,10,0.6)]">
          <span className="absolute left-1/2 top-[10px] z-10 h-[10px] w-[52px] -translate-x-1/2 rounded-full bg-[#1C1C1E]" aria-hidden />
          <div className="h-[330px] overflow-hidden rounded-[23px]">
            <PhoneScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

