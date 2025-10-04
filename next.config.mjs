/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuration for Vercel deployment - standard Next.js
  // output: 'export', // Commented out for Vercel compatibility
  images: {
    // Vercel has built-in image optimization
    domains: ['localhost'], // Add any image domains if needed
  },
  // Port is set via command line -p 3000
  devIndicators: {
    buildActivity: true
  },
  // Completely disable build caching to avoid large cache files
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Disable webpack cache
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  experimental: {
    // Reduce bundle size
    optimizeCss: false,
    // Disable other experimental features that might create cache
  },
};

export default nextConfig