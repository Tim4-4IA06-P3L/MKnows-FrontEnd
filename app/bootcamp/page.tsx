import React from "react";
import BootcampContent from "../components/BootcampContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bootcamp - M-Knows Consulting",
  description: "Bootcamp - M-Knows Consulting",
};

async function getCategories() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/categories?populate[programs][populate][0]=Thumbnail&sort=Category`
  );
  const resJson = await res.json();
  const data = await resJson.data;

  return data;
}

const BootcampPage = async () => {
  const data = await getCategories();
  return (
    <>
      <BootcampContent categories={data} />
    </>
  );
};

export default BootcampPage;
