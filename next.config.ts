import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true, // Enable experimental app directory feature
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Set up alias for src
    return config;
  },
};

export default nextConfig;
