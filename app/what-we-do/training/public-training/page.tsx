import React from "react";
import Link from "next/link";
import Image from "next/image";

const videos = [
  { title: "Sales & Marketing Series", src: "/sms.jpeg" },
  { title: "Credit & Collection Series", src: "/ccs.jpeg" },
  { title: "HC & Training Series", src: "/hts.jpeg" },
  { title: "Finance Series", src: "/fs.jpeg" },
  { title: "Office & Administration Series", src: "/oas.jpeg" },
  { title: "Leadership & Managerial Series", src: "/lms.jpeg" },
  { title: "Other Series", src: "/os.jpeg" },
];
const App = () => {
  return (
		<main className="text-center pt-14">
			<div>
				<h1 className="text-2xl font-bold text-black">Public Training</h1>
				<h2 className="text-xl text-blue-500">2024</h2>
			</div>

			{/* Button */}
			<div className="mt-4 text-left pl-5 md:pl-24 pr-5 pb-10 pt-10">
				<Link href="/what-we-do/training/public-training/formulir">
					<button className="px-6 py-2 text-sm bg-slate-100 border border-sky-600 text-sky-700 rounded-md hover:bg-gray-200">
						Download Jadwal Public Training Tahun 2024
					</button>
				</Link>
			</div>

			{/* Grid */}
			<section className="py-10 px-20">
				<div className="flex flex-wrap justify-center gap-8">
					{videos.map((video, index) => (
						<div
							key={index}
							className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg flex-none"
						>
							<Image
								src={video.src}
								alt={video.title}
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 transform"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
								<p className="text-white text-lg font-semibold text-left">
									{video.title}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
  );
};

export default App;
