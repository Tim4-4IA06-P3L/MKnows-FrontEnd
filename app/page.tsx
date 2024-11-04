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
            bgSrc="/LandCard.jpeg"
            coverTitle="Another Meaningful Learning with M-Knows Consulting"
          />
        </section>

        {/* Teks */}
        <section className="pb-20 pt-14">
          <div className="container mx-auto text-center">
            <div className="flex justify-evenly mb-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold">100+ Pelatihan</h2>
                <p className="text-gray-600">Dari berbagai klien</p>
              </div>

              <div className="h-12 border-l border-gray-300"></div>

              <div className="text-center">
                <h2 className="text-4xl font-bold">10+ Instruktur</h2>
                <p className="text-gray-600">Instruktur Ternama</p>
              </div>

              <div className="h-12 border-l border-gray-300"></div>

              <div className="text-center">
                <h2 className="text-4xl font-bold">200+ Klien</h2>
                <p className="text-gray-600">Dari berbagai perusahaan</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-24 -mb-10">
              Jelajahi Kategori Unggulan
            </h2>
          </div>
        </section>

        {/* Grid */}
        <section className="">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title="Program Pelatihan"
                imgSrc="/ProgPelatihan.jpeg"
                link=""
              />
              <Card
                title="Pembelajaran online, publik & pelatihan internal"
                imgSrc="/OnlineLearn.png"
                link="/Drop-down-what-we-do/Training"
              />
              <Card
                title="Layanan Konsultasi"
                imgSrc="/Consulting_img.jpg"
                link="/what-we-do/consulting-service"
              />
              <Card
                title="Penilaian Kompetensi Teknis (PKT)"
                imgSrc="/PKT.png"
                link=""
              />
              <Card
                title="Pelatihan Eksekutif & Pendampingan Bisnis"
                imgSrc="/PelatihanEkse.jpeg"
                link=""
              />
              <Card
                title="Sistem Manajemen Pembelajaran"
                imgSrc="/SistemBelajar.png"
                link=""
              />
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="hidden lg:block"></div>{" "}
              <Card
                title="Outbound & Gathering"
                imgSrc="/Outbound.png"
                link=""
              />
              <Card
                title="Program kilat pengembangan petugas hybrid untuk industri keuangan"
                imgSrc="/Kilat.jpeg"
                link=""
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
