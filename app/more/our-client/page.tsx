import React from "react";
import Image from "next/image";
import ClientLogos from "../../components/clientlogos left";
import ClientLogosRight from "../../components/clientlogos right";

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
  const imageArr = [
    "/client/image.png",
    "/client/image 5.png",
    "/client/image 6.png",
    "/client/image 7.png",
    "/client/image 8.png",
    "/client/image 9.png",
    "/client/image 10.png",
  ];
  const imageArr1 = [
    "/client/image.png",
    "/client/image 37.png",
    "/client/image 39.png",
    "/client/image 40.png",
    "/client/image 41.png",
    "/client/image 42.png",
    "/client/image 43.png",
  ];
  const imageArr2 = [
    "/client/image.png",
    "/client/image 44.png",
    "/client/image 45.png",
    "/client/image 46.png",
    "/client/image 47.png",
    "/client/image 48.png",
    "/client/image 49.png",
  ];
  const imageArr3 = [
    "/client/image.png",
    "/client/image 50.png",
    "/client/image 51.png",
    "/client/image 53.png",
    "/client/image 54.png",
    "/client/image 55.png",
    "/client/image 56.png",
  ];
  const imageArr4 = [
    "/client/image.png",
    "/client/image 57.png",
    "/client/image 58.png",
    "/client/image 59.png",
    "/client/image 60.png",
    "/client/image 61.png",
    "/client/image 62.png",
  ];
  const imageArr5 = [
    "/client/image.png",
    "/client/image 63.png",
    "/client/image 64.png",
    "/client/image 70.png",
    "/client/image 71.png",
    "/client/image 72.png",
    "/client/image 73.png",
  ];
  const imageArr6 = [
    "/client/image.png",
    "/client/image 74.png",
    "/client/image 75.png",
    "/client/image 76.png",
    "/client/image 77.png",
    "/client/image 78.png",
    "/client/image 79.png",
  ];
  const imageArr7 = [
    "/client/image.png",
    "/client/image 80.png",
    "/client/image 81.png",
    "/client/image 82.png",
    "/client/image 83.png",
    "/client/image 84.png",
    "/client/image 85.png",
  ];
  const imageArr8 = [
    "/client/image.png",
    "/client/image 86.png",
    "/client/image 87.png",
    "/client/image 89.png",
    "/client/image 90.png",
    "/client/image 91.png",
    "/client/image 92.png",
  ];
  const imageArr9 = [
    "/client/image.png",
    "/client/image 93.png",
    "/client/image 94.png",
    "/client/image 95.png",
  ];
  return (
		<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
			{/* Header Section */}
			<h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-blue-800 my-6 sm:my-8 lg:my-12 text-center">
				In-House Training
			</h1>

			{/* Content Sections */}
			<ClientLogos images={imageArr} />
			<ClientLogosRight images={imageArr1} />
			<ClientLogos images={imageArr2} />
			<ClientLogosRight images={imageArr3} />
			<ClientLogos images={imageArr4} />
			<ClientLogosRight images={imageArr5} />
			<ClientLogos images={imageArr6} />
			<ClientLogosRight images={imageArr7} />
			<ClientLogos images={imageArr8} />
			<ClientLogosRight images={imageArr9} />
		</main>
  );
};

export default InHouseTraining;
