"use client";
import React, { use, FC, useState, useEffect } from "react";
import CoverPage from "../../components/CoverPage";
import { Bootcamp } from "../../Types";

const BootcampDetail: FC<{ params: Promise<{ id: string }> }> = ({
  params,
}) => {
  const { id } = use(params);
  const [program, setProgram] = useState<Bootcamp | null>(null);
  const getPDF = async (id: string) => {
    const res = await fetch(
      `${process.env.CMS_URL}/api/our-programs?populate=*&filters[documentId][$eq]=${id}`
    );
    const resJson = await res.json();
    const pdf = resJson.data[0];
    setProgram(pdf);
  };

  useEffect(() => {
    getPDF(id);
  }, [id]);

  if (!program) {
    return <div></div>;
  }

  return (
    <main>
      <CoverPage
        bgSrc={`${program?.Thumbnail.url}`}
        coverTitle={`${program.Title}`}
        subTitle={`${program.Level}`}
      />
      <section className="p-8 flex justify-center">
        <p className="text-justify last-center md:text-xl">{`${program.Description}`}</p>
      </section>

      <section className="relative w-[90vw] h-[80vh] left-[5%] p-8">
        <iframe
          src={`${program.Document.url}#toolbar=0`}
          width="100%"
          height="100%"
        />
      </section>
    </main>
  );
};

export default BootcampDetail;
