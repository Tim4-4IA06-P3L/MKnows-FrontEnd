import React from "react";
import Image from "next/image";

const Logo = ({ props }) => {
  return (
    <div className={`h-10 flex items-center ${props}`}>
      <Image
        src="/MKnows_Logo.png"
				width={198}
				height={62}
				style= {{
					height: "75%",
					width: "auto",
				}}
        alt="M-Knows Logo"
      />
    </div>
  );
};

export default Logo;
