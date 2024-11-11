import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Card from "../../../components/Card";
import Link from "next/link";

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="text-center pt-14">
        <div>
          <h1 className="text-3xl font-bold text-black">Public Webtraining</h1>
          <h2 className="text-2xl text-blue-500">2024</h2>
        </div>
        <div className="mt-4 text-left pl-24 pb-10">
          <Link href="/what-we-do/training/online-learning/formulir">
            <button className="px-6 py-2 bg-slate-100 border border-sky-600 text-sky-700 rounded-md hover:bg-gray-200">
              Download Jadwal Public Training Tahun 2024
            </button>
          </Link>
        </div>

        {/* Grid */}
        <section className="">
          <div className="container mx-auto sm:px-4 md:px-6 lg:px-10 text-left">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-10 pb-20">
              <Card
                title="Sales & Marketing Series"
                imgSrc="/sms.jpeg"
                link="#"
              />
              <Card
                title="Credit & Collection Series"
                imgSrc="/ccs.jpeg"
                link="#"
              />
              <Card title="HC & Training Series" imgSrc="/hts.jpeg" link="#" />
              <Card title="Finance Series" imgSrc="/fs.jpeg" link="#" />
              <Card
                title="Office & Administration Series"
                imgSrc="/oas.jpeg"
                link="#"
              />
              <Card
                title="Leadership & Managerial Series"
                imgSrc="/lms.jpeg"
                link="#"
              />
              <div className="hidden lg:block"></div>{" "}
              <Card title="Other Series" imgSrc="/os.jpeg" link="#" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
