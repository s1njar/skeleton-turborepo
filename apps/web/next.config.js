// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['@lib/db', '@cfg/postcss-config-base', '@cfg/tailwind-config']
};

module.exports = nextConfig;
