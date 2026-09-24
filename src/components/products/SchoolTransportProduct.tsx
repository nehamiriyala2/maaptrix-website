"use client";

import { useState } from "react";
import {
  CheckCircle2,
  LifeBuoy,
  Radio,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import TransportDashboard from "@/components/TransportDashboard";

export default function SchoolTransportProduct() {
  const [activeRole, setActiveRole] = useState<"admin" | "driver" | "parent">("admin");

  return (
    <section id="transport" className="scroll-mt-24 relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 select-none">
      <div className="page-container">
        
        {/* ========================================================================= */}
        {/* 2. LARGE AUTHENTIC PRODUCT DASHBOARD VISUAL */}
        {/* ========================================================================= */}
        <div>
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                  Live Operational Console Preview
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Interactive Fleet Map &amp; Real-Time Tracking
                </span>
              </div>
              <TransportDashboard />
            </div>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* 3. THREE CONNECTED ROLES (ADMIN, DRIVER, PARENT) */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Role-Specific Experiences
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy">
              Connecting School, Driver &amp; Parent
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              A unified system designed around the distinct operational requirements of each stakeholder.
            </p>
          </Reveal>

          {/* Role Navigation Tabs */}
          <div className="mt-6 flex items-center gap-2 border-b border-slate-200 pb-2">
            <button
              type="button"
              onClick={() => setActiveRole("admin")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeRole === "admin"
                  ? "bg-brand-navy text-white shadow-xs"
                  : "bg-slate-100 text-brand-navy/70 hover:bg-slate-200"
              }`}
            >
              School Admin Console
            </button>
            <button
              type="button"
              onClick={() => setActiveRole("driver")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeRole === "driver"
                  ? "bg-brand-navy text-white shadow-xs"
                  : "bg-slate-100 text-brand-navy/70 hover:bg-slate-200"
              }`}
            >
              Driver Application
            </button>
            <button
              type="button"
              onClick={() => setActiveRole("parent")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeRole === "parent"
                  ? "bg-brand-navy text-white shadow-xs"
                  : "bg-slate-100 text-brand-navy/70 hover:bg-slate-200"
              }`}
            >
              Parent Application
            </button>
          </div>

          {/* Role Showcase Content */}
          <div className="mt-6 rounded-2xl sm:rounded-3xl border border-[#CFE4FF] bg-gradient-to-br from-[#F8FCFF] to-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(30,136,255,0.06)]">
            
            {/* ADMIN ROLE */}
            {activeRole === "admin" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-xs font-bold text-brand-blue">
                      Role 01 · School Operations
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Visibility for School Operations
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    School administrators can access visibility across multiple
                    buses and transport operations.
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>School admin dashboard with visibility across multiple buses</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Live vehicle tracking for school transport operations</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Route replay and operational reports</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Configurable speed monitoring and transport alerts</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 rounded-2xl bg-white border border-[#CFE4FF] p-4 shadow-[0_8px_24px_rgba(30,136,255,0.06)]">
                  <span className="text-xs font-bold text-brand-navy block mb-3">Admin Capabilities</span>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Fleet Multi-Bus Overview</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-[#EAF5FF] px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Route Replay &amp; Logs</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-brand-blue-light px-2 py-0.5 rounded">Enabled</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Speed &amp; Safety Thresholds</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-[#EAF5FF] px-2 py-0.5 rounded">Monitored</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DRIVER ROLE */}
            {activeRole === "driver" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-xs font-bold text-brand-blue">
                      Role 02 · Route Management
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Tools for Route Operations
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Designed for on-duty drivers to operate routes efficiently without complicated technical interfaces.
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Driver application for route operations</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Student attendance workflow</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Pickup / drop attendance workflow</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 rounded-2xl bg-white border border-[#CFE4FF] p-4 shadow-[0_8px_24px_rgba(30,136,255,0.06)]">
                  <span className="text-xs font-bold text-brand-navy block mb-3">Driver App Flow</span>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Turn-by-Turn Route Flow</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-[#EAF5FF] px-2 py-0.5 rounded">GPS Sync</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Student Boarding Check-In</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-brand-blue-light px-2 py-0.5 rounded">1-Tap</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Drop-off Confirmation</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-[#EAF5FF] px-2 py-0.5 rounded">Validated</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PARENT ROLE */}
            {activeRole === "parent" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-xs font-bold text-brand-blue">
                      Role 03 · Family Connectivity
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
                    Better Visibility for Parents
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Giving parents peace of mind through real-time transit visibility and validated custody workflows.
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Parent application for transport visibility and notifications</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-navy font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>Parent/guardian pickup validation with OTP support where applicable</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 rounded-2xl bg-white border border-[#CFE4FF] p-4 shadow-[0_8px_24px_rgba(30,136,255,0.06)]">
                  <span className="text-xs font-bold text-brand-navy block mb-3">Parent App Experience</span>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Live Vehicle Location</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-[#EAF5FF] px-2 py-0.5 rounded">Live ETA</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Boarding &amp; Drop Alerts</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-brand-blue-light px-2 py-0.5 rounded">Instant Push</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF] flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Guardian OTP Validation</span>
                      <span className="text-[0.68rem] text-brand-blue font-bold bg-[#EAF5FF] px-2 py-0.5 rounded">Secure</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SAFETY & CONNECTED OPERATIONS & SUPPORT */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Safety Card */}
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
                  Safety Within Everyday Transport Operations
                </h4>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                    <span>SOS and safety-focused workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                    <span>Pickup / drop attendance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                    <span>Guardian validation with OTP support where applicable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                    <span>Configurable speed monitoring and transport alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Connected Operations Card */}
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Radio className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
                  Connected Operations
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Real-time communication between school administrators, drivers and parents:
                </p>
                <div className="mt-4 space-y-2 text-xs font-semibold text-brand-navy">
                  <div className="p-2 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF]">
                    School Admin Dashboard
                  </div>
                  <div className="text-center text-brand-blue text-xs">↓</div>
                  <div className="p-2 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF]">
                    Driver Mobile Application
                  </div>
                  <div className="text-center text-brand-blue text-xs">↓</div>
                  <div className="p-2 rounded-lg bg-[#F5FAFF] border border-[#D5E8FF]">
                    Parent Companion Application
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Support & Operational Assistance */}
          <Reveal delay={0.18}>
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <LifeBuoy className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
                  Support &amp; Operational Assistance
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct onboarding guidance, support ticketing workflows and ongoing technical assistance for daily transport management.
                </p>
                <div className="mt-5 p-3 rounded-xl bg-brand-blue-light/40 border border-brand-blue/20 text-xs text-brand-navy font-medium">
                  Support / ticketing workflow for product assistance and operational reliability.
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ========================================================================= */}
        {/* 5. APPROVED POSITIONING STATEMENT */}
        {/* ========================================================================= */}
        <div className="mt-12 rounded-2xl border border-[#CFE4FF] bg-white p-5 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base font-semibold text-brand-navy">
            &ldquo;A practical transport operations platform built to make school transportation more visible, organized and safety-focused.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
