import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ClientLogos = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <h2 className="text-4xl font-semibold text-[#1E3A8A] text-center mb-8">
        Our Clients
      </h2>
      <div className="relative w-full">
        {/* First row of logos - moving left */}
        <div className="flex animate-scrollLeft">
          <div className="flex min-w-full justify-around items-center gap-8">
            <img
              src="/MKnows_Logo.png"
              alt="Clodeo"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="Bridgestone"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="SMI"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="Tripa"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="Mandiri"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="BNI"
              className="h-12 object-contain"
            />
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-full justify-around items-center gap-8">
            <img
              src="/MKnows_Logo.png"
              alt="Clodeo"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="Bridgestone"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="SMI"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="Tripa"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="Mandiri"
              className="h-12 object-contain"
            />
            <img
              src="/MKnows_Logo.png"
              alt="BNI"
              className="h-12 object-contain"
            />
          </div>
        </div>

        {/* Second row of logos - moving right */}
        <div className="flex animate-scrollRight mt-8">
          <div className="flex min-w-full justify-around items-center gap-8">
            <img
              src="/client-logos/csm.png"
              alt="CSM"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/indokordsa.png"
              alt="Indokordsa"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/csul-finance.png"
              alt="CSUL Finance"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/mkom.png"
              alt="MKOM"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/orico.png"
              alt="Orico"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/bank.png"
              alt="Bank"
              className="h-12 object-contain"
            />
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-full justify-around items-center gap-8">
            <img
              src="/client-logos/csm.png"
              alt="CSM"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/indokordsa.png"
              alt="Indokordsa"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/csul-finance.png"
              alt="CSUL Finance"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/mkom.png"
              alt="MKOM"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/orico.png"
              alt="Orico"
              className="h-12 object-contain"
            />
            <img
              src="/client-logos/bank.png"
              alt="Bank"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InHouseTraining = () => {
  const TrainingLocation = ({ number, text }) => (
    <div className="flex gap-2 items-start mb-4">
      <span className="text-blue-600 font-semibold text-lg">{number}.</span>
      <p className="text-gray-800 text-justify text-lg">{text}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Navbar />
      {/* Header Section */}
      <h1 className="text-5xl font-semibold text-blue-800 mb-8 text-center">
        In-House Training
      </h1>
      {/* Top Content Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <img
            src="/MKnows_Logo.png"
            alt="Office workspace"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 text-justify text-lg">
            Pelatihan internal merupakan program pelatihan yang diselenggarakan
            oleh M-KNOWS CONSULTING bekerjasama dengan perusahaan dalam
            pemantapan materi, meningkatkan skill karyawan sehingga meningkatkan
            keunggulan kompetitif bidang Sumberdaya Manusia dengan materi
            tertentu seperti Selling Skills, Leadership, Executive Coaching
            &amp; Business Mentoring, Train The Trainer, Collection Skills,
            Credit Analysis dan lain-lain sesuai kebutuhan perusahaan atau
            lembaga.
          </p>
        </div>
      </div>
      {/* Middle Content Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <p className="text-gray-700 text-justify text-lg">
            M-KNOWS CONSULTING siap membantu mengembangkan program pelatihan,
            materi, dan jadwal yang sesuai dengan kebutuhan bisnis. Sejak tahun
            2003, kami telah menyelenggarakan pelatihan internal di banyak
            perusahaan dan lembaga perbankan. Kami telah mengembangkan materi
            yang sesuai dengan kebutuhan bisnis atau lembaga yang ingin
            meningkatkan kemampuan SDM-nya tetapi memiliki waktu terbatas.
            Metode pelatihan dirancang untuk dapat diterapkan segera setelah
            selesai karena didasarkan pada kebutuhan nyata di tempat kerja.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/MKnows_Logo.png"
            alt="Training session"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* Bottom Content Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <img
            src="/MKnows_Logo.png"
            alt="Coffee and notebook"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 text-justify text-lg">
            Sistem penyelenggaraan pelatihan dapat diadakan dalam kelas kecil
            (10-20 peserta) atau kelas besar (lebih dari 50 peserta). Pelatihan
            diselenggarakan di tempat, tanggal, dan waktu yang disepakati,
            biasanya berlangsung selama beberapa hari dari jam 08.00 hingga
            17.00, atau sesuai kebutuhan perusahaan. Jumlah pertemuan bisa
            disesuaikan. In-house training dapat dilakukan di luar Jabodetabek
            dan di seluruh wilayah Indonesia.
          </p>
        </div>
      </div>
      {/* Training Materials Section */}
      <div>
        <h2 className="text-4xl font-semibold text-blue-900 mb-6 text-center ">
          Materi pelatihan yang diselenggarakan:
        </h2>
        <div className="space-y-2">
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
      {/* Our Clients Section */}
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default InHouseTraining;
