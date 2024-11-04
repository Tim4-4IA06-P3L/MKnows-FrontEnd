import React from "react";

const CoverPage = ({ bgSrc, coverTitle }) => {
  return (
		<div className="relative w-full bg-right-top bg-contain bg-no-repeat z-0"
			style = {{ backgroundImage: `url('${bgSrc}')`}}
		>
			<div className="flex w-[65%] justify-around items-center">
				<div className="absolute text-lg md:text-4xl lg:text-6xl p-5 max-w-[60%]">
					<strong>{coverTitle}</strong>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 1050 450">
					<polygon fill="#AECFDF" points="0,0 1050,0 900,450 0,450" />
					<polygon fill="#B3FF00" points="1020,0 1050,0 900,450 870,450" />
				</svg>
			</div>
		</div>
  );
};

export default CoverPage;
