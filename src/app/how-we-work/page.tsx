import type { Metadata } from "next";
import HowWeWorkHero from "@/components/how-we-work/HowWeWorkHero";
import ProcessIntro from "@/components/how-we-work/ProcessIntro";
import ProcessJourney from "@/components/how-we-work/ProcessJourney";
import LifecycleLoop from "@/components/how-we-work/LifecycleLoop";
import ProductExample from "@/components/how-we-work/ProductExample";
import ProductThinking from "@/components/how-we-work/ProductThinking";
import CustomerProcessValue from "@/components/how-we-work/CustomerProcessValue";
import HowWeWorkCTA from "@/components/how-we-work/HowWeWorkCTA";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Discover how Maaptrix transforms real-world operational problems into focused, reliable software products through our continuous product lifecycle.",
};

export default function HowWeWorkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero Section */}
      <HowWeWorkHero />

      {/* 2. Process Introduction */}
      <ProcessIntro />

      {/* 3. Six-Stage Process Journey */}
      <ProcessJourney />

      {/* 4. Visual Lifecycle Closed Loop */}
      <LifecycleLoop />

      {/* 5. Product Example (School Transport) */}
      <ProductExample />

      {/* 6. Product Thinking Principles */}
      <ProductThinking />

      {/* 7. What This Means for Organizations */}
      <CustomerProcessValue />

      {/* 8. Final CTA */}
      <HowWeWorkCTA />
    </main>
  );
}
