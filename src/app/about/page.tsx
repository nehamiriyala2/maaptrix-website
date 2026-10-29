import {
  AboutHero,
  AboutWhereWeStart,
  AboutMissionVision,
  AboutPrinciples,
  AboutClosingCTA,
} from "@/components/about/AboutSections";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/about",
  "About Maaptrix | Indian Software Product Company",
  "Maaptrix is an Indian technology company building and managing its own software products for real-world operations. Our mission, vision and principles.",
  { absolute: true },
);

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhereWeStart />
      <AboutMissionVision />
      <AboutPrinciples />
      <AboutClosingCTA />
    </>
  );
}
