/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

const nextConfig = withNextIntl({
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
