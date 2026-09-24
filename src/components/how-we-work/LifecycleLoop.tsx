"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const LOOP_NODES = [
  { id: "01", name: "Identify", label: "Operational Needs", icon: Search },
  { id: "02", name: "Design", label: "User Workflows", icon: PenTool },
  { id: "03", name: "Develop", label: "Reliable Architecture", icon: Code2 },
  { id: "04", name: "Validate", label: "Practical Usability", icon: CheckCircle2 },
  { id: "05", name: "Launch", label: "Responsible Rollout", icon: Rocket },
  { id: "06", name: "Improve", label: "Continuous Evolution", icon: RefreshCw, highlight: true },
];

export default function LifecycleLoop() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Continuous Evolution
            </p>
          </div>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[2.85rem] font-bold tracking-tight text-brand-navy leading-[1.12]">
            Products Are <span className="text-brand-blue">Never Finished.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Launching a product is not the end of the process. Maaptrix continues
            to maintain, refine and improve its products as operational needs
            evolve.
          </p>
        </Reveal>

        {/* Large Visual Continuous Lifecycle Diagram */}
        <div className="mt-12 sm:mt-16">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-[#BDE3FF] bg-gradient-to-br from-[#061427] via-[#0B1F41] to-[#040D1A] p-6 sm:p-10 lg:p-14 text-white shadow-[0_24px_50px_-12px_rgba(11,31,65,0.35)]">
              
              {/* Atmospheric background glows */}
              <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

              {/* Title inside card */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Product Lifecycle Diagram
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    Continuous Closed-Loop Innovation
                  </h3>
                </div>
                <div className="rounded-full bg-brand-blue/20 border border-brand-blue/30 px-3.5 py-1 text-xs font-semibold text-cyan-300 flex items-center gap-2">
                  <RefreshCw className="h-3 w-3 animate-spin" style={{ animationDuration: "10s" }} />
                  <span>Iterative Lifecycle Model</span>
                </div>
              </div>

              {/* Connected Flow Node Grid (Desktop & Tablet: 6 across / 3x2, Mobile: 2x3 or vertical) */}
              <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
                {LOOP_NODES.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className={`relative rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                        node.highlight
                          ? "border-cyan-400/60 bg-gradient-to-b from-cyan-950/40 to-cyan-900/20 shadow-[0_0_24px_rgba(6,182,212,0.15)]"
                          : "border-white/10 bg-white/[0.04] hover:border-brand-blue/50 hover:bg-white/[0.08]"
                      }`}
                    >
                      {/* Node Top: Number & Icon */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[0.68rem] font-mono font-bold ${node.highlight ? "text-cyan-300" : "text-brand-blue"}`}>
                          {node.id}
                        </span>
                        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${node.highlight ? "bg-cyan-400/20 text-cyan-300" : "bg-white/10 text-slate-300"}`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                      </div>

                      {/* Node Body: Name & Subtitle */}
                      <div className="mt-4">
                        <h4 className="font-display text-base font-bold text-white">
                          {node.name}
                        </h4>
                        <p className="mt-1 text-[0.7rem] text-slate-400 leading-tight">
                          {node.label}
                        </p>
                      </div>

                      {/* Connector indicator for next stage */}
                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[0.65rem] text-slate-400">
                        <span>{i === 5 ? "Loops Back" : "Advances"}</span>
                        {i === 5 ? (
                          <RefreshCw className="h-3 w-3 text-cyan-300 animate-spin" style={{ animationDuration: "8s" }} />
                        ) : (
                          <ArrowRight className="h-3 w-3 text-brand-blue" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Full Cycle Narrative Bar */}
              <div className="relative z-10 mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white shrink-0 shadow-xs">
                    <RefreshCw className="h-5 w-5 animate-spin" style={{ animationDuration: "12s" }} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Stage 06 (Improve) Returns to Stage 01 (Identify)
                    </span>
                    <span className="text-xs text-slate-300">
                      Operational data and user experiences continually fuel future product refinements.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 shrink-0">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Closed-Loop Product Lifecycle</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
