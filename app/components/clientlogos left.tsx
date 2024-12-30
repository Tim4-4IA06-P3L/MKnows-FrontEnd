import React from "react";

const ClientLogos = ({images}) => {
  return (
    <div className="w-full w-[80%] overflow-hidden bg-white py-10 mx-auto">
      <div className="flex flex-col space-y-5 relative w-full">
        {/* First row of logos - moving left */}
        <div className="flex animate-scrollLeft w-max">
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

export default ClientLogos;
