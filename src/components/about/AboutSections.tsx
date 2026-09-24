import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Bus,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import DeviceMockup from "@/components/products/DeviceMockup";

/** Small blue rule + uppercase label used above every section title. */
function Label({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.16em] ${
        light ? "text-white/90" : "text-brand-blue"
      }`}
    >
      <span className={`h-[2px] w-8 rounded-full ${light ? "bg-white/80" : "bg-brand-blue"}`} aria-hidden />
      {children}
    </p>
  );
}

/* 01 — Hero (white + subtle sky-blue atmospheric background) --------------- */
const VALUE_POINTS = [
  {
    icon: Users,
    title: "Real-world Focus",
    desc: "Built for genuine operational needs.",
  },
  {
    icon: Settings,
    title: "Product Driven",
    desc: "We create and own our products.",
  },
  {
    icon: BarChart3,
    title: "Subscription Based",
    desc: "Scalable solutions for long-term value.",
  },
];

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-[#EAF5FF]/60 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-[#DCEEFF]/50 blur-[120px] -z-10"
        aria-hidden
      />

      <div className="mx-auto w-[92%] max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-[46fr_54fr] lg:gap-10 xl:gap-14">
          {/* Left Column: Content */}
          <Reveal className="max-w-[640px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-brand-blue" aria-hidden />
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                About Maaptrix
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="mt-4 font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-[50px] lg:text-[54px] xl:text-[60px]">
              Technology Products<br />
              Built Around <span className="text-brand-blue">Real<br />
              Problems.</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4.5 max-w-[600px] text-[16px] leading-[1.58] text-[#53657D] sm:text-[17.5px]">
              Maaptrix is a technology company that builds, owns and manages its own software products,
              designed around real-world operational problems and delivered through subscription plans.
            </p>

            {/* Three Value Points */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-5">
              {VALUE_POINTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#EAF5FF] text-brand-blue sm:h-[50px] sm:w-[50px]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[14px] font-bold leading-snug text-brand-navy">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[12px] leading-[1.4] text-[#64748B]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-9">
              <Link
                href="#start-heading"
                className="group inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[12px] bg-brand-blue px-8 text-[15.5px] font-bold text-white shadow-[0_12px_24px_-8px_rgba(20,125,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-[0_14px_28px_-6px_rgba(20,125,255,0.7)] sm:h-[58px] sm:w-[290px]"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* Right Column: Building Visual & Floating Cards */}
          <Reveal delay={0.08} className="relative mt-4 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[720px]">
              {/* Decorative dotted pattern (6 cols x 4 rows) */}
              <div
                className="pointer-events-none absolute -top-8 right-24 hidden sm:grid grid-cols-6 gap-3 opacity-45 -z-0"
                aria-hidden
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                ))}
              </div>

              {/* Decorative organic pale blue background shape */}
              <div
                className="pointer-events-none absolute -inset-4 sm:-inset-6 -right-2 sm:-right-8 rounded-[36px] bg-gradient-to-tr from-[#EAF5FF] via-[#E2F0FF] to-[#DCEEFF] -z-10"
                aria-hidden
              />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px] border border-[#DCEEFF] bg-white shadow-[0_25px_60px_-25px_rgba(20,60,120,0.18)]">
                <Image
                  src="/about/about-story-building.jpg"
                  alt="Maaptrix headquarters building"
                  width={1100}
                  height={780}
                  priority
                  sizes="(min-width: 1280px) 700px, (min-width: 1024px) 50vw, 92vw"
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[500px] xl:h-[540px]"
                />
              </div>

              {/* Floating Card 1: Top Right */}
              <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-5 lg:-top-6 lg:-right-7 z-10 flex w-[185px] sm:w-[205px] items-center gap-3 rounded-[16px] border border-[#E2EEFC] bg-white p-3.5 sm:p-4 shadow-[0_12px_32px_-8px_rgba(20,60,120,0.14)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#EDF5FF] text-brand-blue">
                  <Building2 className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <div className="font-display text-[12px] sm:text-[12.5px] font-bold leading-[1.25] text-brand-navy">
                  Built for<br />
                  real-world<br />
                  operations
                </div>
              </div>

              {/* Floating Card 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 lg:-bottom-6 lg:-left-7 z-10 flex w-[265px] sm:w-[295px] items-center gap-3.5 rounded-[16px] border border-[#E2EEFC] bg-white p-3.5 sm:p-4 shadow-[0_14px_36px_-10px_rgba(20,60,120,0.16)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#EDF5FF] text-brand-blue">
                  <TrendingUp className="h-[22px] w-[22px]" strokeWidth={2.2} aria-hidden />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-[13.5px] sm:text-[14px] font-bold leading-tight text-brand-navy">
                    Scalable Products
                  </div>
                  <div className="mt-0.5 text-[11.5px] sm:text-[12px] font-medium text-[#64748B]">
                    For a Smarter Tomorrow
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

/* 02 — Where we start (light sky blue) ------------------------------------- */
const FOCUS_CARDS = [
  {
    icon: Bus,
    title: "School transportation & student safety",
    linkText: "School Transport",
    href: "/products/school-transport",
  },
  {
    icon: GraduationCap,
    title: "Academic and administrative operations",
    linkText: "School Management",
    href: "/products/school-management",
  },
  {
    icon: Users,
    title: "Better communication and engagement",
    linkText: "Parent and Student Apps",
    href: "/products",
  },
];

export function AboutWhereWeStart() {
  return (
    <section className="bg-[#F1F7FF] py-[55px] sm:py-[60px]" aria-labelledby="start-heading">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-brand-blue" aria-hidden />
              <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                Where We Start
              </p>
            </div>
            <h2
              id="start-heading"
              className="mt-3.5 font-display text-[28px] font-bold leading-[1.18] tracking-tight text-brand-navy sm:text-[31px]"
            >
              Building practical technology for<br className="hidden sm:inline" />{" "}
              <span className="text-brand-blue">everyday operations.</span>
            </h2>
            <p className="mt-3.5 max-w-[520px] text-[14px] leading-[1.6] text-slate-600 sm:text-[14.5px]">
              We began by focusing on practical digital solutions for school operations and related everyday operational needs, to help organizations run safer, simpler and more connected operations.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="flex justify-start lg:justify-end">
            <div className="w-full max-w-[520px] space-y-2.5">
              {FOCUS_CARDS.map(({ icon: Icon, title, linkText, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-[62px] w-full items-center gap-3.5 rounded-[12px] border border-[#E2EEFC] bg-white px-4 shadow-[0_2px_8px_rgba(20,125,255,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#EDF5FF] text-brand-blue">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-display text-[13.5px] font-bold leading-snug text-brand-navy sm:text-[14px]">
                      {title}
                    </div>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-brand-blue sm:text-[12px]">
                      {linkText}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 03 — Mission + Vision ---------------------------------------------------- */
const MISSION_POINTS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Users, title: "People Centric Solutions", desc: "Tools that make work effortless." },
  { icon: ShieldCheck, title: "Greater Accessibility", desc: "Technology for everyone." },
  { icon: BarChart3, title: "Better Experiences", desc: "Real impact for real people." },
];

const VISION_POINTS: { icon: LucideIcon; title: string }[] = [
  { icon: Lightbulb, title: "Practical Innovation" },
  { icon: Settings, title: "Responsible Technology" },
  { icon: BarChart3, title: "Measurable Operational Value" },
];

export function AboutMissionVision() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F8FF_100%)] py-16 sm:py-20" aria-label="Our mission and vision">
      <div className="page-container">
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-8 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:gap-10">
          {/* Mission */}
          <Reveal className="flex flex-col justify-center">
            <Label>Our Mission</Label>
            <h2 className="mt-5 font-display text-[30px] font-bold leading-[1.15] tracking-tight text-brand-navy sm:text-[38px]">
              To create simple, dependable and accessible <span className="text-brand-blue">digital products</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-slate-600 sm:text-[19px]">
              that help organizations manage everyday operations more efficiently and deliver better experiences to
              their users.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {MISSION_POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
                    <Icon className="h-7 w-7" fill="currentColor" fillOpacity={0.2} strokeWidth={2.2} aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-[16px] font-bold leading-snug text-brand-navy">{title}</p>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-slate-500">{desc}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-[#DCEAFF] bg-white p-4 shadow-[0_14px_34px_-26px_rgba(10,10,10,0.4)] transition-colors hover:border-brand-blue/50 sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white p-1.5 ring-1 ring-[#DCEAFF]">
                <Logo showWordmark={false} imageClassName="h-full w-full" />
              </span>
              <span className="flex-1 text-[15px] leading-snug text-brand-navy">
                Empowering organizations with technology that truly makes a difference.
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          </Reveal>

          {/* Vision */}
          <Reveal
            delay={0.08}
            className="relative rounded-[28px] bg-[linear-gradient(145deg,#141414_0%,#1C1C1C_60%,#0F0F0F_100%)] p-8 text-white sm:p-10 2xl:min-h-[640px]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]" aria-hidden>
              <div className="absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-[90px]" />
              <div className="absolute -bottom-32 left-1/3 h-[320px] w-[420px] rounded-full bg-brand-blue/15 blur-[90px]" />
            </div>

            <div className="relative 2xl:max-w-[45%]">
              <Label light>Our Vision</Label>
              <h2 className="mt-5 font-display text-[28px] font-semibold leading-[1.18] tracking-tight sm:text-[36px]">
                To build Maaptrix into a{" "}
                <span className="font-bold text-[#4DA8FF]">trusted Indian software product company</span>
              </h2>
              <p className="mt-4 text-[17px] leading-[1.55] text-white/85 sm:text-[19px]">
                known for practical innovation, responsible technology and subscription products that create measurable
                operational value.
              </p>
              <ul className="mt-8 space-y-3">
                {VISION_POINTS.map(({ icon: Icon, title }) => (
                  <li key={title} className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#4DA8FF]">
                      <Icon className="h-5 w-5" fill="currentColor" fillOpacity={0.25} aria-hidden />
                    </span>
                    <span className="text-[16px] font-medium">{title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product mock-up: in the panel's lower right on desktop, below the text on smaller screens */}
            <div className="relative mt-10 2xl:absolute 2xl:bottom-[-7%] 2xl:right-[-6%] 2xl:mt-0 2xl:w-[66%]">
              <div style={{ transform: "perspective(1600px) rotateY(-12deg) rotateX(3deg)" }}>
                <DeviceMockup />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 04 — Core principles (light sky blue 3x2 grid + bottom CTA bar) ----------- */
const PRINCIPLES_LIST = [
  {
    num: "01",
    title: "Practical Innovation",
    desc: "Technology built around genuine problems and useful outcomes.",
    renderIcon: () => (
      <svg
        className="h-[60px] w-[60px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v1" />
        <path d="M12 7a5 5 0 0 1 5 5c0 2-1 3.5-2 4.5V18H9v-1.5C8 15.5 7 14 7 12a5 5 0 0 1 5-5z" />
        <path d="M4.93 4.93l.7.7" />
        <path d="M19.07 4.93l-.7.7" />
        <path d="M2 12h1" />
        <path d="M21 12h1" />
        <path d="M12 9v3" stroke="#147DFF" />
        <circle cx="12" cy="12" r="1" fill="#147DFF" stroke="#147DFF" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Simplicity",
    desc: "Products that are easy to understand and easy to use.",
    renderIcon: () => (
      <svg
        className="h-[60px] w-[60px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" stroke="#147DFF" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Reliability",
    desc: "Software that works consistently when users need it.",
    renderIcon: () => (
      <svg
        className="h-[60px] w-[60px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeWidth="2" stroke="#147DFF" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Safety & Responsibility",
    desc: "Care for user safety, privacy and responsible design.",
    renderIcon: () => (
      <svg
        className="h-[60px] w-[60px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M8.5 16.5a4 4 0 0 1 7 0" stroke="#147DFF" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Customer Focus",
    desc: "Feedback from real users guides improvement.",
    renderIcon: () => (
      <svg
        className="h-[60px] w-[60px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="8.5" cy="6.5" r="2" fill="currentColor" />
        <circle cx="15.5" cy="6.5" r="2" fill="currentColor" />
        <path stroke="#147DFF" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Continuous Improvement",
    desc: "Launch is the beginning of the lifecycle, not the end.",
    renderIcon: () => (
      <svg
        className="h-[60px] w-[60px] text-brand-navy"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" stroke="#147DFF" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M21 21v-5h-5" stroke="#147DFF" />
        <path d="M9 15v-2" strokeWidth="2.2" strokeLinecap="round" stroke="#147DFF" />
        <path d="M12 15v-5" strokeWidth="2.2" strokeLinecap="round" stroke="#147DFF" />
        <path d="M15 15v-7" strokeWidth="2.2" strokeLinecap="round" stroke="#147DFF" />
      </svg>
    ),
  },
];

export function AboutPrinciples() {
  return (
    <section className="relative overflow-hidden bg-[#F4F9FF] py-18 sm:py-20 lg:py-24" aria-labelledby="principles-heading">
      {/* Subtle curved background shapes */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-[#E3F0FD]/60 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 -bottom-24 h-[500px] w-[500px] rounded-full bg-[#E8F3FE]/50 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto w-[92%] max-w-[1340px]">
        {/* Header block */}
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3.5">
            <span className="h-[2px] w-10 rounded-full bg-brand-blue" aria-hidden />
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              Core Principles
            </p>
          </div>
          <h2
            id="principles-heading"
            className="mt-3.5 font-display text-[34px] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[44px] lg:text-[48px]"
          >
            What guides <span className="text-brand-blue">how we build.</span>
          </h2>
          <p className="mt-3.5 max-w-[760px] text-[16px] leading-[1.55] text-[#53657D] sm:text-[17.5px]">
            Our core principles shape every product, decision and experience we create at Maaptrix.
          </p>
        </Reveal>

        {/* 3 x 2 Cards Grid */}
        <Reveal delay={0.08}>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 sm:mt-10">
            {PRINCIPLES_LIST.map(({ num, title, desc, renderIcon }) => (
              <div
                key={num}
                className="flex min-h-[255px] flex-col justify-between gap-5 rounded-[20px] border border-[#DCE9F7] bg-white p-6 shadow-[0_8px_24px_rgba(30,90,150,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_12px_28px_rgba(30,90,150,0.1)] sm:min-h-[270px] sm:p-7"
              >
                {/* Top Icon */}
                <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] sm:h-[110px] sm:w-[110px]">
                  {renderIcon()}
                </div>

                {/* Bottom Number, Title & Description */}
                <div>
                  <div className="flex items-center gap-3 font-display">
                    <span className="text-[16.5px] font-bold text-brand-blue sm:text-[17px]">
                      {num}
                    </span>
                    <h3 className="text-[17.5px] font-bold text-brand-navy sm:text-[18px]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.5] text-[#53657D] sm:text-[14.5px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Bottom Horizontal CTA Bar */}
        <Reveal delay={0.12} className="mt-8 sm:mt-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[18px] border border-[#DCE9F7] bg-white/90 px-7 py-7 shadow-[0_8px_24px_rgba(30,90,150,0.04)] backdrop-blur-sm sm:flex-row sm:items-center sm:px-10 sm:py-8">
            <h3 className="font-display text-[25px] font-bold leading-[1.2] text-brand-navy sm:text-[28px] lg:text-[30px]">
              Explore what Maaptrix <span className="text-brand-blue">is building.</span>
            </h3>
            <Link
              href="/products"
              className="group inline-flex h-[54px] w-full shrink-0 items-center justify-center gap-2 rounded-[12px] bg-brand-blue px-7 text-[15px] font-bold text-white shadow-[0_10px_22px_-6px_rgba(20,125,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-[0_12px_26px_-4px_rgba(20,125,255,0.7)] sm:h-[56px] sm:w-[215px]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — Closing CTA (integrated directly in principles section above) -------- */
export function AboutClosingCTA() {
  return null;
}
