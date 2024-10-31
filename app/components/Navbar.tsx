"use client";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav
      className="flex flex-row justify-between items-center
    p-6 border-b-2 max-h-20"
    >
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
