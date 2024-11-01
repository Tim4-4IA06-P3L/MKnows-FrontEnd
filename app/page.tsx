import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoverPage from "./components/CoverPage";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="min-h-screen">
					<CoverPage bgSrc="" coverTitle="" />
				</section>
      </main>
      <Footer />
    </div>
  );
}
