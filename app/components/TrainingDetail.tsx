"use client";
import React, { FC, useState, useEffect } from "react";
import { Training } from "../Types";
import PdfComponent from "./PdfComponent";
import ThumbnailCover from "./ThumbnailCover";

const TrainingDetail: FC<{ id: string }> = ({ id }) => {
  const [training, setTraining] = useState<Training | null>(null);
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const getTraining = async (id: string) => {
    const res = await fetch(
      `${process.env.CMS_URL}/api/trainings?populate=*&filters[documentId][$eq]=${id}`
    );
    const resJson = await res.json();
    const training = resJson.data[0];
    setTraining(training);
  };

  useEffect(() => {
    getTraining(id);
  }, [id]);

  if (!training) {
    return <div></div>;
  }

  return (
    <>
      <main>
        <ThumbnailCover
          bgSrc={`${training.Thumbnail.url}`}
          title={`${training.Title}`}
          subtitle=""
        />

        <PdfComponent
          url={training.Document.url}
          onLoadSuccess={onDocumentLoadSuccess}
          numPages={numPages}
        />
      </main>
    </>
  );
};

export default TrainingDetail;
