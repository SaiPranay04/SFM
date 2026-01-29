/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep API calls to separate backend server
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  // Optimize images
  images: {
    domains: ['localhost'],
  },
  // Transpile MUI packages if needed
  transpilePackages: ['@mui/material', '@mui/icons-material'],
};

module.exports = nextConfig;
