import React, { FC } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfComponent: FC<{
  url: string;
  onLoadSuccess: ({ numPages }: { numPages: number }) => void;
  numPages: number;
}> = ({ url, onLoadSuccess, numPages }) => {
  return (
    <section
      className="relative w-[100%] h-[80vh] p-8 pt-0 flex justify-center 
          overflow-y-auto overflow-x-hidden bg-neutral-800
          [&::-webkit-scrollbar]:w-2
					[&::-webkit-scrollbar]:h-2
					[&::-webkit-scrollbar-track]:bg-neutral-100
					[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
    >
      <div className="w-full h-full flex justify-center">
        <Document file={url} onLoadSuccess={onLoadSuccess} className="w-full">
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
  );
};

export default PdfComponent;
