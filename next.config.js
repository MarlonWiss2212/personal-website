/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

const nextConfig = withNextIntl({
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      }
    ]
  }
})

module.exports = nextConfig
