import Reveal from "@/components/Reveal";

const TOPICS = ["Product enquiries", "Demo requests", "Business discussions", "General enquiries"];

export default function ContactHero() {
  return (
    <section className="bg-[linear-gradient(180deg,#EEF6FF_0%,#F7FAFE_100%)] pb-12 pt-12 sm:pb-14 sm:pt-16">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-blue">
            <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
            Contact Maaptrix
          </p>
          <h1 className="mt-5 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-navy sm:text-[48px]">
            Let&apos;s Talk About What <span className="text-brand-blue">You&apos;re Building.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-slate-600">
            Tell us what you need and the Maaptrix team will get back to you.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="What you can contact us about">
            {TOPICS.map((t) => (
              <li key={t} className="rounded-full border border-[#CFE1F7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-brand-navy">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
