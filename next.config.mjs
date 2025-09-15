/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Added unoptimized setting
  },
  eslint: {
    ignoreDuringBuilds: true, // Added eslint ignoreDuringBuilds setting
  },
  typescript: {
    ignoreBuildErrors: true, // Added typescript ignoreBuildErrors setting
  },
  // Enable compression
  compress: true,
  // Optimize for production
  swcMinify: true,
  // Enable experimental features for better performance
  experimental: {
    // Disable optimizeCss to avoid requiring the external 'critters' package during prerender.
    // If you prefer CSS optimization, install 'critters' and set this back to true.
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
