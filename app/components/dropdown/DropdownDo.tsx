import React from "react";

const DropdownDo = () => {
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
					<ul className="space-y-5">
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Public, In-House Training, Online Learning
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Hybrid Officer Development Crash Program
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="/what-we-do/atc"
							>
								Assessment for Technical Competency
							</a>
						</li>
					</ul>
					<ul className="space-y-5">
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Learning Management System
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="/what-we-do/consulting-service"
							>
								Consulting Service
							</a>
						</li>
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="#"
							>
								Outbound & Gathering
							</a>
						</li>
					</ul>
					<ul className="space-y-5">
						<li>
							<a
								className="cursor-pointer hover:underline underline-offset-4"
								href="/what-we-do/executive-coaching-and-mentoring"
							>
								Executive Coaching & Business Mentoring
							</a>
						</li>
					</ul>
				</div>
			</div>
    </div>
  );
};

export default DropdownDo;
