import type { Metadata } from "next";
import LegalPage, { LEGAL_DRAFT_ROBOTS } from "@/components/legal/LegalPage";
import { TERMS_OF_USE } from "@/components/legal/legalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/terms-of-use",
    "Terms of Use",
    "Terms of Use for the Maaptrix website and digital products.",
  ),
  robots: LEGAL_DRAFT_ROBOTS,
};

export default function TermsOfUsePage() {
  return <LegalPage eyebrow="Legal" document={TERMS_OF_USE} />;
}
