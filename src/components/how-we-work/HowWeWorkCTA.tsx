import BlueCTA from "@/components/BlueCTA";

export default function HowWeWorkCTA() {
  return (
    <BlueCTA
      id="hww-cta-heading"
      eyebrow="Start a Conversation"
      title="Have an Operational Problem Worth Solving?"
      text="Explore the products Maaptrix is building for real-world operations."
      primary={{ href: "/products", label: "Explore Our Products" }}
      secondary={{ href: "/contact", label: "Request a Demo" }}
      above="#EAF4FF"
    />
  );
}
