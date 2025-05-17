import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/PersonalWebsite',
  trailingSlash: true,
};

export default nextConfig;
