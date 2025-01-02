import React from "react";
import Image from "next/image";

const ClientLogos = ({direction, images}) => {
  return (
    <div className="w-full w-[80%] overflow-hidden bg-white py-10">
      <div className="flex flex-col space-y-5 w-[1500px]">
        <div className={`flex justify-around ${direction == "left" ? "animate-scrollLeft" : "animate-scrollRight"} w-[200%] gap-[1%] h-12`}>
					{images.map((image, index) => (
						<div key={index}>
							<Image
								src={image}
								alt="Client"
								width={500}
								height={300}
								style={{
									height:"100%",
									objectFit: "contain"
								}}
							/>
						</div>
					))}
					{images.map((image, index) => (
						<div key={index}>
							<Image
								src={image}
								alt="Client"
								width={500}
								height={300}
								style={{
									height:"100%",
									objectFit: "contain"
								}}
							/>
						</div>
					))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
