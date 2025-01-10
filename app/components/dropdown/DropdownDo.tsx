import React from "react";
import Link from "next/link";

const DropdownDo = () => {
  return (
    <div
      className="cursor-default bg-white flex lg:flex-col 
				top-20 left-0 lg:absolute w-full shadow-lg"
    >
      <div
        className="
				overflow-auto
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar]:h-2
				[&::-webkit-scrollbar-track]:bg-neutral-100
				[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
      >
        <div
          className="w-max max-h-[50vh] left-0 p-4 lg:p-8 min-[320px]:max-sm:text-sm min-[320px]:max-sm:w-full
						flex flex-col lg:flex-row lg:space-x-12"
        >
          <ul className="space-y-5 mb-5">
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/training"
              >
                Public, In-House Training, Online Learning
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/officer-development"
              >
                Hybrid Officer Development Crash Program
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/atc"
              >
                Assessment for Technical Competency
              </Link>
            </li>
          </ul>
          <ul className="space-y-5 mb-5">
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/lms"
              >
                Learning Management System
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/consulting-service"
              >
                Consulting Service
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/outbound"
              >
                Outbound & Gathering
              </Link>
            </li>
          </ul>
          <ul className="space-y-5">
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/what-we-do/executive-coaching-and-mentoring"
              >
                Executive Coaching & Business Mentoring
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownDo;
