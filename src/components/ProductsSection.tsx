"use client";

import { useRef, useState } from "react";
import { ArrowRight, Bus, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import TransportDashboard from "./TransportDashboard";
import SchoolDashboard from "./SchoolDashboard";

const TRANSPORT_GROUPS = [
  {
    label: "Transport Visibility",
    items: ["Live vehicle tracking", "Route visibility", "ETA alerts"],
  },
  {
    label: "Safety",
    items: ["SOS workflows", "Pickup / drop attendance", "Guardian validation"],
  },
  {
    label: "Operations",
    items: ["Route replay", "Operational reports", "Transport alerts"],
  },
  {
    label: "Communication",
    items: ["Driver connectivity", "Parent visibility", "Support workflow"],
  },
];

const SCHOOL_GROUPS = [
  {
    label: "Student Lifecycle",
    items: ["Student onboarding", "Student profiles", "Document upload"],
  },
  {
    label: "Academics",
    items: ["Attendance", "Homework sharing", "Marks & records"],
  },
  {
    label: "Communication",
    items: ["Notifications", "Announcements", "Parent-facing information"],
  },
  {
    label: "Events",
    items: ["Event calendar", "Event photo sharing"],
  },
];

function ProductShowcase({
  badge,
  title,
  tagline,
  groups,
  dashboard,
  cta,
  reverse = false,
}: {
  badge: string;
  title: string;
  tagline: string;
  groups: { label: string; items: string[] }[];
  dashboard: React.ReactNode;
  cta: string;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Product Visual (6 cols) */}
        <div className="lg:col-span-6">{dashboard}</div>

        {/* Details Column (6 cols) */}
        <div className="lg:col-span-6">
          <span className="inline-flex rounded-full bg-brand-blue-light px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wider text-brand-blue">
            {badge}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.9rem]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
            {tagline}
          </p>

          <div className="mt-7 grid grid-cols-1 gap-5 border-t border-brand-line pt-7 sm:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-navy/45">
                  {group.label}
                </p>
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-brand-navy/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-all duration-300 hover:text-brand-blue-dark"
            >
              {cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProductsSection() {
  const [active, setActive] = useState<"transport" | "school">("transport");
  const transportRef = useRef<HTMLDivElement>(null);
  const schoolRef = useRef<HTMLDivElement>(null);

  const goTo = (target: "transport" | "school") => {
    setActive(target);
    const el = target === "transport" ? transportRef.current : schoolRef.current;
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="products" className="relative bg-[#f5f9fd] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-line" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-xs">
              Purpose-Built Products
            </p>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Purpose-Built for School Operations
          </h2>
          <p className="mt-3 text-base text-brand-navy/70">
            Focused digital products designed around real operational needs.
          </p>
        </Reveal>

        {/* Product Ecosystem Switcher */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/40">
              Our Product Ecosystem
            </span>
            <div className="inline-flex items-center gap-1 rounded-[11px] border border-brand-line bg-white p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => goTo("transport")}
                className={`flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  active === "transport"
                    ? "bg-brand-navy text-white shadow-[0_2px_8px_-2px_rgba(11,31,65,0.3)]"
                    : "text-brand-navy/55 hover:text-brand-navy"
                }`}
              >
                <Bus className="h-3.5 w-3.5" />
                School Transport
              </button>
              <button
                type="button"
                onClick={() => goTo("school")}
                className={`flex items-center gap-1.5 rounded-[8px] px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  active === "school"
                    ? "bg-brand-navy text-white shadow-[0_2px_8px_-2px_rgba(11,31,65,0.3)]"
                    : "text-brand-navy/55 hover:text-brand-navy"
                }`}
              >
                <GraduationCap className="h-3.5 w-3.5" />
                School Management
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20">
          <div ref={transportRef}>
            <ProductShowcase
              badge="Flagship Product"
              title="School Transport Management System"
              tagline="A subscription-based school transport platform designed to help schools manage transportation, improve visibility and strengthen communication between school administrators, drivers and parents."
              groups={TRANSPORT_GROUPS}
              dashboard={<TransportDashboard />}
              cta="Explore School Transport"
            />
          </div>

          {/* Ecosystem connector */}
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-brand-line sm:w-24" />
              <p className="text-center text-sm font-medium text-brand-navy/50">
                One product philosophy. Purpose-built experiences.
              </p>
              <span className="h-px w-16 bg-brand-line sm:w-24" />
            </div>
          </Reveal>

          <div ref={schoolRef}>
            <ProductShowcase
              badge="Operations Module"
              title="Small School Management Module"
              tagline="A lightweight subscription module intended for smaller schools and kindergartens that need essential digital administration without the complexity of a large enterprise school-management platform."
              groups={SCHOOL_GROUPS}
              dashboard={<SchoolDashboard />}
              cta="Explore School Management"
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  );
}
