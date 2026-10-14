import type { Metadata } from "next";
import LegalPage, { LEGAL_PLACEHOLDER_ROBOTS } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/privacy-policy",
    "Privacy Policy",
    "Privacy Policy for Maaptrix Private Limited and its digital products.",
  ),
  robots: LEGAL_PLACEHOLDER_ROBOTS,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      summary="How Maaptrix Private Limited handles personal information across its website and products."
    />
  );
}
