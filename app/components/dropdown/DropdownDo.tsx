import React from "react";

const DropdownDo = () => {
  return (
    <div
      className="cursor-default bg-white flex lg:flex-col 
				top-20 left-0 lg:absolute w-full shadow-sm"
    >
      <div
        className="
				lg:overflow-auto
				lg:[&::-webkit-scrollbar]:w-2
				lg:[&::-webkit-scrollbar]:h-2
				lg:[&::-webkit-scrollbar-track]:bg-neutral-100
				lg:[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
      >
        <div
          className="w-max left-0 p-8 min-[320px]:max-sm:text-sm min-[320px]:max-sm:w-full
						flex flex-col lg:flex-row lg:space-x-12"
        >
          <ul className="space-y-5 mb-5">
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 mr-3"></div>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/training"
              >
                Public, In-House Training, Online Learning
              </a>
            </li>
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/officer-development"
              >
                Hybrid Officer Development Crash Program
              </a>
            </li>
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/atc"
              >
                Assessment for Technical Competency
              </a>
            </li>
          </ul>
          <ul className="space-y-5 mb-5">
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Learning Management System
              </a>
            </li>
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/consulting-service"
              >
                Consulting Service
              </a>
            </li>
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Outbound & Gathering
              </a>
            </li>
          </ul>
          <ul className="space-y-5">
            <li className="flex justify-start">
							<div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
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
