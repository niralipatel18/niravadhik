import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  turbopack: {
    resolveAlias: {
      canvas: { browser: "./empty.js" },
    },
  },
};

export default nextConfig;
