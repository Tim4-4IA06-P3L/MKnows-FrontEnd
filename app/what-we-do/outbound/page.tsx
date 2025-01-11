import Image from "next/image";
import CoverPage from "../../components/CoverPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outbound - M-Knows Consulting",
  description: "Kegiatan Outbound M-Knows Consulting",
};

const OutboundPage = () => {
  const packages = [
    {
      title: "Paket Outbound 1 Hari",
      src: "/outbound/ob2.jpeg",
      alt: "Paket Outbound 1 Hari",
    },
    {
      title: "Paket Outbound 2 Hari",
      src: "/outbound/ob3.jpeg",
      alt: "Paket Outbound 2 Hari",
    },
    {
      title: "Paket Outbound 13 Hari",
      src: "/outbound/ob4.jpeg",
      alt: "Paket Outbound 13 Hari",
    },
  ];

  const videos = [
    { title: "Fun Offroad", src: "/outbound/ob5.jpeg" },
    { title: "Drone Video", src: "/outbound/ob6.jpeg" },
    { title: "Management Training Program", src: "/outbound/ob7.jpeg" },
    { title: "Motivasi Outbound", src: "/outbound/ob8.jpeg" },
    { title: "Family Employee & Gathering", src: "/outbound/ob9.jpeg" },
  ];

  return (
    <>
      <main>
        <section className="pb-10">
          <CoverPage
            bgSrc="/outbound/outbound.png"
            coverTitle="Outbound & Gathering"
            subTitle=""
          />
        </section>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold my-6 sm:my-8 lg:my-12 text-center">
          Outbound Training
        </h1>

        {/* Text */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto pb-20">
          <div className="flex items-center mx-10 md:mx-20 lg:mx-40 xl:mx-0">
            <p className="text-gray-700 sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
              Outbound merupakan jenis latihan yang memanfaatkan keunggulan alam
              (outdoor) untuk membangun kerjasama tim dan pengembangan diri yang
              disimulasi dalam outbound training melalui permainan-permainan
              outbound yang edukatif baik dilakukan secara individu maupun
              kelompok.
            </p>
          </div>
        </div>

        {/* grid section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src="/outbound/ob1.jpeg"
              alt="Outbound Program"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full text-gray-800 text-justify xl:mr-20">
            <p className="text-lg leading-relaxed">
              Paket Outbound yang kami tawarkan tidak hanya mencakup tantangan
              fisik dan mental, tetapi juga tantangan intelegensia. Program ini
              dirancang dengan permainan dan kegiatan yang dapat memberikan
              perubahan karakter, sehingga individu menjadi lebih baik dan
              positif.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Outbound training sangat cocok untuk perusahaan, baik swasta
              maupun instansi pemerintah, yang ingin meningkatkan kinerja
              karyawan mereka. Program ini dapat meningkatkan kreativitas,
              membangun jiwa kepemimpinan, memperkuat kerjasama tim, menumbuhkan
              kebersamaan, serta rasa saling percaya dan tanggung jawab. Melalui
              kegiatan yang menyenangkan, karyawan perusahaan Anda akan
              mendapatkan banyak pelajaran yang dapat diterapkan untuk
              meningkatkan kinerjanya.
            </p>
          </div>
        </div>

        {/* outbound packages */}
        <h2 className="text-xl text-left pl-10 md:pl-24 pt-20 pb-8">
          Paket Outbound Training yang kami tawarkan meliputi:
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="h-48 mx-6 bg-white shadow-lg border-lime-700 
						border rounded-lg overflow-hidden flex items-center justify-center basis-[100%] md:basis-[33%] lg:basis-[25%]"
            >
              <div className="w-1/3 flex justify-center">
                <Image
                  src={pkg.src}
                  alt={pkg.alt}
                  width={120}
                  height={100}
                  loading="lazy"
                  className="border rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-4 flex items-stretch justify-center">
                <h2 className="md:text-2xl text-lg text-lime-700">
                  {pkg.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* video section */}
        <section className="py-10 px-20">
          <h2 className="text-center text-3xl font-semibold mb-16">
            Video Outbound
          </h2>
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
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <p className="text-white text-lg font-semibold text-center">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default OutboundPage;
