import React from "react";
import Image from "next/image";
import Link from "next/link";
import CoverPage from "../../components/CoverPage";

const Home: React.FC = () => {
  return (
    <main>
      <section className="pb-10">
        <CoverPage
          bgSrc="/SistemBelajar.png"
          coverTitle="Learning Management System (LMS)"
          subTitle=""
        />
      </section>
      <div className="bg-white min-h-screen">
        {/* Section 1: Title */}
        <section className="text-center mb-16 p-8">
          <p className="text-black text-2xl">
            Pengembangan LMS Berbasis Moodle
          </p>
          <p className="text-black mt-2 text-lg text-justify last-center">
            Kami mengembangkan Learning Management System (LMS) menggunakan
            Moodle dengan fitur fleksibel untuk kegiatan belajar, pengaturan
            konten multimedia, dan dukungan untuk interaksi belajar yang
            beragam. Desain LMS dapat disesuaikan, terintegrasi dengan SCORM,
            dan kompatibel dengan perangkat mobile
          </p>
        </section>

        {/* Section 2: Konten Pembelajaran Digital */}
        <section className="bg-white p-8 rounded-md mt-8">
          <h2 className="text-2xl text-center font-semibold text-lime-700 mb-4">
            Konten Pembelajaran Digital
          </h2>

          {/* Modul Interaktif */}
          <div className="mb-8 lg:mx-28">
            <h3 className="text-xl font-bold text-lime-700 mb-2">
              Modul Interaktif
            </h3>
            <p className="text-black text-lg text-justify">
              Modul Interaktif Modul pembelajaran yang kami kembangkan mengacu
              pada konsep Activity Based Learning dengan memperhatikan level
              interaktif dari setiap informasi yang perlu disampaikan.
            </p>
            <p className="text-black mt-2 text-lg text-justify">
              Penggunaan Grafis digunakan untuk menarik lebih banyak perhatian
              peserta dalam pembelajaran. Kami dapat memberi Anda grafis dalam
              bentuk 2D, 3D, still atau bergerak tergantung pada kebutuhan
              instruksional Anda.
            </p>
          </div>

          {/* Interactivity Levels */}
          <div className="flex flex-wrap justify-center gap-6 sm:mx-10 lg:mx-40 xl:mx-60">
            {[
              {
                level: "Interaktivitas Level 1",
                description:
                  "Modul E-Learning Interaktif dengan metode Show & Tell untuk menyampaikan informasi seperti pengetahuan produk, kebijakan, aturan, prosedur, fakta, dll.",
                icon: (
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3452 35.0013H16.0085C10.0335 35.0013 7.04683 35.0013 5.19016 33.1096C3.3335 31.218 3.3335 28.173 3.3335 22.0846C3.3335 15.9963 3.3335 12.9513 5.19016 11.0596C7.04683 9.16797 10.0335 9.16797 16.0085 9.16797H22.3468C28.3218 9.16797 31.3102 9.16797 33.1668 11.0596C34.5952 12.5146 34.9235 14.653 35.0002 18.3346"
                      stroke="#648B04"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.362 33.3723L36.667 36.6673M26.667 9.16732L26.5003 8.65065C25.6753 6.08398 25.2637 4.80065 24.282 4.06732C23.2987 3.33398 21.9953 3.33398 19.3837 3.33398H18.9453C16.337 3.33398 15.032 3.33398 14.0503 4.06732C13.067 4.80065 12.6553 6.08398 11.8303 8.65065L11.667 9.16732M35.0887 29.2106C35.1018 28.4305 34.9595 27.6555 34.67 26.9309C34.3805 26.2063 33.9497 25.5466 33.4026 24.9902C32.8555 24.4338 32.2032 23.992 31.4835 23.6903C30.7639 23.3887 29.9914 23.2333 29.2112 23.2333C28.4309 23.2333 27.6584 23.3887 26.9388 23.6903C26.2192 23.992 25.5668 24.4338 25.0197 24.9902C24.4726 25.5466 24.0418 26.2063 23.7523 26.9309C23.4628 27.6555 23.3205 28.4305 23.3337 29.2106C23.3596 30.7523 23.9903 32.2221 25.0897 33.3031C26.1891 34.3842 27.6693 34.99 29.2112 34.99C30.753 34.99 32.2332 34.3842 33.3326 33.3031C34.432 32.2221 35.0627 30.7523 35.0887 29.2106Z"
                      stroke="#648B04"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ), // Replace with icons if needed
              },
              {
                level: "Interaktivitas Level 2",
                description:
                  "Modul E-Learning Interaktif dengan strategi penyampaian Explanatory untuk menyampaikan konsep dan pengetahuan yang lebih dalam dengan dukungan ilustrasi grafis.",
                icon: (
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.5833 7.91602H5.41667C4.5 7.91602 3.75 8.66602 3.75 9.58268V30.416C3.75 31.3327 4.5 32.0827 5.41667 32.0827H34.5833C35.5 32.0827 36.25 31.3327 36.25 30.416V9.58268C36.25 8.66602 35.5 7.91602 34.5833 7.91602Z"
                      stroke="#648B04"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.2531 19.9998C25.2531 20.1803 25.2055 20.3577 25.1151 20.514C25.0248 20.6703 24.8948 20.8001 24.7383 20.8902L17.1175 25.2777C16.9613 25.3676 16.7841 25.4148 16.6038 25.4146C16.4236 25.4144 16.2465 25.3668 16.0905 25.2765C15.9345 25.1863 15.8049 25.0565 15.7149 24.9004C15.6248 24.7442 15.5775 24.5671 15.5775 24.3868V15.6118C15.5775 15.4316 15.6248 15.2545 15.7149 15.0983C15.8049 14.9422 15.9345 14.8124 16.0905 14.7222C16.2465 14.6319 16.4236 14.5843 16.6038 14.5841C16.7841 14.5839 16.9613 14.6311 17.1175 14.721L24.7383 19.1093C24.8948 19.1995 25.0248 19.3292 25.1151 19.4855C25.2055 19.6418 25.2531 19.8192 25.2531 19.9998ZM25.2531 19.9998L33.125 19.9993M20 7.91602V16.2543M20 23.6177V32.0827M6.875 26.6585H16.875M6.875 19.9993H15.5767M6.875 13.3402H16.875M23.125 26.6585H33.125M23.125 13.3402H33.125"
                      stroke="#648B04"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                level: "Interaktivitas Level 3",
                description:
                  "Modul E-Learning Interaktif dengan strategi penyampaian Pengalaman untuk mencapai pemahaman maksimal atas suatu pengetahuan dengan simulasi skenario kasus nyata dan skenario percabangan.",
                icon: (
                  <svg
                    width={38}
                    height={40}
                    viewBox="0 0 38 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.62 22.6658L10.87 17.6658C10.6812 17.558 10.4675 17.5012 10.25 17.5012C10.0325 17.5012 9.81883 17.558 9.63 17.6658L0.88 22.6658C0.688682 22.7751 0.529649 22.933 0.419014 23.1236C0.308378 23.3141 0.250071 23.5305 0.25 23.7508V33.7508C0.250071 33.9712 0.308378 34.1876 0.419014 34.3781C0.529649 34.5687 0.688682 34.7266 0.88 34.8358L9.63 39.8358C9.81883 39.9437 10.0325 40.0004 10.25 40.0004C10.4675 40.0004 10.6812 39.9437 10.87 39.8358L19.62 34.8358C19.8113 34.7266 19.9704 34.5687 20.081 34.3781C20.1916 34.1876 20.2499 33.9712 20.25 33.7508V23.7508C20.2499 23.5305 20.1916 23.3141 20.081 23.1236C19.9704 22.933 19.8113 22.7751 19.62 22.6658ZM10.25 20.1908L16.48 23.7508L10.25 27.3108L4.02 23.7508L10.25 20.1908ZM2.75 25.9046L9 29.4758V36.5971L2.75 33.0258V25.9046ZM11.5 36.5971V29.4758L17.75 25.9046V33.0258L11.5 36.5971ZM34 23.7508V30.0008C34 31.3796 32.8787 32.5008 31.5 32.5008H27.535L29.5175 30.5183L27.75 28.7508L22.75 33.7508L27.75 38.7508L29.5175 36.9833L27.535 35.0008H31.5C34.2575 35.0008 36.5 32.7583 36.5 30.0008V23.7508H34ZM20.88 18.7646L18.38 17.3358C18.1887 17.2266 18.0296 17.0687 17.919 16.8781C17.8084 16.6876 17.7501 16.4712 17.75 16.2508V13.7508H20.25V15.5258L22.12 16.5946L20.88 18.7646ZM30.88 18.0233L29 19.0971V16.2508H26.5V19.0971L24.62 18.0221L23.38 20.1933L27.13 22.3358C27.3188 22.4437 27.5325 22.5004 27.75 22.5004C27.9675 22.5004 28.1812 22.4437 28.37 22.3358L32.12 20.1933L30.88 18.0233ZM34.62 18.7646L33.38 16.5946L35.25 15.5258V13.7508H37.75V16.2508C37.7499 16.4712 37.6916 16.6876 37.581 16.8781C37.4703 17.0687 37.3113 17.2266 37.12 17.3358L34.62 18.7646ZM30.87 10.9083L29.63 8.7371L27.75 9.8121L25.87 8.7371L24.63 10.9083L26.5 11.9758V13.7508H29V11.9758L30.87 10.9083ZM37.12 5.16585L33.37 3.0221L32.13 5.19335L33.98 6.25085L32.13 7.30835L33.37 9.47835L35.25 8.4046V11.2508H37.75V6.25085C37.7499 6.03052 37.6916 5.81412 37.581 5.62358C37.4703 5.43304 37.3113 5.27513 37.12 5.16585ZM29.63 3.76585L27.75 2.6896L25.87 3.7646L24.63 1.59335L27.13 0.164597C27.3188 0.0567338 27.5325 0 27.75 0C27.9675 0 28.1812 0.0567338 28.37 0.164597L30.87 1.59335L29.63 3.76585ZM23.37 5.19335L22.13 3.02335L18.38 5.16585C18.1887 5.27513 18.0296 5.43304 17.919 5.62358C17.8084 5.81412 17.7501 6.03052 17.75 6.25085V11.2508H20.25V8.4046L22.13 9.4796L23.37 7.30835L21.52 6.25085L23.37 5.19335ZM10.25 1.25085L8.4825 3.01835L10.465 5.00085H6.5C3.7425 5.00085 1.5 7.24335 1.5 10.0008V16.2508H4V10.0008C4 8.62335 5.12125 7.50085 6.5 7.50085H10.465L8.4825 9.48335L10.25 11.2508L15.25 6.25085L10.25 1.25085Z"
                      fill="#648B04"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-md shadow-sm hover:shadow-lg flex-1 sm:max-w-xs md:max-w-sm lg:max-w-md text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-lime-700 mb-2">
                  {item.level}
                </h4>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Video Instruksional */}
        <section className="bg-white p-8 rounded-md mt-8 lg:mx-28">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">
            Video Instruksional
          </h2>
          <p className="text-black text-lg text-justify">
            Video pembelajaran merupakan alternatif yang efektif untuk
            meningkatkan kualitas kegiatan belajar. Kami menyediakan berbagai
            jenis video sesuai kebutuhan instruksional Anda.
          </p>
          <p className="text-black mt-2 text-lg text-justify">
            Pilihannya termasuk video live action yang menampilkan pengajar atau
            demonstrasi langsung. Selain itu, kami juga menawarkan video animasi
            yang menarik dan interaktif. Dengan pilihan ini, Anda dapat memilih
            format yang paling sesuai untuk mencapai tujuan pembelajaran Anda.
          </p>

          {/* Video Options */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              {
                title: "Animasi 2D",
                description:
                  "Video penjelasan animasi untuk menyampaikan informasi seperti tutorial program atau platform dan informasi lainnya dengan bantuan host karakter animasi dan ilustrasi animasi 3D Animation.",
                icon: (
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07371 13.8439C3.07092 11.1865 4.05069 8.62181 5.82461 6.64314C7.59853 4.66447 10.0413 3.41149 12.6833 3.12513C15.3252 2.83877 17.9798 3.53926 20.1365 5.09189C22.2931 6.64453 23.7997 8.93968 24.3663 11.536H27.5005C27.0763 9.03037 25.9708 6.6898 24.305 4.77061C22.6392 2.85142 20.4774 1.42764 18.0564 0.655195C15.6354 -0.117252 13.0485 -0.208571 10.579 0.391237C8.10954 0.991046 5.85275 2.25885 4.0558 4.0558C2.25885 5.85275 0.991046 8.10954 0.391237 10.579C-0.208571 13.0485 -0.117252 15.6354 0.655195 18.0564C1.42764 20.4774 2.85142 22.6392 4.77061 24.305C6.6898 25.9708 9.03037 27.0763 11.536 27.5005V24.3663C9.13712 23.8401 6.99016 22.5097 5.45106 20.5959C3.91195 18.6821 3.07315 16.2998 3.07371 13.8439ZM20.7676 13.8439C18.9313 13.8439 17.1702 14.5733 15.8718 15.8718C14.5733 17.1702 13.8439 18.9313 13.8439 20.7676V33.0763C13.8439 34.9126 14.5733 36.6737 15.8718 37.9721C17.1702 39.2705 18.9313 40 20.7676 40H33.0763C34.9126 40 36.6737 39.2705 37.9721 37.9721C39.2705 36.6737 40 34.9126 40 33.0763V20.7676C40 18.9313 39.2705 17.1702 37.9721 15.8718C36.6737 14.5733 34.9126 13.8439 33.0763 13.8439H20.7676ZM16.9211 20.7676C16.9211 19.7474 17.3263 18.769 18.0477 18.0477C18.769 17.3263 19.7474 16.9211 20.7676 16.9211H33.0763C34.0965 16.9211 35.0748 17.3263 35.7962 18.0477C36.5176 18.769 36.9228 19.7474 36.9228 20.7676V33.0763C36.9228 34.0965 36.5176 35.0748 35.7962 35.7962C35.0748 36.5176 34.0965 36.9228 33.0763 36.9228H20.7676C19.7474 36.9228 18.769 36.5176 18.0477 35.7962C17.3263 35.0748 16.9211 34.0965 16.9211 33.0763V20.7676Z"
                      fill="#648B04"
                    />
                  </svg>
                ), // Replace with proper icons if needed
              },
              {
                title: "Animasi 3D",
                description:
                  "Video animasi 3D untuk menyampaikan informasi seperti tutorial program atau platform dan informasi lainnya dengan bantuan host Karakter 3D dan Animasi 3D Live Action.",
                icon: (
                  <svg
                    width={41}
                    height={40}
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.8335 5V11.6667C23.8335 12.1087 24.0091 12.5326 24.3217 12.8452C24.6342 13.1577 25.0581 13.3333 25.5002 13.3333H32.1668"
                      stroke="#648B04"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5002 22.5L27.1668 20M28.8335 35H12.1668C11.2828 35 10.4349 34.6488 9.80981 34.0237C9.18469 33.3986 8.8335 32.5507 8.8335 31.6667V8.33333C8.8335 7.44928 9.18469 6.60143 9.80981 5.97631C10.4349 5.35119 11.2828 5 12.1668 5H23.8335L32.1668 13.3333V31.6667C32.1668 32.5507 31.8156 33.3986 31.1905 34.0237C30.5654 34.6488 29.7176 35 28.8335 35Z"
                      stroke="#648B04"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5002 29.9993V22.4993L13.8335 19.7427L20.5002 16.666L27.1668 19.7427V26.9227L20.5002 29.9993ZM20.5002 29.9993L13.8335 26.9993V19.9993"
                      stroke="#648B04"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Aksi Nyata",
                description:
                  "Video aksi langsung profesional untuk tutorial atau konsep video wawancara dengan sinematografi menengah dan animasi grafis gerak Video Penjelasan.",
                icon: (
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5 5H11C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8V32C8 32.7956 8.31607 33.5587 8.87868 34.1213C9.44129 34.6839 10.2044 35 11 35H29C29.7956 35 30.5587 34.6839 31.1213 34.1213C31.6839 33.5587 32 32.7956 32 32V12.5L24.5 5Z"
                      stroke="#648B04"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 5V11C23 11.7956 23.3161 12.5587 23.8787 13.1213C24.4413 13.6839 25.2044 14 26 14H32M17 18.5L24.5 23L17 27.5V18.5Z"
                      stroke="#648B04"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Video Penjelasan",
                description:
                  "Video penjelasan dengan menggunakan grafis gerak sederhana untuk menyampaikan informasi seperti pengetahuan produk, kebijakan, aturan, prosedur, fakta, dll.",
                icon: (
                  <svg
                    width={41}
                    height={40}
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 26.5217V13.4783C5 12.5558 5.36646 11.6711 6.01876 11.0188C6.67106 10.3665 7.55577 10 8.47826 10H23.2609C24.1834 10 25.0681 10.3665 25.7204 11.0188C26.3727 11.6711 26.7391 12.5558 26.7391 13.4783V26.5217C26.7391 27.4442 26.3727 28.3289 25.7204 28.9812C25.0681 29.6335 24.1834 30 23.2609 30H8.47826C7.55577 30 6.67106 29.6335 6.01876 28.9812C5.36646 28.3289 5 27.4442 5 26.5217ZM34.8574 11.2887L27.9009 17.4852C27.8092 17.5666 27.7358 17.6665 27.6854 17.7783C27.6351 17.8901 27.6089 18.0113 27.6087 18.1339V21.2261C27.6089 21.3487 27.6351 21.4699 27.6854 21.5817C27.7358 21.6935 27.8092 21.7934 27.9009 21.8748L34.8574 28.0713C34.9827 28.1826 35.1376 28.2553 35.3032 28.2807C35.4689 28.306 35.6384 28.2829 35.7913 28.2142C35.9442 28.1455 36.0739 28.034 36.165 27.8933C36.256 27.7525 36.3044 27.5885 36.3043 27.4209V11.9391C36.3044 11.7715 36.256 11.6075 36.165 11.4667C36.0739 11.3259 35.9442 11.2145 35.7913 11.1458C35.6384 11.0771 35.4689 11.054 35.3032 11.0793C35.1376 11.1047 34.9827 11.1774 34.8574 11.2887Z"
                      stroke="#648B04"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-md shadow-sm hover:shadow-lg flex-1 max-w-xs text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-lime-700 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Gambar */}
        <section className="relative w-full min-[320px]:max-md:mt-32 mt-20">
          <Link className="relative w-full h-[500px]" href="#">
            <Image
              src="/LMSVideo.png"
              alt="Kerja Sama"
              width={1000}
              height={800}
              priority
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
