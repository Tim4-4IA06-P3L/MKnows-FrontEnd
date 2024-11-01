import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CoverPage from "../../components/CoverPage";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="min-h-screen">
					<CoverPage bgSrc="/Consulting_Img.jpg" coverTitle="Executing Coaching & Business Mentoring" />
				</div>
      </main>
      <Footer />
    </div>
  );
}
