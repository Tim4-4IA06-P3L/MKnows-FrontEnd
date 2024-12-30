import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "500",
});

export const metadata: Metadata = {
  title: "M-Knows Consulting",
  description: "M-Knows Consulting Company Profile",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const fetchBootcamps = async () => {
		try {
			const response = await fetch(
				"http://localhost:1337/api/categories?populate=*&sort=Category"
			);
			const data = await response.json();
			return data.data;
		} catch (error) {
			console.log(error.message);
		}
	};
	
	const bootcamps = await fetchBootcamps();
	
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen`}
      >
				<Navbar bootcamps={bootcamps} />
				{children}
				<Footer />
      </body>
    </html>
  );
}
