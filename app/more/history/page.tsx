import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const History = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Text */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold my-6 sm:my-8 lg:my-12 text-center">
          <span className="text-black">History </span>
          <span className="text-sky-600">M-Knows Consulting</span>
        </h1>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="flex items-center">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                <span className="text-sky-600">M-Knows Consulting </span>
                didirikan pertama kali pada bulan Juni 2003 dan berlokasi di
                Petogogan Jakarta, dan pada tahun 2005 pindah ke Jl. Radio 4 No.
                8B Kebayoran Baru Jakarta Selatan. Tahun 2008, M-Knows
                Consulting membuka kantor cabangnya di Surabaya yang berlokasi
                Jl. Raya Darmo Permai III sampai dengan sekarang. Tahun 2020
                M-Knows membuka kantor untuk produksi solusi digital di jalan
                raya Cirendeu no 61 Tangerang Selatan.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/history1.jpeg"
                alt="Office workspace"
                width={800}
                height={600}
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="w-full">
              <Image
                src="/history2.jpeg"
                alt="Training session"
                width={800}
                height={600}
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                Sejak berdirinya,{" "}
                <span className="text-sky-600">M-Knows Consulting </span> telah
                sukses bekerjasama dengan berbagai perusahaan nasional dan
                multinasional. Mereka menyediakan layanan pendidikan dan
                pembelajaran melalui solusi Consulting Services, Public
                Training, In-House Training, dan Outbound & Team Building
                sebelum memperluas ke layanan solusi digital. Di cabang Jakarta
                & Surabaya,{" "}
                <span className="text-sky-600">M-Knows Consulting </span>{" "}
                dikenal dengan kualitas kerja yang memuaskan, sesuai keahlian
                mereka dalam pendekatan konsultasi yang aplikatif, kontemporer,
                berdampak tinggi, serta menyenangkan dan memotivasi.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 pb-10">
            <div className="flex items-center">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                <span className="text-sky-600">M-Knows Consulting </span>
                merupakan salah satu perusahaan Indonesia yang bergerak di
                bidang consultant management. Didirikan pertama kali pada bulan
                Juni 2003 dan berlokasi di Jl. Petogogan Kebayoran Baru Jakarta
                Selatan.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/history3.jpeg"
                alt="Coffee and notebook"
                width={800}
                height={600}
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
