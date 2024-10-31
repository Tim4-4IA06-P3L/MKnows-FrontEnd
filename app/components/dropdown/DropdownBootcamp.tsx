import React from "react";

const DropdownBootcamp = () => {
  return (
    <div className="bg-white flex flex-col top-20 left-0 absolute w-screen shadow-sm">
      <div
        className="
				overflow-auto
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar-track]:bg-neutral-100
				[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]
				[&::-webkit-scrollbar]:h-2"
      >
        <div
          className="w-max
					left-0 p-8 top-20 cursor-default
					flex flex-row space-x-12"
        >
          <ul className="space-y-5 w-max">
            <strong className="text-lg underline">
              Information & Technology
            </strong>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                UI/UX for Web & App Project
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Back End Developer Advance Level
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Front End Developer Advance Level
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                IT QA Engineer
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Flutter Multi-Platform App Development
              </a>
            </li>
          </ul>

          <ul className="space-y-5 w-max">
            <strong className="text-lg underline">AI & Data Science</strong>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Aplikasi AI untuk Industri Perbankan, Multifinance, Asuransi,
                dan Fintech
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Data Science dan Data Analyst di Industri Perbankan, Pembiayaan,
                dan Fintech AI
              </a>
            </li>
          </ul>

          <ul className="space-y-5 w-max">
            <strong className="text-lg underline">Design</strong>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                3D Bootcamp
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Photography Bootcamp
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Video Editing & Animation Bootcamp
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Videografer & Sinematografer Bootcamp
              </a>
            </li>
          </ul>

          <ul className="space-y-5 w-max">
            <strong className="text-lg underline">Blockchain</strong>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Solidity Bootcamp : Pemrograman untuk Blockchain & Smart
                Contract
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Simplicity Bootcamp : Pemrograman untuk Blockchain & Smart
                Contract
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Python Bootcamp : Pemrograman untuk Blockchain & Smart Contract
              </a>
            </li>
          </ul>

          <ul className="space-y-5 w-max">
            <strong className="text-lg underline">Cyber Security</strong>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Cyber Security : Web Exploitation & Design
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Keamanan Jaringan Cyber, Analisis Malware & Penanganan Insiden
                Keamanan
              </a>
            </li>
          </ul>

          <ul className="space-y-5 w-max">
            <strong className="text-lg underline">Leadership</strong>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Digital Leadership & Team Management
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Analytics & Decision Making for Leaders
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Managing Team Creativity & Innovation for Leaders
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:underline underline-offset-4"
                href="#"
              >
                Strategic AI Skills : Generative AI, Diagnostic AI & Projective
                AI
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-screen">
        <a
          href="#"
          className="font-bold w-screen text-center text-white tracking-widest 
				p-3 bg-[#0089B9]"
        >
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default DropdownBootcamp;
