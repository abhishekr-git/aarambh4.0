import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
