"use client";

import Image from "next/image";
import { Cog, Compass, PlayCircle, Sparkles, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const LIFECYCLE_STEPS = [
  { step: "01", icon: Compass, label: "Understand" },
  { step: "02", icon: Wrench, label: "Design" },
  { step: "03", icon: Cog, label: "Build" },
  { step: "04", icon: PlayCircle, label: "Operate" },
  { step: "05", icon: Sparkles, label: "Improve" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-line to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Editorial Narrative (~5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
                  About Maaptrix
                </p>
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl">
                We build technology around real problems.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-navy/70 sm:text-lg">
                Maaptrix Private Limited creates focused software products that
                solve practical operational problems. We combine product
                development with disciplined project management to take ideas
                from planning and design through development, launch, support and
                continuous improvement.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-brand-line pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-line bg-brand-blue-light/50">
                  <Image
                    src="/brand/logo-original.jpeg"
                    alt="Maaptrix"
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-brand-navy/65">
                  One connected product philosophy across everything we build and operate.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Connected Operational Product Lifecycle (~7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[0.72rem] font-bold uppercase tracking-wider text-brand-blue">
                    How Maaptrix Thinks
                  </span>
                  <span className="text-xs font-medium text-brand-navy/45">
                    A continuous product cycle
                  </span>
                </div>

                {/* Connecting line (mobile: vertical, desktop: horizontal) */}
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-line sm:left-0 sm:right-0 sm:top-6 sm:bottom-auto sm:h-px sm:w-full" />

                  <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-4">
                    {LIFECYCLE_STEPS.map((item) => (
                      <div
                        key={item.step}
                        className="group relative flex items-start gap-4 pl-0 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
                      >
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-line bg-white text-brand-blue shadow-[0_2px_8px_-2px_rgba(11,31,65,0.08)] transition-all duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(20,125,255,0.4)]">
                          <item.icon className="h-5 w-5" strokeWidth={1.8} />
                        </div>
                        <div className="pt-1 sm:pt-4">
                          <span className="block font-mono text-[0.65rem] font-semibold text-brand-navy/40">
                            {item.step}
                          </span>
                          <h3 className="mt-0.5 text-sm font-bold text-brand-navy sm:text-[0.92rem]">
                            {item.label}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Transition statement into Products */}
        <Reveal delay={0.2}>
          <div className="mt-20 flex items-center gap-4 border-t border-brand-line pt-10 lg:mt-24">
            <span className="hidden h-px flex-1 bg-brand-line sm:block" />
            <p className="text-center font-display text-lg font-semibold tracking-tight text-brand-navy/80 sm:text-xl">
              From operational problems to purpose-built products.
            </p>
            <span className="hidden h-px flex-1 bg-brand-line sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
