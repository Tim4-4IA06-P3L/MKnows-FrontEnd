import React, { FC } from "react";
import Link from "next/link";
import { Training } from "../../Types";

const DropdownNewTraining: FC<{ newTrainings: Training[] }> = ({
  newTrainings,
}) => {
  return (
    <div
      className="cursor-default bg-white flex lg:flex-col 
				lg:top-20 lg:left-0 lg:absolute w-full shadow-lg"
    >
      <div
        className="
				lg:overflow-auto
				lg:[&::-webkit-scrollbar]:w-2
				lg:[&::-webkit-scrollbar]:h-2
				lg:[&::-webkit-scrollbar-track]:bg-neutral-100
				lg:[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
      >
        <div
          className="w-max max-h-[50vh] left-0 p-4 lg:p-8 min-[320px]:max-sm:text-sm min-[320px]:max-sm:w-full 
				flex flex-col lg:flex-row lg:space-x-12"
        >
          <ul className="space-y-5">
            {newTrainings.map((newTraining) => (
              <li className="flex justify-start" key={newTraining.documentId}>
                <div className="lg:hidden border-green-500 border-4 inline mr-3"></div>
                <Link
                  className="cursor-pointer hover:underline underline-offset-4"
                  href={`/what-we-do/training/${newTraining.Title}_${newTraining.documentId}`}
                >
                  {newTraining.Title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full">
        <Link
          href="/what-we-do/training/new-training"
          className="font-bold w-full text-center text-white tracking-widest 
					p-3 bg-[#0089B9] shadow-lg hover:bg-sky-600"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default DropdownNewTraining;
