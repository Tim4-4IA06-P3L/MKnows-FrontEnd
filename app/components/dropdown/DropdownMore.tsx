import React from "react";

const DropdownMore = () => {
  return (
		<div className="cursor-default bg-white flex flex-col top-20 left-0 absolute w-full shadow-sm">
			<div
        className="
				overflow-auto
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar-track]:bg-neutral-100
				[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]
				[&::-webkit-scrollbar]:h-2"
      >
				<div className="w-max left-0 p-8 flex flex-row space-x-12">
					<ul className="space-y-5 w-max">
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
					<ul className="space-y-5">
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
