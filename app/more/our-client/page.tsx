import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ClientLogos from "../../components/clientlogos";

const InHouseTraining = () => {
  const TrainingLocation = ({ number, text }) => (
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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-blue-800 my-6 sm:my-8 lg:my-12 text-center">
          In-House Training
        </h1>

        {/* Content Sections */}
        <ClientLogos />
      </main>

      {/* Client Logos and Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default InHouseTraining;
