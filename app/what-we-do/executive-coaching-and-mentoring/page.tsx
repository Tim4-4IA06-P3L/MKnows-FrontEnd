import React from "react";
import CoverPage from "../../components/CoverPage";
import OverlayImage from "../../components/OverlayImage";

export default function CoachingPage() {

	const images = ["/coaching/coaching2.jpg", "/coaching/coaching3.webp"];
	const images2 = ["/coaching/coaching4.webp", "/coaching/coaching5.webp"];
  return (
		<main>
			<section>
				<CoverPage bgSrc="/coaching/coaching.jpg" coverTitle="Executive Coaching & Business Mentoring" />
			</section>
			
			<section className="w-full flex flex-col items-center p-10 md:p-20">
				<strong className="text-2xl text-center mb-5">Peningkatan Keterampilan Kerja untuk Tim Efektif</strong>
				<p className="text-justify last-center">
					Program ini bertujuan untuk membantu peserta dalam memperoleh pengetahuan dan keterampilan fungsional 
					yang dapat mereka terapkan di tempat kerja, khususnya bagi Anda yang memiliki tim (rekan kerja).
				</p>
			</section>
			
			<section className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col">
				<div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
					<OverlayImage bgColor="#1C75BC" images={images} />
				</div>
				
				<div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
					<strong className="text-2xl text-[#1C75BC]">Tujuan Pendampingan</strong>
					<p className="text-justify mt-5">
						Mengatasi semua kesulitan yang di hadapi bawahan dalam mengerjakan tugas atau performance yang tidak mencapai 
						dengan ketentuan yang diperintahkan sehingga daripada itu meningkatkan keahlian tertentu di dalam pekerjaan 
						yang kita kerjakan untuk memberikan kepercayaan yang lebih besar dalam pekerjaan yang kita lakukan saat ini.
					</p>
				</div>
			</section>
			
			<section className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col-reverse">
				<div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
					<strong className="text-2xl text-[#F0C413]">Topik yang Ditawarkan</strong>
					<ol className="list-decimal list-inside mt-5 text-left">
						<li>Executive Coaching</li>
						<li>Leadership Coaching</li>
						<li>Business Mentoring</li>
					</ol>
					<p className="text-justify mt-5">
						Untuk mengembangkan kompetensi dan keterampilan peserta sehingga mampu menjadi sumber daya yang handal dalam 
						pencapaian target perusahaan.
					</p>
				</div>
				
				<div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
					<OverlayImage bgColor="#FDD016" images={images2} />
				</div>
			</section>
		</main>
  );
}
