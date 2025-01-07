"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";
import useViewportWidth from "./dropdown/viewWidth";
import { Category, Training } from "../Types";

const Navbar: FC<{ categories: Category[]; newTrainings: Training[] }> = ({
  categories,
  newTrainings,
}) => {
  const [toggleDropMobile, setToggleDropMobile] = useState(0);

  const setActive = () => {
    setToggleDropMobile(toggleDropMobile == 0 ? 1 : 0);
  };

  const width = useViewportWidth();

  return (
    <nav
      className="sticky flex flex-row justify-between items-center
			p-6 border-b-2 w-full bg-neutral-50 top-0 max-h-20 z-50"
    >
      <Logo props="" />
      <div
        className="cursor-pointer w-8 h-8 space-y-1 flex flex-col items-center justify-center lg:hidden"
        onClick={setActive}
      >
        <div
          className={`w-[90%] rounded-lg p-0.5 bg-[#1C75BC] transform transition-transform duration-300 
						${
              toggleDropMobile == 1
                ? "bg-[#FF0000] translate-y-2 rotate-45"
                : "bg-[#1C75BC] translate-y-0 rotate-0"
            }`}
        ></div>
        <div
          className={`w-[90%] rounded-lg p-0.5 bg-[#1C75BC] transform transition-all duration-800 
						${toggleDropMobile == 1 ? "bg-[#FF0000] opacity-0" : "opacity-100"}`}
        ></div>
        <div
          className={`w-[90%] rounded-lg p-0.5 bg-[#1C75BC] transform transition-transform duration-300 
						${
              toggleDropMobile == 1
                ? "bg-[#FF0000] -translate-y-2 -rotate-45"
                : "bg-[#1C75BC] translate-y-0 rotate-0"
            }`}
        ></div>
      </div>
      {(width >= 1024 || toggleDropMobile == 1) && (
        <Menu categories={categories} newTrainings={newTrainings} />
      )}
    </nav>
  );
};

export default Navbar;
