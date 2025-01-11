import React from "react";
import CoverPage from "../../components/CoverPage";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Service - M-Knows Consulting",
  description: "Consulting Service (Jasa Konsultasi) M-Knows Consulting",
};

export default function ConsultingPage() {
  return (
    <>
      <main>
        <section>
          <CoverPage
            bgSrc="/consulting-service/Consulting_Img.jpg"
            coverTitle="Consulting Service M-Knows Consulting"
            subTitle=""
          />
        </section>

        <section className="w-full flex flex-col items-center p-10 md:p-20">
          <strong className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-5">
            Kemitraan SDM dan Bisnis Masa Depan
          </strong>
          <p className="text-center text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            Mempunyai hubungan jangka panjang dengan perusahaan-perusahaan lokal
            dan internasional yang berbasis di Indonesia untuk mendukung
            pengembangan sumber daya manusia mereka serta strategi bisnis dan
            manajemen. Program pengembangan ini dirancang untuk meningkatkan
            keahlian spesifik bahwa perusahaan membutuhkan strategi untuk
            menghadapi masa depan.
          </p>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col"
        >
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <Image
              src="/consulting-service/15.png"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
              alt="15"
            />
          </div>

          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#1C75BC]">
              Kami telah menjadi mitra terpercaya (lebih dari 15 tahun)
            </strong>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Bagi perusahaan nasional dan multinasional dalam mendukung
              pengembangan bisnis dan strategi manajemen dan kompetensi sumber
              daya manusia. Kebanggaan berasal dari hubungan jangka panjang yang
              saling menguntungkan dengan berbagai perusahaaan yang memiliki
              visi untuk sukses, dan komitmen untuk mencapai kesuksesan itu
              melalui pengembangan sumber daya manusia.
            </p>
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col-reverse"
        >
          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#ED8222]">
              Pengembangan Sumber Daya Manusia
            </strong>
            <p className="text-left mt-5 text-sm sm:text-base lg:text-lg">
              Merupakan proses yang berkesinambungan yang membutuhkan komitmen
              yang tinggi dan manajemen yang baik untuk menjadi efektif dalam
              segala hal. Program pengembangan berkaitan dengan tahap
              pengembangan perusahaan dan tujuan jangka pendek serta jangka
              panjang mereka, baik saat start up, dalam ekspansi, dalam masa
              transisi atau berbalik. Perusahaan harus merencanakan dan
              merancang program pembangunan dengan hati-hati sesuai dengan
              setiap lapisan manajemen seperti : MT (Management Trainee),
              Leadership Program & Consulting.
            </p>
          </div>

          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <Image
              src="/consulting-service/Rocket.png"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
              alt="15"
            />
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col"
        >
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <Image
              src="/consulting-service/pelatihan-efektif.png"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
              alt="15"
            />
          </div>

          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#983EB1]">
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

        <section className="relative w-full flex flex-col items-center min-[320px]:max-md:mt-32 mt-20">
          <div className="relative w-full h-[300px]">
            <Image
              src="/consulting-service/business-2.jpg"
              alt="Kerja Sama"
              fill={true}
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
          </div>

          <div className="absolute w-4/5 -translate-y-1/2 p-3 md:p-6 bg-[#AECFDF] text-center">
            <strong className="text-bold text-xl min-[320px]:max-md:text-md md:text-xl">
              M-Knows Consulting telah memperoleh banyak kesempatan bekerja sama
            </strong>
            <p className="min-[320px]:max-md:text-sm md:text-lg">
              Dengan lembaga-lembaga swasta dan pemerintah pada proyek-proyek
              perumusan kebijakan, studi banding, serta undangan untuk menjadi
              pembicara tamu dalam berbagai kesempatan dan pertemuan atau
              seminar untuk berbagi dan memperkenalkan pandangan dan pengetahuan
              di bidang ekonomi, manajemen dan bisnis.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
