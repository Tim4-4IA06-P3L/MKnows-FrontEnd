import React from "react";
import CardBootcamp from "../components/CardBootcamp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoverPage from "../components/CoverPage";

const Page = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<section>
					<CoverPage bgSrc="/ProgPelatihan.jpeg" coverTitle="Bootcamp Program" subTitle="Welcome to M-Knows Consulting!" />
				</section>
				
				<section className="w-full flex flex-col items-center p-10 md:p-20">
					<strong className="text-2xl md:text-4xl text-center mb-5">Bootcamp Unggulan</strong>
					<strong className="text-lg md:text-2xl text-center mb-5">Selamat Datang di M-Knows Consulting!</strong>
					<p className="text-justify last-center md:text-xl">
						Dengan bangga mempersembahkan bootcamp unggulan kami yang dirancang khusus untuk membantu 
						mengembangkan keterampilan dan pengetahuan Anda dalam berbagai bidang. Bootcamp kami menawarkan 
						pelatihan intensif dengan para mentor ahli dan berpengalaman dalam beragam industri yang  
						mempersiapkan Anda untuk sukses di dunia kerja yang kompetitif.
					</p>
				</section>
				
				<section>
					<div className="flex flex-wrap justify-center gap-8 p-8">
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
						
						<CardBootcamp
							thumbnail="/oas.jpeg" 
							title="Bootcamp Front End Developer" 
							level="ADVANCE LEVEL"
							description="Bootcamp intensif yang akan membekali peserta dengan 
													 keterampilan dan pengetahuan yang dibutuhkan untuk 
													 menjadi profesional di bidang front end development. 
													 Peserta akan mempelajari HTML, CSS, dan Javascript, 
													 serta keterampilan dan konsep penting lainnya. Peserta 
													 juga akan memiliki kesempatan untuk membangun portofolio 
													 yang akan membantu peserta mendapatkan pekerjaan."
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Page;