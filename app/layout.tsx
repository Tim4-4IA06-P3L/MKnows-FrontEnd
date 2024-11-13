import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "100",
});

export const metadata: Metadata = {
  title: "M-Knows Consulting",
  description: "M-Knows Consulting Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
