"use client";
import React, { useState, useEffect } from "react";

const DropdownBootcamp = ({bootcamps}) => {
  return (
    <div className="cursor-default bg-white flex flex-col top-20 left-0 absolute w-full shadow-sm">
      <div className="w-max left-0 p-8 flex flex-row space-x-12">
        <ul className="space-y-5 w-max">
          {bootcamps.map((bootcamp) => (
            <ul key={bootcamp.id} className="space-y-5 w-max">
              <strong className="text-lg underline">{bootcamp.Category}</strong>
              {bootcamp.programs.map((program) => (
                <li key={program.id}>
                  <a
                    className="cursor-pointer hover:underline underline-offset-4"
                    href={`/bootcamp/${program.id}`}
                  >
                    {program.Title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      </div>
      <div className="flex w-full">
        <a
          href="/bootcamp"
          className="font-bold w-full text-center text-white tracking-widest 
				p-3 bg-[#0089B9]"
        >
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default DropdownBootcamp;
