import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to /out for Hostinger
  // shared hosting (Apache + PHP, no Node.js). Server features such as API
  // routes are unavailable; the contact form posts to public/api/contact.php.
  output: "export",
  // Every page is written as /page/index.html, which Apache serves for /page/.
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    // No image-optimisation server on static hosting: images are served as-is.
    unoptimized: true,
    // Kept so the existing `quality` props stay valid if optimisation returns.
    qualities: [75, 90],
  },
};

export default nextConfig;
