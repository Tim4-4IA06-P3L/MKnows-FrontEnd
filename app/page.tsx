import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoverPage from "./components/CoverPage";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-14">
          <CoverPage bgSrc="" coverTitle="" />
        </section>

        {/* Teks */}
        <section className="pb-20">
          <div className="container mx-auto text-center">
            <div className="flex justify-evenly mb-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold">100+ Pelatihan</h2>
                <p className="text-gray-600">Dari berbagai klien</p>
              </div>

              <div className="h-12 border-l border-gray-300"></div>

              <div className="text-center">
                <h2 className="text-2xl font-bold">10+ Instruktur</h2>
                <p className="text-gray-600">Instruktur Ternama</p>
              </div>

              <div className="h-12 border-l border-gray-300"></div>

              <div className="text-center">
                <h2 className="text-2xl font-bold">200+ Klien</h2>
                <p className="text-gray-600">Dari berbagai perusahaan</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-24 mb-9">
              Jelajahi Kategori Unggulan
            </h2>
          </div>
        </section>

        {/* Grid */}
      </main>
      <Footer />
    </div>
  );
}
