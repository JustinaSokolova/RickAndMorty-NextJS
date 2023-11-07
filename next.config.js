/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
