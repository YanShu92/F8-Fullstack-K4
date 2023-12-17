/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  env: {
    GOOGLE_CLIENT_ID:
      "555526419423-81nc3fq1aska7md10cpqoug93lig624l.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_ID: "6fbea4902590cce12937",
    GITHUB_SECRET: "e4c553c5f4a4571ce7aadcdde9d0bc0a19a3c212",
  },
};

module.exports = nextConfig;
