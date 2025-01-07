"use client";
import React, { FC, useState, useEffect } from "react";
import CoverPage from "./CoverPage";
import { Training } from "../Types";
import PdfComponent from "./PdfComponent";

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
        <CoverPage
          bgSrc={`${training.Thumbnail.url}`}
          coverTitle={`${training.Title}`}
          subTitle=""
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
