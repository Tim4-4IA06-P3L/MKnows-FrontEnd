import React from "react";

const CoverPage = ({ bgSrc, coverTitle, subTitle }) => {
  return (
		<div className="relative w-full bg-right-top bg-contain bg-no-repeat z-0"
			style = {{ 
				backgroundImage: `url('${bgSrc}')`,
			}}
		>
			<div className="flex w-[65%] justify-around items-center">
				<div className="absolute min-[320px]:max-sm:text-[15px] sm:text-lg md:text-4xl lg:text-6xl p-5 max-w-[60%]">
					<strong>{coverTitle}</strong>
					<p><strong className="sm:text-md md:text-3xl lg:text-5xl">{subTitle}</strong></p>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 1050 450">
					<polygon fill="#AECFDF" points="0,0 1050,0 950,450 0,450" />
					<polygon fill="#B3FF00" points="1020,0 1050,0 950,450 920,450" />
				</svg>
			</div>
		</div>
  );
};

export default CoverPage;
