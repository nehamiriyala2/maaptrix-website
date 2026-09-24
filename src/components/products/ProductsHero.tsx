"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Bus,
  CalendarCheck,
  FileText,
  LayoutDashboard,
  MapPin,
  Route,
  Settings,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Logo from "@/components/Logo";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------------ */
/* School Transport dashboard mockup — fixed canvas scaled to its column    */
/* ------------------------------------------------------------------------ */

const DASH_W = 740;
const DASH_H = 440;

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
  { icon: MapPin, label: "Live Tracking" },
  { icon: Route, label: "Routes" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: FileText, label: "Records" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const CAPABILITIES: { icon: Icon; title: string; desc: string; tint: string }[] = [
  { icon: Bus, title: "Live Tracking", desc: "Vehicle visibility", tint: "bg-[#E8F2FF] text-brand-blue" },
  { icon: Route, title: "Routes", desc: "Route operations", tint: "bg-[#E6F6EE] text-emerald-600" },
  { icon: UserCheck, title: "Attendance", desc: "Pickup & drop tracking", tint: "bg-[#EEF0FF] text-indigo-500" },
  { icon: ShieldCheck, title: "Safety", desc: "Operational alerts", tint: "bg-[#E6F6EE] text-emerald-600" },
];

const UPDATES = [
  { time: "08:10", label: "Route started", dot: "bg-brand-blue" },
  { time: "08:25", label: "Student pickup", dot: "bg-emerald-500" },
  { time: "08:40", label: "Route checkpoint", dot: "bg-orange-400" },
  { time: "09:05", label: "School arrival", dot: "bg-brand-blue" },
];

function TransportDashboard() {
  return (
    <div
      className="flex overflow-hidden rounded-[26px] border border-[#DCEAFF] bg-white/95 shadow-[0_25px_70px_rgba(11,31,65,0.12)]"
      style={{ width: DASH_W, height: DASH_H }}
    >
      {/* Sidebar */}
      <div className="flex w-[155px] shrink-0 flex-col border-r border-[#EDF2F7] bg-white px-3 py-5">
        <Logo imageClassName="h-7 w-7" wordmarkClassName="text-[17px]" className="!gap-2 px-2" />
        <div className="mt-6 space-y-1">
          {NAV.map(({ icon: I, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11.5px] font-medium ${
                active ? "bg-[#E8F2FF] text-brand-blue" : "text-[#5E718D]"
              }`}
            >
              <I className="h-3.5 w-3.5" strokeWidth={2} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col bg-[#FAFCFF] p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-[17px] font-bold text-brand-navy">School Transport Management</p>
            <p className="mt-0.5 text-[11px] text-[#5E718D]">Live vehicle tracking, route visibility and student safety.</p>
          </div>
          <span className="rounded-md border border-[#E3EDF8] bg-white px-2 py-1 text-[9.5px] font-semibold uppercase tracking-wider text-[#8A99B2]">
            Sample interface
          </span>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2.5">
          {CAPABILITIES.map(({ icon: I, title, desc, tint }) => (
            <div key={title} className="flex h-[68px] items-center gap-2.5 rounded-xl border border-[#E3EDF8] bg-white px-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tint}`}>
                <I className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <div className="min-w-0">
                <p className="text-[11.5px] font-bold text-brand-navy">{title}</p>
                <p className="text-[9.5px] leading-tight text-[#5E718D]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid min-h-0 flex-1 grid-cols-[1.45fr_1fr] gap-3">
          {/* Map */}
          <div className="relative overflow-hidden rounded-xl border border-[#E3EDF8] bg-white">
            <p className="absolute left-3 top-2.5 z-10 text-[12px] font-bold text-brand-navy">Live Tracking</p>
            <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
              <rect width="300" height="200" fill="#F1F5F9" />
              <path d="M-10 150 L120 110 L310 140" stroke="#FFFFFF" strokeWidth="10" fill="none" />
              <path d="M60 -10 L90 210" stroke="#FFFFFF" strokeWidth="8" fill="none" />
              <path d="M200 -10 L170 210" stroke="#FFFFFF" strokeWidth="8" fill="none" />
              <path d="M-10 60 L310 40" stroke="#FFFFFF" strokeWidth="6" fill="none" />
              <path d="M240 200 C250 150 270 120 310 100" stroke="#FFFFFF" strokeWidth="6" fill="none" />
              <rect x="10" y="165" width="40" height="28" rx="6" fill="#D9F2E3" />
              <rect x="215" y="60" width="60" height="30" rx="6" fill="#E2EAF4" />
              <path d="M100 150 L150 105 L195 118 L240 92" stroke="#147DFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="240" cy="92" r="6" fill="#fff" stroke="#147DFF" strokeWidth="3" />
              <path d="M78 70 c0 -9 14 -9 14 0 c0 7 -7 13 -7 13 c0 0 -7 -6 -7 -13z" fill="#0B1F41" />
              <circle cx="85" cy="70" r="2.4" fill="#fff" />
            </svg>
            <span className="absolute left-[29%] top-[66%] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-blue text-white shadow-[0_0_0_5px_rgba(20,125,255,0.2)]">
              <Bus className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </div>

          {/* Route updates */}
          <div className="rounded-xl border border-[#E3EDF8] bg-white p-3.5">
            <p className="text-[12px] font-bold text-brand-navy">Route Updates</p>
            <ol className="relative mt-3 space-y-3">
              <span className="absolute bottom-1 left-[46px] top-1 w-px bg-[#E3EDF8]" aria-hidden />
              {UPDATES.map(({ time, label, dot }) => (
                <li key={time} className="relative flex items-center gap-3 text-[10.5px]">
                  <span className="w-[34px] text-[#8A99B2]">{time}</span>
                  <span className={`relative z-10 h-2 w-2 rounded-full ${dot}`} />
                  <span className="text-[#3D4F6B]">{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardVisual() {
  const { ref, scale } = useFitScale(DASH_W);
  return (
    <div ref={ref} className="relative w-full" style={{ height: DASH_H * scale }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: DASH_W, height: DASH_H, transform: `scale(${scale})` }}>
        <div style={{ transform: "rotate(-1deg)" }}>
          <TransportDashboard />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export default function ProductsHero() {
  const scrollToProducts = () => {
    const el = document.getElementById("transport");
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF6FF_0%,#FFFFFF_55%,#FAFCFF_100%)] pb-8 pt-[72px] sm:pt-20 xl:min-h-[640px] xl:pb-[30px]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-6%] top-[8%] h-[560px] w-[560px] rounded-full bg-[#EAF4FF]" />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[6%] h-[120px] w-[140px] opacity-[0.18]"
          style={{ backgroundImage: "radial-gradient(#147DFF 2px, transparent 2.2px)", backgroundSize: "20px 20px" }}
        />
        <div
          className="absolute left-[44%] top-[62%] h-[100px] w-[90px] opacity-[0.14]"
          style={{ backgroundImage: "radial-gradient(#147DFF 2px, transparent 2.2px)", backgroundSize: "18px 18px" }}
        />
        <svg viewBox="0 0 1600 700" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M760 360 L800 300" stroke="#147DFF" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
          <path d="M1540 260 L1510 320" stroke="#147DFF" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
          <path d="M820 640 C1000 560 1250 600 1600 520" fill="none" stroke="#147DFF" strokeOpacity=".1" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="page-container relative">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 xl:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] xl:gap-14">
          {/* Left copy */}
          <div className="min-w-0">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue sm:text-[14px]">Maaptrix Products</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
              className="mt-6 max-w-[680px] font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] text-brand-navy sm:text-[54px] xl:text-[clamp(44px,3.4vw,58px)]"
            >
              <span className="block xl:whitespace-nowrap">Software Built Around</span>
              <span className="block text-brand-blue xl:whitespace-nowrap">Real Operational Needs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
              className="mt-6 max-w-[610px] text-[17px] leading-[1.55] text-[#5E718D] sm:text-[19px]"
            >
              Maaptrix develops focused digital products designed to help organizations manage everyday operations
              with greater visibility, simplicity and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: EASE }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex h-[54px] whitespace-nowrap items-center justify-center gap-2.5 rounded-[11px] bg-brand-navy px-7 text-[16px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(11,31,65,0.7)] transition-colors duration-300 hover:bg-brand-blue sm:min-w-[196px]"
              >
                Request a Demo
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={scrollToProducts}
                className="group inline-flex h-[54px] cursor-pointer whitespace-nowrap items-center justify-center gap-2.5 rounded-[11px] border border-[#CBD9EA] bg-white px-7 text-[16px] font-bold text-brand-navy transition-colors duration-300 hover:border-brand-blue hover:text-brand-blue sm:min-w-[190px]"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 text-brand-blue transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right: dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="relative mx-auto w-full max-w-[740px]"
          >
            <div className="pointer-events-none absolute inset-6 rounded-[40px] bg-[#147DFF]/10 blur-[40px]" aria-hidden />
            <div className="relative">
              <DashboardVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
