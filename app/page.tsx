import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoverPage from "./components/CoverPage";
import Card from "./components/Card";

const landCard = [
  { title: "Program Pelatihan", img: "/ProgPelatihan.jpeg", link: "" },
  {
    title: "Pembelajaran online, publik & pelatihan internal",
    img: "/OnlineLearn.png",
    link: "/Drop-down-what-we-do/Training",
  },
  {
    title: "Layanan Konsultasi",
    img: "/Consulting_img.jpg",
    link: "/what-we-do/consulting-service",
  },
  {
    title: "Penilaian Kompetensi Teknis (PKT)",
    img: "/PKT.png",
    link: "",
  },
  {
    title: "Pelatihan Eksekutif & Pendampingan Bisnis",
    img: "/PelatihanEkse.jpeg",
    link: "",
  },
  {
    title: "Sistem Manajemen Pembelajaran",
    img: "/SistemBelajar.png",
    link: "",
  },
  { title: "Outbound & Gathering", img: "/Outbound.png", link: "" },
  {
    title: "Program kilat pengembangan petugas hybrid untuk industri keuangan",
    img: "/Kilat.jpeg",
    link: "",
  },
];
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
        <Card cardItems={landCard} />
      </main>
      <Footer />
    </div>
  );
}
