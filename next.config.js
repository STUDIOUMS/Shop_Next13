/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qwertynext.com",
        port: "",
        pathname: "/media/images/packs/**",
      },
    ],
  },
  env: {
    API_URL: "https://api.alba-72.ru/api/v1",
  },
};

module.exports = nextConfig;
