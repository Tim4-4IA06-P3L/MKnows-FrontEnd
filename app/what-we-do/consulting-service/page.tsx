import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CoverPage from "../../components/CoverPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section>
					<CoverPage bgSrc="/Consulting_Img.jpg" coverTitle="Consulting Service M-Knows Consulting" />
				</section>
				
				<section className="w-full flex flex-col items-center p-20">
					<strong className="text-2xl text-center mb-5">Kemitraan SDM dan Bisnis Masa Depan</strong>
					<p className="text-justify last-center">
						Mempunyai hubungan jangka panjang dengan perusahaan-perusahaan lokal dan internasional 
						yang berbasis di Indonesia untuk mendukung pengembangan sumber daya manusia mereka serta 
						strategi bisnis dan manajemen. Program pengembangan ini dirancang untuk meningkatkan 
						keahlian spesifik bahwa perusahaan membutuhkan strategi untuk menghadapi masa depan.
					</p>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-around items-center">
					<div className="flex justify-center relative w-2/5">
						<Image
							src="/15.png"
							width={200}
							height={200}
							style={{
								objectFit: "contain",
							}}
							alt="15"
						/>
					</div>
					
					<div className="w-3/5">
						<strong className="text-2xl">Kami telah menjadi mitra terpercaya (lebih dari 15 tahun)</strong>
						<p className="text-justify mt-5">
							Bagi perusahaan nasional dan multinasional dalam mendukung pengembangan bisnis dan strategi 
							manajemen dan kompetensi sumber daya manusia. Kebanggaan berasak dari hubungan jangka panjang 
							yang saling menguntungkan dengan berbagai perusahaaan yang memiliki visi untuk sukses, dan 
							komitmen untuk mencapai kesuksesan itu melalui pengembangan sumber daya manusia.
						</p>
					</div>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-around items-center">
					<div className="w-3/5">
						<strong className="text-2xl">Pengembangan Sumber Daya Manusia</strong>
						<p className="text-justify mt-5">
							Merupakan proses yang berkesinambungan yang membutuhkan komitmen yang tinggi dan manajemen yang 
							baik untuk menjadi efektif dalam segala hal. Program pengembangan berkaitan dengan tahap pengembangan 
							perusahaan dan tujuan jangka pendek serta jangka panjang mereka, baik saat start up, dalam ekspansi, 
							dalam masa transisi atau berbalik. Perusahaan harus merencanakan dan merancang program pembangunan 
							dengan hati-hati sesuai dengan setiap lapisan manajemen seperti : MT (Management Trainee), Leadership 
							Program & Consulting.
						</p>
					</div>
					
					<div className="flex justify-center relative w-2/5">
						<Image
							src="/Rocket.png"
							width={200}
							height={200}
							style={{
								objectFit: "contain",
							}}
							alt="15"
						/>
					</div>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-around items-center">
					<div className="flex justify-center relative w-2/5">
						<Image
							src="/pelatihan-efektif.png"
							width={200}
							height={200}
							style={{
								objectFit: "contain",
							}}
							alt="15"
						/>
					</div>
					
					<div className="w-3/5">
						<strong className="text-2xl">Program Pelatihan yang Efektif</strong>
						<p className="text-justify mt-5">
							Meningkatkan kompetensi sumber daya manusia untuk melakukan lebih baik dan nilai tambah bagi perusahaan 
							serta institusi mereka. Pelatihan diperlukan untuk berbagai tujuan, misalnya mengembangkan keterampilan 
							dan pengetahuan para eksekutif dan staf khusus, mempersiapkan sumber daya manusia baru untuk suatu posisi 
							pekerjaan atau regenerasi, maupun mempersiapkan pensiun. M-Knows Consulting mendukung perusahaan dan bekerja 
							sinergis dengan pusat-pusat pelatihan dalam menilai kebutuhan pelatihan, pengembangan pelatihan customized 
							program, melakukan dan mengevaluasi pelatihan bagi staf profesional dan eksekutif. Konsultan yang berpengalaman 
							dan berdedikasi tinggi memampukan M-Knows Consulting dalam menyusun materi pelatihan, menyampaikan materi 
							pelatihan, serta metode evaluasi dalam rangka memperoleh hasil pelatihan yang terbaik.
						</p>
					</div>
				</section>
				
				<section className="relative w-full flex flex-col items-center mt-20">
					<div className="relative w-full h-[300px]">
						<Image 
							src="/business-2.jpg"
							alt="Kerja Sama"
							fill={true}
							style={{
								objectFit: "cover",
								objectPosition: "bottom"
							}}
						/>
					</div>
					
					<div className="absolute w-1/2 -translate-y-1/2 p-6 bg-[#AECFDF]">
						<strong className="text-bold text-xl">M-Knows Consulting telah memperoleh banyak kesempatan bekerja sama</strong>
						<p className="text-justify last-center">
							Dengan lembaga-lembaga swasta dan pemerintah pada proyek-proyek perumusan kebijakan, studi banding, serta undangan 
							untuk menjadi pembicara tamu dalam berbagai kesempatan dan pertemuan atau seminar untuk berbagi dan memperkenalkan 
							pandangan dan pengetahuan di bidang ekonomi, manajemen dan bisnis.
						</p>
					</div>
				</section>
				
      </main>
      <Footer />
    </div>
  );
}