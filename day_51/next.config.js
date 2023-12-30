/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
  },
};

module.exports = nextConfig;
