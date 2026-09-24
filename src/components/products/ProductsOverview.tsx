"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bell,
  Calendar,
  MapPin,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";

export default function ProductsOverview() {
  return (
    <section id="overview" className="scroll-mt-24 relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-white via-[#F1F8FF] to-[#EAF4FF] py-14 sm:py-16 lg:py-20">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Product Ecosystem
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] leading-[1.12]">
            Two Focused Products, <span className="text-brand-blue">One Operating Discipline</span>
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-slate-600 sm:text-lg">
            Maaptrix products are designed to solve real-world operational challenges for educational
            institutions, with a focus on simplicity, reliability and impact.
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* 2. THE TWO RICH PRODUCT SHOWCASE CARDS */}
        {/* ========================================================================= */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PRODUCT 01: SCHOOL TRANSPORT MANAGEMENT SYSTEM */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal delay={0.08}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#CCE5FF] bg-gradient-to-br from-white via-[#F8FCFF] to-[#EDF6FF] p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(20,125,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_20px_50px_-12px_rgba(20,125,255,0.2)]">
              
              <div>
                <div className="mb-6 overflow-hidden rounded-2xl border border-[#DCEAFF]">
                  <Image
                    src="/hero/transport-card-scene.jpg"
                    alt="Smartphone showing a school bus route map beside a school bus"
                    width={1200}
                    height={896}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Top Header: Logo/Wordmark + Category Pill */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Logo
                      imageClassName="h-6 w-6 rounded object-contain"
                      wordmarkClassName="text-sm sm:text-base font-bold font-display tracking-tight text-brand-navy"
                    />
                    <span className="text-xs font-bold text-brand-blue">Transport</span>
                  </div>
                  <span className="rounded-full bg-brand-blue-light px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20">
                    FLAGSHIP PRODUCT
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                  School <span className="text-brand-blue">Transport</span>
                </h3>

                {/* Product Description */}
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  A complete transport management platform to ensure safe, efficient
                  and transparent school transportation for students, parents and
                  administrators.
                </p>

                {/* Split: Capabilities List (Left) + Visual Mockup (Right) */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  
                  {/* Capabilities (6 cols) */}
                  <div className="sm:col-span-12 grid gap-2.5 sm:grid-cols-2">
                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-brand-blue mt-0.5">
                        <MapPin className="h-3 w-3" />
                      </div>
                      <span>Live GPS tracking &amp; route visibility</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-brand-blue mt-0.5">
                        <UserCheck className="h-3 w-3" />
                      </div>
                      <span>Driver connectivity &amp; attendance validation</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-brand-blue mt-0.5">
                        <Users className="h-3 w-3" />
                      </div>
                      <span>Parent visibility &amp; real-time ETA alerts</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50 text-brand-blue mt-0.5">
                        <ShieldCheck className="h-3 w-3" />
                      </div>
                      <span>SOS workflows &amp; operational reporting</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/products/school-transport"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-brand-blue hover:shadow-md"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span>Subscription Model</span>
                  <span>·</span>
                  <Link
                    href="/products/school-transport"
                    className="text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

            </div>
          </Reveal>

          {/* ----------------------------------------------------------------------- */}
          {/* PRODUCT 02: SMALL SCHOOL MANAGEMENT MODULE */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal delay={0.16}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#CCE5FF] bg-gradient-to-br from-white via-[#F8FCFF] to-[#EDF6FF] p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(20,125,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_20px_50px_-12px_rgba(20,125,255,0.2)]">
              
              <div>
                <div className="mb-6 overflow-hidden rounded-2xl border border-[#DCEAFF]">
                  <Image
                    src="/hero/school-card-scene.jpg"
                    alt="Tablet displaying a school administration dashboard"
                    width={1200}
                    height={896}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Top Header: Logo/Wordmark + Category Pill */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Logo
                      imageClassName="h-6 w-6 rounded object-contain"
                      wordmarkClassName="text-sm sm:text-base font-bold font-display tracking-tight text-brand-navy"
                    />
                    <span className="text-xs font-bold text-sky-700">SchoolPro</span>
                  </div>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-sky-700 border border-sky-200">
                    OPERATIONS MODULE
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                  School <span className="text-brand-blue">Management</span>
                </h3>

                {/* Product Description */}
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                  A comprehensive school management solution for seamless
                  administration, communication and academic operations — built for
                  schools of all sizes.
                </p>

                {/* Split: Capabilities List (Left) + Visual Mockup (Right) */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  
                  {/* Capabilities (6 cols) */}
                  <div className="sm:col-span-12 grid gap-2.5 sm:grid-cols-2">
                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700 mt-0.5">
                        <Users className="h-3 w-3" />
                      </div>
                      <span>Student onboarding &amp; profile management</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700 mt-0.5">
                        <Activity className="h-3 w-3" />
                      </div>
                      <span>Daily automated attendance &amp; records</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700 mt-0.5">
                        <Bell className="h-3 w-3" />
                      </div>
                      <span>Parent announcements &amp; academic updates</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sky-700 mt-0.5">
                        <Calendar className="h-3 w-3" />
                      </div>
                      <span>Event calendar &amp; administrative notices</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/products/school-management"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-brand-blue hover:shadow-md"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span>Subscription Model</span>
                  <span>·</span>
                  <Link
                    href="/products/school-management"
                    className="text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
