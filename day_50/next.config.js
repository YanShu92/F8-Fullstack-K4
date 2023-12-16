/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      "555526419423-81nc3fq1aska7md10cpqoug93lig624l.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
