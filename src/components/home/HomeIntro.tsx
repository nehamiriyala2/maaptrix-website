import Link from "next/link";
import { ArrowRight, Boxes, HeartHandshake, Sprout } from "lucide-react";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const PRINCIPLES = [
  { icon: HeartHandshake, title: "People First", desc: "Built for the students, parents and staff who use it." },
  { icon: Boxes, title: "Product Driven", desc: "We build, own and manage our own products." },
  { icon: Sprout, title: "Long-Term Thinking", desc: "Products that keep improving as needs grow." },
];

export default function HomeIntro() {
  return (
    <section className="overflow-hidden bg-white pb-8 pt-16 sm:pt-20 lg:pb-10 lg:pt-16" aria-labelledby="home-about-heading">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              About Maaptrix
            </p>
            <h2
              id="home-about-heading"
              className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-navy sm:text-[44px] lg:text-[50px] xl:text-[58px]"
            >
              Software Products
              <br />
              <span className="text-brand-blue">
                Built for
                <br />
                Real-World Needs
              </span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-[#40536B]">
              Maaptrix Private Limited is a technology company focused on building and managing its own software
              products. We identify real-world challenges, create purpose-built digital solutions and deliver them to
              customers through subscription plans.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-4">
              {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="border-l-2 border-brand-blue pl-4">
                  <Icon className="h-6 w-6 text-brand-blue" aria-hidden />
                  <p className="mt-3 font-display text-[17px] font-bold text-brand-navy">{title}</p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[#40536B]">{desc}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 text-[16px] font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="relative mx-auto w-full max-w-[560px] min-w-0">
            <Image
              src="/hero/about-visual.png"
              alt="Maaptrix dashboard on a laptop with live bus tracking, attendance overview and route performance, beside the Maaptrix mobile app showing live bus tracking"
              width={1082}
              height={941}
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-contain [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,#000_6%),linear-gradient(to_bottom,transparent_0%,#000_4%,#000_94%,transparent_100%)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
