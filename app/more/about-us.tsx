import React from "react";

const AboutUs = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "#007bff", textAlign: "center" }}>
        M-Knows Consulting
      </h1>

      <p>
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          M-Knows Consulting
        </a>{" "}
        adalah merk yang dipakai bersama oleh PT. Menara Indonesia dan PT.
        Menara Pengetahuan Indonesia. PT. Menara Indonesia adalah perusahaan
        yang menjalankan jasa konsultasi manajemen dan pembuatan solusi digital,
        seperti aplikasi pendidikan (web dan app), solusi artificial
        intelligence untuk industri keuangan dan pendidikan, serta solusi
        virtual reality dan pembuatan game yang merupakan induk perusahaan dari
        PT. Menara Pengetahuan Indonesia, perusahaan yang bergerak dalam bidang
        jasa pendidikan dan pelatihan, berkantor pusat di Jakarta dan memiliki
        cabang di Surabaya.
      </p>

      <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
        <img
          src="/path/to/image1.jpg"
          alt="Consulting Image 1"
          style={{ width: "48%", height: "auto" }}
        />
        <img
          src="/path/to/image2.jpg"
          alt="Consulting Image 2"
          style={{ width: "48%", height: "auto" }}
        />
      </div>

      <p>
        Sejak berdiri,{" "}
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          M-Knows Consulting
        </a>{" "}
        telah sukses bekerjasama dengan beragam perusahaan nasional dan
        multinasional, dengan kualitas kerja yang memuaskan, dibuktikan dengan
        tingginya repeat order dan customer yang loyal.
      </p>

      <p>
        Melalui cabang Jakarta & Surabaya,{" "}
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          M-Knows Consulting
        </a>{" "}
        telah sukses melayani beragam perusahaan dengan kualitas kerja yang
        memuaskan, sesuai keahliannya dan pendekatan konsultasi yang menekankan
        pada sifat Applicative, Contemporary, High Impact, Fun & Motivational.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Jasa konsultasi yang sering diambil klien meliputi:
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#e3f2fd",
            border: "none",
            borderRadius: "5px",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          MT & MDP Program
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#e3f2fd",
            border: "none",
            borderRadius: "5px",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          Competency Assessment
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
