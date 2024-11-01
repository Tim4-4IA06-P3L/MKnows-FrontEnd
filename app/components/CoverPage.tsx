import React from "react";

const CoverPage = ({ bgSrc, coverTitle }) => {
  return (
		<div className="relative w-full bg-right-top bg-contain bg-no-repeat z-0"
			style = {{ backgroundImage: `url('${bgSrc}')`}}
		>
			<div className="flex w-3/5 justify-around items-center">
				<div className="absolute text-6xl p-5">
					<strong>{coverTitle}</strong>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 1024 500">
					<polygon fill="#AECFDF" points="0,0 1024,0 900,500 0,500" />
					<polygon fill="#B3FF00" points="1000,0 1024,0 900,500 876,500" />
				</svg>
			</div>
		</div>
  );
};

export default CoverPage;
