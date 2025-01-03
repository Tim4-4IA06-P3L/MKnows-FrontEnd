import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - M-Knows Consulting",
  description: "Tentang M-Knows Consulting",
};

const services = [
  { id: 1, title: "MT & MDP Program", image: "/about-us/Vector.png" },
  {
    id: 2,
    title: "Competency Assessment",
    image: "/about-us/vector3.png",
  },
  {
    id: 3,
    title: "Sales to Service S.O.P Development to Execution (Guide Book)",
    image: "/about-us/vector1.png",
  },
  {
    id: 4,
    title: "Marketing Intelligence System & Implementation",
    image: "/about-us/vector4.png",
  },
  {
    id: 5,
    title: "Creating Competency Dictionary & Implementation",
    image: "/about-us/vector2.png",
  },
  {
    id: 6,
    title: "Corporate Culture Dev’t Implementation.",
    image: "/about-us/vector5.png",
  },
];

const competencies = [
  "Selling & Sales Management Competencies.",
  "Credit analysis Competency.",
  "Debt Collection Competency.",
  "Leadership, Managerial, & Supervisory Competencies.",
  "Training and Facilitating Competencies.",
  "Business Presentation Competency.",
  "Team Cohesion & Leadership Competency.",
];

const AboutUsPage = () => {
  return (
    <>
      <main>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-sky-600 my-6 sm:my-8 lg:my-12 text-center">
          M-Knows Consulting
        </h1>
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="flex items-start md:order-1 order-2">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                <span className="text-sky-600">M-Knows Consulting </span>
                adalah merk yang dipakai bersama oleh PT. Menara Indonesia dan
                PT. Menara Pengetahuan Indonesia. PT. Menara Indonesia adalah
                perusahaan yang menjalankan jasa konsultasi manajemen dan
                pembuatan solusi digital, seperti aplikasi pendidikan (web dan
                app), solusi artificial intelligence untuk industri keuangan dan
                pendidikan, serta solusi virtual reality dan pembuatan game yang
                merupakan induk perusahaan dari PT. Menara Pengetahuan
                Indonesia, perusahaan yang bergerak dalam bidang jasa pendidikan
                dan pelatihan, berkantor pusat di Jakarta dan memiliki cabang di
                Surabaya.
              </p>
            </div>
            <div className="w-full md:order-2 order-1 flex justify-center md:justify-end">
              <Image
                src="/about-us/aboutus1.png"
                alt="Office workspace"
                width={502}
                height={361}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/about-us/aboutus2.png"
                alt="Training session"
                width={502}
                height={361}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                  Sejak berdiri, M-Knows Consulting telah sukses bekerjasama
                  dengan beragam perusahaan nasional dan multinasional, dengan
                  kualitas kerja yang memuaskan, dibuktikan dengan tingginya
                  repeat order dan customer yang loyal.
                </p>
                <br />
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify ">
                  Melalui cabang Jakarta & Surabaya, M-Knows Consulting telah
                  sukses melayani beragam perusahaan dengan kualitas kerja yang
                  memuaskan, sesuai keahliannya dan pendekatan konsultasi yang
                  menekankan pada sifat Applicative, Contemporary, High Impact,
                  Fun & Motivational.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 px-8">
          <div className="max-w-4xl mx-auto px-6 py-20 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              Jasa konsultasi yang sering diambil klien meliputi:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm"
                >
                  <Image
                    width={28}
                    height={28}
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <p className="ml-4 text-gray-700 font-medium">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 my-20 bg-white rounded-lg">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              Assessment for Technical Competency
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {competencies.map((competency, index) => (
                <li key={index} className="text-lg flex items-start">
                  <span className="text-blue-700 font-bold mr-2">
                    {index + 1}.
                  </span>
                  <span className="text-gray-700">{competency}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className=" flex items-center justify-center px-8">
          <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Bagian Gambar dengan Overlay */}
            <div className="relative">
              <Image
                width={800}
                height={500}
                src="/about-us/aboutus3.jpeg"
                alt="Training Session"
                style={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6">
                <p className="text-white min-[320px]:max-[450px]:text-[10px] min-[450px]:max-sm:text-sm sm:text-lg leading-relaxed text-justify last-center">
                  Program pelatihan unggulan yang banyak diambil klien M-Knows
                  antara lain meliputi topik: Marketing, Sales Distribution,
                  Service, Leadership, Managerial, Supervisory, Credit
                  Management, Debt Collection, Filing, Office, 5S & Warehouse
                  Management, Finance & Banking, Persiapan Pensiun, Train The
                  Trainers, Presentation Skills, Communication Skills,
                  Negotiation Skills, Achievement Motivation & Soft Skills
                  lainnya.
                </p>
              </div>
            </div>

            {/* Bagian Bawah dengan Background Biru */}
            <div className="bg-blue-50 px-6 py-4 text-center">
              <p className="min-[320px]:max-[450px]:text-[10px] min-[450px]:max-sm:text-sm sm:text-lg text-gray-700 text-justify last-center">
                Kami percaya model pelatihan kontemporer lebih baik dibandingkan
                pendekatan yang klasik dan konservatif.{" "}
                <span className="font-bold">
                  We Are Strong In “Activity Based Learning”.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUsPage;
