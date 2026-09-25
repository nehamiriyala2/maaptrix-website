import BlueCTA from "@/components/BlueCTA";

export default function ProductsCTA({ tinted = false }: { tinted?: boolean }) {
  return (
    <BlueCTA
      id="products-cta-heading"
      eyebrow="Product Demonstrations"
      title="Want to See a Maaptrix Product in Action?"
      text="Request a product demonstration or talk to us about how a Maaptrix solution can fit your organization."
      primary={{ href: "/contact", label: "Request a Demo" }}
      above={tinted ? "#EAF4FF" : "#FFFFFF"}
    />
  );
}
