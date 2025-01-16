import React from "react";
import Link from "next/link";
import Card from "../../../components/Card";
import type { Metadata } from "next";
import { Training } from "../../../Types";

export const metadata: Metadata = {
  title: "Public Training - M-Knows Consulting",
  description: "Public Training (Pelatihan Publik) M-Knows Consulting",
};

const getPublicTraining = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/api/trainings?populate=*&sort=Title&filters[TrainingType]{$eq]=Public`,
    {
      cache: "no-store"
    }
  );
  const resJson = await res.json();
  return resJson.data;
};

const publicTrainings: Training[] = await getPublicTraining();

const PublicTrainingPage = () => {
  return (
    <>
      <main className="text-center pt-14">
        <div>
          <h1 className="text-2xl font-bold text-black">Public Training</h1>
          <h2 className="text-xl text-blue-500">{`${new Date().getFullYear()}`}</h2>
        </div>

        {/* Button */}
        <div className="mt-4 text-left pl-5 md:pl-24 pr-5 pb-10 pt-10">
          <Link href="/what-we-do/training/public-training/formulir">
            <button className="px-6 py-2 text-sm bg-slate-100 border border-sky-600 text-sky-700 rounded-md hover:bg-gray-200">
              {`Request Jadwal Public Training Tahun ${new Date().getFullYear()}`}
            </button>
          </Link>
        </div>

        {/* Grid */}
        <section className="py-10 px-20">
          <div className="flex flex-wrap justify-center gap-8">
            {publicTrainings.length > 0 && publicTrainings.map((training) => (
              <div
                className="basis-[100%] md:basis-[33%] lg:basis-[25%]"
                key={training.documentId}
              >
                <Card
                  title={training.Title}
                  fontSize="text-md"
                  imgSrc={training.Thumbnail.url}
                  link={`/what-we-do/training/${training.Title}_${training.documentId}`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default PublicTrainingPage;
