import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bus, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";

const PRODUCTS = [
  {
    num: "01",
    icon: Bus,
    name: "School Transport Management System",
    desc: "Live vehicle tracking, route visibility, driver connectivity, safety protocols & parent alerts.",
    href: "/products/school-transport",
  },
  {
    num: "02",
    icon: GraduationCap,
    name: "Small School Management Module",
    desc: "Essential digital administration: student onboarding, daily attendance, academic records & notices.",
    href: "/products/school-management",
  },
];

export default function HomeProducts() {
  return (
    <section
      className="bg-[linear-gradient(180deg,#EEF6FF_0%,#F7FAFE_100%)] py-16 sm:py-20"
      aria-labelledby="home-products-heading"
    >
      <div className="page-container">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              Our Products
            </p>
            <h2
              id="home-products-heading"
              className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[40px]"
            >
              Software built around <span className="text-brand-blue">real operations.</span>
            </h2>
            <p className="mt-4 max-w-[560px] text-[17px] leading-[1.65] text-slate-600">
              Maaptrix products are designed to solve real-world operational challenges for educational institutions,
              with a focus on simplicity, reliability and impact.
            </p>

            <ul className="mt-8 space-y-4">
              {PRODUCTS.map(({ num, icon: Icon, name, desc, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-start gap-4 rounded-2xl border border-[#DCEAFF] bg-white p-5 shadow-[0_10px_30px_-24px_rgba(10,10,10,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="text-[12px] font-bold text-brand-blue">Product {num}</span>
                      <span className="mt-0.5 block font-display text-[17px] font-bold text-brand-navy sm:text-[18px]">
                        {name}
                      </span>
                      <span className="mt-1 block text-[14.5px] leading-snug text-slate-500">{desc}</span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue">
                        Explore product
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy hover:text-brand-blue"
            >
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[26px] border border-[#DCEAFF] bg-white shadow-[0_30px_70px_-40px_rgba(10,10,10,0.45)]">
              <Image
                src="/hero/school-ecosystem-scene.jpg"
                alt="Illustrated school campus with a school bus following a highlighted route"
                width={1376}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
