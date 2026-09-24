"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProcessJourney() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-blue-white py-14 sm:py-18 lg:py-24 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Product Lifecycle
            </p>
          </div>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.85rem] font-bold tracking-tight text-brand-navy leading-[1.12]">
            The Six-Stage <span className="text-brand-blue">Product Journey.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A disciplined, end-to-end framework built for developing software
            that endures and continuously adapts to everyday operational demands.
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* STAGES LIST */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-12">
          
          {/* ----------------------------------------------------------------------- */}
          {/* STAGE 01: IDENTIFY */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal>
            <div
              id="stage-01"
              onMouseEnter={() => setHoveredStage(1)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/50 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Content */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-brand-navy text-xs font-mono font-bold text-white">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Discovery &amp; Problem Definition
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                    Identify
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    We begin by understanding the real problem — the operational
                    challenges, user needs and workflows that the product needs to
                    support.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1">Operational Friction</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Frontline User Needs</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Core Workflows</span>
                  </div>
                </div>

                {/* Right: Visual (Problem -> Users -> Workflow -> Opportunity) */}
                <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F8FCFF] to-slate-50/50 p-5 sm:p-6 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <Search className="h-4 w-4 text-brand-blue" />
                      Problem Discovery Flow
                    </span>
                    <span className="text-[0.68rem] font-mono text-brand-blue font-bold uppercase">
                      Stage 01 Architecture
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center">
                      <span className="h-7 w-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-1.5">
                        <Search className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-bold text-brand-navy">Problem</span>
                      <span className="text-[0.65rem] text-slate-500 mt-0.5">Define friction</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center">
                      <span className="h-7 w-7 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-1.5">
                        <Users className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-bold text-brand-navy">Users</span>
                      <span className="text-[0.65rem] text-slate-500 mt-0.5">Map personas</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center justify-center">
                      <span className="h-7 w-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5">
                        <Workflow className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-bold text-brand-navy">Workflow</span>
                      <span className="text-[0.65rem] text-slate-500 mt-0.5">Trace touchpoints</span>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-blue-light/50 border border-brand-blue/30 shadow-xs flex flex-col items-center justify-center">
                      <span className="h-7 w-7 rounded-lg bg-brand-blue text-white flex items-center justify-center mb-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-bold text-brand-blue">Opportunity</span>
                      <span className="text-[0.65rem] text-brand-navy/70 mt-0.5">Product solution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------------- */}
          {/* STAGE 02: DESIGN */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal>
            <div
              id="stage-02"
              onMouseEnter={() => setHoveredStage(2)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/50 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Visual (USER NEED -> WORKFLOW -> PRODUCT EXPERIENCE) */}
                <div className="order-2 lg:order-1 lg:col-span-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F8FCFF] to-slate-50/50 p-5 sm:p-6 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <PenTool className="h-4 w-4 text-brand-blue" />
                      Experience Planning Flow
                    </span>
                    <span className="text-[0.68rem] font-mono text-brand-blue font-bold uppercase">
                      Stage 02 Architecture
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue-light text-[0.68rem] font-bold text-brand-blue">
                        1
                      </span>
                      <div className="flex-1">
                        <span className="block font-bold text-brand-navy">User Need</span>
                        <span className="text-[0.7rem] text-slate-500">Clarity, speed, intuitive navigation</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue-light text-[0.68rem] font-bold text-brand-blue">
                        2
                      </span>
                      <div className="flex-1">
                        <span className="block font-bold text-brand-navy">Workflow</span>
                        <span className="text-[0.7rem] text-slate-500">Minimal clicks, zero training barrier</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-blue-light/60 border border-brand-blue/30 shadow-xs">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue text-[0.68rem] font-bold text-white">
                        3
                      </span>
                      <div className="flex-1">
                        <span className="block font-bold text-brand-navy">Product Experience</span>
                        <span className="text-[0.7rem] text-brand-blue font-semibold">Reliable everyday companion UI</span>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2 lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-brand-navy text-xs font-mono font-bold text-white">
                      02
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Workflow &amp; UI Architecture
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                    Design
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    We define a practical product approach and design experiences
                    around the people who will actually use the product.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1">Role-Based Experiences</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Workflow Simplification</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Clear Visual Hierarchy</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------------- */}
          {/* STAGE 03: DEVELOP */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal>
            <div
              id="stage-03"
              onMouseEnter={() => setHoveredStage(3)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/50 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Content */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-brand-navy text-xs font-mono font-bold text-white">
                      03
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Robust Engineering
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                    Develop
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    The product is developed using a structured engineering
                    approach focused on reliability, maintainability and scalable
                    architecture.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1">High-Uptime Cloud</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Data Security</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Modular Architecture</span>
                  </div>
                </div>

                {/* Right: Visual (PRODUCT -> APPLICATION -> SERVICES -> DATA -> INFRASTRUCTURE) */}
                <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#0B1F41] to-[#040D1A] p-5 sm:p-6 text-white shadow-2xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Code2 className="h-4 w-4 text-brand-blue" />
                      Engineering Architecture Stack
                    </span>
                    <span className="text-[0.68rem] font-mono text-cyan-300 font-bold uppercase">
                      Stage 03 Structure
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/10 border border-white/15 flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-brand-blue" /> Product Interface
                      </span>
                      <span className="text-[0.65rem] text-slate-300 font-mono">Web &amp; Mobile</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/8 border border-white/10 flex items-center justify-between">
                      <span className="font-bold text-slate-200 flex items-center gap-2">
                        <Smartphone className="h-3.5 w-3.5 text-cyan-400" /> Application Logic
                      </span>
                      <span className="text-[0.65rem] text-slate-400 font-mono">Workflows</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/6 border border-white/10 flex items-center justify-between">
                      <span className="font-bold text-slate-300 flex items-center gap-2">
                        <Cpu className="h-3.5 w-3.5 text-blue-400" /> Core Services &amp; APIs
                      </span>
                      <span className="text-[0.65rem] text-slate-400 font-mono">Event Systems</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/4 border border-white/5 flex items-center justify-between">
                      <span className="font-bold text-slate-400 flex items-center gap-2">
                        <Database className="h-3.5 w-3.5 text-emerald-400" /> Data Storage &amp; Cache
                      </span>
                      <span className="text-[0.65rem] text-slate-500 font-mono">Encrypted</span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/2 border border-white/5 flex items-center justify-between text-slate-400">
                      <span className="font-semibold text-slate-400 flex items-center gap-2">
                        <Server className="h-3 w-3 text-slate-400" /> Scalable Infrastructure
                      </span>
                      <span className="text-[0.65rem] text-slate-500 font-mono">Cloud Hosting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------------- */}
          {/* STAGE 04: VALIDATE */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal>
            <div
              id="stage-04"
              onMouseEnter={() => setHoveredStage(4)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/50 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Visual (CHECK -> TEST -> REVIEW -> REFINE) */}
                <div className="order-2 lg:order-1 lg:col-span-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F8FCFF] to-slate-50/50 p-5 sm:p-6 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                      Practical Usability Validation
                    </span>
                    <span className="text-[0.68rem] font-mono text-brand-blue font-bold uppercase">
                      Stage 04 Protocol
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-brand-navy">Check</span>
                        <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                      </div>
                      <p className="text-[0.7rem] text-slate-600">Operational integrity &amp; functional accuracy</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-brand-navy">Test</span>
                        <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                      </div>
                      <p className="text-[0.7rem] text-slate-600">Field conditions &amp; edge connectivity cases</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-brand-navy">Review</span>
                        <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                      </div>
                      <p className="text-[0.7rem] text-slate-600">Clarity of workflows for operators &amp; users</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-brand-blue-light/50 border border-brand-blue/30 shadow-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-brand-blue">Refine</span>
                        <span className="h-5 w-5 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold">✓</span>
                      </div>
                      <p className="text-[0.7rem] text-brand-navy/70">Friction reduction prior to production</p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2 lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-brand-navy text-xs font-mono font-bold text-white">
                      04
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Rigorous Usability
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                    Validate
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    We validate whether the product works as intended and whether
                    the experience makes sense for the people using it.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1">Workflow Validation</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Usability Testing</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Operational Stress Checks</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------------- */}
          {/* STAGE 05: LAUNCH */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal>
            <div
              id="stage-05"
              onMouseEnter={() => setHoveredStage(5)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#CCE5FF] bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/50 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Content */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-brand-navy text-xs font-mono font-bold text-white">
                      05
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Responsible Rollout
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                    Launch
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    The product is prepared for responsible rollout, onboarding
                    and ongoing operational use.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1">Guided Onboarding</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Operational Readiness</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Active Support</span>
                  </div>
                </div>

                {/* Right: Visual (READY -> ONBOARD -> OPERATE) */}
                <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F8FCFF] to-slate-50/50 p-5 sm:p-6 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <Rocket className="h-4 w-4 text-brand-blue" />
                      Responsible Deployment Flow
                    </span>
                    <span className="text-[0.68rem] font-mono text-brand-blue font-bold uppercase">
                      Stage 05 Execution
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="h-6 w-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[0.7rem]">1</span>
                        <div>
                          <span className="font-bold text-brand-navy block">Ready</span>
                          <span className="text-[0.7rem] text-slate-500">System configuration &amp; security baselines</span>
                        </div>
                      </div>
                      <span className="text-[0.68rem] bg-emerald-100/70 text-emerald-700 px-2 py-0.5 rounded font-semibold">Configured</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="h-6 w-6 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-[0.7rem]">2</span>
                        <div>
                          <span className="font-bold text-brand-navy block">Onboard</span>
                          <span className="text-[0.7rem] text-slate-500">Administrative setup &amp; user guidance</span>
                        </div>
                      </div>
                      <span className="text-[0.68rem] bg-brand-blue-light text-brand-blue px-2 py-0.5 rounded font-semibold">Structured</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-brand-blue-light/50 border border-brand-blue/30 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="h-6 w-6 rounded-md bg-brand-blue text-white flex items-center justify-center font-bold text-[0.7rem]">3</span>
                        <div>
                          <span className="font-bold text-brand-navy block">Operate</span>
                          <span className="text-[0.7rem] text-brand-navy/70">Live daily utilization &amp; operational monitoring</span>
                        </div>
                      </div>
                      <span className="text-[0.68rem] bg-brand-blue text-white px-2 py-0.5 rounded font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------------------- */}
          {/* STAGE 06: IMPROVE (STRONGEST VISUAL STAGE WITH FEEDBACK LOOP) */}
          {/* ----------------------------------------------------------------------- */}
          <Reveal>
            <div
              id="stage-06"
              onMouseEnter={() => setHoveredStage(6)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-brand-blue bg-gradient-to-br from-white via-[#F4F9FF] to-[#E9F4FF] p-6 sm:p-8 lg:p-10 shadow-md transition-all duration-300 scroll-mt-24"
            >
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Content */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-9 items-center justify-center rounded-lg bg-brand-blue text-xs font-mono font-bold text-white shadow-xs">
                      06
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1">
                      <RefreshCw className="h-3 w-3 animate-spin" style={{ animationDuration: "8s" }} />
                      Continuous Product Evolution
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy">
                    Improve
                  </h3>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    Products continue to evolve after launch through feedback,
                    operational needs, product learning and continuous refinement.
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-brand-blue/30 text-xs text-brand-navy leading-relaxed">
                    <span className="font-bold text-brand-blue block mb-0.5">The Living Software Principle</span>
                    Launching is not the finish line. Every product is actively refined and updated based on real-world operational insights.
                  </div>
                </div>

                {/* Right: Visual Loop (PRODUCT -> USAGE -> LEARNING -> IMPROVEMENT ↺ PRODUCT) */}
                <div className="lg:col-span-6 rounded-2xl border border-brand-blue/30 bg-white p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <RefreshCw className="h-4 w-4 text-brand-blue" />
                      Continuous Feedback Loop
                    </span>
                    <span className="text-[0.68rem] font-mono text-cyan-600 font-bold uppercase">
                      Living Product Model
                    </span>
                  </div>

                  {/* Circular / Step Flow */}
                  <div className="grid grid-cols-2 gap-2.5 text-center text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase block">Step A</span>
                      <span className="font-bold text-brand-navy block mt-0.5">Product in Use</span>
                      <span className="text-[0.68rem] text-slate-500">Everyday operations</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase block">Step B</span>
                      <span className="font-bold text-brand-navy block mt-0.5">Operational Data</span>
                      <span className="text-[0.68rem] text-slate-500">Real workflow feedback</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[0.65rem] font-mono font-bold text-slate-400 uppercase block">Step C</span>
                      <span className="font-bold text-brand-navy block mt-0.5">Product Learning</span>
                      <span className="text-[0.68rem] text-slate-500">Pattern analysis</span>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-blue-light/60 border border-brand-blue/30">
                      <span className="text-[0.65rem] font-mono font-bold text-brand-blue uppercase block">Step D</span>
                      <span className="font-bold text-brand-blue block mt-0.5">Feature Refinement</span>
                      <span className="text-[0.68rem] text-brand-navy/70">Seamless updates</span>
                    </div>
                  </div>

                  {/* Loop Return Bar */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-gradient-to-r from-brand-navy to-[#061427] text-white flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-3.5 w-3.5 text-cyan-300 animate-spin" style={{ animationDuration: "10s" }} />
                      <span className="font-semibold text-[0.72rem]">Refinements cycle back into the core product</span>
                    </div>
                    <span className="text-[0.65rem] font-mono text-cyan-300 font-bold">↺ Loop Continues</span>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
