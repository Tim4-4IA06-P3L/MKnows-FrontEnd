import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	env: {
		CMS_URL: process.env.CMS_URL
	},
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		return config;
	},
};

export default nextConfig;
