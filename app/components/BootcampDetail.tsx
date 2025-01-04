"use client";
import React, { FC, useState, useEffect } from "react";
import CoverPage from "./CoverPage";
import { Bootcamp } from "../Types";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const BootcampDetail: FC<{ id: string }> = ({ id }) => {
  const [program, setProgram] = useState<Bootcamp | null>(null);
  const [numPages, setNumPages] = useState<number>();

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
        <CoverPage
          bgSrc={`${program.Thumbnail.url}`}
          coverTitle={`${program.Title}`}
          subTitle={`${program.Level}`}
        />
        <section className="p-8 flex justify-center">
          <p className="text-justify last-center md:text-xl">{`${program.Description}`}</p>
        </section>

        <section
          className="relative w-[90%] h-[80vh] left-[5%] p-8 pt-0 flex justify-center 
          overflow-y-auto overflow-x-hidden bg-neutral-800
          [&::-webkit-scrollbar]:w-2
					[&::-webkit-scrollbar]:h-2
					[&::-webkit-scrollbar-track]:bg-neutral-100
					[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
        >
          <div className="w-full h-full flex justify-center">
            <Document
              file={program.Document.url}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full"
            >
              {Array.from(Array(numPages).keys()).map((n) => (
                <Page
                  pageNumber={n + 1}
                  className="mb-8 w-full h-auto"
                  key={n + 1}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          </div>
        </section>
      </main>
    </>
  );
};

export default BootcampDetail;
