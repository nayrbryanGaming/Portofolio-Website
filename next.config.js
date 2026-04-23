/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure we don't fail on lint errors during build if necessary
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
