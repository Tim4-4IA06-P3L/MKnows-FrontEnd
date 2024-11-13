import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CoverPage from "../../components/CoverPage";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-14">
          <CoverPage
            bgSrc="/OnlineLearn.jpg"
            coverTitle="Online Learning, Public & Inhouse Training"
          />
        </section>

        {/* Grid */}
        <section>
          <div className="container mx-auto sm:px-4 md:px-6 lg:px-10 pb-36">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-10">
              <Card
                title="Online Learning"
                imgSrc="/ol.jpeg"
                link="/what-we-do/training/online-learning"
              />
              <Card
                title="Public Learning"
                imgSrc="/pl.jpeg"
                link="/what-we-do/training/public-learning"
              />
              <Card
                title="In-House Training"
                imgSrc="/PKT.png"
                link="/what-we-do/training/in-house"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
