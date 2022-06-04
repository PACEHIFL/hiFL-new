/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    CMS_URL: process.env.CMS_URL,
  },
};

module.exports = nextConfig;
