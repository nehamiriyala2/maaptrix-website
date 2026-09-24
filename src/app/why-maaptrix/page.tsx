import {
  WhyApproach,
  WhyClosingCTA,
  WhyDifferentiators,
  WhyHero,
  WhyProductCompany,
} from "@/components/why-maaptrix/WhySections";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/why-maaptrix",
  "Why Choose Maaptrix",
  "Why Maaptrix builds focused software products: product ownership, purpose-built solutions, simplicity and continuous improvement.",
);

export default function WhyMaaptrixPage() {
  return (
    <>
      <WhyHero />
      <WhyApproach />
      <WhyDifferentiators />
      <WhyProductCompany />
      <WhyClosingCTA />
    </>
  );
}
