import React from "react";
import Card from "../../../components/Card";
import type { Metadata } from "next";
import { Training } from "../../../Types";

export const metadata: Metadata = {
  title: "New Training - M-Knows Consulting",
  description: "New Training (Pelatihan Baru) M-Knows Consulting",
};

const getNewTraining = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/api/trainings?populate=*&sort=Title&filters[NewTraining]{$eq]=true}`
  );
  const resJson = await res.json();
  return resJson.data;
};

const newTrainings: Training[] = await getNewTraining();

const NewTrainingPage = () => {
  return (
    <>
      <main className="text-center pt-14">
        <div>
          <h1 className="text-2xl font-bold text-black">New Training</h1>
          <h2 className="text-xl text-blue-500">{`${new Date().getFullYear()}`}</h2>
        </div>

        {/* Grid */}
        <section className="py-10 px-20">
          <div className="flex flex-wrap justify-center gap-8">
            {newTrainings.map((training) => (
              <div
                className="basis-[100%] md:basis-[33%] lg:basis-[25%]"
                key={training.documentId}
              >
                <Card
                  title={training.Title}
                  imgSrc={training.Thumbnail.url}
                  link={`/what-we-do/new-training/${training.Title}-${training.documentId}`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default NewTrainingPage;
