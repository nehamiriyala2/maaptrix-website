import type { Metadata } from "next";
import LegalPage, { LEGAL_DRAFT_ROBOTS } from "@/components/legal/LegalPage";
import { TERMS_OF_USE } from "@/components/legal/legalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/terms-of-use",
    "Terms of Use",
    "Terms governing access to and use of Maaptrix websites, applications and services, including authorised use, account responsibility and location information.",
  ),
  robots: LEGAL_DRAFT_ROBOTS,
};

export default function TermsOfUsePage() {
  return <LegalPage eyebrow="Legal" document={TERMS_OF_USE} />;
}
