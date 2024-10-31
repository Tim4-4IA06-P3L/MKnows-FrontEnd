"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import DropdownMore from "./dropdown/DropdownMore";
import DropdownDo from "./dropdown/DropdownDo";
import DropdownNewTraining from "./dropdown/DropdownNewTraining";
import DropdownBootcamp from "./dropdown/DropdownBootcamp";

const Menu = () => {
  const [toggleState, setToggleState] = useState(null);

  const handleToggle = (index) => {
    setToggleState(toggleState == index ? null : index);
  };

  return (
    <ul className="flex flex-row space-x-12 items-center h-full">
      <li className="cursor-pointer">
        <a href="/">Home</a>
      </li>

      <li className="cursor-pointer" onClick={() => handleToggle(1)}>
        Bootcamp Program
        <ChevronDownIcon className={`inline ml-2 w-4 h-4 transform
          transition-transform duration-300
          ${toggleState == 1 ? "rotate-180" : "rotate-0"}`}
        />
        {toggleState == 1 && <DropdownBootcamp />}
      </li>

      <li className="cursor-pointer" onClick={() => handleToggle(2)}>
        New Training
        <ChevronDownIcon className={`inline ml-2 w-4 h-4 transform
          transition-transform duration-300
          ${toggleState == 2 ? "rotate-180" : "rotate-0"}`}
        />
        {toggleState == 2 && <DropdownNewTraining />}
      </li>

      <li className="cursor-pointer" onClick={() => handleToggle(3)}>
        What We Do
        <ChevronDownIcon className={`inline ml-2 w-4 h-4 transform
          transition-transform duration-300
          ${toggleState == 3 ? "rotate-180" : "rotate-0"}`}
        />
        {toggleState == 3 && <DropdownDo />}
      </li>
      <li className="cursor-pointer" onClick={() => handleToggle(4)}>
        More
        <ChevronDownIcon
          className={`inline ml-2 w-4 h-4 transform
          transition-transform duration-300
          ${toggleState == 4 ? "rotate-180" : "rotate-0"}`}
        />
        {toggleState == 4 && <DropdownMore />}
      </li>
    </ul>
  );
};

export default Menu;
