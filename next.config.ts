import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Playwright builds into its own folder so it can't clash with a dev server or build using .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
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
      // Internships, training and certificate verification were retired;
      // send old links and search traffic to the home page.
      {
        source: "/services/internship-programs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/skill-building",
        destination: "/",
        permanent: true,
      },
      {
        source: "/verify",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
