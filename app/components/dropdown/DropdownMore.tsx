import React from "react";

const DropdownMore = () => {
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
            About Us
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            History
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Vision & Mission
          </a>
        </li>
      </ul>
      <ul className="space-y-5">
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Our Clients
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Our Facilitator
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMore;
