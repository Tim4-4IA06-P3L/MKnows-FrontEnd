import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full mt-20">
      <div className="flex justify-center m-5">
        <Logo props="" />
      </div>

      <div
        className="flex flex-col md:flex-row justify-around 
					md:space-x-5 ml-5 mr-5 min-[320px]:max-md:space-y-5"
      >
        <div className="basis-0 flex-grow flex-shrink">
          <strong className="underline">Contact Us</strong>
          <br />
          <ul className="list-none text-[#888888] flex flex-col gap-3">
            <li>
              In-House Training : <br />
              021-720-9729
            </li>
            <li>
              Public Training : <br />
              021-726-5274
            </li>
            <li>
              WhatsApp : <br />
              0812-1046-8281
            </li>
            <li>
              Email : <br />
              learning@m-knowsconsulting.com
            </li>
          </ul>
        </div>

        <div className="basis-0 flex-grow flex-shrink">
          <strong className="underline">Surabaya Branch Office</strong>
          <br />
          <ul className="list-none text-[#888888] flex flex-col gap-3">
            <li>
              Alamat : <br />
              Jl. Raya Darmo Permai III Surabaya
            </li>
            <li>
              Telp : <br />
              031-8570-5277
            </li>
            <li>
              Email : <br />
              surabaya@m-knowsconsulting.com
            </li>
          </ul>
        </div>

        <div className="basis-0 flex-grow flex-shrink">
          <strong className="underline">Alamat Utama</strong>
          <br />
          <ul className="list-none text-[#888888] flex flex-col gap-3">
            <li>
              Alamat : <br />
              Jl. Radio IV No. 8B Barito Kebayoran Baru, Jakarta Selatan
            </li>
          </ul>
        </div>

        <div className="basis-0 flex-grow flex-shrink">
          <strong className="underline">Alamat Produksi</strong>
          <br />
          <ul className="list-none text-[#888888] flex flex-col gap-3">
            <li>
              Alamat : <br />
              Jl. Cirendeu Raya No. 61 Ciputat, Tangerang Selatan
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-center space-x-6 mt-5">
        <a
          className="rounded-md flex justify-center items-center h-5 w-5
				bg-neutral-200 p-5 hover:rounded-3xl transition-all linear duration-300"
          href="https://www.linkedin.com/company/m-knows-consulting/about/"
          target="_blank"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              style={{ color: "#0089B9" }}
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </div>
        </a>

        <a
          className="rounded-md h-5 w-5 flex items-center justify-center
				bg-neutral-200 p-5 hover:rounded-3xl transition-all linear duration-300"
          href="https://www.facebook.com/mknowsconsulting"
          target="_blank"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#0089B9"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </div>
        </a>

        <a
          className="rounded-md h-5 w-5 flex items-center justify-center
				bg-neutral-200 p-5 hover:rounded-3xl transition-all linear duration-300"
          href="https://www.instagram.com/mknowsconsulting/?hl=en"
          target="_blank"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#0089B9"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </a>

        <a
          className="rounded-md h-5 w-5 flex items-center justify-center
				bg-neutral-200 p-5 hover:rounded-3xl transition-all linear duration-300"
          href="#"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#0089B9"
              style={{ color: "#0089B9" }}
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
        </a>
      </div>

      <div className="h-1 bg-neutral-400 mt-5"></div>

      <p className="p-3 text-center text-[#888888]">
        2024 - &copy; M-Knows Consulting - Hak Cipta Dilindungi
      </p>
    </footer>
  );
};

export default Footer;
