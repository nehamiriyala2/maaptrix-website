"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white page-container py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0E0E0E] via-[#181818] to-[#090909] p-6 sm:p-9 lg:p-11 text-white shadow-[0_20px_45px_-12px_rgba(24,24,24,0.3)]">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-brand-blue/15 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-sky-400/10 blur-2xl" />

        <Reveal>
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                Explore Further
              </p>
            </div>

            <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2.35rem] leading-[1.15]">
              Not Sure Where to Start?
            </h2>

            <p className="mx-auto mt-2.5 max-w-md text-sm sm:text-base leading-relaxed text-white/70">
              Explore our products to understand how Maaptrix approaches real-world operational needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_6px_20px_-4px_rgba(20,125,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/how-we-work"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              >
                How We Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
