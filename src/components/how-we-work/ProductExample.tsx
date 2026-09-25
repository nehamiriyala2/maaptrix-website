"use client";

import Link from "next/link";
import { ArrowRight, Bus, MapPin, RefreshCw, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProductExample() {
  return (
    <section className="surface-soft relative overflow-hidden py-16 sm:py-20 lg:py-24 select-none">
      <div className="page-container">
        
        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
              Lifecycle in Practice
            </p>
          </div>

          <h2 className="mt-3 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy">
            From Operational Need to <span className="text-brand-blue">Product.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            An illustrative walkthrough showing how Maaptrix applied this
            methodology to build the School Transport Management System.
          </p>
        </Reveal>

        {/* 4-Stage Concrete Example Flow */}
        <div className="relative mt-16 grid grid-cols-1 gap-x-5 gap-y-12 pt-2 [counter-reset:step] sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span className="absolute left-[6%] right-[10%] top-[7px] hidden h-[2px] bg-[linear-gradient(90deg,#9BCBFB,#1683F7,#9BCBFB)] lg:block" aria-hidden />
          
          {/* 1. OPERATIONAL NEED */}
          <Reveal delay={0.05}>
            <div className="relative h-full rounded-[18px] border border-[#D5E6F7] bg-white p-6 pt-16 shadow-[0_18px_40px_-26px_rgba(16,42,86,0.4)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 [counter-increment:step] before:absolute before:left-6 before:top-0 before:flex before:h-[64px] before:w-[64px] before:-translate-y-1/2 before:items-center before:justify-center before:rounded-full before:border-4 before:border-[#F3F8FF] before:bg-[#1683F7] before:font-display before:text-[22px] before:font-bold before:text-white before:shadow-[0_10px_20px_-8px_rgba(22,131,247,0.8)] before:content-[counter(step,decimal-leading-zero)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    The problem
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF5FF] text-brand-blue">
                    <Bus className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-[19px] font-bold text-brand-navy">
                  Operational Need
                </h3>

                <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
                  School transportation operations need better visibility, route
                  monitoring and real-time coordination between school
                  administrators, drivers and parents.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E3EFFF] text-[13px] font-semibold text-slate-500">
                Identified friction: Fragmented communication &amp; lack of real-time transit visibility.
              </div>
            </div>
          </Reveal>

          {/* 2. PRODUCT IDEA */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-[18px] border border-[#D5E6F7] bg-white p-6 pt-16 shadow-[0_18px_40px_-26px_rgba(16,42,86,0.4)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 [counter-increment:step] before:absolute before:left-6 before:top-0 before:flex before:h-[64px] before:w-[64px] before:-translate-y-1/2 before:items-center before:justify-center before:rounded-full before:border-4 before:border-[#F3F8FF] before:bg-[#1683F7] before:font-display before:text-[22px] before:font-bold before:text-white before:shadow-[0_10px_20px_-8px_rgba(22,131,247,0.8)] before:content-[counter(step,decimal-leading-zero)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    The idea
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
                    <MapPin className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-[19px] font-bold text-brand-navy">
                  Product Idea
                </h3>

                <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
                  School Transport Management System: A subscription-based
                  software platform purpose-built to deliver live vehicle tracking,
                  speed monitoring and safety alerts.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E3EFFF] text-[13px] font-semibold text-slate-500">
                Solution model: Cloud platform + driver mobile workflow + parent notification app.
              </div>
            </div>
          </Reveal>

          {/* 3. PRODUCT EXPERIENCE */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-[18px] border border-[#D5E6F7] bg-white p-6 pt-16 shadow-[0_18px_40px_-26px_rgba(16,42,86,0.4)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 [counter-increment:step] before:absolute before:left-6 before:top-0 before:flex before:h-[64px] before:w-[64px] before:-translate-y-1/2 before:items-center before:justify-center before:rounded-full before:border-4 before:border-[#F3F8FF] before:bg-[#1683F7] before:font-display before:text-[22px] before:font-bold before:text-white before:shadow-[0_10px_20px_-8px_rgba(22,131,247,0.8)] before:content-[counter(step,decimal-leading-zero)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    The product
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF5FF] text-brand-blue">
                    <Users className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-[19px] font-bold text-brand-navy">
                  Product Experience
                </h3>

                <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
                  Three interconnected role workflows: Admin dashboard for multi-bus
                  visibility, Driver app for student boarding check-in, and Parent app
                  for transit tracking and OTP pickup validation.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E3EFFF] text-[13px] font-semibold text-slate-500">
                Experience architecture: Tailored interfaces for Admin, Driver, and Parent.
              </div>
            </div>
          </Reveal>

          {/* 4. CONTINUOUS IMPROVEMENT */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-[18px] border border-[#D5E6F7] bg-[linear-gradient(160deg,#FFFFFF_0%,#EAF4FF_100%)] p-6 pt-16 shadow-[0_18px_40px_-26px_rgba(16,42,86,0.4)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 [counter-increment:step] before:absolute before:left-6 before:top-0 before:flex before:h-[64px] before:w-[64px] before:-translate-y-1/2 before:items-center before:justify-center before:rounded-full before:border-4 before:border-[#F3F8FF] before:bg-[#1683F7] before:font-display before:text-[22px] before:font-bold before:text-white before:shadow-[0_10px_20px_-8px_rgba(22,131,247,0.8)] before:content-[counter(step,decimal-leading-zero)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    After launch
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-white shadow-xs">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-[19px] font-bold text-brand-navy">
                  Continuous Improvement
                </h3>

                <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
                  The product continuously evolves around operational needs,
                  incorporating feedback on route replay, notification speed,
                  and guardian validation workflows.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 text-[0.7rem] font-semibold text-brand-blue">
                Ongoing lifecycle: Regular maintenance, cloud enhancements &amp; feature iterations.
              </div>
            </div>
          </Reveal>

        </div>

        {/* Action link */}
        <div className="mt-10 text-center">
          <Link
            href="/products/school-transport"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
          >
            <span>Explore the School Transport Management System</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
