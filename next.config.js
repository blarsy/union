/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: process.env.IMAGE_PATTERN_HOST,
          port: process.env.IMAGE_PATTERN_PORT
        }
      ],
    },
    output: "standalone",
}

module.exports = nextConfig
