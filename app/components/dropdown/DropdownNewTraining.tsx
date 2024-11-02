import React from "react";

const DropdownNewTraining = () => {
  return (
		<div className="cursor-default bg-white flex flex-col top-20 left-0 absolute w-full shadow-sm">
			<div
        className="
				overflow-auto
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar]:h-2
				[&::-webkit-scrollbar-track]:bg-neutral-100
				[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
      >
				<div className="w-max left-0 p-8 flex flex-row space-x-12">
					<ul className="space-y-5 w-max">
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
