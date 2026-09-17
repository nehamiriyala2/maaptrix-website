import Reveal from "./Reveal";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-line to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] lg:grid-cols-2">
          {/* MISSION */}
          <Reveal>
            <div className="relative h-full border border-brand-line bg-white p-8 sm:p-10 lg:p-14">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our Mission
              </p>
              <p className="mt-6 font-display text-[1.6rem] font-medium leading-[1.3] tracking-tight text-brand-navy sm:text-3xl lg:text-[2.2rem]">
                To create simple, dependable and accessible digital products
                that help organizations manage everyday operations more
                efficiently and deliver better experiences to their users.
              </p>
            </div>
          </Reveal>

          {/* VISION */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden border border-brand-navy bg-brand-navy p-8 text-white sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-blue/25 blur-3xl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <p className="relative text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our Vision
              </p>
              <p className="relative mt-6 font-display text-[1.6rem] font-medium leading-[1.3] tracking-tight text-white sm:text-3xl lg:text-[2.2rem]">
                To build Maaptrix into a trusted Indian software product
                company known for practical innovation, responsible
                technology and subscription products that create measurable
                operational value.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
