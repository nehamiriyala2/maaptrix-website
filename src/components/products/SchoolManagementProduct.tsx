"use client";

import {
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SchoolDashboard from "@/components/SchoolDashboard";

export default function SchoolManagementProduct() {
  return (
    <section id="school" className="scroll-mt-24 relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 select-none">
      <div className="page-container">
        
        {/* ========================================================================= */}
        {/* 2. LARGE MODULAR PRODUCT VISUAL (SchoolDashboard) */}
        {/* ========================================================================= */}
        <div>
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
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
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
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
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
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
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Bell className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
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
            <div className="h-full rounded-2xl border border-[#CFE4FF] bg-white p-6 shadow-[0_8px_24px_rgba(30,136,255,0.06)] flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue mb-4 border border-brand-blue/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <h4 className="font-display text-[19px] font-bold text-brand-navy">
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
        <div className="mt-12 rounded-2xl border border-[#CFE4FF] bg-white p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-[0_8px_24px_rgba(30,136,255,0.06)]">
          <p className="text-sm sm:text-base font-semibold text-brand-navy">
            &ldquo;Essential digital school operations in a simple, affordable and easy-to-adopt product.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
