// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com'], // Unsplash resimlerinin yüklenmesine izin ver
//   },
// };

// export default nextConfig;

//---------------------------------------------------------------

// const generateRobotsTxtAndSitemapXml = require("./scripts/generate-robots-txt");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = {
  env: {
    PROJECT_SITE_NAME: process.env.SITE_NAME,
    PROJECT_URL_WEBSITE: process.env.URL_WEBSITE,
    PROJECT_SUPER_ADMIN_USER: process.env.SUPER_ADMIN_USER,
    PROJECT_ADMIN_USER: process.env.ADMIN_USER,
    PROJECT_PHONE_NUMBER_WHATSAPP: process.env.PHONE_NUMBER_WHATSAPP,
    PROJECT_PHONE_NUMBER_CALL: process.env.PHONE_NUMBER_CALL,
  },
  // reactStrictMode: false,
  // webpack5: true,
  images: {
    domains: ["127.0.0.1", "localhost", "https://www.ozkansurucukursu.com.tr"],
    unoptimized: true,
  },
};
