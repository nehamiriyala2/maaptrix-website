import type { Metadata } from "next";
import WhyHero from "@/components/why-maaptrix/WhyHero";
import KeyDifference from "@/components/why-maaptrix/KeyDifference";
import SixDifferentiators from "@/components/why-maaptrix/SixDifferentiators";
import ProductEcosystemDirection from "@/components/why-maaptrix/ProductEcosystemDirection";
import CustomerValue from "@/components/why-maaptrix/CustomerValue";
import WhyCTA from "@/components/why-maaptrix/WhyCTA";

export const metadata: Metadata = {
  title: "Why Maaptrix | Product-First Software Solutions",
  description:
    "Discover how Maaptrix builds focused software products through a product-first approach, end-to-end ownership, usability and continuous improvement.",
};

export default function WhyMaaptrixPage() {
  return (
    <>
      <WhyHero />
      <KeyDifference />
      <SixDifferentiators />
      <ProductEcosystemDirection />
      <CustomerValue />
      <WhyCTA />
    </>
  );
}
