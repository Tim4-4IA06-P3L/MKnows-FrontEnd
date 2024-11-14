import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoverPage from "./components/CoverPage";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-14">
          <CoverPage
            bgSrc="/inh2.jpeg"
            coverTitle="Another Meaningful Learning with M-Knows Consulting"
          />
        </section>

        {/* Teks */}
        <section className="pb-20 pt-14 pl-2 pr-2">
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

              <div className="h-12 border-l border-gray-300"></div>

              <div className="flex-grow flex-shrink basis-0 text-center">
                <h2 className="text-md md:text-3xl lg:text-4xl font-bold">
                  10+ Instruktur
                </h2>
                <p className="text-sm md:text-lg text-gray-600">
                  Instruktur Ternama
                </p>
              </div>

              <div className="h-12 border-l border-gray-300"></div>

              <div className="flex-grow flex-shrink basis-0 text-center">
                <h2 className="text-md md:text-3xl lg:text-4xl font-bold">
                  200+ Klien
                </h2>
                <p className="text-sm md:text-lg text-gray-600">
                  Dari berbagai perusahaan
                </p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-24 -mb-10">
              Jelajahi Kategori Unggulan
            </h2>
          </div>
        </section>

        {/* Grid */}
        <section className="flex flex-wrap justify-center gap-8 p-8">
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Program Pelatihan"
							imgSrc="/ProgPelatihan.jpeg"
							link=""
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Pembelajaran online, publik & pelatihan internal"
							imgSrc="/OnlineLearn.png"
							link="/what-we-do/training"
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Layanan Konsultasi"
							imgSrc="/consulting-service/Consulting_img.jpg"
							link="/what-we-do/consulting-service"
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Penilaian Kompetensi Teknis (PKT)"
							imgSrc="/PKT.png"
							link=""
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Pelatihan Eksekutif & Pendampingan Bisnis"
							imgSrc="/PelatihanEkse.jpeg"
							link=""
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Sistem Manajemen Pembelajaran"
							imgSrc="/SistemBelajar.png"
							link=""
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Outbound & Gathering"
							imgSrc="/Outbound.png"
							link=""
						/>
					</div>
					<div className="sm:basis-[100%] md:basis-[33%] lg:basis-[25%] 2xl:basis-[20%]">
						<Card
							title="Program kilat pengembangan petugas hybrid untuk industri keuangan"
							imgSrc="/Kilat.jpeg"
							link=""
						/>
					</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
