"use client";

import Link from "next/link";
import { ArrowRight, Bus, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProductQuickLinks() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* Header */}
        <Reveal className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Direct Product Access
            </p>
          </div>

          <h2 className="mt-2.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy">
            Explore Maaptrix Products
          </h2>
        </Reveal>

        {/* 2 Compact Product Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          
          {/* Product 01 */}
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-brand-blue uppercase">
                    Product 01
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-light text-brand-blue">
                    <Bus className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-brand-navy">
                  School Transport Management System
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  School transportation visibility, coordination and safety-focused workflows.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/products#transport"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  <span>View Product</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Product 02 */}
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-[#CCE5FF] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-brand-blue transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-700 uppercase">
                    Product 02
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-brand-navy">
                  Small School Management Module
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Essential digital school operations for smaller schools and kindergartens.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/products#school"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors"
                >
                  <span>View Product</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
