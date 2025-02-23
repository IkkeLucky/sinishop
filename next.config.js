/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "",
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
        },
      ],
      domains: ["localhost", "https://sini.digital/"],
    },
  }
  
  module.exports = nextConfig
  
  