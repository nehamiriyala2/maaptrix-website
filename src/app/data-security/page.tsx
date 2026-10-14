import type { Metadata } from "next";
import LegalPage, { LEGAL_PLACEHOLDER_ROBOTS } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/data-security",
    "Data & Security",
    "Information about how Maaptrix approaches data and security across its digital products.",
  ),
  robots: LEGAL_PLACEHOLDER_ROBOTS,
};

export default function DataSecurityPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Data & Security"
      summary="How Maaptrix approaches the handling and protection of data across its products."
    />
  );
}
