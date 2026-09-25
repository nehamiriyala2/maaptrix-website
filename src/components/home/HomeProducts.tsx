import Link from "next/link";
import { ArrowRight, Bus, Check, GraduationCap, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SchoolAdminUI, TransportAdminUI } from "@/components/home/ProductUIs";

function ProductCopy({
  num,
  icon: Icon,
  name,
  desc,
  features,
  href,
}: {
  num: string;
  icon: LucideIcon;
  name: string;
  desc: string;
  features: string[];
  href: string;
}) {
  return (
    <div>
      <span className="inline-flex items-center gap-2.5 rounded-full border border-[#CFE4FF] bg-white px-3.5 py-1.5 text-[13px] font-bold text-brand-blue">
        <Icon className="h-4 w-4" aria-hidden />
        {num}
      </span>
      <h3 className="mt-5 font-display text-[30px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[36px] lg:text-[40px]">
        {name}
      </h3>
      <p className="mt-4 text-[17px] leading-[1.7] text-[#40536B]">{desc}</p>
      <ul className="mt-6 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[16px] font-medium text-brand-navy">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
              <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="group mt-8 inline-flex h-12 items-center gap-2 rounded-[10px] bg-brand-blue px-6 text-[15px] font-semibold text-white shadow-[0_12px_26px_-14px_rgba(22,131,247,0.8)] transition-colors hover:bg-brand-blue-dark"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

export default function HomeProducts() {
  return (
    <>
      {/* Our Products intro + School Management (light blue) */}
      <section className="overflow-clip bg-[linear-gradient(180deg,#EAF4FF_0%,#F4F9FF_100%)] py-16 sm:py-20 lg:py-24" aria-labelledby="home-products-heading">
        <div className="page-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              Our Products
            </p>
            <h2
              id="home-products-heading"
              className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[40px] lg:text-[46px] xl:text-[50px]"
            >
              Products Built for <span className="text-brand-blue">Real Operations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.65] text-[#40536B]">
              Maaptrix products are designed to solve real-world operational challenges for educational institutions,
              with a focus on simplicity, reliability and impact.
            </p>
          </Reveal>

          <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12 xl:gap-14">
            <Reveal className="order-2 min-w-0 lg:order-1 xl:-ml-[clamp(0px,3.5vw,72px)]">
              <SchoolAdminUI />
            </Reveal>
            <Reveal delay={0.08} className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start lg:pt-6">
              <ProductCopy
                num="Product 01"
                icon={GraduationCap}
                name="School Management"
                desc="A complete school management platform designed to streamline academic and administrative operations."
                features={["Student Management", "Attendance", "Academics", "Communication", "Reports & Analytics", "Notifications"]}
                href="/products/school-management"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* School Transportation (white) */}
      <section className="overflow-clip bg-white py-16 sm:py-20 lg:py-24" aria-label="School Transportation">
        <div className="page-container">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12 xl:gap-14">
            <Reveal className="lg:sticky lg:top-28 lg:self-start lg:pt-6">
              <ProductCopy
                num="Product 02"
                icon={Bus}
                name="School Transportation"
                desc="A connected transport platform for school administrators, drivers and parents, with live vehicle tracking, route visibility, safety workflows and parent alerts."
                features={["Live Bus Tracking", "Routes & Stops", "Driver Management", "Student Tracking", "Alerts & Notifications", "Reports & Analytics"]}
                href="/products/school-transport"
              />
            </Reveal>
            <Reveal delay={0.08} className="min-w-0 xl:-mr-[clamp(0px,3.5vw,72px)]">
              <TransportAdminUI />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
