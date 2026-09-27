import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
    unoptimized: true, // Disable Image Optimization for static export
  },
  //output: "export", // Enable static export for cPanel deployment
  async redirects() {
    return [
      // Internship programs were retired; send old links and search traffic to training.
      {
        source: "/services/internship-programs",
        destination: "/services/skill-building",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
