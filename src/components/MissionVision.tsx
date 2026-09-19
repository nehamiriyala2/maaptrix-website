"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  Bus,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  GraduationCap,
  Lightbulb,
  MapPin,
  Radio,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

export default function MissionVision() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F8FF] via-[#E8F5FF] to-[#DDF1FF] py-7 sm:py-8 lg:py-10 select-none">
      {/* Top seamless divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BFE3FF] to-transparent" />

      {/* Atmospheric ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-1/4 h-[500px] w-[500px] rounded-full bg-[#CFEAFF]/70 blur-[120px]" />
        <div className="absolute right-[5%] top-1/2 h-[450px] w-[450px] rounded-full bg-[#BFE3FF]/60 blur-[110px]" />
        <div className="absolute inset-0 bg-circuit-grid opacity-25" />
      </div>

      <div className="page-container">
        
        {/* ========================================================================= */}
        {/* TOP TWO-COLUMN MAIN PANEL (MISSION & VISION) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6 xl:gap-8 items-stretch">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: OUR MISSION (~42% width on desktop -> 5 of 12 cols) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <Reveal>
              <div>
                {/* Eyebrow with blue line */}
                <div className="flex items-center gap-2.5">
                  <span className="h-0.5 w-6 rounded-full bg-brand-blue" />
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                    Our Mission
                  </span>
                </div>

                {/* Main Mission Headline */}
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl lg:text-[2.2rem] lg:leading-[1.2]">
                  To create simple, dependable and accessible{" "}
                  <span className="text-brand-blue">digital products</span>
                </h2>

                {/* Supporting Description */}
                <p className="mt-3 text-[0.92rem] leading-relaxed text-brand-navy/75 sm:text-base">
                  that help organizations manage everyday operations more
                  efficiently and deliver better experiences to their users.
                </p>

                {/* 3 Mission Value Blocks (Horizontal on sm+) */}
                <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                  
                  {/* Value 1 */}
                  <div
                    onMouseEnter={() => setHoveredValue(1)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="group rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:scale-105 transition-transform">
                      <Users className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3.5 text-xs font-bold text-brand-navy leading-snug">
                      People Centric Solutions
                    </h4>
                    <p className="mt-1 text-[0.68rem] text-slate-500 leading-tight">
                      Tools that make work effortless.
                    </p>
                  </div>

                  {/* Value 2 */}
                  <div
                    onMouseEnter={() => setHoveredValue(2)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="group rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:scale-105 transition-transform">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3.5 text-xs font-bold text-brand-navy leading-snug">
                      Greater Accessibility
                    </h4>
                    <p className="mt-1 text-[0.68rem] text-slate-500 leading-tight">
                      Technology for everyone.
                    </p>
                  </div>

                  {/* Value 3 */}
                  <div
                    onMouseEnter={() => setHoveredValue(3)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="group rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20 group-hover:scale-105 transition-transform">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3.5 text-xs font-bold text-brand-navy leading-snug">
                      Better Experiences
                    </h4>
                    <p className="mt-1 text-[0.68rem] text-slate-500 leading-tight">
                      Real impact for real people.
                    </p>
                  </div>

                </div>
              </div>

              {/* Mission Callout Card */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs transition-all duration-300 hover:border-brand-blue/40 hover:shadow-md">
                <div className="flex items-center gap-3.5">
                  {/* 3D Wireframe Logo Box */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-blue/20 bg-brand-blue-light/50 p-2">
                    <svg viewBox="0 0 40 44" className="h-7 w-7 text-brand-blue" fill="none">
                      <polygon points="20,2 38,12 20,22 2,12" stroke="currentColor" strokeWidth="2.4" fill="rgba(20,125,255,0.12)" />
                      <polygon points="2,12 20,22 20,42 2,32" stroke="currentColor" strokeWidth="2.4" fill="rgba(20,125,255,0.06)" />
                      <polygon points="38,12 20,22 20,42 38,32" stroke="currentColor" strokeWidth="2.4" fill="rgba(20,125,255,0.18)" />
                      <circle cx="20" cy="22" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-[0.82rem] font-semibold text-brand-navy leading-snug">
                    Empowering organizations with technology that truly makes a difference.
                  </p>
                </div>
                
                <a
                  href="#contact"
                  className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/20 transition-all duration-300 hover:bg-brand-blue hover:text-white"
                  aria-label="Contact Maaptrix"
                >
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: OUR VISION PANEL (~58% width on desktop -> 7 of 12 cols) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-[26px] border border-slate-800/80 bg-gradient-to-br from-[#061427] via-[#0b1f41] to-[#040d1a] p-6 sm:p-8 lg:p-9 text-white shadow-[0_24px_50px_-12px_rgba(11,31,65,0.35)]">
                
                {/* Background Grid Texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Radial Glow Lighting */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

                {/* Top Section: Header & Editorial Accent */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  {/* Vision Header & Text */}
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="h-0.5 w-6 rounded-full bg-brand-blue" />
                      <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                        Our Vision
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[1.85rem] lg:leading-[1.25]">
                      To build Maaptrix into a{" "}
                      <span className="text-brand-blue">
                        trusted Indian software product company
                      </span>
                    </h3>

                    <p className="mt-3 text-xs sm:text-[0.88rem] leading-relaxed text-slate-300 font-normal max-w-lg">
                      known for practical innovation, responsible technology and
                      subscription products that create measurable operational value.
                    </p>
                  </div>

                  {/* Top-Right Editorial Text */}
                  <div className="hidden sm:flex flex-col items-end text-right shrink-0">
                    <div className="text-[0.78rem] font-bold tracking-wider text-slate-300/80 uppercase leading-snug">
                      <span>Safer</span><br />
                      <span>Smarter</span><br />
                      <span>Connected</span><br />
                      <span className="text-white font-extrabold">Schools</span>
                    </div>
                    <span className="mt-1.5 h-0.5 w-8 rounded-full bg-brand-blue" />
                  </div>
                </div>

                {/* Middle Section: 3 Value Points + Product Visual Layout */}
                <div className="relative z-10 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left sub-column: 3 Vision Value rows */}
                  <div className="lg:col-span-4 flex flex-col gap-3">
                    
                    <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5 backdrop-blur-xs transition-colors hover:bg-white/[0.08]">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                        <Lightbulb className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-white">
                        Practical Innovation
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5 backdrop-blur-xs transition-colors hover:bg-white/[0.08]">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                        <Cpu className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-white">
                        Responsible Technology
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5 backdrop-blur-xs transition-colors hover:bg-white/[0.08]">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/30">
                        <BarChart3 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-white">
                        Measurable Operational Value
                      </span>
                    </div>

                  </div>

                  {/* Right sub-column: REALISTIC LIGHT LAPTOP + PHONE PRODUCT VISUALIZATION */}
                  <div className="lg:col-span-8 relative flex items-center justify-center pt-2">
                    
                    {/* Realistic Laptop Mockup */}
                    <div className="relative w-full max-w-[450px] rounded-t-xl rounded-b-lg border-2 border-slate-600/80 bg-[#1e293b] p-1.5 shadow-[0_22px_45px_-10px_rgba(0,0,0,0.65)]">
                      
                      {/* Top Camera Dot */}
                      <div className="mb-1 flex items-center justify-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-slate-500" />
                      </div>

                      {/* Laptop Screen Content (Light Theme Enterprise Dashboard UI) */}
                      <div className="relative overflow-hidden rounded-lg bg-[#f4f7fb] border border-slate-300 text-brand-navy">
                        
                        {/* Dashboard App Topbar */}
                        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-2.5 py-1.5 text-[0.6rem]">
                          <div className="flex items-center gap-1.5">
                            <div className="flex h-4 w-4 items-center justify-center rounded bg-brand-blue text-white font-bold text-[0.5rem]">
                              M
                            </div>
                            <span className="font-bold text-brand-navy tracking-tight">Maaptrix</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-slate-500">
                            <div className="hidden sm:flex items-center gap-1 rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[0.5rem] text-slate-400">
                              <Search className="h-2.5 w-2.5" />
                              <span>Search...</span>
                            </div>
                            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-navy text-[0.45rem] font-bold text-white">
                              AD
                            </div>
                          </div>
                        </div>

                        {/* Dashboard Main Grid Layout */}
                        <div className="flex">
                          {/* Dark Sidebar */}
                          <div className="hidden sm:flex w-20 flex-col gap-0.5 border-r border-slate-800 bg-[#0b1f41] p-1.5 text-[0.52rem] text-white">
                            <div className="rounded bg-brand-blue px-1.5 py-0.5 font-bold text-white shadow-2xs">
                              Dashboard
                            </div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Transport</div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Attendance</div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Routes</div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Notifications</div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Students</div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Reports</div>
                            <div className="px-1.5 py-0.5 text-slate-300 hover:text-white">Settings</div>
                          </div>

                          {/* Main Screen Body (Clean White Surface) */}
                          <div className="flex-1 p-2 bg-[#f4f7fb]">
                            
                            {/* KPI Strip */}
                            <div className="grid grid-cols-4 gap-1.5 text-center">
                              <div className="rounded-md border border-slate-200/80 bg-white p-1 shadow-2xs">
                                <span className="block text-[0.68rem] font-bold text-brand-navy">248</span>
                                <span className="block text-[0.42rem] text-slate-400 font-medium">Active Students</span>
                              </div>
                              <div className="rounded-md border border-slate-200/80 bg-white p-1 shadow-2xs">
                                <span className="block text-[0.68rem] font-bold text-brand-navy">12</span>
                                <span className="block text-[0.42rem] text-slate-400 font-medium">Active Buses</span>
                              </div>
                              <div className="rounded-md border border-slate-200/80 bg-white p-1 shadow-2xs">
                                <span className="block text-[0.68rem] font-bold text-emerald-600">98%</span>
                                <span className="block text-[0.42rem] text-slate-400 font-medium">On-Time</span>
                              </div>
                              <div className="rounded-md border border-slate-200/80 bg-white p-1 shadow-2xs">
                                <span className="block text-[0.68rem] font-bold text-brand-navy">0</span>
                                <span className="block text-[0.42rem] text-slate-400 font-medium">Safety Alerts</span>
                              </div>
                            </div>

                            {/* 2-Column Dashboard Cards */}
                            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                              
                              {/* Live Bus Tracking Map Card */}
                              <div className="rounded-md border border-slate-200/80 bg-white p-1.5 shadow-2xs">
                                <div className="flex items-center justify-between text-[0.52rem] font-bold text-brand-navy">
                                  <span>Live Bus Tracking</span>
                                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                                </div>
                                
                                {/* Map Preview */}
                                <div className="relative mt-1 h-14 overflow-hidden rounded border border-slate-200 bg-[#eef5fc]">
                                  {/* Map Roads Grid */}
                                  <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 120 70">
                                    <line x1="0" y1="20" x2="120" y2="20" stroke="#cbd5e1" strokeWidth="2" />
                                    <line x1="0" y1="50" x2="120" y2="50" stroke="#cbd5e1" strokeWidth="1.5" />
                                    <line x1="40" y1="0" x2="40" y2="70" stroke="#cbd5e1" strokeWidth="2" />
                                    <line x1="85" y1="0" x2="85" y2="70" stroke="#cbd5e1" strokeWidth="2" />
                                    <path d="M 10,20 Q 40,35 85,20 T 115,50" fill="none" stroke="#147dff" strokeWidth="2.5" />
                                  </svg>

                                  {/* Bus Marker Tooltip */}
                                  <div className="absolute right-1.5 top-1.5 rounded bg-white/95 border border-brand-blue/40 px-1 py-0.5 text-[0.45rem] shadow-xs">
                                    <span className="font-bold text-brand-navy">Bus TS09AB1234</span>
                                    <span className="block text-[0.38rem] text-brand-blue">On Route • 09:24 AM</span>
                                  </div>
                                </div>
                              </div>

                              {/* Recent Alerts Feed */}
                              <div className="rounded-md border border-slate-200/80 bg-white p-1.5 shadow-2xs">
                                <div className="flex items-center justify-between text-[0.52rem] font-bold text-brand-navy">
                                  <span>Recent Alerts</span>
                                  <span className="text-[0.42rem] text-brand-blue font-semibold">View All</span>
                                </div>

                                <div className="mt-1 flex flex-col gap-1 text-[0.46rem]">
                                  <div className="flex items-center gap-1 text-slate-700">
                                    <span className="h-1 w-1 rounded-full bg-amber-500 shrink-0" />
                                    <span className="truncate">Bus arrived at Sector 4</span>
                                    <span className="ml-auto text-slate-400 text-[0.38rem]">09:24 AM</span>
                                  </div>

                                  <div className="flex items-center gap-1 text-slate-700">
                                    <span className="h-1 w-1 rounded-full bg-amber-500 shrink-0" />
                                    <span className="truncate">Route deviation</span>
                                    <span className="ml-auto text-slate-400 text-[0.38rem]">09:17 AM</span>
                                  </div>

                                  <div className="flex items-center gap-1 text-slate-700">
                                    <span className="h-1 w-1 rounded-full bg-brand-blue shrink-0" />
                                    <span className="truncate">Student boarded (Arjun)</span>
                                    <span className="ml-auto text-slate-400 text-[0.38rem]">09:12 AM</span>
                                  </div>
                                </div>
                              </div>

                            </div>

                            {/* Attendance Overview + Fleet Performance Bar */}
                            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                              {/* Mini Attendance Bars */}
                              <div className="rounded-md border border-slate-200/80 bg-white p-1.5 shadow-2xs">
                                <span className="block text-[0.48rem] font-bold text-brand-navy">Attendance Overview</span>
                                <div className="mt-1 flex items-end justify-between gap-1 h-6">
                                  {["M", "T", "W", "T", "F"].map((d, i) => (
                                    <div key={d + i} className="flex flex-1 flex-col items-center gap-0.5">
                                      <div
                                        className={`w-full rounded-xs ${i === 3 ? "bg-brand-blue shadow-xs" : "bg-blue-100"}`}
                                        style={{ height: `${[50, 70, 85, 100, 75][i]}%` }}
                                      />
                                      <span className="text-[0.38rem] text-slate-400 font-medium">{d}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Fleet Performance */}
                              <div className="rounded-md border border-slate-200/80 bg-white p-1.5 flex items-center justify-between shadow-2xs">
                                <div>
                                  <span className="block text-[0.48rem] font-bold text-brand-navy">Fleet Performance</span>
                                  <span className="block text-[0.4rem] text-emerald-600 font-semibold mt-0.5">+5% this week</span>
                                </div>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-emerald-500 text-[0.48rem] font-bold text-emerald-700 bg-emerald-50">
                                  88%
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      {/* Laptop Base Lip */}
                      <div className="mt-1 h-1.5 w-full rounded-b bg-slate-600/80 shadow-inner flex items-center justify-center">
                        <span className="h-0.5 w-10 rounded-full bg-slate-400/60" />
                      </div>
                    </div>

                    {/* Realistic Overlapping Smartphone Mockup */}
                    <div className="absolute -left-3 bottom-0 sm:-left-4 sm:-bottom-2 w-36 sm:w-42 rounded-[22px] border-2 border-slate-700 bg-[#050b14] p-1 shadow-[0_18px_38px_rgba(0,0,0,0.85)] backdrop-blur-md transition-transform duration-500 hover:scale-105 z-20">
                      
                      {/* Dynamic Island Notch */}
                      <div className="mb-1 flex items-center justify-center">
                        <span className="h-1 w-6 rounded-full bg-slate-800" />
                      </div>

                      {/* Phone Screen UI (Parent Portal) */}
                      <div className="overflow-hidden rounded-[16px] bg-white p-2 text-brand-navy shadow-inner">
                        
                        {/* Parent Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1 text-[0.52rem]">
                          <span className="font-bold text-brand-blue">‹ Parent Portal</span>
                          <Bell className="h-2.5 w-2.5 text-slate-400" />
                        </div>

                        {/* Greeting & ETA */}
                        <div className="mt-1.5">
                          <span className="block text-[0.62rem] font-extrabold text-brand-navy leading-tight">
                            Good Morning Priya 👋
                          </span>
                          
                          <div className="mt-1 rounded-md bg-brand-blue-light/70 border border-brand-blue/20 p-1">
                            <div className="flex items-center gap-1 text-[0.48rem] font-bold text-brand-blue">
                              <span className="h-1 w-1 rounded-full bg-brand-blue animate-ping" />
                              <span>Bus is on route</span>
                            </div>
                            <span className="block text-[0.42rem] text-slate-500 font-medium">Arriving in 12 min</span>
                          </div>
                        </div>

                        {/* Mini Live Map */}
                        <div className="relative mt-1.5 h-10 overflow-hidden rounded-md border border-slate-200 bg-sky-50">
                          <svg className="h-full w-full opacity-60" viewBox="0 0 100 50">
                            <path d="M 10,40 Q 50,10 90,30" fill="none" stroke="#147dff" strokeWidth="2.5" />
                          </svg>
                          <div className="absolute left-2 top-1 rounded bg-brand-blue px-1 py-0.2 text-[0.4rem] font-bold text-white shadow-2xs">
                            Bus 04
                          </div>
                        </div>

                        {/* Student Status Row */}
                        <div className="mt-1.5 flex items-center justify-between rounded bg-slate-50 px-1.5 py-1 text-[0.48rem]">
                          <div>
                            <span className="block font-bold text-brand-navy">Arjun</span>
                            <span className="text-[0.4rem] text-slate-400">Grade 6</span>
                          </div>
                          <span className="rounded bg-emerald-50 px-1 py-0.2 text-[0.42rem] font-bold text-emerald-700">
                            Picked up 08:12 AM
                          </span>
                        </div>

                        {/* Mini Notification */}
                        <div className="mt-1 border-t border-slate-100 pt-1 text-[0.42rem] text-slate-500 truncate">
                          🔔 Bus arrived at Sector 4 Pick-up Point
                        </div>

                      </div>
                    </div>

                    {/* Optional Decorative Leather Notebook (Bottom-Right) */}
                    <div className="hidden xl:flex absolute -right-2 -bottom-2 flex-col justify-between rounded-md border border-slate-700/80 bg-[#0d1726] px-2.5 py-2 shadow-lg rotate-3">
                      <span className="text-[0.45rem] font-black uppercase tracking-wider text-amber-200/90 leading-tight">
                        Technology<br />for Better<br />Operations
                      </span>
                      <span className="mt-1 h-0.5 w-4 rounded-full bg-brand-blue" />
                    </div>

                  </div>

                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM METRICS & CTA BAR */}
        {/* ========================================================================= */}
        <Reveal delay={0.15}>
          <div className="mt-6 sm:mt-7 rounded-[22px] border border-slate-200/90 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_16px_36px_-12px_rgba(11,31,65,0.08)]">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-7 items-center">
              
              {/* 4 Metrics Strip (8 of 12 cols on desktop) */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2 lg:col-span-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                
                {/* Metric 1 */}
                <div className="flex flex-col gap-1.5 sm:px-3 pt-2 sm:pt-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-display text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl">
                      50K+
                    </span>
                    <span className="block text-[0.72rem] font-semibold text-slate-500">
                      Students Connected
                    </span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col gap-1.5 sm:px-3 pt-2 sm:pt-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                    <Bus className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-display text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl">
                      1K+
                    </span>
                    <span className="block text-[0.72rem] font-semibold text-slate-500">
                      Routes Managed
                    </span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col gap-1.5 sm:px-3 pt-2 sm:pt-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-display text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl">
                      99%
                    </span>
                    <span className="block text-[0.72rem] font-semibold text-slate-500">
                      On-Time Performance
                    </span>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col gap-1.5 sm:px-3 pt-2 sm:pt-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-display text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl">
                      100+
                    </span>
                    <span className="block text-[0.72rem] font-semibold text-slate-500">
                      Institutions Trust Us
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Supporting Message & CTA (4 of 12 cols on desktop) */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 border-t border-slate-100 pt-4 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 lg:col-span-4">
                <p className="text-xs font-medium text-slate-600 leading-snug">
                  Driving smarter, safer and more connected school operations across India.
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand-blue-light/80 px-4 py-2 text-xs font-bold text-brand-blue border border-brand-blue/20 shadow-2xs transition-all duration-300 hover:bg-brand-blue hover:text-white hover:shadow"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
