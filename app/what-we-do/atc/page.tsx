import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CoverPage from "../../components/CoverPage";
import OverlayImage from "../../components/OverlayImage";

export default function Home() {

	const images = ["/atc2.jpg", "/atc3.webp"];
	const images2 = ["/atc4.jpg", "/atc5.jpg"];
	const images3 = ["/atc6.jpg", "/atc7.png"];
	
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section>
					<CoverPage bgSrc="/atc.jpeg" coverTitle="Assessment for Technical Competency (ATC)" />
				</section>
				
				<section className="w-full flex flex-col items-center p-20">
					<strong className="text-2xl text-center mb-5">ATC : Solusi Integratif untuk Penilaian Potensi dan Kompetensi SDM</strong>
					<p className="text-justify last-center">
						Adalah mitra (salah satu solusi) dalam mengukur dan menilai potensi serta kompetensi dari sumber daya manusia. 
						ATC menawarkan solusi integratif melalui metode terstandar dan sesuai dengan kebutuhan untuk menyesuaikan dengan 
						kebutuhan pengembangan bakat/minat individu.
					</p>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-around items-center">
					<div className="flex justify-center relative w-2/5">
						<OverlayImage bgColor="#B3FF00" images={images} />
					</div>
					
					<div className="w-3/5">
						<strong className="text-2xl">ATC Menawarkan Solusi Integratif</strong>
						<p className="text-justify mt-5">
							Untuk mengoptimasi pengembangan bakat melalui metode dan sarana yang valid dan terpercaya. Kami juga memberikan 
							laporan yang unik dan dipersonalisasikan oleh para asesor dan penasihat kami untuk memberikan informasi yang lengkap 
							serta pengembangan jangka panjang kepada client.
						</p>
					</div>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-around items-center">
					<div className="w-3/5">
						<strong className="text-2xl">Solusi-Solusi yang Ditawarkan Oleh ATC</strong>
						<p className="text-justify mt-5">
							Sesuai dengan setiap Individual Development Plan serta dapat menangkap potensi serta kompetensi dari para sumber daya 
							manusia serta dapat memberikan gambaran yang jelas dari profil sumber daya manusia dengan menggunakan tools – tools 
							dari kami yang bisa di sesuaikan dengan kebutuhan client.
						</p>
					</div>
					
					<div className="flex justify-center relative w-2/5">
						<OverlayImage bgColor="#FF983D" images={images2} />
					</div>
				</section>
				
				<section className="w-full flex flex-row p-20 justify-around items-center">
					<div className="flex justify-center relative w-2/5">
						<OverlayImage bgColor="#FDD016" images={images3} />
					</div>
					
					<div className="w-3/5">
						<strong className="text-2xl">Program Pelatihan yang Efektif</strong>
						<p className="text-justify mt-5">
							Meningkatkan kompetensi sumber daya manusia untuk melakukan lebih baik dan nilai tambah bagi perusahaan serta institusi mereka. 
							Pelatihan diperlukan untuk berbagai tujuan, misalnya mengembangkan keterampilan dan pengetahuan para eksekutif dan staf khusus, 
							mempersiapkan sumber daya manusia baru untuk suatu posisi pekerjaan atau regenerasi, maupun mempersiapkan pensiun. M-Knows Consulting 
							mendukung perusahaan dan bekerja sinergis dengan pusat-pusat pelatihan dalam menilai kebutuhan pelatihan, pengembangan pelatihan 
							customized program, melakukan dan mengevaluasi pelatihan bagi staf profesional dan eksekutif. Konsultan yang berpengalaman dan 
							berdedikasi tinggi memampukan M-Knows Consulting dalam menyusun materi pelatihan, menyampaikan materi pelatihan, serta metode evaluasi 
							dalam rangka memperoleh hasil pelatihan yang terbaik.
						</p>
					</div>
				</section>
				
				<section className="flex flex-col justify-center mt-8">
					<strong className="text-center text-5xl">Our Clients</strong>
				</section>
      </main>
      <Footer />
    </div>
  );
}