import React from "react";
import BootcampContent from "../components/BootcampContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bootcamp - M-Knows Consulting",
  description: "Bootcamp - M-Knows Consulting",
};

const BootcampPage = () => {
  return (
    <>
      <BootcampContent />
    </>
  );
};

export default BootcampPage;
