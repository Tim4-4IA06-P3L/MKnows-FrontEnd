"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

const TrainingScheduleForm: FC<{ type: string }> = ({ type }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Company: "",
    Position: "",
    Email: "",
    Office_Number: "",
    WhatsApp_Number: "",
    Training_Type: type,
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.CMS_URL}/api/training-requests`,
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
        setError(false);
        setShowModal(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const clickModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!error) {
      router.push("/");
    } else {
      setShowModal(false);
      setError(false);
    }
  };

  return (
    <>
      <main>
        {showModal && error && <Modal error={true} onClick={clickModal} />}
        {showModal && !error && <Modal error={false} onClick={clickModal} />}
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 bg-blue-50 rounded-xl p-8 flex items-center justify-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
                {/* Calendar Icon - Using Image */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src="/training/calendar.png"
                    alt="Calendar Icon"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                {`Formulir Permintaan Jadwal Pelatihan Umum ${new Date().getFullYear()}`}
              </h2>

              <form className="space-y-4" onSubmit={sendForm}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={formData.Name}
                    pattern="[A-Za-z '\-\.]+"
                    title="Hanya boleh diisi huruf besar (A-Z), huruf kecil (a-z), strip (-), petik satu ('), dan titik (.)"
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
                    pattern="^0[0-9]{9,}"
                    title="Hanya boleh diisi angka (0-9), diawali dengan 0, dan panjang minimum 10 angka"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        Office_Number: e.target.value,
                      })
                    }
                    required
                    type="tel"
                    placeholder="Masukkan Nomor Telepon Kantor"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={formData.WhatsApp_Number}
                    pattern="^0[0-9]{9,}"
                    title="Hanya boleh diisi angka (0-9), diawali dengan 0, dan panjang minimum 10 angka"
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
    </>
  );
};

export default TrainingScheduleForm;
