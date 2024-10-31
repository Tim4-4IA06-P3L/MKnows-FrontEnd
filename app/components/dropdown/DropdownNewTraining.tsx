import React from "react";

const DropdownNewTraining = () => {
  return (
    <div
      className="absolute w-screen bg-white
      right-0 p-8 top-20 cursor-default
      flex space-x-12 shadow-sm"
    >
      <ul className="space-y-5 w-max">
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            AI Sales Tools
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Virtual Reality
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownNewTraining;
