import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CoverPage from "../../components/CoverPage";
import OverlayImage from "../../components/OverlayImage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section>
					<CoverPage bgSrc="/coaching.jpg" coverTitle="Executive Coaching & Business Mentoring" />
				</section>
				
				<section className="w-full flex flex-col items-center p-20">
					<strong className="text-2xl text-center mb-5">Peningkatan Keterampilan Kerja untuk Tim Efektif</strong>
					<p className="text-justify last-center">
						Program ini bertujuan untuk membantu peserta dalam memperoleh pengetahuan dan keterampilan fungsional 
						yang dapat mereka terapkan di tempat kerja, khususnya bagi Anda yang memiliki tim (rekan kerja).
					</p>
				</section>
				
				<section className="w-full flex flex-row p-20 space-x-10">
					<OverlayImage bgColor="#1C75BC" />
					
					<div>
						<strong className="text-2xl">Tujuan Pendampingan</strong>
						<p className="text-justify mt-5">
							Mengatasi semua kesulitan yang di hadapi bawahan dalam mengerjakan tugas atau performance yang tidak mencapai 
							dengan ketentuan yang diperintahkan sehingga daripada itu meningkatkan keahlian tertentu di dalam pekerjaan 
							yang kita kerjakan untuk memberikan kepercayaan yang lebih besar dalam pekerjaan yang kita lakukan saat ini.
						</p>
					</div>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-between">
					<div>
						<strong className="text-2xl">Topik yang Ditawarkan</strong>
						<ol className="list-decimal list-inside mt-5">
							<li>Executive Coaching</li>
							<li>Leadership Coaching</li>
							<li>Business Mentoring</li>
						</ol>
						<p className="text-justify mt-5">
							Untuk mengembangkan kompetensi dan keterampilan peserta sehingga mampu menjadi sumber daya yang handal dalam 
							pencapaian target perusahaan.
						</p>
					</div>
					
					<div className="relative w-3/5">
						<Image
							src="/Rocket.png"
							fill={true}
							style={{
								objectFit: "contain",
							}}
							alt="15"
						/>
					</div>
				</section>
				
				<section className="mt-10">
					<div className="flex flex-col justify-center">
						<strong className="text-5xl text-center">Our Clients</strong>
					</div>
				</section>
      </main>
      <Footer />
    </div>
  );
}
