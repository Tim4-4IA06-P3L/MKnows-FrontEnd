"use client";
import React, { useState, useEffect } from "react";

const DropdownBootcamp = ({categories}) => {
  return (
    <div className="cursor-default bg-white flex flex-col top-20 left-0 absolute w-full shadow-sm">
			<div
        className="
				overflow-auto
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar]:h-2
				[&::-webkit-scrollbar-track]:bg-neutral-100
				[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
      >
				<div className="w-max left-0 p-8 flex flex-row space-x-12">
					{categories.map((category) => (
						category.programs.length > 0 &&
						<ul key={category.id} className="space-y-5 w-[20vw]">
							<strong className="text-lg underline">{category.Category}</strong>
							{category.programs.map((program) => (
								<li key={program.id}>
									<a
										className="cursor-pointer hover:underline underline-offset-4"
										href={`/bootcamp/${program.documentId}`}
									>
										{program.Title}
									</a>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
      <div className="flex w-full">
        <a
          href="/bootcamp"
          className="font-bold w-full text-center text-white tracking-widest 
					p-3 bg-[#0089B9] shadow-lg hover:bg-sky-600"
        >
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default DropdownBootcamp;
