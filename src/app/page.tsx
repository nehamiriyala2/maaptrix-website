import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import ProblemToProductSection from "@/components/ProblemToProductSection";
import HomeProductPreview from "@/components/HomeProductPreview";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ProblemToProductSection />
      <HomeProductPreview />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
