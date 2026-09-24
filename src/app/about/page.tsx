import {
  AboutClosingCTA,
  AboutIntro,
  AboutMissionVision,
  AboutPrinciples,
  AboutWhereWeStart,
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
      <AboutIntro />
      <AboutWhereWeStart />
      <AboutMissionVision />
      <AboutPrinciples />
      <AboutClosingCTA />
    </>
  );
}
