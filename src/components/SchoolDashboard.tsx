"use client";

import { useState } from "react";
import {
  Bell,
  BookOpen,
  Calendar,
  Calculator,
  ChevronRight,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Megaphone,
  PieChart,
  User,
  UserCheck,
  Users,
} from "lucide-react";

export default function SchoolDashboard() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-[24px] lg:rounded-[28px] border border-slate-200/90 bg-[#f7fafe] p-3.5 sm:p-5 lg:p-6 shadow-[0_16px_44px_-12px_rgba(24,24,24,0.1)] select-none transition-all duration-300">
      
      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(20,125,255,0.07),transparent_70%)]" />

      {/* ========================================================================= */}
      {/* SVG CONNECTOR NETWORK LAYER (Desktop & Large Screens) */}
      {/* ========================================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block z-10"
        viewBox="0 0 720 540"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="hub-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#147dff" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Central Concentric Rings */}
        <circle cx="360" cy="265" r="90" fill="none" stroke="#e0f2fe" strokeWidth="1.5" />
        <circle cx="360" cy="265" r="76" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.65" />
        <circle cx="360" cy="265" r="62" fill="none" stroke="#147dff" strokeWidth="1.5" opacity="0.25" />

        {/* 1. Connector: Card 1 (Student Management) -> Center */}
        <g opacity={hoveredCard === "student" ? "1" : "0.85"}>
          <path
            d="M 270,85 H 310 V 215 H 325"
            fill="none"
            stroke={hoveredCard === "student" ? "#147dff" : "#38bdf8"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 270,85 H 310 V 215 H 325"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-dash-flow"
          />
          <circle cx="270" cy="85" r="3.5" fill="#147dff" />
          <circle cx="310" cy="85" r="3" fill="#38bdf8" />
          <circle cx="325" cy="215" r="3.5" fill="#147dff" className="animate-pulse" />
        </g>

        {/* 2. Connector: Card 2 (Attendance) -> Center */}
        <g opacity={hoveredCard === "attendance" ? "1" : "0.85"}>
          <path
            d="M 450,85 H 410 V 215 H 395"
            fill="none"
            stroke={hoveredCard === "attendance" ? "#147dff" : "#38bdf8"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 450,85 H 410 V 215 H 395"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-dash-flow"
          />
          <circle cx="450" cy="85" r="3.5" fill="#147dff" />
          <circle cx="410" cy="85" r="3" fill="#38bdf8" />
          <circle cx="395" cy="215" r="3.5" fill="#147dff" className="animate-pulse" />
        </g>

        {/* 3. Connector: Card 3 (Academics) -> Center */}
        <g opacity={hoveredCard === "academics" ? "1" : "0.85"}>
          <path
            d="M 270,265 H 320"
            fill="none"
            stroke={hoveredCard === "academics" ? "#147dff" : "#38bdf8"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 270,265 H 320"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-dash-flow"
          />
          <circle cx="270" cy="265" r="3.5" fill="#147dff" />
          <circle cx="295" cy="265" r="3" fill="#38bdf8" />
          <circle cx="320" cy="265" r="3.5" fill="#147dff" className="animate-pulse" />
        </g>

        {/* 4. Connector: Card 4 (Communication) -> Center */}
        <g opacity={hoveredCard === "communication" ? "1" : "0.85"}>
          <path
            d="M 450,265 H 400"
            fill="none"
            stroke={hoveredCard === "communication" ? "#147dff" : "#38bdf8"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 450,265 H 400"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-dash-flow"
          />
          <circle cx="450" cy="265" r="3.5" fill="#147dff" />
          <circle cx="425" cy="265" r="3" fill="#38bdf8" />
          <circle cx="400" cy="265" r="3.5" fill="#147dff" className="animate-pulse" />
        </g>

        {/* 5. Connector: Card 5 (Calendar & Events) -> Center */}
        <g opacity={hoveredCard === "events" ? "1" : "0.85"}>
          <path
            d="M 270,445 H 310 V 315 H 325"
            fill="none"
            stroke={hoveredCard === "events" ? "#147dff" : "#38bdf8"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 270,445 H 310 V 315 H 325"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-dash-flow"
          />
          <circle cx="270" cy="445" r="3.5" fill="#147dff" />
          <circle cx="310" cy="445" r="3" fill="#38bdf8" />
          <circle cx="325" cy="315" r="3.5" fill="#147dff" className="animate-pulse" />
        </g>

        {/* 6. Connector: Card 6 (Reports & Analytics) -> Center */}
        <g opacity={hoveredCard === "analytics" ? "1" : "0.85"}>
          <path
            d="M 450,445 H 410 V 315 H 395"
            fill="none"
            stroke={hoveredCard === "analytics" ? "#147dff" : "#38bdf8"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 450,445 H 410 V 315 H 395"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-dash-flow"
          />
          <circle cx="450" cy="445" r="3.5" fill="#147dff" />
          <circle cx="410" cy="445" r="3" fill="#38bdf8" />
          <circle cx="395" cy="315" r="3.5" fill="#147dff" className="animate-pulse" />
        </g>
      </svg>

      {/* ========================================================================= */}
      {/* 3-COLUMN ECOSYSTEM LAYOUT (Left Cards, Center Hub, Right Cards) */}
      {/* ========================================================================= */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-[1fr_150px_1fr] xl:grid-cols-[1fr_170px_1fr] gap-4 items-center">
        
        {/* ======================================================================= */}
        {/* LEFT COLUMN: Student Management, Academics, Calendar & Events */}
        {/* ======================================================================= */}
        <div className="flex flex-col gap-3.5">
          
          {/* CARD 1: Student Management */}
          <div
            onMouseEnter={() => setHoveredCard("student")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-[18px] border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-[0_12px_24px_-6px_rgba(24,24,24,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Student Management
                  </h4>
                  <p className="text-[0.62rem] text-slate-400 font-semibold">
                    Admissions • Profiles • Documents
                  </p>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="mt-2.5 flex flex-col gap-1.5 border-t border-slate-100 pt-2">
              <div className="flex items-center justify-between rounded-lg bg-slate-50/80 px-2.5 py-1.5 transition-colors hover:bg-brand-blue-light/40">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[0.62rem] font-bold text-brand-blue">
                    AS
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-bold text-brand-navy leading-tight">
                      Aarav Sharma
                    </span>
                    <span className="block text-[0.6rem] text-slate-400 font-medium leading-tight">
                      Gr 6 | ID: S1001
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[0.62rem] font-bold text-sky-700">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50/80 px-2.5 py-1.5 transition-colors hover:bg-brand-blue-light/40">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[0.62rem] font-bold text-sky-600">
                    DR
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-bold text-brand-navy leading-tight">
                      Diya Reddy
                    </span>
                    <span className="block text-[0.6rem] text-slate-400 font-medium leading-tight">
                      Gr 7 | ID: S1002
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[0.62rem] font-bold text-sky-700">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50/80 px-2.5 py-1.5 transition-colors hover:bg-brand-blue-light/40">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[0.62rem] font-bold text-sky-700">
                    VP
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-bold text-brand-navy leading-tight">
                      Vihaan Patel
                    </span>
                    <span className="block text-[0.6rem] text-slate-400 font-medium leading-tight">
                      Gr 8 | ID: S1003
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[0.62rem] font-bold text-sky-700">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: Academics */}
          <div
            onMouseEnter={() => setHoveredCard("academics")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-[18px] border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-[0_12px_24px_-6px_rgba(24,24,24,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Academics
                  </h4>
                  <p className="text-[0.62rem] text-slate-400 font-semibold">
                    Curriculum • Homework • Marks
                  </p>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="mt-2.5 flex flex-col divide-y divide-slate-100 border-t border-slate-100 pt-1 text-[0.72rem]">
              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <Calculator className="h-3.5 w-3.5 text-sky-600" />
                  <span className="font-semibold text-brand-navy">Mathematics</span>
                </div>
                <span className="font-bold text-sky-600">28/30</span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <FlaskConical className="h-3.5 w-3.5 text-sky-600" />
                  <span className="font-semibold text-brand-navy">Science</span>
                </div>
                <span className="font-bold text-sky-600">26/30</span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-brand-blue" />
                  <span className="font-semibold text-brand-navy">English</span>
                </div>
                <span className="font-bold text-brand-navy">24/30</span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-sky-600" />
                  <span className="font-semibold text-brand-navy">Social Studies</span>
                </div>
                <span className="font-bold text-sky-600">27/30</span>
              </div>
            </div>
          </div>

          {/* CARD 3: Calendar & Events */}
          <div
            onMouseEnter={() => setHoveredCard("events")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-[18px] border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-[0_12px_24px_-6px_rgba(24,24,24,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Calendar &amp; Events
                  </h4>
                  <p className="text-[0.62rem] text-slate-400 font-semibold">
                    Examinations • Activities • Schedules
                  </p>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between rounded-xl bg-brand-blue-light/40 p-2 border border-brand-blue/10">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white px-2 py-0.5 shadow-2xs border border-slate-200/80">
                  <span className="text-[0.55rem] font-bold uppercase text-brand-blue">AUG</span>
                  <span className="text-xs font-extrabold text-brand-navy">24</span>
                </div>
                <div>
                  <span className="block text-[0.72rem] font-bold text-brand-navy">
                    Science Exhibition
                  </span>
                  <span className="block text-[0.58rem] font-medium text-slate-500">
                    09:00 AM – 01:00 PM
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 text-[0.58rem] font-bold text-brand-blue">
                Upcoming
              </span>
            </div>

            <div className="mt-2 flex flex-col gap-1 text-[0.66rem]">
              <div className="flex items-center justify-between text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Term 1 Examination</span>
                </div>
                <span className="font-semibold text-slate-500 text-[0.62rem]">Sep 10, 2025</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span>Parent-Teacher Meeting</span>
                </div>
                <span className="font-semibold text-slate-500 text-[0.62rem]">Sep 20, 2025</span>
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================================= */}
        {/* CENTER COLUMN: Central Maaptrix Hub (Circular badge + Bottom Pill) */}
        {/* ======================================================================= */}
        <div className="flex flex-col items-center justify-center py-2 lg:py-0">
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-full bg-brand-blue/15 blur-lg animate-pulse" />

            {/* Central Layered Hub Disk */}
            <div className="relative flex h-26 w-26 xl:h-28 xl:w-28 flex-col items-center justify-center rounded-full border-2 border-brand-blue/30 bg-white p-2 text-center shadow-[0_12px_28px_-6px_rgba(20,125,255,0.25)] transition-transform duration-500 hover:scale-105 z-20">
              
              {/* Isometric 3D Logo Asset */}
              <div className="mb-0.5">
                <svg viewBox="0 0 40 44" className="h-5 w-5 xl:h-6 xl:w-6 text-brand-blue" fill="none">
                  <polygon points="20,2 38,12 20,22 2,12" stroke="currentColor" strokeWidth="2.4" fill="rgba(20,125,255,0.08)" />
                  <polygon points="2,12 20,22 20,42 2,32" stroke="currentColor" strokeWidth="2.4" fill="rgba(20,125,255,0.04)" />
                  <polygon points="38,12 20,22 20,42 38,32" stroke="currentColor" strokeWidth="2.4" fill="rgba(20,125,255,0.12)" />
                  <circle cx="20" cy="22" r="2.5" fill="currentColor" />
                  <line x1="20" y1="8" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 1" />
                  <line x1="10" y1="28" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 1" />
                  <line x1="30" y1="28" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 1" />
                </svg>
              </div>

              <span className="font-display text-xs xl:text-sm font-bold tracking-tight text-brand-navy">
                Maaptrix
              </span>
              <span className="text-[0.5rem] xl:text-[0.54rem] font-bold uppercase tracking-wider text-brand-blue leading-tight">
                School Management
              </span>
              <span className="mt-0.5 text-[0.42rem] xl:text-[0.45rem] font-medium italic text-slate-400 leading-tight">
                Simpler Schools. Brighter Tomorrows.
              </span>
            </div>

            {/* Bottom Callout Pill - 2 lines compact */}
            <div className="mt-2.5 flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-1 shadow-2xs backdrop-blur-md z-20">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                <GraduationCap className="h-2.5 w-2.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[0.48rem] xl:text-[0.52rem] font-bold text-brand-navy leading-tight">
                  Empowering Schools
                </span>
                <span className="text-[0.42rem] xl:text-[0.46rem] font-medium text-slate-500 leading-tight">
                  for a Brighter Tomorrow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RIGHT COLUMN: Attendance, Communication, Reports & Analytics */}
        {/* ======================================================================= */}
        <div className="flex flex-col gap-3.5">
          
          {/* CARD 4: Attendance */}
          <div
            onMouseEnter={() => setHoveredCard("attendance")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-[18px] border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-[0_12px_24px_-6px_rgba(24,24,24,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Attendance
                  </h4>
                  <p className="text-[0.62rem] text-slate-400 font-semibold">
                    Daily Tracking • Automated Records
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-lg bg-sky-50 px-1.5 py-0.5 text-[0.64rem] font-extrabold text-sky-700 border border-sky-100">
                  94% <span className="font-normal text-sky-600">Overall</span>
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex items-end justify-between gap-1 border-t border-slate-100 pt-2.5 h-19">
              {[
                { day: "Mon", height: "60%", active: false },
                { day: "Tue", height: "75%", active: false },
                { day: "Wed", height: "85%", active: false },
                { day: "Thu", height: "100%", active: true },
                { day: "Fri", height: "80%", active: false },
                { day: "Sat", height: "45%", active: false },
                { day: "Sun", height: "65%", active: false },
              ].map(({ day, height, active }) => (
                <div key={day} className="flex flex-1 flex-col items-center gap-1 h-full justify-end">
                  <div className="w-full flex items-end justify-center h-11">
                    <div
                      className={`w-full max-w-[18px] rounded-t-md transition-all duration-500 ${
                        active
                          ? "bg-brand-blue shadow-[0_4px_10px_-2px_rgba(20,125,255,0.45)]"
                          : "bg-brand-blue-light/70 hover:bg-brand-blue/50"
                      }`}
                      style={{ height }}
                    />
                  </div>
                  <span className={`text-[0.55rem] font-semibold ${active ? "text-brand-blue font-bold" : "text-slate-400"}`}>
                    {day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 5: Communication */}
          <div
            onMouseEnter={() => setHoveredCard("communication")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-[18px] border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-[0_12px_24px_-6px_rgba(24,24,24,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <Megaphone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Communication
                  </h4>
                  <p className="text-[0.62rem] text-slate-400 font-semibold">
                    Parent Broadcasts • Notices • Circulars
                  </p>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="mt-2.5 flex flex-col gap-1 border-t border-slate-100 pt-2">
              <div className="rounded-xl border border-brand-blue/20 bg-brand-blue-light/30 p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Bell className="h-3 w-3 text-brand-blue" />
                    <span className="text-[0.68rem] font-bold text-brand-navy">
                      School Notice
                    </span>
                    <span className="rounded bg-brand-blue/15 px-1 py-0.2 text-[0.52rem] font-bold text-brand-blue">
                      Broadcast
                    </span>
                  </div>
                  <span className="text-[0.55rem] font-semibold text-slate-400">
                    Today, 10:30 AM
                  </span>
                </div>
                <p className="mt-1 text-[0.65rem] text-slate-600 leading-snug">
                  Parent-Teacher Meeting this Saturday at 10:00 AM.
                </p>
              </div>

              <div className="flex items-center justify-between px-2 py-0.5 text-[0.66rem] text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-slate-400" />
                  <span>Event Reminder</span>
                </div>
                <span className="text-[0.58rem] text-slate-400">Yesterday</span>
              </div>

              <div className="flex items-center justify-between px-2 py-0.5 text-[0.66rem] text-slate-600">
                <div className="flex items-center gap-2">
                  <FileText className="h-3 w-3 text-slate-400" />
                  <span>Homework Update</span>
                </div>
                <span className="text-[0.58rem] text-slate-400">2 days ago</span>
              </div>
            </div>
          </div>

          {/* CARD 6: Reports & Analytics */}
          <div
            onMouseEnter={() => setHoveredCard("analytics")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-[18px] border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-[0_12px_24px_-6px_rgba(24,24,24,0.1)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                  <PieChart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[0.82rem] font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Reports &amp; Analytics
                  </h4>
                  <p className="text-[0.62rem] text-slate-400 font-semibold">
                    Real Insights • Better Decisions
                  </p>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between gap-3 border-t border-slate-100 pt-2.5">
              <div className="relative flex h-16 w-16 shrink-0 flex-col items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#e0f2fe" strokeWidth="3.2" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#147dff"
                    strokeWidth="3.2"
                    strokeDasharray="94 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[0.72rem] font-black text-brand-navy leading-none">94%</span>
                  <span className="text-[0.44rem] font-bold uppercase text-slate-400 mt-0.5 leading-tight">Rate</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-1 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="h-3 w-3 text-brand-blue" />
                    <span className="text-[0.66rem] font-medium">Students</span>
                  </div>
                  <span className="font-extrabold text-brand-navy text-[0.74rem]">248</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <UserCheck className="h-3 w-3 text-sky-600" />
                    <span className="text-[0.66rem] font-medium">Teachers</span>
                  </div>
                  <span className="font-extrabold text-brand-navy text-[0.74rem]">12</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <BookOpen className="h-3 w-3 text-sky-600" />
                    <span className="text-[0.66rem] font-medium">Classes</span>
                  </div>
                  <span className="font-extrabold text-brand-navy text-[0.74rem]">28</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
