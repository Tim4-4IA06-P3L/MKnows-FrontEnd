import React from "react";

const DropdownMore = () => {
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
				<div className="w-max left-0 p-8 flex 
						flex-col lg:flex-row lg:space-x-12">
					<ul className="space-y-5">
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								History
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Vision & Mission
							</a>
						</li>
					</ul>
					<ul className="space-y-5 min-[320px]:max-lg:mt-5">
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Our Clients
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Our Facilitator
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>
    </div>
  );
};

export default DropdownMore;
