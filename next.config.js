/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
