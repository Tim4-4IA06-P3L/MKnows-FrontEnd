"use client";
import React, { useState, useEffect } from "react";
import CardBootcamp from "../components/CardBootcamp";
import CoverPage from "../components/CoverPage";

const Page = () => {
  const [programs, setPrograms] = useState([]);
  const getProgram = async () => {
    const res = await fetch(
      "http://localhost:1337/api/our-programs?populate=*"
    );
    const data = await res.json();
    setPrograms(data.data);
  };
  useEffect(() => {
    getProgram();
  }, []);
  return (
		<main>
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
					khusus untuk membantu mengembangkan keterampilan dan pengetahuan
					Anda dalam berbagai bidang. Bootcamp kami menawarkan pelatihan
					intensif dengan para mentor ahli dan berpengalaman dalam beragam
					industri yang mempersiapkan Anda untuk sukses di dunia kerja yang
					kompetitif.
				</p>
			</section>

			<section>
				<div className="flex flex-wrap justify-center gap-8 p-8">
					{programs.map((program) => (
						<CardBootcamp
							key={program.id}
							thumbnail={program.Thumbnail.url}
							title={program.Title}
							level={program.Level}
							description={program.Description}
							bootcampID={program.id}
						/>
					))}
				</div>
			</section>
		</main>
  );
};

export default Page;
