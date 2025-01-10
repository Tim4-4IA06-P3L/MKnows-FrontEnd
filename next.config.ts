import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	env: {
		CMS_URL: process.env.CMS_URL
	},
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        port: '',
      },
    ],
  },
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		return config;
	},
};

export default nextConfig;
