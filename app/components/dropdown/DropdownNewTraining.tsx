import React from "react";

const DropdownNewTraining = () => {
  return (
		<div className="cursor-default bg-white flex lg:flex-col 
				lg:top-20 lg:left-0 lg:absolute w-full shadow-sm">
			<div
        className="
				lg:overflow-auto
				lg:[&::-webkit-scrollbar]:w-2
				lg:[&::-webkit-scrollbar]:h-2
				lg:[&::-webkit-scrollbar-track]:bg-neutral-100
				lg:[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
      >
				<div className="w-max left-0 p-8 min-[320px]:max-sm:text-sm min-[320px]:max-sm:w-full 
				flex flex-col lg:flex-row lg:space-x-12">
					<ul className="space-y-5">
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								AI Sales Tools
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Virtual Reality
							</a>
						</li>
					</ul>
				</div>
			</div>
    </div>
  );
};

export default DropdownNewTraining;
