"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Code2,
  FileText,
  Globe,
  Lightbulb,
  PenTool,
  Settings,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

const VALUE_PILLARS = [
  { icon: Lightbulb, label: "Ideas", sublabel: "to Products" },
  { icon: Users, label: "People", sublabel: "at the Core" },
  { icon: BarChart3, label: "Scalable", sublabel: "Solutions" },
  { icon: Globe, label: "Real-World", sublabel: "Impact" },
];

const STAGES = [
  {
    step: "1",
    num: "01",
    title: "Understand",
    descLines: ["We listen, analyse and", "identify real problems."],
    icon: FileText,
    x: 135,
    y: 305,
    badgeX: 118,
    badgeY: 285,
    lineEnd: { x: 250, y: 300 },
  },
  {
    step: "2",
    num: "02",
    title: "Design",
    descLines: ["We plan and design", "simple, effective", "solutions."],
    icon: PenTool,
    x: 200,
    y: 155,
    badgeX: 182,
    badgeY: 135,
    lineEnd: { x: 295, y: 255 },
  },
  {
    step: "3",
    num: "03",
    title: "Build",
    descLines: ["We develop robust", "and scalable", "products."],
    icon: Code2,
    x: 360,
    y: 82,
    badgeX: 378,
    badgeY: 100,
    lineEnd: { x: 360, y: 220 },
  },
  {
    step: "4",
    num: "04",
    title: "Operate",
    descLines: ["We launch and", "support with", "reliability."],
    icon: Settings,
    x: 520,
    y: 155,
    badgeX: 538,
    badgeY: 135,
    lineEnd: { x: 425, y: 255 },
  },
  {
    step: "5",
    num: "05",
    title: "Improve",
    descLines: ["We continuously", "enhance based on", "real-world feedback."],
    icon: BarChart3,
    x: 585,
    y: 305,
    badgeX: 602,
    badgeY: 285,
    lineEnd: { x: 470, y: 300 },
  },
];

export default function AboutSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Subtle cyclic highlight through the 5 stages
  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#EFF8FF] via-[#E8F5FF] to-[#DDF1FF] border-b border-[#BFE3FF]/50 py-7 sm:py-8 lg:py-10">
      {/* Ambient background glow & atmospheric shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#CFEAFF]/70 blur-[100px]" />
        <div className="absolute left-[5%] top-1/4 h-[350px] w-[350px] rounded-full bg-[#BFE3FF]/60 blur-[90px]" />
        <div className="absolute inset-0 bg-circuit-grid opacity-25" />
      </div>

      <div className="page-container">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Narrative, Values & CTA (5 cols on lg) */}
          {/* ================================================================= */}
          <div className="lg:col-span-5">
            <Reveal>
              {/* Eyebrow with Blue Accent Line */}
              <div className="inline-flex items-center gap-2.5">
                <span className="h-[2px] w-6 rounded-full bg-brand-blue" />
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  About Maaptrix
                </p>
              </div>

              {/* Main Headline (Scaled up ~10% with crisp editorial leading) */}
              <h2 className="mt-3.5 font-display text-4xl sm:text-5xl lg:text-[3.05rem] xl:text-[3.45rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-brand-navy">
                We build technology
                <br />
                around <span className="text-brand-blue">real problems.</span>
              </h2>

              {/* Description Paragraph (Scaled up ~4% for increased legibility) */}
              <p className="mt-4 text-[1.02rem] sm:text-[1.06rem] lg:text-[1.08rem] leading-[1.68] text-brand-navy/75 max-w-[520px]">
                Maaptrix Private Limited creates focused software products that
                solve practical operational problems. We combine product
                development with disciplined project management to take ideas
                from planning and design through development, launch, support
                and continuous improvement.
              </p>

              {/* Value Pillars (Scaled up ~5% for icons & text) */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-brand-line pt-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-brand-line">
                {VALUE_PILLARS.map(({ icon: Icon, label, sublabel }, idx) => (
                  <div
                    key={label}
                    className={`flex flex-col items-start gap-2 ${
                      idx === 0 ? "sm:pr-3.5" : idx === 3 ? "sm:pl-3.5" : "sm:px-3.5"
                    }`}
                  >
                    <div className="flex h-9.5 w-9.5 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                      <Icon className="h-5 w-5 text-brand-blue" strokeWidth={2} />
                    </div>
                    <div className="text-[0.82rem] sm:text-[0.84rem] font-bold leading-tight text-brand-navy">
                      <span>{label}</span>
                      <br />
                      <span className="text-[0.76rem] font-semibold text-brand-navy/75">{sublabel}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-7 flex items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-blue px-7 py-3.5 text-[0.92rem] font-bold text-white shadow-[0_8px_22px_-4px_rgba(20,125,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-[0_12px_26px_-4px_rgba(20,125,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  <span>Learn More About Maaptrix</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Bottom Tagline Indicator */}
              <div className="mt-6 sm:mt-7 flex items-center gap-3">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-brand-navy/40">
                  Products &nbsp;•&nbsp; People &nbsp;•&nbsp; Progress
                </span>
                <span className="h-px flex-1 bg-brand-line/80" />
              </div>
            </Reveal>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: 5-Stage Isometric Product Lifecycle (7 cols on lg)  */}
          {/* ================================================================= */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full select-none transform-gpu lg:scale-[1.05] lg:origin-left">
                
                {/* ------------------------------------------------------------- */}
                {/* DESKTOP / TABLET: 5-Stage Isometric Lifecycle Diagram         */}
                {/* ------------------------------------------------------------- */}
                <div className="hidden sm:block relative w-full aspect-[720/550] min-h-[400px] sm:min-h-[440px] max-h-[510px]">
                  <svg
                    viewBox="0 0 720 550"
                    preserveAspectRatio="xMidYMid meet"
                    className="h-full w-full overflow-visible"
                    aria-label="Maaptrix Product Lifecycle: Understand, Design, Build, Operate, Improve"
                  >
                    <defs>
                      {/* Drop shadows */}
                      <filter id="iso-platform-shadow" x="-30%" y="-20%" width="160%" height="160%">
                        <feDropShadow
                          dx="0"
                          dy="16"
                          stdDeviation="16"
                          floodColor="#0b1f41"
                          floodOpacity="0.14"
                        />
                      </filter>
                      <filter id="node-active-glow" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow
                          dx="0"
                          dy="4"
                          stdDeviation="6"
                          floodColor="#147dff"
                          floodOpacity="0.28"
                        />
                      </filter>
                    </defs>

                    {/* --------------------------------------------------------- */}
                    {/* Background Isometric Circuit Network                      */}
                    {/* --------------------------------------------------------- */}
                    <g opacity="0.85">
                      {/* Isometric Grid Base Guides */}
                      <path
                        d="M 130,390 L 360,520 L 590,390"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M 240,230 L 150,280 L 150,400 L 360,520 L 570,400 L 570,280 L 480,230"
                        fill="none"
                        stroke="#e0f2fe"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />

                      {/* Tech node connection lines */}
                      <path d="M 230,450 L 360,520" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
                      <path d="M 490,450 L 360,520" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />

                      {/* Hexagons & Points */}
                      <circle cx="230" cy="450" r="3" fill="#38bdf8" />
                      <circle cx="490" cy="450" r="3" fill="#38bdf8" />
                      <polygon points="185,280 190,283 190,289 185,292 180,289 180,283" fill="#38bdf8" opacity="0.8" />
                      <polygon points="535,280 540,283 540,289 535,292 530,289 530,283" fill="#38bdf8" opacity="0.8" />
                    </g>

                    {/* --------------------------------------------------------- */}
                    {/* Continuous Curved Dashed Lifecycle Path                   */}
                    {/* --------------------------------------------------------- */}
                    <g>
                      {/* Soft ambient track glow */}
                      <path
                        d="M 135,300 C 115,160 225,60 360,60 C 495,60 605,160 585,300"
                        fill="none"
                        stroke="#147dff"
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.10"
                      />

                      {/* Main Animated Dashed Path */}
                      <path
                        d="M 135,300 C 115,160 225,60 360,60 C 495,60 605,160 585,300"
                        fill="none"
                        stroke="#147dff"
                        strokeWidth="2.2"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                        style={{
                          animation: reducedMotion ? "none" : "dash-flow 6s linear infinite",
                        }}
                      />

                      {/* Directional Arrowheads along the Path */}
                      {/* Arrow 1: Between Stage 1 (Understand) and Stage 2 (Design) */}
                      <g transform="translate(150, 195) rotate(-65)">
                        <polygon points="0,-4 8,0 0,4 2,0" fill="#147dff" />
                      </g>

                      {/* Arrow 2: Between Stage 2 (Design) and Stage 3 (Build) */}
                      <g transform="translate(268, 80) rotate(-22)">
                        <polygon points="0,-4 8,0 0,4 2,0" fill="#147dff" />
                      </g>

                      {/* Arrow 3: Between Stage 3 (Build) and Stage 4 (Operate) */}
                      <g transform="translate(452, 80) rotate(22)">
                        <polygon points="0,-4 8,0 0,4 2,0" fill="#147dff" />
                      </g>

                      {/* Arrow 4: Between Stage 4 (Operate) and Stage 5 (Improve) */}
                      <g transform="translate(570, 195) rotate(65)">
                        <polygon points="0,-4 8,0 0,4 2,0" fill="#147dff" />
                      </g>
                    </g>

                    {/* --------------------------------------------------------- */}
                    {/* Radial Connectors to Central Platform                     */}
                    {/* --------------------------------------------------------- */}
                    {STAGES.map((s, idx) => (
                      <g key={`conn-${s.title}`}>
                        <line
                          x1={s.x}
                          y1={s.y}
                          x2={s.lineEnd.x}
                          y2={s.lineEnd.y}
                          stroke="#38bdf8"
                          strokeWidth="1.2"
                          strokeDasharray="2 3"
                          opacity={activeStage === idx ? "0.9" : "0.4"}
                        />
                        <circle
                          cx={s.lineEnd.x}
                          cy={s.lineEnd.y}
                          r={activeStage === idx ? "3.5" : "2.5"}
                          fill="#147dff"
                          className={activeStage === idx ? "animate-pulse" : ""}
                        />
                      </g>
                    ))}

                    {/* --------------------------------------------------------- */}
                    {/* Central 3.5D Layered Isometric Platform                   */}
                    {/* --------------------------------------------------------- */}
                    <g
                      transform="translate(10, 0)"
                      filter="url(#iso-platform-shadow)"
                      className={reducedMotion ? "" : "transition-transform duration-700 ease-in-out"}
                    >
                      {/* Layer 3: Bottom Shadow Platform */}
                      <g transform="translate(0, 64)">
                        <polygon points="230,260 350,328 350,344 230,276" fill="#0284c7" opacity="0.6" />
                        <polygon points="350,328 470,260 470,276 350,344" fill="#0369a1" opacity="0.6" />
                        <polygon
                          points="350,192 470,260 350,328 230,260"
                          fill="#38bdf8"
                          opacity="0.3"
                          stroke="#0284c7"
                          strokeWidth="1"
                        />
                      </g>

                      {/* Layer 2: Sky Blue Middle Platform */}
                      <g transform="translate(0, 36)">
                        <polygon points="230,260 350,328 350,342 230,274" fill="#38bdf8" opacity="0.75" />
                        <polygon points="350,328 470,260 470,274 350,342" fill="#0284c7" opacity="0.75" />
                        <polygon
                          points="350,192 470,260 350,328 230,260"
                          fill="#bae6fd"
                          opacity="0.8"
                          stroke="#38bdf8"
                          strokeWidth="1.2"
                        />
                      </g>

                      {/* Layer 1: Crisp White Top Platform */}
                      <g transform="translate(0, 0)">
                        <polygon points="230,260 350,328 350,342 230,274" fill="#e2e8f0" />
                        <polygon points="350,328 470,260 470,274 350,342" fill="#cbd5e1" />

                        {/* Top Face of Main Platform */}
                        <polygon
                          points="350,192 470,260 350,328 230,260"
                          fill="#ffffff"
                          stroke="#cbd5e1"
                          strokeWidth="1.6"
                        />

                        {/* Inner Bevel Border */}
                        <polygon
                          points="350,199 460,261 350,321 240,261"
                          fill="none"
                          stroke="#f1f5f9"
                          strokeWidth="1.2"
                        />

                        {/* Brand Logo & Wordmark */}
                        <text
                          x="350"
                          y="262"
                          textAnchor="middle"
                          fill="#0b1f41"
                          fontSize="22"
                          fontWeight="800"
                          fontFamily="var(--font-manrope), sans-serif"
                          letterSpacing="-0.02em"
                        >
                          Maaptrix
                        </text>

                        {/* Subtitle */}
                        <text
                          x="350"
                          y="282"
                          textAnchor="middle"
                          fill="#94a3b8"
                          fontSize="8.5"
                          fontWeight="700"
                          fontFamily="sans-serif"
                          letterSpacing="0.18em"
                        >
                          IDEAS TO IMPACT
                        </text>
                      </g>
                    </g>

                    {/* --------------------------------------------------------- */}
                    {/* Handwritten Script Callout: Turning Ideas into Solutions */}
                    {/* --------------------------------------------------------- */}
                    <g transform="translate(490, 420)">
                      {/* Curved hand-drawn indicator arrow */}
                      <path
                        d="M 5,30 C -25,25 -50,-10 -65,-30"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <polygon points="-68,-33 -60,-27 -64,-22" fill="#0284c7" />

                      {/* Script Text */}
                      <text
                        x="12"
                        y="22"
                        fill="#0369a1"
                        fontSize="14"
                        fontStyle="italic"
                        fontWeight="700"
                        fontFamily="cursive, var(--font-manrope), sans-serif"
                      >
                        Turning Ideas
                      </text>
                      <text
                        x="12"
                        y="38"
                        fill="#0369a1"
                        fontSize="14"
                        fontStyle="italic"
                        fontWeight="700"
                        fontFamily="cursive, var(--font-manrope), sans-serif"
                      >
                        into Real Solutions
                      </text>

                      {/* Playful script underline */}
                      <path
                        d="M 14,44 C 40,46 90,44 110,40"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </g>

                    {/* --------------------------------------------------------- */}
                    {/* FIVE SURROUNDING LIFECYCLE STAGES                         */}
                    {/* --------------------------------------------------------- */}
                    {STAGES.map((stage, idx) => {
                      const Icon = stage.icon;
                      const isActive = activeStage === idx;

                      return (
                        <g
                          key={stage.title}
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setActiveStage(idx)}
                          filter={isActive ? "url(#node-active-glow)" : undefined}
                        >
                          {/* Active state soft halo */}
                          {isActive && (
                            <circle
                              cx={stage.x}
                              cy={stage.y}
                              r="32"
                              fill="#147dff"
                              fillOpacity="0.10"
                              stroke="#147dff"
                              strokeWidth="1.2"
                              strokeOpacity="0.35"
                              strokeDasharray="3 3"
                            />
                          )}

                          {/* Outer Node Circle */}
                          <circle
                            cx={stage.x}
                            cy={stage.y}
                            r={stage.step === "3" ? "27" : "24"}
                            fill="#ffffff"
                            stroke={isActive ? "#147dff" : "#93c5fd"}
                            strokeWidth={isActive ? "2.4" : "1.8"}
                            className="transition-colors duration-300"
                          />

                          {/* Icon Container */}
                          <g transform={`translate(${stage.x - 10}, ${stage.y - 10})`}>
                            <Icon
                              className={`h-5 w-5 transition-colors duration-300 ${
                                isActive ? "text-brand-blue" : "text-brand-navy"
                              }`}
                              strokeWidth={2}
                            />
                          </g>

                          {/* Number Badge Pill */}
                          <circle
                            cx={stage.badgeX}
                            cy={stage.badgeY}
                            r="9"
                            fill="#147dff"
                            stroke="#ffffff"
                            strokeWidth="1.8"
                          />
                          <text
                            x={stage.badgeX}
                            y={stage.badgeY + 3.2}
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="9"
                            fontWeight="800"
                            fontFamily="sans-serif"
                          >
                            {stage.step}
                          </text>

                          {/* Stage Title */}
                          <text
                            x={stage.x}
                            y={stage.y + (stage.step === "3" ? 52 : 44)}
                            textAnchor="middle"
                            fill={isActive ? "#147dff" : "#0b1f41"}
                            fontSize="14"
                            fontWeight="800"
                            fontFamily="var(--font-manrope), sans-serif"
                            className="transition-colors duration-300"
                          >
                            {stage.title}
                          </text>

                          {/* Stage Description Lines */}
                          <g
                            fill="#64748b"
                            fontSize="9.5"
                            fontWeight="500"
                            fontFamily="sans-serif"
                            textAnchor="middle"
                          >
                            {stage.descLines.map((line, lIdx) => (
                              <text
                                key={line}
                                x={stage.x}
                                y={stage.y + (stage.step === "3" ? 66 : 58) + lIdx * 13}
                              >
                                {line}
                              </text>
                            ))}
                          </g>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* MOBILE / SMALL VIEWPORT: Clean Vertical Step Timeline         */}
                {/* ------------------------------------------------------------- */}
                <div className="block sm:hidden">
                  {/* Central branding pill for mobile */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-blue/30 bg-brand-blue-tint px-5 py-2 shadow-xs">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue text-xs font-black text-white">
                        M
                      </span>
                      <span className="font-display text-sm font-extrabold text-brand-navy">
                        Maaptrix
                      </span>
                      <span className="text-[0.68rem] font-bold text-brand-blue uppercase tracking-wider">
                        • Product Lifecycle
                      </span>
                    </div>
                  </div>

                  {/* Vertical 5-Step Cards Connected by Blue Line */}
                  <div className="relative space-y-4 pl-6 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-brand-blue/40 before:content-['']">
                    {STAGES.map((stage, idx) => {
                      const Icon = stage.icon;
                      const isActive = activeStage === idx;

                      return (
                        <div
                          key={stage.title}
                          onClick={() => setActiveStage(idx)}
                          className={`relative rounded-2xl border-2 bg-white p-4 shadow-sm transition-all duration-300 ${
                            isActive
                              ? "border-brand-blue shadow-[0_4px_16px_rgba(20,125,255,0.15)] ring-2 ring-brand-blue/20"
                              : "border-brand-blue/25 hover:border-brand-blue/50"
                          }`}
                        >
                          {/* Dot on connecting line */}
                          <div
                            className={`absolute -left-[19px] top-6 h-3 w-3 rounded-full border-2 border-white transition-colors duration-300 ${
                              isActive ? "bg-brand-blue ring-2 ring-brand-blue/30" : "bg-brand-blue/40"
                            }`}
                          />

                          <div className="flex items-center gap-3">
                            <span className="flex h-7 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-xs font-bold text-brand-blue">
                              {stage.num}
                            </span>
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                              <Icon className="h-4 w-4" strokeWidth={2.2} />
                            </div>
                            <h3 className="font-display text-base font-extrabold text-brand-navy">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-brand-navy/65">
                            {stage.descLines.join(" ")}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}



