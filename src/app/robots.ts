import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search engine and AI crawlers that are explicitly welcome (search, AI answers
// and AI training). The "*" rule already covers them; listing them makes the
// intent clear for any crawler that only honours a rule naming it.
const ALLOWED_CRAWLERS = [
  // Google (Search, and Gemini / AI Overviews via Google-Extended)
  "Googlebot",
  "Google-Extended",
  // Bing (also powers Microsoft Copilot)
  "Bingbot",
  // OpenAI / ChatGPT
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Apple (Siri, Spotlight, Apple Intelligence)
  "Applebot",
  "Applebot-Extended",
  // Others
  "Meta-ExternalAgent",
  "Amazonbot",
  "DuckAssistBot",
  "CCBot",
];

// Nothing is disallowed: the site has no private routes, and noindex pages must
// stay crawlable so search engines can read their noindex directive.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ALLOWED_CRAWLERS, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
