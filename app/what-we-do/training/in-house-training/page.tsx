import React, { FC } from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-House Training - M-Knows Consulting",
  description: "In-House Training (Pelatihan In-House) M-Knows Consulting",
};

const InHouseTrainingPage = () => {
  const TrainingLocation: FC<{ number: string; text: string }> = ({
    number,
    text,
  }) => (
    <div className="flex gap-2 items-start mb-6">
      <span className="text-blue-600 font-semibold text-base sm:text-lg flex-shrink-0">
        {number}.
      </span>
      <p className="text-gray-800 text-justify text-sm sm:text-base lg:text-lg">
        {text}
      </p>
    </div>
  );

  return (
    <>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-blue-800 my-6 sm:my-8 lg:my-12 text-center">
          In-House Training
        </h1>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="w-full">
              <Image
                src="/training/inh1.jpeg"
                alt="Office workspace"
                width={500}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                Pelatihan internal merupakan program pelatihan yang
                diselenggarakan oleh M-KNOWS CONSULTING bekerjasama dengan
                perusahaan dalam pemantapan materi, meningkatkan skill karyawan
                sehingga meningkatkan keunggulan kompetitif bidang Sumberdaya
                Manusia dengan materi tertentu seperti Selling Skills,
                Leadership, Executive Coaching &amp; Business Mentoring, Train
                The Trainer, Collection Skills, Credit Analysis dan lain-lain
                sesuai kebutuhan perusahaan atau lembaga.
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="flex items-center md:order-1 order-2">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                M-KNOWS CONSULTING siap membantu mengembangkan program
                pelatihan, materi, dan jadwal yang sesuai dengan kebutuhan
                bisnis. Sejak tahun 2003, kami telah menyelenggarakan pelatihan
                internal di banyak perusahaan dan lembaga perbankan. Kami telah
                mengembangkan materi yang sesuai dengan kebutuhan bisnis atau
                lembaga yang ingin meningkatkan kemampuan SDM-nya tetapi
                memiliki waktu terbatas. Metode pelatihan dirancang untuk dapat
                diterapkan segera setelah selesai karena didasarkan pada
                kebutuhan nyata di tempat kerja.
              </p>
            </div>
            <div className="w-full md:order-2 order-1">
              <Image
                src="/training/inh2.jpeg"
                alt="Training session"
                width={500}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="w-full">
              <Image
                src="/training/inh3.webp"
                alt="Coffee and notebook"
                width={500}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
                Sistem penyelenggaraan pelatihan dapat diadakan dalam kelas
                kecil (10-20 peserta) atau kelas besar (lebih dari 50 peserta).
                Pelatihan diselenggarakan di tempat, tanggal, dan waktu yang
                disepakati, biasanya berlangsung selama beberapa hari dari jam
                08.00 hingga 17.00, atau sesuai kebutuhan perusahaan. Jumlah
                pertemuan bisa disesuaikan. In-house training dapat dilakukan di
                luar Jabodetabek dan di seluruh wilayah Indonesia.
              </p>
            </div>
          </div>

          {/* Training Materials Section */}
          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-blue-900 mb-6 lg:mb-8 text-center">
              Materi pelatihan yang diselenggarakan:
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <TrainingLocation
                number="1"
                text="Tempat Penyelenggaraan Training: Pelatihan dapat diselenggarakan di Perusahaan atau internal. Pelatihan dapat diselenggarakan di tempat yang diinginkan misal: Hotel, Training Center perusahaan, dll."
              />
              <TrainingLocation
                number="2"
                text="Fasilitas : Sertifikat, training kit, snack, lunch, peralatan presentasi, dll. akan disediakan oleh M-KNOWS CONSULTING"
              />
              <TrainingLocation
                number="3"
                text="Durasi : Durasi pelatihan dapat disesuaikan dengan kebutuhan, mulai dari 1 hari sampai beberapa hari."
              />
              <TrainingLocation
                number="4"
                text="Peserta : Peserta dapat dari internal perusahaan yang dapat mencakup: staf, manajer, pemimpin, dan direktur."
              />
              <TrainingLocation
                number="5"
                text="Metode : Metode pelatihan disesuaikan dengan kebutuhan dan dapat menggunakan berbagai metode pelatihan, seperti ceramah, diskusi, studi kasus, dan role-playing."
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default InHouseTrainingPage;
