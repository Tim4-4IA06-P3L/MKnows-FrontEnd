import React, { use, FC } from "react";
import BootcampDetail from "../../components/BootcampDetail";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ titleAndId: string }>;
}): Promise<Metadata> => {
  const titleAndId = (await params).titleAndId;
  const title = titleAndId.split("_")[0].replaceAll("%20", " ");
  return {
    title: `${title} - M-Knows Consulting`,
    description: `Halaman Detail Bootcamp ${title} M-Knows Consulting`,
  };
};

const BootcampDetailPage: FC<{ params: Promise<{ titleAndId: string }> }> = ({
  params,
}) => {
  const { titleAndId } = use(params);
  const id = titleAndId.split("_")[1];

  return <BootcampDetail id={id} />;
};

export default BootcampDetailPage;
