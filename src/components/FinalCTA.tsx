import BlueCTA from "./BlueCTA";

export default function FinalCTA() {
  return (
    <BlueCTA
      id="final-cta-heading"
      eyebrow="Get Started with Maaptrix"
      title="Build Better Operations with Maaptrix."
      text="Let's discuss how Maaptrix can support your school's operational needs with practical, user-focused solutions."
      primary={{ href: "/contact", label: "Request a Demo" }}
    />
  );
}
