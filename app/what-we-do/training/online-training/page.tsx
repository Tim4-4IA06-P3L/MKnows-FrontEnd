import React from "react";
import Link from "next/link";
import Card from "../../../components/Card";
import type { Metadata } from "next";
import { Training } from "../../../Types";

export const metadata: Metadata = {
  title: "Online Training - M-Knows Consulting",
  description: "Online Training (Pelatihan Online) M-Knows Consulting",
};

const getOnlineTraining = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/api/trainings?populate=*&sort=Title&filters[TrainingType]{$eq]=Online`,
    {
      cache: "no-store"
    }
  );
  const resJson = await res.json();
  return resJson.data;
};

const onlineTrainings: Training[] = await getOnlineTraining();

const OnlineTrainingPage = () => {
  return (
    <>
      <main className="text-center py-14">
        <div>
          <h1 className="text-2xl font-bold text-black">Online Training</h1>
          <h2 className="text-xl text-blue-500">{`${new Date().getFullYear()}`}</h2>
        </div>

        {/* Button */}
        <div className="mt-4 text-left pl-5 md:pl-24 pr-5 pb-10 pt-10">
          <Link href="/what-we-do/training/online-training/formulir">
            <button className="px-6 py-2 text-sm bg-slate-100 border border-sky-600 text-sky-700 rounded-md hover:bg-gray-200">
              {`Request Jadwal Online Training Tahun ${new Date().getFullYear()}`}
            </button>
          </Link>
        </div>

        {/* Grid */}
        <section className="py-10 px-20">
          <div className="flex flex-wrap justify-center gap-8">
            {onlineTrainings.map((training) => (
              <div
                className="basis-[100%] md:basis-[33%] lg:basis-[25%]"
                key={training.documentId}
              >
                <Card
                  title={training.Title}
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

export default OnlineTrainingPage;
