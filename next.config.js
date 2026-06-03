/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
};

module.exports = nextConfig;
