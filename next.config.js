/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'raw.githubusercontent.com', 'solq.my.id'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
