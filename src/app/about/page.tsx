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
  "About Us",
  "Maaptrix is a technology company that builds, owns and manages its own software products around real-world operational problems. Our mission, vision and principles.",
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
