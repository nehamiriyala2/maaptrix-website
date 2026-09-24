"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

// 01 Practical Innovation → Lightbulb with star sparkle & circuit dots
function InnovationIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <line x1="24" y1="4" x2="24" y2="7.5" stroke="#0B1F41" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 12 18 H 8 V 14" stroke="#0084FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="11.5" r="2.2" fill="#0084FF" />
      <line x1="13" y1="26" x2="8" y2="26" stroke="#0084FF" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="5.5" cy="26" r="2" stroke="#0084FF" strokeWidth="2" fill="none" />
      <path d="M 36 18 H 40 V 14" stroke="#0084FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="11.5" r="2.2" fill="#0084FF" />
      <line x1="35" y1="26" x2="40" y2="26" stroke="#0084FF" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="42.5" cy="26" r="2" stroke="#0084FF" strokeWidth="2" fill="none" />
      <path
        d="M 17 28 C 15 25 13.5 21.5 13.5 18 C 13.5 12.2 18.2 7.5 24 7.5 C 29.8 7.5 34.5 12.2 34.5 18 C 34.5 21.5 33 25 31 28 Z"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 24 13 C 24 15.5 25.5 17 28 17 C 25.5 17 24 18.5 24 21 C 24 18.5 22.5 17 20 17 C 22.5 17 24 15.5 24 13 Z"
        fill="#0084FF"
      />
      <line x1="18.5" y1="32" x2="29.5" y2="32" stroke="#0B1F41" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="20" y1="36" x2="28" y2="36" stroke="#0B1F41" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="22" y1="40" x2="26" y2="40" stroke="#0B1F41" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 02 Simplicity → Stacked isometric layers with bright blue filled middle layer
function SimplicityIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M 24 8 L 38 15 L 24 22 L 10 15 Z"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M 24 17 L 38 24 L 24 31 L 10 24 Z" fill="#56B8FF" />
      <path
        d="M 10 32.5 L 24 39.5 L 38 32.5"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 03 Reliability → Shield with bright blue circle and checkmark
function ReliabilityIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M 24 6 C 30 9 37 8 38 13 C 39 25.5 32 37 24 41.5 C 16 37 9 25.5 10 13 C 11 8 18 9 24 6 Z"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="23.5" r="8.5" stroke="#0084FF" strokeWidth="2.4" fill="none" />
      <path
        d="M 19.5 23.5 L 22.5 26.5 L 28.5 20"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 04 Safety & Responsibility → Shield enclosing person cradled by blue hands
function SafetyProtectionIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M 24 6 C 30 9 37 8 38 13 C 39 25.5 32 37 24 41.5 C 16 37 9 25.5 10 13 C 11 8 18 9 24 6 Z"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="17" r="3" fill="#0B1F41" />
      <path
        d="M 19 26 C 19 23.5 21.2 21.8 24 21.8 C 26.8 21.8 29 23.5 29 26"
        stroke="#0B1F41"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 15 29.5 C 15 33.5 18 36 22 36 C 23.2 36 24 34.8 24 33.8 C 24 33 22.2 31.8 20 30.5 C 17.8 29.2 16.8 27.2 16.8 26"
        fill="#0084FF"
      />
      <path
        d="M 33 29.5 C 33 33.5 30 36 26 36 C 24.8 36 24 34.8 24 33.8 C 24 33 25.8 31.8 28 30.5 C 30.2 29.2 31.2 27.2 31.2 26"
        fill="#0084FF"
      />
    </svg>
  );
}

// 05 Customer Focus → Two-person intertwining heart
function CustomerFocusIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="17.5" cy="12" r="3" fill="#0B1F41" />
      <circle cx="30.5" cy="12" r="3" fill="#0084FF" />
      <path
        d="M 17.5 18 C 12 18 8.5 23 9.5 28.5 C 11 34.5 20 40 24 42.5 C 21.5 38 18.5 32 23.5 26.5 C 25.5 24 28 22 30.5 18"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 30.5 18 C 36 18 39.5 23 38.5 28.5 C 37 34.5 28 40 24 42.5 C 21 37.5 17.5 30.5 22.5 25"
        stroke="#0084FF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 06 Continuous Improvement → Circular refresh arrows + growth chart bars
function ContinuousImprovementIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M 10 24 C 10 16.5 16.2 10.5 24 10.5 C 30.5 10.5 36 15 37.5 21"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M 34 14 L 41 18 L 41 10 Z" fill="#0084FF" />
      <path
        d="M 38 24 C 38 31.5 31.8 37.5 24 37.5 C 17.5 37.5 12 33 10.5 27"
        stroke="#0B1F41"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M 14 34 L 7 30 L 7 38 Z" fill="#0084FF" />
      <rect x="18" y="27" width="3.2" height="6" rx="1" fill="#0084FF" />
      <rect x="23" y="22" width="3.2" height="11" rx="1" fill="#0084FF" />
      <rect x="28" y="16" width="3.2" height="17" rx="1" fill="#0B1F41" />
    </svg>
  );
}

const VALUES = [
  {
    number: "01",
    icon: InnovationIcon,
    title: "Practical Innovation",
    description: "We build technology around genuine problems and useful outcomes.",
    colSpan: "lg:col-span-4",
  },
  {
    number: "02",
    icon: SimplicityIcon,
    title: "Simplicity",
    description: "Products should be easy to understand and easy to use.",
    colSpan: "lg:col-span-4",
  },
  {
    number: "03",
    icon: ReliabilityIcon,
    title: "Reliability",
    description: "Operational software must work consistently when users need it.",
    colSpan: "lg:col-span-4",
  },
  {
    number: "04",
    icon: SafetyProtectionIcon,
    title: "Safety & Responsibility",
    description: "We give special importance to user safety, privacy and responsible product design.",
    colSpan: "lg:col-span-4",
  },
  {
    number: "05",
    icon: CustomerFocusIcon,
    title: "Customer Focus",
    description: "Feedback from real users guides product improvement.",
    colSpan: "lg:col-span-4",
  },
  {
    number: "06",
    icon: ContinuousImprovementIcon,
    title: "Continuous Improvement",
    description: "We treat launch as the beginning of the product lifecycle, not the end.",
    colSpan: "lg:col-span-4",
  },
];

export default function AboutCoreValues() {
  return (
    <section className="relative overflow-hidden bg-blue-white py-12 sm:py-16 lg:py-20 border-b border-slate-100">
      <div className="page-container">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Core Principles
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-brand-navy leading-[1.14]">
            WHAT GUIDES HOW WE BUILD
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Our foundational values that shape every product decision, architecture choice and customer relationship.
          </p>
        </Reveal>

        {/* Asymmetric Editorial Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {VALUES.map((value, idx) => (
            <div
              key={value.title}
              className={`${value.colSpan} flex flex-col`}
            >
              <Reveal delay={idx * 0.06} className="h-full">
                <div className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DCEBFF] bg-white p-6 shadow-[0_4px_20px_-4px_rgba(20,125,255,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/50 hover:shadow-[0_16px_36px_-8px_rgba(20,125,255,0.16)]">
                  <div>
                    {/* Top Row: Number & Hover Arrow */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-md">
                        {value.number}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-brand-blue opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    {/* Custom SVG Icon */}
                    <div className="mt-4 flex items-center">
                      <value.icon className="h-14 w-14 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
