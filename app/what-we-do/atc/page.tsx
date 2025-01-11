import React from "react";
import CoverPage from "../../components/CoverPage";
import OverlayImage from "../../components/OverlayImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment for Technical Competency - M-Knows Consulting",
  description: "Assessment for Technical Competency M-Knows Consulting",
};

export default function AtcPage() {
  const images = ["/atc/atc2.jpg", "/atc/atc3.webp"];
  const images2 = ["/atc/atc4.jpg", "/atc/atc5.jpg"];
  const images3 = ["/atc/atc6.jpg", "/atc/atc7.png"];

  return (
    <>
      <main>
        <section>
          <CoverPage
            bgSrc="/atc/atc.png"
            coverTitle="Assessment for Technical Competency (ATC)"
            subTitle=""
          />
        </section>

        <section className="w-full flex flex-col items-center p-10 md:p-20">
          <strong className="text-2xl sm:text-3xl lg:text-5xl text-center mb-5">
            ATC : Solusi Integratif untuk Penilaian Potensi dan Kompetensi SDM
          </strong>
          <p className="text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            Adalah mitra (salah satu solusi) dalam mengukur dan menilai potensi
            serta kompetensi dari sumber daya manusia. ATC menawarkan solusi
            terintegrasi melalui metode terstandar dan sesuai dengan kebutuhan
            untuk menyesuaikan dengan kebutuhan pengembangan bakat/minat
            individu.
          </p>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col"
        >
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#B3FF00" images={images} />
          </div>

          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#9DE000]">
              ATC Menawarkan Solusi Integratif
            </strong>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Untuk mengoptimalisasi pengembangan bakat melalui metode dan sarana
              yang valid dan terpercaya. Kami juga memberikan laporan yang unik
              dan dipersonalisasikan oleh para asesor dan penasihat kami untuk
              memberikan informasi yang lengkap serta pengembangan jangka
              panjang kepada client.
            </p>
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col-reverse"
        >
          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#ED8222]">
              Solusi-Solusi yang Ditawarkan Oleh ATC
            </strong>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Sesuai dengan setiap Individual Development Plan serta dapat
              menangkap potensi serta kompetensi dari para sumber daya manusia
              serta dapat memberikan gambaran yang jelas dari profil sumber daya
              manusia dengan menggunakan tools – tools dari kami yang bisa di
              sesuaikan dengan kebutuhan client.
            </p>
          </div>

          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#FF983D" images={images2} />
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col"
        >
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#FDD016" images={images3} />
          </div>

          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#F0C413]">
              Program Pelatihan yang Efektif
            </strong>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Meningkatkan kompetensi sumber daya manusia untuk melakukan lebih
              baik dan nilai tambah bagi perusahaan serta institusi mereka.
              Pelatihan diperlukan untuk berbagai tujuan, misalnya mengembangkan
              keterampilan dan pengetahuan para eksekutif dan staf khusus,
              mempersiapkan sumber daya manusia baru untuk suatu posisi
              pekerjaan atau regenerasi, maupun mempersiapkan pensiun. M-Knows
              Consulting mendukung perusahaan dan bekerja sinergis dengan
              pusat-pusat pelatihan dalam menilai kebutuhan pelatihan,
              pengembangan pelatihan customized program, melakukan dan
              mengevaluasi pelatihan bagi staf profesional dan eksekutif.
              Konsultan yang berpengalaman dan berdedikasi tinggi memampukan
              M-Knows Consulting dalam menyusun materi pelatihan, menyampaikan
              materi pelatihan, serta metode evaluasi dalam rangka memperoleh
              hasil pelatihan yang terbaik.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
