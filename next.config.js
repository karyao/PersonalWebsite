// next.config.js

const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'PersonalWebsite'; // Your repository name

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static HTML export
  output: 'export',

  // Set the base path for routing and asset loading on GitHub Pages
  basePath: isProd ? `/${repositoryName}` : undefined,

  // assetPrefix is often not strictly needed with basePath + output: 'export' for newer Next.js,
  // but can be a fallback if assets still have issues.
  // If basePath alone works, you can try removing assetPrefix.
  assetPrefix: isProd ? `/${repositoryName}/` : undefined,

  // Disable Next.js image optimization for GitHub Pages
  images: {
    unoptimized: true,
  },

  // Optional: adds a trailing slash to URLs (e.g., /about -> /about/)
  // Can be helpful for consistency on static sites.
  trailingSlash: true,
};

module.exports = nextConfig;