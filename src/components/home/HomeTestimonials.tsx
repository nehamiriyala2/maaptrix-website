import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

/*
 * Testimonials section. Add REAL testimonials (with the person's permission)
 * to this list; while it is empty the section is not rendered at all, so the
 * site never shows invented quotes, names or ratings.
 */
type Testimonial = { quote: string; name: string; role: string; rating?: number };

const TESTIMONIALS: Testimonial[] = [];

export default function HomeTestimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="bg-[#F4F9FF] py-16 sm:py-20 lg:py-24" aria-labelledby="home-testimonials-heading">
      <div className="page-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
            <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
            What Schools Say
          </p>
          <h2
            id="home-testimonials-heading"
            className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[40px] lg:text-[46px] xl:text-[50px]"
          >
            Trusted by Educators <span className="text-brand-blue">and School Communities</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role, rating }) => (
            <Reveal key={name}>
              <figure className="flex h-full flex-col rounded-[16px] border border-[#D5E6F7] bg-white p-6 shadow-[0_10px_28px_-20px_rgba(16,42,86,0.35)]">
                <Quote className="h-7 w-7 text-brand-blue" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[15.5px] leading-[1.65] text-brand-navy">{quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#EDF2F8] pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4FF] text-[13px] font-bold text-brand-blue">
                    {name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[15px] font-semibold text-brand-navy">{name}</span>
                    <span className="block text-[13px] text-[#63748B]">{role}</span>
                  </span>
                  {rating && (
                    <span className="flex gap-0.5 text-brand-blue" aria-label={`${rating} out of 5`}>
                      {Array.from({ length: rating }, (_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                      ))}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
