import Reveal from "@/components/Reveal";

export default function ContactHero() {
  return (
    <section className="bg-[#F2F8FF] pb-10 pt-12 sm:pb-12 sm:pt-14">
      <div className="page-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.24em] text-brand-blue">Contact Maaptrix</p>
          <h1 className="mt-4 font-display text-[34px] leading-[1.06] sm:text-[42px] lg:text-[52px] xl:text-[58px] font-extrabold tracking-[-0.03em] text-brand-navy">
            Let&apos;s Talk About What
            <br />
            <span className="text-brand-blue">You&apos;re Building.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-slate-600 sm:text-[19px]">
            Tell us what you need and the Maaptrix team will get back to you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
