import React from "react";

const DropdownDo = () => {
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
            href="/what-we-do"
          >
            Public, In-House Training, Online Learning
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Hybrid Officer Development Crash Program
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Assessment for Technical Competency
          </a>
        </li>
      </ul>
      <ul className="space-y-5">
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Learning Management System
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Consulting Service
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Outbound & Gathering
          </a>
        </li>
      </ul>
      <ul className="space-y-5">
        <li>
          <a
            className="cursor-pointer hover:underline underline-offset-4"
            href="#"
          >
            Executive Coaching & Business Mentoring
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownDo;
