"use client";

import {
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  FileText,
  GraduationCap,
  Image as ImageIcon,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SchoolDashboard from "@/components/SchoolDashboard";

export default function SchoolManagementProduct() {
  return (
    <section id="school" className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* ========================================================================= */}
        {/* 1. PRODUCT HEADER */}
        {/* ========================================================================= */}
        <Reveal className="max-w-4xl">
          <div className="inline-flex items-center gap-2">
            <span className="flex h-6 w-8 items-center justify-center rounded-md bg-cyan-600 font-mono text-xs font-bold text-white">
              02
            </span>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-cyan-600 sm:text-xs">
              OPERATIONS MODULE
            </p>
          </div>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-brand-navy leading-[1.12]">
            Small School Management Module
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-[1.7] text-slate-700 font-normal">
            A lightweight subscription module intended for smaller schools and
            kindergartens that need essential digital administration without the
            complexity of a large enterprise school-management platform.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-200">
              Student Administration
            </span>
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-200">
              Attendance Records
            </span>
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-200">
              Parent Broadcasts
            </span>
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 border border-cyan-200">
              Events &amp; Moments
            </span>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* 2. LARGE MODULAR PRODUCT VISUAL (SchoolDashboard) */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-12">
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  School Administrative Ecosystem Preview
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Modular Student &amp; Academic Administration Hub
                </span>
              </div>
              <SchoolDashboard />
            </div>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* 3. FOUR CORE ADMINISTRATIVE CAPABILITIES */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Students */}
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-navy">
                  Student Administration
                </h4>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Student onboarding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Basic student profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Parent document upload and storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 2. Academics */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-navy">
                  Everyday Academic Administration
                </h4>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Attendance management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Homework sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Marks / academic record support</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 3. Communication */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Bell className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-navy">
                  School-to-Parent Communication
                </h4>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>School notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Announcements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Parent-facing information access</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 4. Events */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-navy">
                  Events &amp; School Moments
                </h4>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Event calendar management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Event-photo sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>Parent activity visibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ========================================================================= */}
        {/* 4. APPROVED POSITIONING STATEMENT */}
        {/* ========================================================================= */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-2xs">
          <p className="text-sm sm:text-base font-semibold text-brand-navy">
            &ldquo;Essential digital school operations in a simple, affordable and easy-to-adopt product.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
