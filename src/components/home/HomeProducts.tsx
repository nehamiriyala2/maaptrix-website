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
      className="bg-[#F2F8FF] py-12 sm:py-16 lg:py-20"
      aria-labelledby="home-products-heading"
    >
      <div className="page-container">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:gap-10">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              Our Products
            </p>
            <h2
              id="home-products-heading"
              className="mt-4 font-display text-[30px] leading-[1.12] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-brand-navy"
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
                    className="group flex items-start gap-4 rounded-2xl border border-[#CFE4FF] bg-white p-5 shadow-[0_10px_30px_-24px_rgba(10,10,10,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50"
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
            <Image
              src="/hero/home-products-visual.jpg"
              alt="Maaptrix parent app showing live school bus tracking, beside students boarding a school bus"
              width={878}
              height={755}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full object-contain [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,#000_5%,#000_96%,transparent_100%),linear-gradient(to_bottom,transparent_0%,#000_5%,#000_90%,transparent_100%)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
