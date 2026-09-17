import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    index: "01",
    title: "Designed for real operations",
    description: "Built around the way schools actually run, day to day.",
  },
  {
    index: "02",
    title: "Built for simplicity",
    description: "Straightforward workflows for admins, drivers and parents.",
  },
  {
    index: "03",
    title: "Focused on safety",
    description: "Visibility and accountability built into every workflow.",
  },
  {
    index: "04",
    title: "Continuously improved",
    description: "Maintained and refined long after the first release.",
  },
];

export default function ValueStrip() {
  return (
    <section className="relative bg-white pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 border-t border-b border-brand-line sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map(({ index, title, description }, i) => (
              <div
                key={index}
                className={`px-1 py-7 sm:px-6 ${
                  i !== 0 ? "border-t border-brand-line sm:border-t-0 sm:border-l" : ""
                } ${i === 2 ? "sm:border-t sm:border-l lg:border-t-0" : ""}`}
              >
                <span className="font-mono text-xs font-semibold text-brand-blue/70">
                  {index}
                </span>
                <p className="mt-4 text-[0.8rem] font-bold uppercase tracking-[0.08em] text-brand-navy">
                  {title}
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-brand-navy/55">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
