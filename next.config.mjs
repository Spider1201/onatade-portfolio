/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.dev.to" }],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;