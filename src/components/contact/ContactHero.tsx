import Reveal from "@/components/Reveal";

export default function ContactHero() {
  return (
    <section className="surface-blue relative overflow-hidden pb-14 pt-12 text-white sm:pb-16 sm:pt-14 lg:pb-44 lg:pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 -top-16 h-[380px] w-[380px] rotate-12 rounded-[64px] border border-white/15" />
        <div className="absolute bottom-[-120px] right-[30%] h-[300px] w-[300px] rotate-12 rounded-[56px] bg-white/[0.05]" />
        <div
          className="absolute left-[46%] top-10 h-[110px] w-[150px] opacity-30"
          style={{ backgroundImage: "radial-gradient(#FFFFFF 1.4px, transparent 1.6px)", backgroundSize: "18px 18px" }}
        />
      </div>
      <div className="page-container relative">
        <Reveal className="max-w-[640px]">
          <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white/80">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
            Contact Maaptrix
          </p>
          <h1 className="mt-4 font-display text-[34px] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            Let&apos;s Talk About What
            <br />
            <span className="text-[#BFE0FF]">You&apos;re Building.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-white/85 sm:text-[19px]">
            Tell us what you need and the Maaptrix team will get back to you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
