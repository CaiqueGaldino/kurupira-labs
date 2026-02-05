import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/kurupira-labs' : '',
  assetPrefix: isProd ? '/kurupira-labs' : '',
  trailingSlash: true,
};

export default nextConfig;
