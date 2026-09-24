import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import WhatWeDo from "@/components/about/WhatWeDo";
import ProductFirstPositioning from "@/components/about/ProductFirstPositioning";
import WhereWeStart from "@/components/about/WhereWeStart";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutLifecycleSummary from "@/components/about/AboutLifecycleSummary";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Maaptrix Private Limited is a technology company focused on building and managing its own software products around real-world operational problems.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <WhatWeDo />
      <ProductFirstPositioning />
      <WhereWeStart />
      <AboutMissionVision />
      <AboutCoreValues />
      <AboutLifecycleSummary />
      <AboutCTA />
    </>
  );
}
