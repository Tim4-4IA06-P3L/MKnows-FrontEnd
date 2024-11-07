"use client";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useViewportWidth from "./dropdown/viewWidth";

const Navbar = () => {
	
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
      <Logo />
			<div className="w-8 h-8 lg:hidden" onClick={setActive}>
				<Bars3Icon />
			</div>
      {(width >= 1024 || toggleDropMobile == 1) && <Menu />}
    </nav>
  );
};

export default Navbar;
