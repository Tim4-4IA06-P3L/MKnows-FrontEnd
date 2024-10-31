import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 w-screen flex flex-col h-max">
      <div className="flex justify-start ml-5">
        <Logo />
      </div>

      <div className="flex flex-row justify-center space-x-2 w-screen p-6">
        <div className="w-max">
          <strong className="underline">Contact Us</strong>
          <br />
          <ul className="text-[#888888]">
            <li>Inhouse Training : 021-720-9729</li>
            <li>Public Training : 021-726-5274</li>
            <li>Whatsapp : 0812-1046-8281</li>
            <li>Email : learning@m-knowsconsulting.com</li>
          </ul>
        </div>

        <div className="w-max">
          <strong className="underline">Surabaya Branch Office</strong>
          <br />
          <ul className="text-[#888888]">
            <li>Jl. Raya Darmo Permai III Surabaya</li>
            <li>Telp : 031-8570-5277</li>
            <li>Email : surabaya@m-knowsconsulting.com</li>
          </ul>
        </div>

        <div className="w-max">
          <strong className="underline">Alamat Utama</strong>
          <br />
          <ul className="text-[#888888]">
            <li>Jl. Radio IV No. 8B Barito Kebayoran Baru, Jakarta Selatan</li>
          </ul>
        </div>

        <div className="w-max">
          <strong className="underline">Alamat Produksi</strong>
          <br />
          <ul className="text-[#888888]">
            <li>Jl. Cirendeu Raya No. 61 Ciputat, Tangerang Selatan 15419</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-center space-x-6">
        <div className="rounded-md h-5 w-5 flex items-center justify-center bg-neutral-200 p-5"></div>
        <div className="rounded-md h-5 w-5 flex items-center justify-center bg-neutral-200 p-5"></div>
        <div className="rounded-md h-5 w-5 flex items-center justify-center bg-neutral-200 p-5"></div>
        <div className="rounded-md h-5 w-5 flex items-center justify-center bg-neutral-200 p-5"></div>
      </div>

      <div className="h-1 bg-neutral-400 w-screen mt-5"></div>

      <p className="p-3 text-center text-[#888888]">
        2024 - &copy; M-Knows Consulting - Hak Cipta Dilindungi
      </p>
    </footer>
  );
};

export default Footer;
