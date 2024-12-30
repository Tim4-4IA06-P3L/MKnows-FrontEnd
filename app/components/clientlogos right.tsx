import React from "react";

const ClientLogosRight = ({ images }) => {
  return (
    <div className="flex animate-scrollRight w-max">
      <div className="flex justify-around items-center gap-4 md:gap-8 mr-4 md:mr-8">
        {/* First row of logos - moving left */}
        <div className="flex animate-scrollRight w-max">
          <div className="flex justify-around items-center gap-4 md:gap-8 ml-4 md:ml-8">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Client"
                className="h-8 md:h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogosRight;
