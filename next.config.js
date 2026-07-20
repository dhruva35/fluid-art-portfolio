/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TEMPORARY: Disable optimization because placeholder images are SVGs saved as .jpg
    // REMOVE this line once you replace placeholders with real JPG/PNG/WebP artwork photos
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
