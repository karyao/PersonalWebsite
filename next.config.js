/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PersonalWebsite',
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;