import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Facilitator - M-Knows Consulting",
  description: "Facilitator (Fasilitator) M-Knows Consulting",
};

const FacilitatorPage = () => {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-sky-600 my-6 sm:my-8 lg:my-12 text-center">
          Facilitator
        </h1>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-24 max-w-7xl mx-auto">
          {/* Bunaiya */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/facilitator/Pak Bunaiya-01.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mr-10 lg:mr-20 ml-10 md:ml-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Bunaiya
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Bunaiya adalah ahli strategi penjualan dan pengembangan SDM di
                M-Knows Consulting dengan latar belakang dari Universitas
                Indonesia. Pengalaman luasnya meliputi manajemen proyek, Six
                Sigma, perencanaan strategis, manajemen perubahan, serta
                peningkatan pemasaran dan penjualan. Dia juga terampil dalam NLP
                dan hypnotherapy bersertifikat.
              </p>
            </div>
          </div>

          {/* Hasni */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col items-center md:items-start ml-10 lg:ml-20 mr-10 md:mr-0 md:order-1 order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Hasniati Halim
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Hasni adalah praktisi sales & marketing di industri perhotelan
                dengan latar belakang pendidikan sarjana di Public Relations
                dari Universitas Padjajaran dan gelar master di Manajemen
                Pemasaran dari Institut Manajemen Telkom. Dia memiliki
                sertifikasi Marketing for Hospitality dari Cornell University,
                Licensed Practitioner of NLP, dan Certified Corporate Coach.
                Hasni telah berpengalaman selama 16 tahun di perhotelan dan saat
                ini juga menjadi dosen di Swiss German University.
              </p>
            </div>
            <div className="w-full h-full md:order-2 order-1 flex justify-center">
              <Image
                src="/facilitator/Bu Hasni-01.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
          </div>

          {/* Rolando */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/facilitator/Foto RL.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mr-10 lg:mr-20 ml-10 md:ml-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Rolando Gunawan
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Rolando Gunawan telah bergabung dengan M-Knows Consulting sejak
                2008 dan menjabat sebagai Senior Consultant. Sebelumnya, ia
                memiliki pengalaman di industri Forex dan Pariwisata selama
                lebih dari 14 tahun. Rolando sering berkolaborasi dengan
                kliennya dalam berbagai bidang seperti Penilaian Kinerja,
                Pelatihan, Pengukuran KPI, Leadership, Presentation Skills,
                Sales & Marketing, dan Problem Solving. Selain itu, ia juga
                mahir mengelola program pelatihan dari kelas kecil hingga besar
                setiap tahunnya.
              </p>
            </div>
          </div>

          {/* Alam */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col items-center md:items-start ml-10 lg:ml-20 mr-10 md:mr-0 md:order-1 order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Alam Daru
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                M. Alam memiliki lebih dari 17 tahun pengalaman di bidang
                Pengembangan SDM, dimulai dari industri layanan keuangan. Dia
                memiliki keahlian dalam Marketing, Selling, Lobbying,
                Leadership, Coaching & Counseling, serta Pelatihan &
                Pengembangan SDM. Saat ini, ia menjalankan perusahaan konsultasi
                dan pelatihan di Jawa Timur dan sekitarnya.
              </p>
            </div>
            <div className="w-full h-full md:order-2 order-1 flex justify-center">
              <Image
                src="/facilitator/pak Alam-01.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
          </div>

          {/* Tri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/facilitator/TR.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mr-10 lg:mr-20 ml-10 md:ml-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Tri Sulistyaningsih
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Tri Sulistyaningsih adalah Konsultan dan Manajer Senior di
                M-Knows Consulting dengan lebih dari 10 tahun pengalaman dalam
                konsultasi dan pelatihan untuk perusahaan-perusahaan seperti
                Toyota Astra Finance, Dipo Star Finance, Bank of Tokyo, Mitsui
                Leasing Capital Indonesia, AKS Indonesia, dan Toshiba. Ia
                memiliki latar belakang pendidikan dari Universitas Pembangunan
                Nasional Veteran Jakarta.
              </p>
            </div>
          </div>

          {/* Dwi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col items-center md:items-start ml-10 lg:ml-20 mr-10 md:mr-0 md:order-1 order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Dwi Priyanto
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Dwi, lulusan STIMIK Management Informatika, telah memiliki karir
                profesional selama lebih dari 30 tahun di industri perhotelan,
                perbankan, dan multifinance, termasuk di Hilton Hotel, Digicon
                Mega Pratama, Citibank, dan GE Finance Indonesia. Jabatan
                terakhirnya adalah Region Operation Head. Keahliannya meliputi
                Collection & Recovery, Credit Analyst, Fraud Investigation,
                General Affair & Operation Management, Customer Service, Front
                Liner, dan Strategic Marketing.
              </p>
            </div>
            <div className="w-full h-full md:order-2 order-1 flex justify-center">
              <Image
                src="/facilitator/Pak Dwi-01.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
          </div>

          {/* Erlina */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/facilitator/Erlina Novita.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mr-10 lg:mr-20 ml-10 md:ml-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Erlina Novita, SE Akt
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Erlina Novita adalah Senior Consultant & Trainer di M-Knows
                Consulting dengan sertifikasi Trainer BNSP, juga menjabat
                sebagai Corporate Secretary. Dia lulus dari FEB UI dalam bidang
                akuntansi dan memiliki pengalaman di Bank Bumi Daya dan Bank
                Mandiri. Karirnya meliputi posisi Marketing Officer di Kanwil
                Sumbagsel & Babel, Wakil Pimpinan Cabang Mabes TNI Cilangkap,
                dan Pimpinan Cabang Jakarta Condet serta Jakarta Bendungan
                Hilir. Selain itu, dia pernah menjadi Senior Leader di industri
                asuransi yang sering memenangkan kontes di Asia dan Eropa.
              </p>
            </div>
          </div>

          {/* Dedy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col items-center md:items-start ml-10 lg:ml-20 mr-10 md:mr-0 md:order-1 order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Dedy Kusuma
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Dedy Kusuma adalah Consultant dan Sales Team Group Head di
                M-Knows Consulting, lulusan Universitas Trisakti dengan latar
                belakang di industri telekomunikasi sebelum bergabung. Dengan
                lebih dari 12 tahun pengalaman, ia ahli dalam konsultasi Sales &
                Marketing, Customer Services, Organizational Culture,
                Relationship Building, Learning Management System, dan Project
                Execution & Reporting untuk berbagai klien, termasuk Kementerian
                Agama, Jasaraharja, Kementerian Perdagangan, BPOM, Lexus, Astra
                Honda Motor, TMMIN, Astra International, dan Astra Credit
                Company.
              </p>
            </div>
            <div className="w-full h-full md:order-2 order-1 flex justify-center">
              <Image
                src="/facilitator/DK.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
          </div>

          {/* Dewi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/facilitator/DW.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mr-10 lg:mr-20 ml-10 md:ml-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Dewi Puji Astuti
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Dewi Puji Astuti adalah konsultan di M-Knows Consulting dengan
                pengalaman lebih dari 8 tahun. Dia telah menangani konsultasi
                dan pelatihan untuk berbagai perusahaan nasional dan
                multinasional seperti Hino, Bank Indonesia, OJK, dan Yamaha
                Indonesia. Proyek yang dia tangani meliputi Manajemen SDM
                Berbasis Kompetensi, KPI, Penilaian Kinerja, PDCA, Sistem
                Manajemen Pembelajaran, dan Kepemimpinan Transformasional.
              </p>
            </div>
          </div>

          {/* Ricky */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col items-center md:items-start ml-10 lg:ml-20 mr-10 md:mr-0 md:order-1 order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Ricky Dahlan, SE, Akt, MM
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Ricky Dahlan adalah Senior Consultant/Trainer dan Direktur
                M-Knows Consulting. Berpendidikan Sarjana Akuntansi dari FEB UI
                dan Magister Manajemen Keuangan dari UGM, Ricky memulai karir di
                Citibank, lalu Ernst & Young, kemudian di Bank Mandiri dan Bank
                Danamon sebagai AVP. Dia juga pernah menjadi Head of Debt
                Trading di Trimegah Securities dan Direktur Utama di Batasa
                Capital. Sebagai Trainer sejak 2007, Ricky memegang sertifikat
                kompetensi BNSP sebagai Master Trainer, Kepala Lembaga
                Pelatihan, dan Manajer Human Capital.
              </p>
            </div>
            <div className="w-full h-full md:order-2 order-1 flex justify-center">
              <Image
                src="/facilitator/Ricky Dahlan.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
          </div>

          {/* Santy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/facilitator/bu santyy-01.avif"
                alt="Office workspace"
                width={200}
                height={200}
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}
              />
            </div>
            <div className="flex flex-col items-center md:items-start mr-10 lg:mr-20 ml-10 md:ml-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-thin text-sky-600 mb-4">
                Santy Dewi
              </h2>
              <p className="text-black text-sm sm:text-base lg:text-lg text-left">
                Berpengalaman sebagai praktisi selama lebih dari 12 tahun
                di beragam Industri antara lain Multifinance, Bursa Keuangan,
                Penerbangan, Kontraktor, dan Pendidikan. Kelas yang Santy
                bawakan senantiasa Fun dan Energik. Pengetahuan beliau bersifat
                Aplikatif, sangat sesuai bagi mereka yang bekerja dibagian
                Operasional secara menyeluruh, khususnya di bidang Sales, Credit
                Analisis, Collection dan Customer Service. Selain materi
                teknis-operasional, Santy juga membawakan materi soft skills
                M-Knows dibidang Communication dan Leadership untuk jajaran
                manajemen menengah kebawah.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FacilitatorPage;
