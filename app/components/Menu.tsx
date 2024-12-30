"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import DropdownMore from "./dropdown/DropdownMore";
import DropdownDo from "./dropdown/DropdownDo";
import DropdownNewTraining from "./dropdown/DropdownNewTraining";
import DropdownBootcamp from "./dropdown/DropdownBootcamp";
import useViewportWidth from "./dropdown/viewWidth";

const Menu = ({bootcamps}) => {
  const [toggleState, setToggleState] = useState(null);

  const handleToggle = (index) => {
    setToggleState(toggleState == index ? null : index);
  };
	
	const width = useViewportWidth();

  return (
    <ul className="min-[320px]:max-lg:absolute static
				cursor-default top-20 left-0 w-full flex-col justify-around text-left min-[320px]:max-lg:bg-neutral-300
				lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:h-full lg:max-w-[70%] lg:space-x-5">
      <li className="cursor-pointer min-[320px]:max-lg:flex min-[320px]:max-lg:w-full">
        <a className="min-[320px]:max-lg:w-full min-[320px]:max-lg:hover:bg-neutral-100
						min-[320px]:max-lg:border-b-2 min-[320px]:max-lg:p-3 
						min-[320px]:max-lg:bg-neutral-50" href="/">Home</a>
      </li>

      <li className="cursor-pointer min-[320px]:max-lg:hidden" onClick={() => handleToggle(1)}>
        Bootcamp Program
        <ChevronDownIcon className={`inline ml-2 w-4 h-4 transform
          transition-transform duration-300
          ${toggleState == 1 ? "rotate-180" : "rotate-0"}`}
        />
        {toggleState == 1 && <DropdownBootcamp bootcamps={bootcamps} />}
      </li>
			
			<li className="cursor-pointer min-[320px]:max-lg:flex min-[320px]:max-lg:w-full lg:hidden">
        <a className="min-[320px]:max-lg:w-full min-[320px]:max-lg:hover:bg-neutral-100
				min-[320px]:max-lg:border-b-2 min-[320px]:max-lg:p-3 
				min-[320px]:max-lg:bg-neutral-50" href="/bootcamp">Bootcamp Program</a>
      </li>

      <li className="cursor-pointer min-[320px]:max-lg:flex 
					min-[320px]:max-lg:items-center min-[320px]:max-lg:hover:bg-neutral-100
					min-[320px]:max-lg:justify-between min-[320px]:max-lg:w-full 
					min-[320px]:max-lg:border-b-2 min-[320px]:max-lg:p-3 
					min-[320px]:max-lg:bg-neutral-50" onClick={() => handleToggle(2)}>
        <p className="inline">New Training</p>
				<ChevronDownIcon className={`inline ml-2 w-4 h-4 transform
					transition-transform duration-300
					${toggleState == 2 ? "rotate-180" : "rotate-0"}`}
				/>
        {toggleState == 2 && width >= 1024 && <DropdownNewTraining />}
      </li>
			{toggleState == 2 && width < 1024 && <DropdownNewTraining />}

      <li className="cursor-pointer min-[320px]:max-lg:flex 
					min-[320px]:max-lg:items-center min-[320px]:max-lg:hover:bg-neutral-100
					min-[320px]:max-lg:justify-between min-[320px]:max-lg:w-full 
					min-[320px]:max-lg:border-b-2 min-[320px]:max-lg:p-3 
					min-[320px]:max-lg:bg-neutral-50" onClick={() => handleToggle(3)}>
        <p className="inline">What We Do</p>
				<ChevronDownIcon className={`inline ml-2 w-4 h-4 transform
					transition-transform duration-300
					${toggleState == 3 ? "rotate-180" : "rotate-0"}`}
				/>
        {toggleState == 3 && width >= 1024 && <DropdownDo />}
      </li>
			{toggleState == 3 && width < 1024 && <DropdownDo />}
			
			
      <li className="cursor-pointer min-[320px]:max-lg:flex 
					min-[320px]:max-lg:items-center min-[320px]:max-lg:hover:bg-neutral-100
					min-[320px]:max-lg:justify-between min-[320px]:max-lg:w-full 
					min-[320px]:max-lg:border-b-2 min-[320px]:max-lg:p-3 
					min-[320px]:max-lg:bg-neutral-50" onClick={() => handleToggle(4)}>
        <p className="inline">More</p>
				<ChevronDownIcon
					className={`inline ml-2 w-4 h-4 transform
					transition-transform duration-300
					${toggleState == 4 ? "rotate-180" : "rotate-0"}`}
				/>
        {toggleState == 4 && width >= 1024 && <DropdownMore />}
      </li>
			{toggleState == 4 && width < 1024 && <DropdownMore />}
    </ul>
  );
};

export default Menu;
