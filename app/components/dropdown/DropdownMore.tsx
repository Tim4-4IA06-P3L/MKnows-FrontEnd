import Link from "next/link";
import React from "react";

const DropdownMore = () => {
  return (
    <div
      className="cursor-default bg-white flex lg:flex-col 
				lg:top-20 lg:left-0 lg:absolute w-full shadow-lg"
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
          className="w-max max-h-[50vh] left-0 p-4 lg:p-8 min-[320px]:max-sm:text-sm min-[320px]:max-sm:w-full 
					flex flex-col lg:flex-row lg:space-x-12"
        >
          <ul className="space-y-5">
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/more/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/more/history"
              >
                History
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/more/vision-mission"
              >
                Vision & Mission
              </Link>
            </li>
          </ul>
          <ul className="space-y-5 min-[320px]:max-lg:mt-5">
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/more/our-client"
              >
                Our Clients
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/more/facilitator"
              >
                Our Facilitator
              </Link>
            </li>
            <li className="flex justify-start">
              <div className="lg:hidden border border-green-500 border-4 inline mr-3"></div>
              <Link
                className="cursor-pointer hover:underline underline-offset-4"
                href="/more/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMore;
