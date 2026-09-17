import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyMaaptrix from "@/components/WhyMaaptrix";
import ProcessSection from "@/components/ProcessSection";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <AboutSection />
        <ProductsSection />
        <WhyMaaptrix />
        <ProcessSection />
        <MissionVision />
        <CoreValues />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
