import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	env: {
		CMS_URL: process.env.CMS_URL
	}
};

export default nextConfig;
