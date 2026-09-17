"use client";

import { Bell, BookOpen, Calendar, CheckCircle2, GraduationCap, UserCheck } from "lucide-react";

const ATTENDANCE_SAMPLE = [
  { grade: "Gr 6", state: "verified" },
  { grade: "Gr 7", state: "verified" },
  { grade: "Gr 8", state: "verified" },
  { grade: "Gr 9", state: "pending" },
];

export default function SchoolDashboard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-[0_4px_20px_-8px_rgba(11,31,65,0.08)]">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-brand-line bg-brand-blue-tint/30 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue text-white">
            <GraduationCap className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-bold text-brand-navy">
            School Operations Console
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-light px-2.5 py-1 text-[0.7rem] font-semibold text-brand-blue">
          Academic Term Module
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-12">
        {/* Attendance Verification (6 cols) */}
        <div className="col-span-6 flex flex-col justify-between rounded-xl border border-brand-line bg-brand-blue-tint/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-brand-navy/65">
              Attendance Verification
            </span>
            <UserCheck className="h-3.5 w-3.5 text-brand-blue" />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {ATTENDANCE_SAMPLE.map((a) => (
              <div
                key={a.grade}
                className="flex items-center justify-between rounded-lg border border-brand-line/60 bg-white px-3 py-2"
              >
                <span className="text-[0.72rem] font-semibold text-brand-navy/70">
                  {a.grade}
                </span>
                {a.state === "verified" ? (
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-emerald-600">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold text-amber-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Pending
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Operational Modules (6 cols) */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5">
          <div className="flex items-center gap-3 rounded-xl border border-brand-line bg-white p-3 shadow-2xs">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
              <BookOpen className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-brand-navy truncate">
                Curriculum &amp; Homework
              </p>
              <p className="text-[0.7rem] text-brand-navy/55">
                Daily assignments &amp; notices
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-brand-line bg-white p-3 shadow-2xs">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
              <Bell className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-brand-navy truncate">
                Parent Broadcast System
              </p>
              <p className="text-[0.7rem] text-brand-navy/55">
                Instant school notices &amp; circulars
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-brand-line bg-white p-3 shadow-2xs">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
              <Calendar className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-brand-navy truncate">
                Calendar &amp; Events
              </p>
              <p className="text-[0.7rem] text-brand-navy/55">
                Examination &amp; activity schedules
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-brand-line bg-[#fbfdff] px-5 py-2.5">
        <span className="text-[0.7rem] text-brand-navy/60">
          Integrated Student Onboarding &amp; Document Verification
        </span>
        <span className="text-[0.68rem] font-semibold text-brand-blue">
          Illustrative Interface
        </span>
      </div>
    </div>
  );
}
