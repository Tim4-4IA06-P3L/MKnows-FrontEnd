import React from "react";

const CoverPage = ({ bgSrc, coverTitle, subTitle }) => {
  return (
		<div className="relative w-full bg-right-top bg-contain bg-no-repeat z-0"
			style = {{ 
				backgroundImage: `url('${bgSrc}')`,
			}}
		>
			<div className="relative flex w-[65%] justify-start items-center">
				<div className="absolute text-lg sm:text-3xl md:text-4xl lg:text-6xl font-semibold p-8">
					<strong>{coverTitle}</strong>
					<p><strong className="sm:text-2xl md:text-3xl lg:text-5xl text-sky-600">{subTitle}</strong></p>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 1050 450">
					<polygon fill="#D7E9F4" points="0,0 1050,0 950,450 0,450" />
					<polygon fill="#B3FF00" points="1020,0 1050,0 950,450 920,450" />
				</svg>
			</div>
		</div>
  );
};

export default CoverPage;
