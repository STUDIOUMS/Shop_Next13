/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qwertynext.com',
        port: '',
        pathname: '/media/images/packs/**',
      },
    ],
  }
}

module.exports = nextConfig
