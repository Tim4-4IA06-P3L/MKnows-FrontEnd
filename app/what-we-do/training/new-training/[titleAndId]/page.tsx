import React, { use, FC } from "react";
import TrainingDetail from "../../../../components/TrainingDetail";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ titleAndId: string }>;
}): Promise<Metadata> => {
  const titleAndId = (await params).titleAndId;
  const title = titleAndId.split("-")[0].replaceAll("%20", " ");
  return {
    title: `${title} - M-Knows Consulting`,
    description: `Halaman Detail Training Baru ${title} M-Knows Consulting`,
  };
};

const NewTrainingDetailPage: FC<{
  params: Promise<{ titleAndId: string }>;
}> = ({ params }) => {
  const { titleAndId } = use(params);
  const id = titleAndId.split("-")[1];

  return <TrainingDetail id={id} />;
};

export default NewTrainingDetailPage;
