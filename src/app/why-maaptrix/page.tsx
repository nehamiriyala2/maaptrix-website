import {
  WhyApproach,
  WhyClosingCTA,
  WhyDifferentiators,
  WhyHero,
  WhyImpact,
} from "@/components/why-maaptrix/WhySections";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/why-maaptrix",
  "Why Choose Maaptrix | Purpose-Built Software for Schools",
  "Why Maaptrix builds focused software products: product ownership, purpose-built solutions, simplicity and continuous improvement.",
  { absolute: true },
);

export default function WhyMaaptrixPage() {
  return (
    <>
      <WhyHero />
      <WhyApproach />
      <WhyImpact />
      <WhyDifferentiators />
      <WhyClosingCTA />
    </>
  );
}
