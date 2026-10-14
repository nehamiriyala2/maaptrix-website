import BlueCTA from "./BlueCTA";

export default function FinalCTA() {
  return (
    <BlueCTA
      id="final-cta-heading"
      eyebrow="Get Started with Maaptrix"
      title="Ready to Simplify Your School Operations?"
      text="Discover how Maaptrix can help make school transportation safer and everyday operations simpler."
      primary={{ href: "/contact", label: "Request a Free Demo" }}
    />
  );
}
