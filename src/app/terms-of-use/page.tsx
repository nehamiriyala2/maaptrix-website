import type { Metadata } from "next";
import LegalPage, { LEGAL_PLACEHOLDER_ROBOTS } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/terms-of-use",
    "Terms of Use",
    "Terms of Use for the Maaptrix website and digital products.",
  ),
  robots: LEGAL_PLACEHOLDER_ROBOTS,
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      summary="The terms that apply to using the Maaptrix website and products."
    />
  );
}
