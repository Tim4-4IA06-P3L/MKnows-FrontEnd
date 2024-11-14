import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TrainingScheduleForm = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 bg-lime-100 rounded-xl p-8 flex items-center justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
              {/* Calendar Icon - Using Image */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/calendar2.png"
                  alt="Calendar Icon"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Permintaan Formulir
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Perusahaan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Nama Perusahaan"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jabatan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan Jabatan"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Whatsapp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Masukkan Nomor WhatsApp"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Masukkan Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Masukkan Kategori"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Masukkan Deskripsi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Kirim
              </button>

              <button
                type="submit"
                className="w-50% bg-lime-400 text-white py-2 px-4 rounded-md"
              >
                <Image
                  src="/button2.png" // Pastikan file ada di folder public
                  alt="Chat Icon"
                  width={40}
                  height={24}
                  className="mr-2 justify-center"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainingScheduleForm;
