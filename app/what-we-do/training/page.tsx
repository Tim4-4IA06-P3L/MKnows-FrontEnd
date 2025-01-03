import React from "react";
import CoverPage from "../../components/CoverPage";
import Card from "../../components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training - M-Knows Consulting",
  description: "Halaman Training M-Knows Consulting",
};

const TrainingPage = () => {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="mb-14">
          <CoverPage
            bgSrc="/OnlineLearn.jpg"
            coverTitle="Online, Public & In-House Training"
            subTitle=""
          />
        </section>

        {/* Grid */}
        <section className="flex flex-row flex-wrap justify-center gap-8 px-8">
          <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
            <Card
              title="Online Training"
              imgSrc="/ol.jpeg"
              link="/what-we-do/training/online-training"
            />
          </div>
          <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
            <Card
              title="Public Training"
              imgSrc="/pl.jpeg"
              link="/what-we-do/training/public-training"
            />
          </div>
          <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
            <Card
              title="In-House Training"
              imgSrc="/PKT.png"
              link="/what-we-do/training/in-house-training"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default TrainingPage;
