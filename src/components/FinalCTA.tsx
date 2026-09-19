"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-navy page-container py-9 sm:py-10 lg:py-12 text-white"
    >
      {/* Subtle Restrained Ambient Lighting */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-circuit-grid opacity-5" />

      {/* Faint operational route pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M -50,340 C 200,300 300,180 550,170 C 800,160 900,60 1250,40" stroke="#147dff" strokeWidth="1.5" />
        <circle cx="550" cy="170" r="4" fill="#147dff" />
        <circle cx="900" cy="60" r="4" fill="#147dff" />
      </svg>

      {/* Small floating interface fragments */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/40 backdrop-blur-sm sm:block">
        Live GPS · Active
      </div>
      <div className="pointer-events-none absolute right-[9%] bottom-[20%] hidden rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/40 backdrop-blur-sm sm:block">
        Continuous Improvement
      </div>

      <Reveal>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Connect With Maaptrix
            </p>
          </div>

          <h2 className="mt-3.5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
            Let&apos;s build simpler operations together.
          </h2>

          <p className="mx-auto mt-3.5 sm:mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
            Interested in a Maaptrix product or looking to understand how it can fit your organization?
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-[11px] bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(20,125,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-[11px] border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 sm:pt-5">
            <p className="text-xs text-white/50">
              Subscription-based software products · Dedicated onboarding &amp; continuous support
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

