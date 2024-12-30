"use client";
import React, { useState } from "react";
import Image from "next/image";

const TrainingScheduleForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Company: "",
    Position: "",
    Email: "",
    Office_Number: "",
    WhatsApp_Number: "",
    Training_Type: "Public",
  });
  const sendForm = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:1337/api/training-requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
        }),
      }
    );
    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <main>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 bg-blue-50 rounded-xl p-8 flex items-center justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
              {/* Calendar Icon - Using Image */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/calendar.png"
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
              Formulir Permintaan Jadwal Pelatihan Umum 2024
            </h2>

            <form className="space-y-4" onSubmit={sendForm}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  value={formData.Name}
                  onChange={(e) =>
                    setFormData({ ...formData, Name: e.target.value })
                  }
                  required
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
                  value={formData.Company}
                  onChange={(e) =>
                    setFormData({ ...formData, Company: e.target.value })
                  }
                  required
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
                  value={formData.Position}
                  onChange={(e) =>
                    setFormData({ ...formData, Position: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="Masukkan Jabatan"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telepon Kantor <span className="text-red-500">*</span>
                </label>
                <input
                  value={formData.Office_Number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      Office_Number: e.target.value,
                    })
                  }
                  required
                  type="tel"
                  placeholder="Masukkan Nomor WhatsApp"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  value={formData.WhatsApp_Number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      WhatsApp_Number: e.target.value,
                    })
                  }
                  required
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
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData({ ...formData, Email: e.target.value })
                  }
                  required
                  type="email"
                  placeholder="Masukkan Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrainingScheduleForm;
