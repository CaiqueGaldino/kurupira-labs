import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kurupira-labs',
  assetPrefix: '/kurupira-labs',
  trailingSlash: true,
};

export default nextConfig;
