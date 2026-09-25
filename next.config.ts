import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // 90 is used for the large hero / product visuals so they stay sharp
    qualities: [75, 90],
  },
};

export default nextConfig;
