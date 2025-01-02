"use client";
import React, { useState, useEffect } from "react";
import CardBootcamp from "../components/CardBootcamp";
import CoverPage from "../components/CoverPage";
import { Category, Bootcamp } from "../Types";

const BootcampPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [toggle, setToggle] = useState(0);

  const setActive = () => {
    setToggle(toggle == 0 ? 1 : 0);
  };

  const getCategories = async () => {
    const res = await fetch(
      `${process.env.CMS_URL}/api/categories?populate[programs][populate][0]=Thumbnail&sort=Category`
    );
    const data = await res.json();
    setCategories(data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main className="relative">
      <section>
        <CoverPage
          bgSrc="/ProgPelatihan.jpeg"
          coverTitle="Bootcamp Program"
          subTitle="Welcome to M-Knows Consulting!"
        />
      </section>

      <section className="w-full flex flex-col items-center p-10 md:p-20">
        <strong className="text-2xl md:text-4xl text-center mb-5">
          Bootcamp Unggulan
        </strong>
        <strong className="text-lg md:text-2xl text-center mb-5">
          Selamat Datang di M-Knows Consulting!
        </strong>
        <p className="text-justify last-center md:text-xl">
          Dengan bangga mempersembahkan bootcamp unggulan kami yang dirancang
          khusus untuk membantu mengembangkan keterampilan dan pengetahuan Anda
          dalam berbagai bidang. Bootcamp kami menawarkan pelatihan intensif
          dengan para mentor ahli dan berpengalaman dalam beragam industri yang
          mempersiapkan Anda untuk sukses di dunia kerja yang kompetitif.
        </p>
      </section>

      <section className="w-full flex flex-col justify-center">
        {categories.map(
          (category) =>
            category.programs.length > 0 && (
              <div key={category.id}>
                <h2
                  className="text-2xl font-bold text-center text-white p-5 bg-[#262262] border-t-8 border-b-8 border-t-[#B3FF00] border-b-[#B3FF00]"
                  id={category.id.toString()}
                >
                  {category.Category}
                </h2>
                <div className="flex flex-wrap justify-center gap-8 p-8">
                  {category.programs.map((program: Bootcamp) => (
                    <CardBootcamp
                      key={program.id}
                      thumbnail={program.Thumbnail.url}
                      title={program.Title}
                      level={program.Level}
                      description={program.Description}
                      bootcampID={program.documentId}
                    />
                  ))}
                </div>
              </div>
            )
        )}
      </section>

      <aside
        className={`fixed top-[15%] left-0 bg-neutral-100 p-8 h-[80%] w-[300px] rounded-br-lg shadow-lg 
				transition-all duration-300 linear ${
          toggle ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        <div
          className={`absolute top-0 left-[100%] rounded-r-[50%] p-4 flex justify-center items-center cursor-pointer
					${toggle ? "bg-neutral-900" : "bg-neutral-900/[0.3]"}`}
          onClick={setActive}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            className="absolute w-4 h-4"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <circle fill="#ffffff" cx="2" cy="2" r="2"></circle>
              <circle fill="#ffffff" cx="2" cy="8" r="2"></circle>
              <circle fill="#ffffff" cx="2" cy="20" r="2"></circle>
              <circle fill="#ffffff" cx="2" cy="14" r="2"></circle>
              <path
                fill="#ffffff"
                d="M23.002 3H7.998C7.448 3 7 2.55 7 2.002v-.004c0-.55.45-.998.998-.998H23c.55 0 1 .45 1 .998V2c0 .55-.45 1-.998 1zM23.002 9H7.998C7.448 9 7 8.55 7 8.002v-.004c0-.55.45-.998.998-.998H23c.55 0 1 .45 1 .998V8c0 .55-.45 1-.998 1zM23.002 15H7.998c-.55 0-.998-.45-.998-.998V14c0-.55.45-1 .998-1H23c.55 0 1 .45 1 .998V14c0 .55-.45 1-.998 1zM23.002 21H7.998c-.55 0-.998-.45-.998-.998V20c0-.55.45-1 .998-1H23c.55 0 1 .45 1 .998V20c0 .55-.45 1-.998 1z"
              ></path>
            </g>
          </svg>
        </div>
        <h3 className="font-semibold text-black">Kategori Bootcamp</h3>
        <div
          className="h-full w-full overflow-y-auto 
					[&::-webkit-scrollbar]:w-2
					[&::-webkit-scrollbar]:h-2
					[&::-webkit-scrollbar-track]:bg-neutral-100
					[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
        >
          <ul className="text-black list-disc list-inside leading-loose">
            {categories.map(
              (category) =>
                category.programs.length > 0 && (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      onClick={() => setToggle(0)}
                      className="hover:underline"
                    >
                      {category.Category}
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default BootcampPage;
