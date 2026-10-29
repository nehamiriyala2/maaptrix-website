import type { Metadata } from "next";
import LegalPage, { LEGAL_DRAFT_ROBOTS } from "@/components/legal/LegalPage";
import { PRIVACY_POLICY } from "@/components/legal/legalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/privacy-policy",
    "Privacy Policy",
    "How Maaptrix collects, uses, stores, shares and protects personal information, including student and location data, across its digital products.",
  ),
  robots: LEGAL_DRAFT_ROBOTS,
};

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Legal" document={PRIVACY_POLICY} />;
}
