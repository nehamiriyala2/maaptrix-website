"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function HowWeWorkCTA() {
  return (
    <section className="relative overflow-hidden bg-white page-container py-12 sm:py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] border border-slate-800/80 bg-gradient-to-br from-[#0E0E0E] via-[#181818] to-[#090909] p-7 sm:p-10 lg:p-14 text-white shadow-[0_24px_50px_-12px_rgba(24,24,24,0.35)]">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />

        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                Start a Conversation
              </p>
            </div>

            <h2 className="mt-3.5 font-display text-[30px] leading-[1.12] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-white">
              Have an Operational Problem Worth Solving?
            </h2>

            <p className="mx-auto mt-3.5 sm:mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
              Explore the products Maaptrix is building for real-world operations.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-[12px] bg-brand-blue h-12 px-6 text-[15px] font-semibold text-white shadow-[0_8px_24px_-6px_rgba(20,125,255,0.6)] transition-all duration-300 hover:bg-brand-blue-dark"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-[12px] border border-white/20 bg-white/5 h-12 px-6 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Request a Demo
              </Link>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
