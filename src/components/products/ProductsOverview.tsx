import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bus, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import StackedCards from "@/components/scroll/StackedCards";
import { StoryCard, type StoryCardData } from "@/components/scroll/StoryCard";

function ProductMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[18px] border border-[#D5E8FA] bg-[#F2F8FF]">
      <Image src={src} alt={alt} fill quality={90} sizes="(min-width: 768px) 560px, 100vw" className="object-contain" />
    </div>
  );
}

function ProductActions({ href }: { href: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href={href}
        className="group inline-flex h-12 items-center gap-2 rounded-[11px] bg-brand-blue px-6 text-[15px] font-semibold text-white shadow-[0_12px_26px_-14px_rgba(22,131,245,0.8)] transition-colors hover:bg-brand-blue-dark"
      >
        Explore Product
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
      <span className="text-[13px] font-semibold text-[#6B7C93]">Subscription Model</span>
    </div>
  );
}

const PRODUCTS: StoryCardData[] = [
  {
    num: "Product 01",
    icon: GraduationCap,
    title: "Small School Management Module",
    text: "Essential digital administration for smaller schools and kindergartens, without the complexity of a large enterprise platform.",
    points: [
      "Student onboarding & profile management",
      "Daily attendance & academic records",
      "Parent announcements & event updates",
    ],
    visualTitle: "School Management",
    media: <ProductMedia src="/hero/school-card-scene.jpg" alt="Tablet displaying a school administration dashboard" />,
    footer: <ProductActions href="/products/school-management" />,
  },
  {
    num: "Product 02",
    icon: Bus,
    title: "School Transport Management System",
    text: "A connected platform for school transport: administrators, drivers and parents share live, organized and safety-focused transport information.",
    points: [
      "Live GPS tracking & route visibility",
      "Driver connectivity & pickup/drop attendance",
      "Parent ETA alerts & SOS workflows",
    ],
    visualTitle: "Transport Management",
    media: <ProductMedia src="/hero/transport-card-scene.jpg" alt="Smartphone showing a school bus route map beside a school bus" />,
    footer: <ProductActions href="/products/school-transport" />,
  },
];

export default function ProductsOverview() {
  return (
    <section id="overview" className="surface-glow-right scroll-mt-24 relative py-16 sm:py-20">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Product Ecosystem
          </span>
          <h2 className="mt-4 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy">
            Two Focused Products, <span className="text-brand-blue">One Operating Discipline</span>
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-slate-600 sm:text-lg">
            Maaptrix products are designed to solve real-world operational challenges for educational institutions,
            with a focus on simplicity, reliability and impact.
          </p>
        </Reveal>

        <div className="mt-10">
          <StackedCards>
            {PRODUCTS.map((p) => (
              <StoryCard key={p.num} {...p} />
            ))}
          </StackedCards>
        </div>
      </div>
    </section>
  );
}
