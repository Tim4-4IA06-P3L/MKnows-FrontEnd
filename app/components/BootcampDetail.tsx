"use client";
import React, { FC, useState, useEffect } from "react";
import ThumbnailCover from "./ThumbnailCover";
import { Bootcamp } from "../Types";
import PdfComponent from "./PdfComponent";

const BootcampDetail: FC<{ id: string }> = ({ id }) => {
  const [program, setProgram] = useState<Bootcamp | null>(null);
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const getProgram = async (id: string) => {
    const res = await fetch(
      `${process.env.CMS_URL}/api/our-programs?populate=*&filters[documentId][$eq]=${id}`
    );
    const resJson = await res.json();
    const program = resJson.data[0];
    setProgram(program);
  };

  useEffect(() => {
    getProgram(id);
  }, [id]);

  if (!program) {
    return <div></div>;
  }

  return (
    <>
      <main>
        <ThumbnailCover
          bgSrc={`${program.Thumbnail.url}`}
          title={`${program.Title}`}
          subtitle={`${program.Level}`}
        />
        <section className="p-8 flex justify-center">
          <p className="text-justify last-center md:text-xl">{`${program.Description}`}</p>
        </section>

        <PdfComponent
          url={program.Document.url}
          onLoadSuccess={onDocumentLoadSuccess}
          numPages={numPages}
        />
      </main>
    </>
  );
};

export default BootcampDetail;
