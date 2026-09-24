"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const STAGES = [
  {
    number: "01",
    tag: "DISCOVERY & NEEDS",
    title: "Understand the Problem",
    description:
      "Understand recurring operational problems and the people affected by them.",
    details: [
      "Operational friction points",
      "User role workflows",
      "Real environment constraints",
    ],
    // 3D Document & Magnifying Glass Illustration (SVG)
    renderVisual: () => (
      <div className="relative h-20 w-24 sm:h-24 sm:w-28 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 120 100" className="h-full w-full drop-shadow-md">
          {/* Layered Document */}
          <rect
            x="20"
            y="12"
            width="58"
            height="74"
            rx="8"
            fill="url(#docGrad)"
            stroke="#CCE5FF"
            strokeWidth="1.5"
            transform="rotate(-5 49 49)"
          />
          {/* Document Content Lines */}
          <line x1="32" y1="28" x2="62" y2="28" stroke="#147DFF" strokeWidth="2.5" strokeLinecap="round" transform="rotate(-5 49 49)" />
          <line x1="32" y1="38" x2="56" y2="38" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" transform="rotate(-5 49 49)" />
          <line x1="32" y1="46" x2="64" y2="46" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" transform="rotate(-5 49 49)" />
          <line x1="32" y1="54" x2="50" y2="54" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" transform="rotate(-5 49 49)" />

          {/* 3D Magnifying Glass */}
          <circle cx="68" cy="55" r="18" fill="url(#lensGrad)" stroke="#147DFF" strokeWidth="3.5" />
          <circle cx="68" cy="55" r="12" fill="#EBF5FF" fillOpacity="0.4" />
          <path d="M 81,68 L 98,85" stroke="#0B1F41" strokeWidth="5" strokeLinecap="round" />
          <path d="M 81,68 L 98,85" stroke="#147DFF" strokeWidth="3" strokeLinecap="round" />

          {/* Gradients */}
          <defs>
            <linearGradient id="docGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0F7FF" />
            </linearGradient>
            <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#CFEAFF" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    number: "02",
    tag: "DESIGN & ENGINEERING",
    title: "Build the Product",
    description:
      "Turn practical requirements into focused and usable software.",
    details: [
      "Intuitive user interfaces",
      "Reliable system architecture",
      "Role-tailored accessibility",
    ],
    // 3D Code & UI Windows Illustration (SVG)
    renderVisual: () => (
      <div className="relative h-20 w-24 sm:h-24 sm:w-28 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 120 100" className="h-full w-full drop-shadow-md">
          {/* Back UI Card */}
          <rect x="14" y="24" width="50" height="60" rx="8" fill="#E6F2FF" stroke="#B8DCFF" strokeWidth="1.5" />
          <circle cx="24" cy="34" r="3" fill="#147DFF" />
          <line x1="32" y1="34" x2="52" y2="34" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="46" x2="54" y2="46" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="56" x2="44" y2="56" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />

          {/* Front Main Code Card with </> */}
          <rect x="48" y="14" width="58" height="66" rx="10" fill="url(#codeCardGrad)" stroke="#147DFF" strokeWidth="2" />
          <circle cx="58" cy="24" r="2.5" fill="#FF5F56" />
          <circle cx="66" cy="24" r="2.5" fill="#FFBD2E" />
          <circle cx="74" cy="24" r="2.5" fill="#27C93F" />

          {/* </> symbol in vibrant white */}
          <text x="77" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">
            &lt;/&gt;
          </text>

          {/* Bottom small floating badge */}
          <rect x="52" y="74" width="46" height="14" rx="4" fill="#EBF5FF" stroke="#B8DCFF" strokeWidth="1" />
          <line x1="60" y1="81" x2="88" y2="81" stroke="#147DFF" strokeWidth="2" strokeLinecap="round" />

          <defs>
            <linearGradient id="codeCardGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E88FF" />
              <stop offset="100%" stopColor="#0B1F41" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    number: "03",
    tag: "OPERATIONS & EVOLUTION",
    title: "Keep Improving",
    description:
      "Operate, support and continuously improve products over time.",
    details: [
      "Direct customer support",
      "Continuous enhancement cycles",
      "Long-term roadmap stewardship",
    ],
    // 3D Ascending Growth Bars & Upward Arrow (SVG)
    renderVisual: () => (
      <div className="relative h-20 w-24 sm:h-24 sm:w-28 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 120 100" className="h-full w-full drop-shadow-md">
          {/* Base shadow */}
          <ellipse cx="60" cy="85" rx="45" ry="8" fill="#EAF4FF" />

          {/* 3D Ascending Bars */}
          {/* Bar 1 */}
          <rect x="25" y="58" width="14" height="24" rx="3" fill="#BFDBFE" />
          <rect x="25" y="55" width="14" height="6" rx="2" fill="#93C5FD" />

          {/* Bar 2 */}
          <rect x="45" y="44" width="14" height="38" rx="3" fill="#60A5FA" />
          <rect x="45" y="41" width="14" height="6" rx="2" fill="#3B82F6" />

          {/* Bar 3 */}
          <rect x="65" y="28" width="14" height="54" rx="3" fill="#2563EB" />
          <rect x="65" y="25" width="14" height="6" rx="2" fill="#1D4ED8" />

          {/* Bar 4 */}
          <rect x="85" y="14" width="14" height="68" rx="3" fill="#1D4ED8" />
          <rect x="85" y="11" width="14" height="6" rx="2" fill="#147DFF" />

          {/* Vibrant Rising Curved Arrow */}
          <path
            d="M 22,70 Q 55,50 96,16"
            fill="none"
            stroke="#147DFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="98,12 84,18 92,26" fill="#147DFF" />

          <circle cx="96" cy="16" r="3" fill="#FFFFFF" />
        </svg>
      </div>
    ),
  },
];

export default function ProblemToProductSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F8FF] via-[#E8F5FF] to-white py-10 sm:py-12 lg:py-14 border-b border-slate-100 select-none">
      <div className="page-container">
        
        {/* Header */}
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-blue sm:text-xs">
              OUR PRODUCT APPROACH
            </p>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.85rem] leading-[1.12]">
            Products Built Around <span className="text-brand-blue">Real Problems.</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg max-w-2xl leading-relaxed">
            We identify recurring operational challenges and engineer dependable software solutions designed for everyday reliability.
          </p>
        </Reveal>

        {/* 3 Visual Stages Grid matching Image 2 */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {STAGES.map((stage, idx) => {
            const Visual = stage.renderVisual;
            return (
              <Reveal key={stage.number} delay={idx * 0.1}>
                <div className="group relative flex h-full flex-col justify-between rounded-[26px] border border-[#CCE5FF] bg-white/95 backdrop-blur-sm p-6 sm:p-7 shadow-[0_12px_36px_-8px_rgba(20,125,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue hover:shadow-[0_20px_45px_-10px_rgba(20,125,255,0.18)]">
                  <div>
                    {/* Top Header: Badge + Tag on Left, 3D Visual on Right */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex h-6 w-8 items-center justify-center rounded-md bg-brand-blue-light text-xs font-mono font-bold text-brand-blue border border-brand-blue/20">
                          {stage.number}
                        </span>
                        <span className="mt-2.5 block text-[0.72rem] font-bold uppercase tracking-wider text-brand-blue">
                          {stage.tag}
                        </span>
                      </div>

                      {/* 3D Illustration */}
                      <div className="transition-transform duration-300 group-hover:scale-105">
                        <Visual />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="mt-3 font-display text-xl sm:text-[1.35rem] font-bold text-brand-navy tracking-tight">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm sm:text-[0.92rem] leading-relaxed text-slate-600 font-normal">
                      {stage.description}
                    </p>

                    {/* Bullet Details with blue checkmarks */}
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      {stage.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-xs sm:text-[0.82rem] font-medium text-brand-navy/80"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Link to How We Work */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href="/how-we-work"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                    >
                      <span>Explore Stage Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
