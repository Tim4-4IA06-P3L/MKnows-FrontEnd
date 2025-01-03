import React from "react";
import CoverPage from "./components/CoverPage";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="pb-14">
          <CoverPage
            bgSrc="/inh2.jpeg"
            coverTitle="Another Meaningful Learning with M-Knows Consulting"
            subTitle=""
          />
        </section>

        {/* Teks */}
        <section className="px-8">
          <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-3 items-center mb-12">
              <div className="flex-grow flex-shrink basis-0 text-center">
                <h2 className="text-md md:text-3xl lg:text-4xl font-bold">
                  100+ Pelatihan
                </h2>
                <p className="text-sm md:text-lg text-gray-600">
                  Dari berbagai klien
                </p>
              </div>

              <div className="h-20 border-l border-black"></div>

              <div className="flex-grow flex-shrink basis-0 text-center">
                <h2 className="text-md md:text-3xl lg:text-4xl font-bold">
                  10+ Instruktur
                </h2>
                <p className="text-sm md:text-lg text-gray-600">
                  Instruktur Ternama
                </p>
              </div>

              <div className="h-20 border-l border-black"></div>

              <div className="flex-grow flex-shrink basis-0 text-center">
                <h2 className="text-md md:text-3xl lg:text-4xl font-bold">
                  200+ Klien
                </h2>
                <p className="text-sm md:text-lg text-gray-600">
                  Dari berbagai perusahaan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="flex flex-col justify-center px-8 gap-5">
          <h2 className="text-3xl font-medium text-center">
            Jelajahi Kategori Unggulan
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Program Pelatihan"
                imgSrc="/ProgPelatihan.jpeg"
                link="/bootcamp"
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Pembelajaran online, publik & pelatihan internal"
                imgSrc="/OnlineLearn.png"
                link="/what-we-do/training"
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Layanan Konsultasi"
                imgSrc="/consulting-service/Consulting_Img.jpg"
                link="/what-we-do/consulting-service"
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Penilaian Kompetensi Teknis (PKT)"
                imgSrc="/PKT.png"
                link="/what-we-do/atc"
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Pelatihan Eksekutif & Pendampingan Bisnis"
                imgSrc="/PelatihanEkse.jpeg"
                link="/what-we-do/executive-coaching-and-mentoring"
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Sistem Manajemen Pembelajaran"
                imgSrc="/SistemBelajar.png"
                link=""
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Outbound & Gathering"
                imgSrc="/Outbound.png"
                link="/what-we-do/outbound"
              />
            </div>
            <div className="basis-[100%] md:basis-[33%] lg:basis-[25%]">
              <Card
                title="Program kilat pengembangan petugas hybrid untuk industri keuangan"
                imgSrc="/Kilat.jpeg"
                link="/what-we-do/officer-development"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
