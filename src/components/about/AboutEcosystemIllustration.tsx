"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bus,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers,
  Lock,
  Radio,
  RefreshCw,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import Logo from "@/components/Logo";

export default function AboutEcosystemIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[680px] select-none py-6">
      {/* Background atmospheric ambient glows */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(22,131,247,0.12)_0%,rgba(22,131,247,0.02)_50%,transparent_70%)] blur-2xl"
        aria-hidden
      />

      {/* Main Container Card with Subtle Glass Aesthetics */}
      <div className="relative overflow-hidden rounded-[28px] border border-[#CFE4FF] bg-[linear-gradient(145deg,#FFFFFF_0%,#F5FAFF_100%)] p-6 shadow-[0_24px_60px_-20px_rgba(16,42,86,0.15)] sm:p-8">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#10233F 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden
        />

        {/* Top Header Bar */}
        <div className="relative mb-6 flex items-center justify-between border-b border-[#E3EDF8] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-3 w-3 items-center justify-center">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500">
                {!shouldReduceMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                )}
              </span>
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#52657D]">
              Maaptrix Product Ecosystem
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#D5E6F7] bg-white px-3 py-1 text-[11px] font-semibold text-brand-navy shadow-xs">
            <Radio className="h-3 w-3 text-brand-blue" />
            <span>Live Architecture</span>
          </div>
        </div>

        {/* Center Ecosystem Canvas */}
        <div className="relative flex flex-col items-center justify-center py-4">
          {/* Orbital connection lines (SVG) */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 540 340"
            fill="none"
            aria-hidden
          >
            {/* Outer ellipse track */}
            <ellipse
              cx="270"
              cy="170"
              rx="230"
              ry="130"
              stroke="#D5E6F8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Inner ellipse track */}
            <ellipse
              cx="270"
              cy="170"
              rx="150"
              ry="85"
              stroke="#C0DBF7"
              strokeWidth="1.5"
            />

            {/* Connecting flow lines to central hub */}
            <path
              d="M 90 70 Q 180 120 270 170"
              stroke="url(#gradient-blue-flow)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <path
              d="M 450 70 Q 360 120 270 170"
              stroke="url(#gradient-blue-flow)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <path
              d="M 90 270 Q 180 220 270 170"
              stroke="url(#gradient-blue-flow)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <path
              d="M 450 270 Q 360 220 270 170"
              stroke="url(#gradient-blue-flow)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            <defs>
              <linearGradient id="gradient-blue-flow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1683F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0757C9" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Maaptrix Core Node */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 my-6 flex flex-col items-center justify-center rounded-[24px] border-2 border-brand-blue/30 bg-white p-5 text-center shadow-[0_20px_45px_-12px_rgba(22,131,247,0.3)] sm:p-6"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#EAF5FF_0%,#D5EAFF_100%)] p-2 shadow-inner">
              <Logo showWordmark={false} imageClassName="h-10 w-10 object-contain" />
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white shadow-xs">
                <Cpu className="h-3 w-3" />
              </div>
            </div>

            <div className="mt-3">
              <h3 className="font-display text-[16px] font-bold text-brand-navy sm:text-[17px]">
                Maaptrix Core Engine
              </h3>
              <p className="mt-0.5 text-[11.5px] font-medium text-[#52657D]">
                Subscription Software Platform
              </p>
            </div>

            <div className="mt-3 flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-700">
              <CheckCircle2 className="h-3 w-3" />
              <span>Dedicated In-House Codebase</span>
            </div>
          </motion.div>

          {/* Connected Product Nodes (Surrounding Modules) */}
          <div className="relative z-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {/* Module 1: School Transport */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="group flex items-start gap-3 rounded-2xl border border-[#D8E8FA] bg-white/95 p-3.5 shadow-xs transition-all hover:border-brand-blue hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FF] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Bus className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display text-[13.5px] font-bold text-brand-navy">
                    School Transport
                  </h4>
                  <span className="rounded bg-[#EFF7FF] px-1.5 py-0.5 text-[9.5px] font-bold text-brand-blue">
                    Live Telemetry
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#52657D]">
                  GPS live tracking, smart routing &amp; driver workflows
                </p>
              </div>
            </motion.div>

            {/* Module 2: School Management */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="group flex items-start gap-3 rounded-2xl border border-[#D8E8FA] bg-white/95 p-3.5 shadow-xs transition-all hover:border-brand-blue hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FF] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <GraduationCap className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display text-[13.5px] font-bold text-brand-navy">
                    School Management
                  </h4>
                  <span className="rounded bg-[#EFF7FF] px-1.5 py-0.5 text-[9.5px] font-bold text-brand-blue">
                    Admin Suite
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#52657D]">
                  Attendance, student profiles &amp; operational oversight
                </p>
              </div>
            </motion.div>

            {/* Module 3: Student Safety & Alerts */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="group flex items-start gap-3 rounded-2xl border border-[#D8E8FA] bg-white/95 p-3.5 shadow-xs transition-all hover:border-brand-blue hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FF] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Shield className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display text-[13.5px] font-bold text-brand-navy">
                    Safety &amp; Compliance
                  </h4>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-bold text-emerald-700">
                    Protected
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#52657D]">
                  Guardian pickup OTP, emergency alerts &amp; geofencing
                </p>
              </div>
            </motion.div>

            {/* Module 4: Connected Apps */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
              className="group flex items-start gap-3 rounded-2xl border border-[#D8E8FA] bg-white/95 p-3.5 shadow-xs transition-all hover:border-brand-blue hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5FF] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Smartphone className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display text-[13.5px] font-bold text-brand-navy">
                    Parent &amp; Staff Apps
                  </h4>
                  <span className="rounded bg-[#EFF7FF] px-1.5 py-0.5 text-[9.5px] font-bold text-brand-blue">
                    Instant Sync
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#52657D]">
                  Real-time push notifications, live ETA &amp; messaging
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metric Footer Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#E3EDF8] pt-4 text-[11.5px] text-[#52657D]">
          <div className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-brand-blue" />
            <span className="font-semibold text-brand-navy">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            <span className="font-semibold text-brand-navy">99.9% Uptime Reliability</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RefreshCw className="h-3.5 w-3.5 text-emerald-600" />
            <span className="font-semibold text-brand-navy">Continuous Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
