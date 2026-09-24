"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bell,
  Bus,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  MapPin,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";

export default function HomeProductPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F1F8FF] to-[#EAF4FF] py-10 sm:py-12 lg:py-14 border-b border-slate-100 select-none">
      
      {/* Soft atmospheric background lighting */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl -z-10" />

      <div className="page-container">
        
        {/* ========================================================================= */}
        {/* 1. TOP SECTION: HEADLINE + RIGHT SIDE SCHOOL & TRANSPORT SCENE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          
          {/* Left Column: Editorial Header */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light/80 px-3.5 py-1 text-[0.72rem] sm:text-xs font-bold text-brand-blue border border-brand-blue/25 shadow-2xs">
                <span className="flex items-center gap-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
                </span>
                <span>MAAPTRIX PRODUCT ECOSYSTEM</span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-bold tracking-tight text-brand-navy leading-[1.1]">
                Software Built Around{" "}
                <span className="text-brand-blue">Real Operations</span>
              </h2>

              {/* Supporting Copy */}
              <p className="mt-4 text-base sm:text-lg leading-[1.7] text-slate-600 max-w-xl font-normal">
                Maaptrix products are designed to solve real-world operational
                challenges for educational institutions, with a focus on
                simplicity, reliability and impact.
              </p>

              {/* Quick Navigation Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/products#transport"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-navy border border-slate-200/80 shadow-2xs hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <Bus className="h-3.5 w-3.5 text-brand-blue" />
                  <span>School Transport Platform</span>
                </Link>
                <Link
                  href="/products#school"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-navy border border-slate-200/80 shadow-2xs hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <GraduationCap className="h-3.5 w-3.5 text-cyan-600" />
                  <span>Small School Module</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: School Ecosystem Landscape Scene */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.12}>
              <div className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[32px] border border-[#BDE3FF] bg-gradient-to-br from-[#EAF4FF] via-white to-[#F0F8FF] p-2 sm:p-3 shadow-[0_20px_50px_-12px_rgba(20,125,255,0.18)]">
                
                {/* Floating Capability Pills above image */}
                <div className="absolute top-4 inset-x-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] sm:text-xs font-bold text-brand-navy shadow-md border border-white/80 backdrop-blur-md">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <Bus className="h-3 w-3" />
                    </span>
                    <span>Safe Transport</span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] sm:text-xs font-bold text-brand-navy shadow-md border border-white/80 backdrop-blur-md">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <GraduationCap className="h-3 w-3" />
                    </span>
                    <span>Smart Management</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] sm:text-xs font-bold text-brand-navy shadow-md border border-white/80 backdrop-blur-md">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                      <Users className="h-3 w-3" />
                    </span>
                    <span>Connected Community</span>
                  </div>
                </div>

                {/* Main Landscape Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden rounded-[22px] sm:rounded-[26px]">
                  <Image
                    src="/hero/school-ecosystem-scene.jpg"
                    alt="Maaptrix Connected School & Transport Ecosystem"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F41]/35 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom live indicator badge */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 text-[0.68rem] sm:text-xs font-bold text-brand-navy shadow-lg backdrop-blur-md border border-white/90">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Real-Time Campus &amp; Fleet Operations</span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. THE TWO RICH PRODUCT SHOWCASE CARDS */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PRODUCT 01: SCHOOL TRANSPORT MANAGEMENT SYSTEM */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal delay={0.08}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#CCE5FF] bg-gradient-to-br from-white via-[#F8FCFF] to-[#EDF6FF] p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(20,125,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_20px_50px_-12px_rgba(20,125,255,0.2)]">
              
              <div>
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
                  <div className="sm:col-span-6 space-y-2.5">
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

                  {/* Visual: Smartphone & Bus Composition (6 cols) */}
                  <div className="sm:col-span-6 relative flex justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#CCE5FF] bg-white shadow-sm">
                      <Image
                        src="/hero/transport-card-scene.jpg"
                        alt="Maaptrix School Transport Mobile GPS Tracking and Bus Workflow"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Floating pill badge */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[0.62rem] font-bold text-brand-navy shadow-xs border border-white/80 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span>Live Tracking · On Time</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/products#transport"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-brand-blue hover:shadow-md"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span>Subscription Model</span>
                  <span>·</span>
                  <Link
                    href="/products#transport"
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
                {/* Top Header: Logo/Wordmark + Category Pill */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Logo
                      imageClassName="h-6 w-6 rounded object-contain"
                      wordmarkClassName="text-sm sm:text-base font-bold font-display tracking-tight text-brand-navy"
                    />
                    <span className="text-xs font-bold text-cyan-700">SchoolPro</span>
                  </div>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-cyan-700 border border-cyan-200">
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
                  <div className="sm:col-span-6 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 mt-0.5">
                        <Users className="h-3 w-3" />
                      </div>
                      <span>Student onboarding &amp; profile management</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 mt-0.5">
                        <Activity className="h-3 w-3" />
                      </div>
                      <span>Daily automated attendance &amp; records</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 mt-0.5">
                        <Bell className="h-3 w-3" />
                      </div>
                      <span>Parent announcements &amp; academic updates</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 mt-0.5">
                        <Calendar className="h-3 w-3" />
                      </div>
                      <span>Event calendar &amp; administrative notices</span>
                    </div>
                  </div>

                  {/* Visual: Tablet & Admin Dashboard Composition (6 cols) */}
                  <div className="sm:col-span-6 relative flex justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#CCE5FF] bg-white shadow-sm">
                      <Image
                        src="/hero/school-card-scene.jpg"
                        alt="Maaptrix Small School Management Tablet Administrative Hub"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Floating graduation pill badge */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[0.62rem] font-bold text-brand-navy shadow-xs border border-white/80 backdrop-blur-sm">
                        <GraduationCap className="h-3 w-3 text-cyan-600" />
                        <span>Smart Module · Active</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/products#school"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-brand-blue hover:shadow-md"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span>Subscription Model</span>
                  <span>·</span>
                  <Link
                    href="/products#school"
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
