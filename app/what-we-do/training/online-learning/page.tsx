import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const videos = [
  { title: "Webtraining Sales & Marketing Series", src: "/wsms.jpeg" },
  { title: "Webtraining Credit & Collection Series", src: "/wccs1.jpeg" },
  { title: "Webtraining Credit & Collection Series", src: "/wccs2.jpeg" },
  { title: "Webtraining Office & Administration Series", src: "/woas.jpeg" },
  { title: "Webtraining Other Series", src: "/wos.jpeg" },
];
const App = () => {
  return (
    <>
      <Navbar />
      {/* Title */}
      <main className="text-center py-14">
        <div>
          <h1 className="text-3xl font-bold text-black">Public Webtraining</h1>
          <h2 className="text-2xl text-blue-500">2024</h2>
        </div>

        {/* Button */}
        <div className="mt-4 text-left pl-24 pb-10">
          <Link href="/what-we-do/training/online-learning/formulir">
            <button className="px-6 py-2 bg-slate-100 border border-sky-600 text-sky-700 rounded-md hover:bg-gray-200">
              Download Jadwal Public Training Tahun 2024
            </button>
          </Link>
        </div>

        {/* Grid */}
        <section className="py-10 px-20">
          <div className="flex flex-wrap justify-center gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg flex-none"
              >
                <Image
                  src={video.src}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                  <p className="text-white text-lg font-semibold text-left">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
