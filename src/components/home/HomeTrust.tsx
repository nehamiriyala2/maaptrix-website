import { Headset, MapPin, Server, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: "Secure by Design", desc: "Responsible handling of operational and user data." },
  { icon: Server, title: "Reliable Technology", desc: "Designed for dependable everyday school operations." },
  { icon: Headset, title: "Continuous Support", desc: "Ongoing product improvements and customer assistance." },
  { icon: MapPin, title: "Built in India", desc: "Designed around the practical needs of Indian institutions." },
];

export default function HomeTrust() {
  return (
    <section className="bg-white pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-10" aria-labelledby="home-trust-heading">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
            <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
            Our Commitment
          </p>
          <h2
            id="home-trust-heading"
            className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[40px] lg:text-[46px] xl:text-[50px]"
          >
            Built for Dependable <span className="text-brand-blue">Everyday Operations</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="rounded-[16px] border border-[#D5E6F7] bg-white p-6 shadow-[0_10px_28px_-20px_rgba(16,42,86,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#EAF4FF] text-brand-blue">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-[19px] font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#40536B]">{desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
