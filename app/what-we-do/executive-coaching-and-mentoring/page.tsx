import React from "react";
import CoverPage from "../../components/CoverPage";
import OverlayImage from "../../components/OverlayImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Coaching & Mentoring - M-Knows Consulting",
  description:
    "Executive Coaching and Business Mentoring (Pelatihan Eksekutif dan Mentoring Bisnis) M-Knows Consulting",
};

export default function CoachingPage() {
  const images = ["/coaching/coaching2.jpg", "/coaching/coaching3.webp"];
  const images2 = ["/coaching/coaching4.webp", "/coaching/coaching5.webp"];
  return (
    <>
      <main>
        <section>
          <CoverPage
            bgSrc="/coaching/coaching.jpg"
            coverTitle="Executive Coaching & Business Mentoring"
            subTitle=""
          />
        </section>

        <section className="w-full flex flex-col items-center p-10 md:p-20">
          <strong className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-5">
            Peningkatan Keterampilan Kerja untuk Tim Efektif
          </strong>
          <p className="text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            Program ini bertujuan untuk membantu peserta dalam memperoleh
            pengetahuan dan keterampilan fungsional yang dapat mereka terapkan
            di tempat kerja, khususnya bagi Anda yang memiliki tim (rekan
            kerja).
          </p>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col"
        >
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#1C75BC" images={images} />
          </div>

          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#1C75BC]">
              Tujuan Pendampingan
            </strong>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Mengatasi semua kesulitan yang di hadapi bawahan dalam mengerjakan
              tugas atau performance yang tidak mencapai ketentuan yang
              diperintahkan sehingga dapat meningkatkan keahlian tertentu
              di dalam pekerjaan yang kita kerjakan untuk memberikan kepercayaan
              yang lebih besar dalam pekerjaan yang kita lakukan saat ini.
            </p>
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col-reverse"
        >
          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#F0C413]">
              Topik yang Ditawarkan
            </strong>
            <ol className="list-decimal list-inside mt-5 text-left text-sm sm:text-base lg:text-lg">
              <li>Executive Coaching</li>
              <li>Leadership Coaching</li>
              <li>Business Mentoring</li>
            </ol>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Untuk mengembangkan kompetensi dan keterampilan peserta sehingga
              mampu menjadi sumber daya yang handal dalam pencapaian target
              perusahaan.
            </p>
          </div>

          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#FDD016" images={images2} />
          </div>
        </section>
      </main>
    </>
  );
}
