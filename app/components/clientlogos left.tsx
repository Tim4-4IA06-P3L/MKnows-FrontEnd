import React from "react";

const ClientLogos = ({images}) => {
  return (
    <div className="w-full w-[80%] overflow-hidden bg-white py-10">
      <div className="flex flex-col space-y-5 w-[1500px]">
        <div className="flex justify-around animate-scrollLeft w-[200%]">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt="Client"
							className="h-12 object-contain"
						/>
					))}
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt="Client"
							className="h-12 object-contain"
						/>
					))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
