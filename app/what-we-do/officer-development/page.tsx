import React from "react";
import CoverPage from "../../components/CoverPage";
import OverlayImage from "../../components/OverlayImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Officer Development - M-Knows Consulting",
  description: "Officer Development (Pengembangan Karyawan) M-Knows Consulting",
};

const OfficerDevPage = () => {
  const images = [
    "/officer-development/officer-development2.jpg",
    "/officer-development/officer-development3.webp",
  ];
  const images2 = [
    "/officer-development/officer-development4.jpg",
    "/officer-development/officer-development5.webp",
  ];

  return (
    <>
      <main>
        <section className="mb-8">
          <CoverPage
            bgSrc="/officer-development/officer-development.jpg"
            coverTitle="Hybrid Officer Development Crash Program for Financial Industry"
            subTitle=""
          />
        </section>

        <section className="h-max w-full flex flex-col items-center p-10 md:p-20">
          <strong className="text-2xl text-center mb-5 text-[#9DE000]">
            Pengembangan Program Singkat Hybrid Proyek Lingkup
          </strong>
          <p className="text-justify last-center">
            Officer Development Crash Program adalah program pelatihan & magang
            yang merupakan penciptaan kompetensi di bidang Sales, Credit &
            Collection, guna menghasilkan SDM yang produktif dan berkinerja
            tinggi. Penguatan kompetensi dilakukan berupa pelatihan selama 1
            bulan di M-Knows, fokus pada role play dan drill, ditutup dengan uji
            kompetensi. Mereka yang lulus uji kompetensi, disalurkan untuk 1
            bulan magang di perusahaan (Bank, Multi Finance, Fintech, dan
            Asuransi). Bagi yang berkinerja tinggi akan ditawarkan untuk bekerja
            di perusahaan yang berpartisipasi, bekerja di industri keuangan.
          </p>
        </section>

        <section className="w-full space-y-8 p-10 md:p-20">
          <div className="grid min-[320px]:max-md:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M54.9102 52.1837C55.7546 50.8289 56.2454 49.1992 56.2454 47.4713C56.2454 42.5624 52.3184 38.6353 47.4292 38.6353C42.54 38.6353 38.5933 42.5624 38.5933 47.4713C38.5933 52.3801 42.5203 56.3072 47.4292 56.3072C49.1374 56.3072 50.7475 55.8163 52.1024 54.972L58.2286 61L60.9579 58.2707L54.9102 52.1837ZM47.4292 52.3801C44.6999 52.3801 42.5203 50.1809 42.5203 47.4713C42.5203 44.7616 44.6999 42.5624 47.4292 42.5624C50.1585 42.5624 52.3184 44.7616 52.3184 47.4713C52.3184 50.1809 50.1389 52.3801 47.4292 52.3801ZM60.2707 42.5624H59.1907C58.5428 40.972 57.561 39.5582 56.3436 38.3604V34.7083H60.2707V42.5624ZM56.3436 22.9271H50.453V19H56.3436C57.3851 19 58.384 19.4137 59.1205 20.1502C59.8569 20.8867 60.2707 21.8855 60.2707 22.9271V28.8177H56.3436V22.9271ZM44.5624 22.9271H36.7083V19H44.5624V22.9271ZM24.9271 19H30.8177V22.9271H24.9271V28.8177H21V22.9271C21 21.8855 21.4137 20.8867 22.1502 20.1502C22.8867 19.4137 23.8855 19 24.9271 19ZM40.6353 58.2707H36.7083V54.3436C37.69 55.9537 39.0645 57.2889 40.6353 58.2707ZM24.9271 54.3436H30.8177V58.2707H24.9271C23.8855 58.2707 22.8867 57.8569 22.1502 57.1205C21.4137 56.384 21 55.3851 21 54.3436V48.453H24.9271V54.3436ZM24.9271 42.5624H21V34.7083H24.9271V42.5624Z"
                    fill="#225677"
                  />
                </svg>
              </div>
              <p>Recruitment & Seleksi Mahasiswa</p>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M35.8002 26H46.3003M35.8002 19H52.6004M29.5001 34.1667V44.6667C29.5001 46.867 29.5001 47.966 28.8848 48.6497C28.2695 49.3333 27.2804 49.3333 25.3001 49.3333H23.2001C21.2197 49.3333 20.2306 49.3333 19.6153 48.6497C19 47.966 19 46.867 19 44.6667V38.8333C19 36.633 19 35.534 19.6153 34.8503C20.2306 34.1667 21.2197 34.1667 23.2001 34.1667H29.5001ZM29.5001 34.1667H40.0003M47.5394 53.3933C46.2184 54.378 42.7576 56.3847 44.866 58.8953C45.895 60.1227 47.0438 61 48.4844 61H56.7165C58.1571 61 59.3058 60.1227 60.3348 58.8953C62.4432 56.3847 58.9824 54.378 57.6615 53.3957C56.1684 52.2691 54.4052 51.6669 52.6004 51.6669C50.7956 51.6669 49.0324 52.2668 47.5394 53.3933ZM56.8005 41.1667C56.8005 42.4043 56.358 43.5913 55.5703 44.4665C54.7826 45.3417 53.7143 45.8333 52.6004 45.8333C51.4865 45.8333 50.4182 45.3417 49.6305 44.4665C48.8429 43.5913 48.4004 42.4043 48.4004 41.1667C48.4004 39.929 48.8429 38.742 49.6305 37.8668C50.4182 36.9917 51.4865 36.5 52.6004 36.5C53.7143 36.5 54.7826 36.9917 55.5703 37.8668C56.358 38.742 56.8005 39.929 56.8005 41.1667ZM28.4501 23.6667C28.4501 24.9043 28.0076 26.0913 27.22 26.9665C26.4323 27.8417 25.364 28.3333 24.2501 28.3333C23.1361 28.3333 22.0678 27.8417 21.2802 26.9665C20.4925 26.0913 20.05 24.9043 20.05 23.6667C20.05 22.429 20.4925 21.242 21.2802 20.3668C22.0678 19.4917 23.1361 19 24.2501 19C25.364 19 26.4323 19.4917 27.22 20.3668C28.0076 21.242 28.4501 22.429 28.4501 23.6667Z"
                    stroke="#225677"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Coaching & Mentoring Selama Magang</p>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M32.125 42.625H42.625V45.25H32.125V42.625ZM32.125 36.0625H47.875V38.6875H32.125V36.0625ZM32.125 49.1875H38.6875V51.8125H32.125V49.1875Z"
                    fill="#225677"
                  />
                  <path
                    d="M51.8125 25.5625H47.875V24.25C47.875 23.5538 47.5984 22.8861 47.1062 22.3938C46.6139 21.9016 45.9462 21.625 45.25 21.625H34.75C34.0538 21.625 33.3861 21.9016 32.8938 22.3938C32.4016 22.8861 32.125 23.5538 32.125 24.25V25.5625H28.1875C27.4913 25.5625 26.8236 25.8391 26.3313 26.3313C25.8391 26.8236 25.5625 27.4913 25.5625 28.1875V55.75C25.5625 56.4462 25.8391 57.1139 26.3313 57.6062C26.8236 58.0984 27.4913 58.375 28.1875 58.375H51.8125C52.5087 58.375 53.1764 58.0984 53.6687 57.6062C54.1609 57.1139 54.4375 56.4462 54.4375 55.75V28.1875C54.4375 27.4913 54.1609 26.8236 53.6687 26.3313C53.1764 25.8391 52.5087 25.5625 51.8125 25.5625ZM34.75 24.25H45.25V29.5H34.75V24.25ZM51.8125 55.75H28.1875V28.1875H32.125V32.125H47.875V28.1875H51.8125V55.75Z"
                    fill="#225677"
                  />
                </svg>
              </div>
              <p>Roleplay, Drill & Penilaian Kompetensi</p>
            </div>
          </div>

          <div className="grid min-[320px]:max-md:grid-cols-1 grid-cols-3 gap-8">
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M61 32.857V61H19V19H49.7412L61 32.857ZM50.5 31.9231H56.5088L50.5 24.5276V31.9231ZM58.375 57.7692V35.1538H47.875V22.2308H21.625V57.7692H58.375Z"
                    fill="#225677"
                  />
                </svg>
              </div>
              <p>Kontrak Kerja & Orientasi</p>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M34.75 55.75H45.25M34.75 55.75V47M34.75 55.75H25.3C25.0215 55.75 24.7545 55.6394 24.5575 55.4425C24.3606 55.2455 24.25 54.9785 24.25 54.7V48.05C24.25 47.7715 24.3606 47.5045 24.5575 47.3075C24.7545 47.1106 25.0215 47 25.3 47H34.75M45.25 55.75V34.75M45.25 55.75H54.7C54.9785 55.75 55.2455 55.6394 55.4425 55.4425C55.6394 55.2455 55.75 54.9785 55.75 54.7V25.3C55.75 25.0215 55.6394 24.7545 55.4425 24.5575C55.2455 24.3606 54.9785 24.25 54.7 24.25H46.3C46.0215 24.25 45.7545 24.3606 45.5575 24.5575C45.3606 24.7545 45.25 25.0215 45.25 25.3V34.75M34.75 47V35.8C34.75 35.5215 34.8606 35.2545 35.0575 35.0575C35.2545 34.8606 35.5215 34.75 35.8 34.75H45.25"
                    stroke="#225677"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>
              <p>Evaluasi dan Kelulusan</p>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M40 58.375L28.9278 45.3169C28.7739 45.1209 28.6217 44.9235 28.471 44.725C26.5806 42.2331 25.559 39.1903 25.5625 36.0625C25.5625 32.2334 27.0836 28.5612 29.7912 25.8536C32.4987 23.1461 36.1709 21.625 40 21.625C43.8291 21.625 47.5013 23.1461 50.2089 25.8536C52.9164 28.5612 54.4375 32.2334 54.4375 36.0625C54.4405 39.1888 53.4194 42.2301 51.5303 44.7211L51.529 44.725C51.529 44.725 51.1353 45.2421 51.0762 45.3117L40 58.375ZM30.5671 43.1434C30.5671 43.1434 30.8729 43.5477 30.9424 43.6343L40 54.3167L49.0694 43.6199C49.1271 43.5477 49.4343 43.1408 49.4356 43.1395C50.9807 41.104 51.8156 38.618 51.8125 36.0625C51.8125 32.9296 50.568 29.9251 48.3527 27.7098C46.1374 25.4945 43.1329 24.25 40 24.25C36.8671 24.25 33.8626 25.4945 31.6473 27.7098C29.432 29.9251 28.1875 32.9296 28.1875 36.0625C28.1843 38.6196 29.0202 41.1072 30.5671 43.1434Z"
                    fill="#225677"
                  />
                  <path
                    d="M46.5625 42.625H43.9375V32.125H36.0625V42.625H33.4375V32.125C33.4375 31.4288 33.7141 30.7611 34.2063 30.2688C34.6986 29.7766 35.3663 29.5 36.0625 29.5H43.9375C44.6337 29.5 45.3014 29.7766 45.7937 30.2688C46.2859 30.7611 46.5625 31.4288 46.5625 32.125V42.625Z"
                    fill="#225677"
                  />
                  <path
                    d="M38.6875 40H41.3125V42.625H38.6875V40ZM38.6875 34.75H41.3125V37.375H38.6875V34.75Z"
                    fill="#225677"
                  />
                </svg>
              </div>
              <p>Magang di Perusahaan</p>
            </div>
          </div>

          <div className="grid min-[320px]:max-md:grid-cols-1 grid-cols-3 gap-8">
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M27.0425 47.1358C25.1079 45.5534 23.5588 43.5514 22.5126 41.2816C21.4663 39.0118 20.9503 36.5336 21.0037 34.0348C21.1947 25.5045 28.022 18.4729 36.5332 18.0243C38.7371 17.9043 40.9426 18.23 43.0178 18.9817C45.093 19.7335 46.9953 20.8959 48.611 22.3996C50.2268 23.9032 51.5228 25.7172 52.4216 27.7331C53.3203 29.749 53.8035 31.9254 53.842 34.1322L58.174 42.4563C58.1874 42.4812 58.1988 42.506 58.2103 42.5327C58.4767 43.1586 58.4945 43.8624 58.26 44.501C58.0255 45.1395 57.5564 45.6646 56.9483 45.9693L56.9139 45.9865L52.3166 48.0866V54.2724C52.3166 54.9813 52.035 55.6611 51.5337 56.1624C51.0324 56.6637 50.3526 56.9453 49.6437 56.9453H40.4795C40.1757 56.9453 39.8843 56.8246 39.6695 56.6098C39.4547 56.3949 39.334 56.1036 39.334 55.7998C39.334 55.4959 39.4547 55.2046 39.6695 54.9897C39.8843 54.7749 40.1757 54.6542 40.4795 54.6542H49.6418C49.7431 54.6542 49.8402 54.614 49.9118 54.5424C49.9834 54.4708 50.0236 54.3737 50.0236 54.2724V47.363C50.0234 47.1435 50.0863 46.9285 50.2048 46.7437C50.3232 46.5589 50.4923 46.412 50.6918 46.3206L55.9422 43.9207C56.0209 43.8774 56.082 43.8078 56.1144 43.7239C56.1469 43.6401 56.1488 43.5475 56.1197 43.4625L51.6884 34.9455C51.6006 34.7829 51.5535 34.6015 51.551 34.4167C51.5499 31.1334 50.4061 27.9529 48.3159 25.421C46.2257 22.889 43.3194 21.1635 40.0958 20.5406V24.2674C41.0711 24.5438 41.9136 25.1638 42.4677 26.0128C43.0218 26.8618 43.2501 27.8825 43.1105 28.8866C42.9709 29.8908 42.4729 30.8106 41.7083 31.4763C40.9436 32.1419 39.964 32.5086 38.9502 32.5086C37.9364 32.5086 36.9569 32.1419 36.1922 31.4763C35.4276 30.8106 34.9296 29.8908 34.79 28.8866C34.6504 27.8825 34.8787 26.8618 35.4328 26.0128C35.9869 25.1638 36.8294 24.5438 37.8047 24.2674V20.2981C37.4229 20.2886 37.041 20.2886 36.6592 20.3096C33.7837 20.474 31.0264 21.5099 28.7541 23.2796C26.4817 25.0493 24.8019 27.4688 23.9382 30.2164H28.2587C28.4267 30.2164 28.5926 30.2534 28.7447 30.3246C28.8968 30.3959 29.0314 30.4998 29.1389 30.6288L34.1887 36.6886C35.1171 36.2737 36.1642 36.2087 37.1367 36.5056C38.1093 36.8025 38.9416 37.4412 39.48 38.3038C40.0184 39.1664 40.2266 40.1947 40.066 41.1988C39.9055 42.2029 39.3871 43.115 38.6065 43.7667C37.826 44.4185 36.836 44.7658 35.8194 44.7446C34.8027 44.7234 33.8281 44.3351 33.0754 43.6514C32.3227 42.9677 31.8427 42.0348 31.7242 41.0249C31.6056 40.015 31.8564 38.9962 32.4303 38.1568L27.7222 32.5075H23.4265C23.3536 33.0303 23.3109 33.5568 23.2986 34.0845C23.2495 36.3327 23.736 38.5604 24.718 40.5835C25.7 42.6065 27.1492 44.3669 28.946 45.7192C29.1073 45.8403 29.2338 46.002 29.3125 46.1877C29.3913 46.3734 29.4197 46.5767 29.3947 46.7769L27.8673 58.9958C27.8329 59.2728 27.6984 59.5278 27.4893 59.7127C27.2801 59.8976 27.0106 59.9998 26.7313 60C26.6835 59.9998 26.6356 59.9966 26.5882 59.9905C26.4388 59.9718 26.2947 59.9239 26.1638 59.8495C26.033 59.7752 25.9182 59.6757 25.8258 59.5569C25.7334 59.4382 25.6654 59.3023 25.6255 59.1572C25.5856 59.0121 25.5747 58.8606 25.5935 58.7113L27.0425 47.1358ZM37.041 28.3072C37.041 28.6848 37.153 29.054 37.3628 29.3679C37.5726 29.6819 37.8708 29.9266 38.2196 30.0711C38.5685 30.2156 38.9524 30.2534 39.3227 30.1797C39.6931 30.1061 40.0333 29.9242 40.3003 29.6572C40.5673 29.3902 40.7491 29.05 40.8228 28.6797C40.8964 28.3093 40.8586 27.9255 40.7141 27.5766C40.5696 27.2277 40.3249 26.9296 40.0109 26.7198C39.697 26.51 39.3279 26.398 38.9502 26.398C38.4439 26.398 37.9583 26.5992 37.6002 26.9572C37.2422 27.3153 37.041 27.8009 37.041 28.3072ZM35.8955 42.4353C36.2731 42.4353 36.6423 42.3234 36.9562 42.1136C37.2702 41.9038 37.5149 41.6056 37.6594 41.2567C37.8039 40.9079 37.8417 40.524 37.768 40.1537C37.6944 39.7833 37.5125 39.4431 37.2455 39.1761C36.9785 38.9091 36.6383 38.7273 36.268 38.6536C35.8976 38.5799 35.5138 38.6178 35.1649 38.7623C34.816 38.9068 34.5179 39.1515 34.3081 39.4654C34.0983 39.7794 33.9863 40.1485 33.9863 40.5261C33.9863 41.0325 34.1875 41.5181 34.5455 41.8761C34.9036 42.2342 35.3892 42.4353 35.8955 42.4353Z"
                    fill="#225677"
                  />
                </svg>
              </div>
              <p>Pelatihan Berbasis Kompetensi</p>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M40 29.5H42.625V47.875H40V29.5ZM34.75 29.5H37.375V47.875H34.75V29.5ZM58.375 40H49.7412L53.0635 43.3428L51.2178 45.1885L44.7168 38.6875L51.2178 32.1865L53.0635 34.0322L49.7412 37.375H58.375V40ZM26.1572 32.1865L32.6582 38.6875L26.1572 45.1885L24.3115 43.3428L27.6338 40H19V37.375H27.6338L24.3115 34.0322L26.1572 32.1865Z"
                    fill="#225677"
                  />
                </svg>
              </div>
              <p>Pembuatan Laporan Individual</p>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 ">
              <div className="w-16 h-16 flex-shrink-0">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#D7E9F4" />
                  <path
                    d="M31.75 35.5H30.25M37.75 35.5H36.25M31.75 31H30.25M37.75 31H36.25M49.75 44.5H48.25M49.75 38.5H48.25M43 34V55H49C51.829 55 53.242 55 54.121 54.121C55 53.242 55 51.829 55 49V40C55 37.171 55 35.758 54.121 34.879C53.242 34 51.829 34 49 34H43ZM43 34C43 29.758 43 27.6355 41.6815 26.3185C40.3645 25 38.242 25 34 25C29.758 25 27.6355 25 26.3185 26.3185C25 27.6355 25 29.758 25 34V37M34.0375 42.9325C34.0462 43.332 33.9751 43.7292 33.8282 44.1009C33.6813 44.4725 33.4616 44.811 33.1821 45.0966C32.9025 45.3822 32.5688 45.609 32.2004 45.7638C31.8319 45.9186 31.4363 45.9983 31.0367 45.9981C30.6371 45.9979 30.2416 45.9178 29.8733 45.7627C29.5051 45.6075 29.1715 45.3803 28.8923 45.0945C28.613 44.8086 28.3937 44.4699 28.2472 44.0981C28.1006 43.7263 28.0299 43.329 28.039 42.9295C28.0569 42.1457 28.381 41.4 28.9418 40.8521C29.5026 40.3042 30.2557 39.9977 31.0397 39.9981C31.8238 39.9985 32.5765 40.3058 33.1368 40.8542C33.6971 41.4027 34.0204 42.1487 34.0375 42.9325ZM25.105 52.315C26.692 49.873 29.2135 48.958 31.0375 48.9595C32.8615 48.961 35.308 49.873 36.8965 52.315C36.9985 52.4725 37.027 52.6675 36.934 52.831C36.5635 53.4895 35.41 54.796 34.579 54.883C33.6205 54.985 31.1185 55 31.039 55C30.9595 55 28.3795 54.985 27.424 54.883C26.59 54.7945 25.438 53.4895 25.066 52.831C25.0243 52.7498 25.0058 52.6586 25.0127 52.5675C25.0196 52.4764 25.0515 52.389 25.105 52.315Z"
                    stroke="#225677"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Penawaran untuk Bekerja di Perusahaan yang Berpartisipasi</p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center p-10 md:p-20">
          <div className="min-[320px]:max-sm:w-full w-[78%] text-center">
            <strong className="text-2xl text-[#9DE000]">
              Proses Perekrutan & Onboarding
            </strong>
            <ol className="text-justify mt-5 text-left list-decimal list-inside marker:text-xl marker:text-[#1C75BC]">
              <li>Recruitment 300 mahasiswa dilakukan bulan April 2022.</li>
              <li>
                Persyaratan seleksi mahasiswa tingkat skripsi (tugas akhir),
                atau yang sudah lulus atau maksimal selama COVID-19, (2 tahun
                terakhir) belum mendapatkan pekerjaan.
              </li>
              <li>
                Pembuatan kontrak kerja dan MoU dengan universitas (pusat
                karir).
              </li>
              <li>
                Mahasiswa melakukan onboarding dan mulai mengikuti pelatihan.
              </li>
            </ol>
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col-reverse"
        >
          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#1C75BC]">
              Kerangka Program (Project Framework)
            </strong>
            <p className="text-justify mt-5">
              Aktivitas magang yang kami rancang adalah untuk mahasiswa dapat
              dapat diterima bekerja di perusahaan keuangan, yang bernama
              Officer Development Crash Program (ODCP). ODCP memiliki
              keunggulan, karena mahasiswa diberikan kemampuan atau keahlian
              yang spesifik, seperti Sales, Credit dan Collection sesuai
              kebutuhan dari perusahaan keuangan yang menerimanya.
            </p>

            <p className="text-justify mt-5">
              Pendekatan kerja dan magang akan menggunakan pendekatan SCRUM
              Framework, dimana pemegang akan diarahkan untuk merancang solusi
              melalui lima proses iteratif, yaitu Sprint Planning, Daily SCRUM,
              Sprint Review, Sprint Retrospective, dan Improvement.
            </p>
          </div>
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#1C75BC" images={images} />
          </div>
        </section>

        <section
          className="w-full flex flex-row p-10 md:p-20 justify-around items-center 
					min-[320px]:max-md:flex-col"
        >
          <div className="flex justify-center relative w-2/5 min-[320px]:max-md:mb-5 min-[320px]:max-md:w-3/5">
            <OverlayImage bgColor="#B3FF00" images={images2} />
          </div>

          <div className="w-3/5 min-[320px]:max-md:text-center min-[320px]:max-md:w-full">
            <strong className="text-2xl text-[#9DE000]">
              Proses Pelatihan di Kampus Gratis
            </strong>
            <p className="text-justify mt-5">
              Materi diberikan secara synchronous (online meeting) dan
              asynchronous (video ajar dan white paper di{" "}
              <a
                href="https://kampusgratis.id"
                className="text-[#1C75BC] underline"
                target="_blank"
              >
                kampusgratis.id
              </a>
              ). Sesi tatap muka diperlukan untuk penugasan dan mentoring
              langsung. Setiap materi dilengkapi kuis, latihan, penugasan, ujian
              akhir, dan uji kompetensi (studi kasus, role play, dan drill)
              untuk evaluasi standar kompetensi.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center p-10 md:p-20">
          <strong className="text-2xl text-[#9DE000] mb-8">
            Monitoring & Evaluasi
          </strong>
          <p className="text-justify mb-8">
            Peserta program akan dimonitor kerjanya meliputi :{" "}
          </p>

          <div className="min-[320px]:max-sm:w-full w-[80%]">
            <div
              className="flex justify-start items-center bg-left bg-[length:100%_100%] bg-no-repeat min-[320px]:max-sm:p-3 p-8 z-0"
              style={{
                backgroundImage: `url('${"/officer-development/office_development_highlight.png"}')`,
              }}
            >
              <div className="flex flex-row justify-start items-center min-[320px]:max-sm:space-x-4 space-x-8 min-[320px]:max-md:space-x-8 ml-16 min-[320px]:max-md:ml-8">
                <strong className="min-[320px]:max-sm:text-xl text-4xl">
                  01
                </strong>
                <div className="h-[50px] border border-neutral-500"></div>
                <div className="w-8 h-8 min-[320px]:max-sm:w-5 min-[320px]:max-sm:h-5 flex-shrink-0">
                  <svg
                    viewBox="0 0 47 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.69014 45.5C3.40035 45.5 2.29661 45.0366 1.3789 44.1097C0.461197 43.1829 0.00156338 42.0674 0 40.7632V14.7105C0 13.4079 0.459634 12.2932 1.3789 11.3663C2.29817 10.4395 3.40192 9.97526 4.69014 9.97368H14.0704V5.23684C14.0704 3.93421 14.5301 2.81947 15.4493 1.89263C16.3686 0.96579 17.4723 0.501579 18.7606 0.5H28.1408C29.4306 0.5 30.5352 0.964211 31.4544 1.89263C32.3737 2.82105 32.8326 3.93579 32.831 5.23684V9.97368H42.2113C43.5011 9.97368 44.6056 10.4379 45.5249 11.3663C46.4441 12.2947 46.903 13.4095 46.9014 14.7105V40.7632C46.9014 42.0658 46.4426 43.1813 45.5249 44.1097C44.6071 45.0382 43.5026 45.5016 42.2113 45.5H4.69014ZM4.69014 40.7632H42.2113V14.7105H4.69014V40.7632ZM18.7606 9.97368H28.1408V5.23684H18.7606V9.97368Z"
                      fill="#225677"
                    />
                  </svg>
                </div>
                <div>
                  <strong className="min-[320px]:max-sm:text-sm">
                    Professional Working Attitude
                  </strong>
                  <p className="text-justify min-[320px]:max-md:hidden">
                    Meliputi disiplin, intensi belajar, sopan santun, tingkat
                    energi, fokus, dan komitmen.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex justify-end items-center bg-right bg-[length:100%_100%] bg-no-repeat min-[320px]:max-sm:p-3 p-8 ml-8 z-0"
              style={{
                backgroundImage: `url('${"/officer-development/office_development_highlight2.png"}')`,
              }}
            >
              <div className="flex flex-row justify-end items-center min-[320px]:max-sm:space-x-4 space-x-8 min-[320px]:max-md:space-x-8 mr-16 min-[320px]:max-md:mr-8">
                <strong className="min-[320px]:max-sm:text-xl text-4xl">
                  02
                </strong>
                <div className="h-[50px] border border-neutral-500"></div>
                <div className="w-8 h-8 min-[320px]:max-sm:w-5 min-[320px]:max-sm:h-5 flex-shrink-0">
                  <svg
                    viewBox="0 0 36 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 5C16.8065 5 15.6619 5.47411 14.818 6.31802C13.9741 7.16193 13.5 8.30653 13.5 9.5H22.5C22.5 8.30653 22.0259 7.16193 21.182 6.31802C20.3381 5.47411 19.1935 5 18 5ZM12.0465 2.75C13.6328 1.3505 15.7185 0.5 18 0.5C20.2815 0.5 22.365 1.3505 23.9535 2.75H31.5C32.6935 2.75 33.8381 3.22411 34.682 4.06802C35.5259 4.91193 36 6.05653 36 7.25V41C36 42.1935 35.5259 43.3381 34.682 44.182C33.8381 45.0259 32.6935 45.5 31.5 45.5H4.5C3.30653 45.5 2.16193 45.0259 1.31802 44.182C0.474106 43.3381 0 42.1935 0 41V7.25C0 6.05653 0.474106 4.91193 1.31802 4.06802C2.16193 3.22411 3.30653 2.75 4.5 2.75H12.0465ZM9.2835 7.25H4.5V41H31.5V7.25H26.7165C26.9025 7.9715 26.997 8.7215 27 9.5V11.75C27 12.3467 26.7629 12.919 26.341 13.341C25.919 13.7629 25.3467 14 24.75 14H11.25C10.6533 14 10.081 13.7629 9.65901 13.341C9.23705 12.919 9 12.3467 9 11.75V9.5C9.003 8.7215 9.0975 7.9715 9.2835 7.25ZM9 20.75C9 20.1533 9.23705 19.581 9.65901 19.159C10.081 18.7371 10.6533 18.5 11.25 18.5H24.75C25.3467 18.5 25.919 18.7371 26.341 19.159C26.7629 19.581 27 20.1533 27 20.75C27 21.3467 26.7629 21.919 26.341 22.341C25.919 22.7629 25.3467 23 24.75 23H11.25C10.6533 23 10.081 22.7629 9.65901 22.341C9.23705 21.919 9 21.3467 9 20.75ZM9 29.75C9 29.1533 9.23705 28.581 9.65901 28.159C10.081 27.7371 10.6533 27.5 11.25 27.5H18C18.5967 27.5 19.169 27.7371 19.591 28.159C20.0129 28.581 20.25 29.1533 20.25 29.75C20.25 30.3467 20.0129 30.919 19.591 31.341C19.169 31.7629 18.5967 32 18 32H11.25C10.6533 32 10.081 31.7629 9.65901 31.341C9.23705 30.919 9 30.3467 9 29.75Z"
                      fill="#225677"
                    />
                  </svg>
                </div>
                <div>
                  <strong className="min-[320px]:max-sm:text-sm">
                    Pantang Menyerah terhadap Hasil
                  </strong>
                  <p className="text-justify min-[320px]:max-md:hidden">
                    Meliputi kualitas hasil penugasan, nilai kinerja, nilai uji
                    kompetensi.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex justify-start items-center bg-left bg-[length:100%_100%] bg-no-repeat min-[320px]:max-sm:p-3 p-8 z-0"
              style={{
                backgroundImage: `url('${"/officer-development/office_development_highlight.png"}')`,
              }}
            >
              <div className="flex flex-row justify-start items-center min-[320px]:max-sm:space-x-4 space-x-8 min-[320px]:max-md:space-x-8 ml-16 min-[320px]:max-md:ml-8">
                <strong className="min-[320px]:max-sm:text-xl text-4xl">
                  03
                </strong>
                <div className="h-[50px] border border-neutral-500"></div>
                <div className="w-8 h-8 min-[320px]:max-sm:w-5 min-[320px]:max-sm:h-5 flex-shrink-0">
                  <svg
                    viewBox="0 0 34 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9062 8.85938C24.9062 8.66172 24.7445 8.5 24.5469 8.5H7.29687C7.09922 8.5 6.9375 8.66172 6.9375 8.85938V11.0156C6.9375 11.2133 7.09922 11.375 7.29687 11.375H24.5469C24.7445 11.375 24.9062 11.2133 24.9062 11.0156V8.85938ZM24.5469 14.9688H7.29687C7.09922 14.9688 6.9375 15.1305 6.9375 15.3281V17.4844C6.9375 17.682 7.09922 17.8438 7.29687 17.8438H24.5469C24.7445 17.8438 24.9062 17.682 24.9062 17.4844V15.3281C24.9062 15.1305 24.7445 14.9688 24.5469 14.9688ZM15.5625 21.4375H7.29687C7.09922 21.4375 6.9375 21.5992 6.9375 21.7969V23.9531C6.9375 24.1508 7.09922 24.3125 7.29687 24.3125H15.5625C15.7602 24.3125 15.9219 24.1508 15.9219 23.9531V21.7969C15.9219 21.5992 15.7602 21.4375 15.5625 21.4375ZM13.4062 35.2734H3.34375V3.64844H28.5V19.1016C28.5 19.2992 28.6617 19.4609 28.8594 19.4609H31.375C31.5727 19.4609 31.7344 19.2992 31.7344 19.1016V1.85156C31.7344 1.05645 31.092 0.414062 30.2969 0.414062H1.54687C0.751758 0.414062 0.109375 1.05645 0.109375 1.85156V37.0703C0.109375 37.8654 0.751758 38.5078 1.54687 38.5078H13.4062C13.6039 38.5078 13.7656 38.3461 13.7656 38.1484V35.6328C13.7656 35.4352 13.6039 35.2734 13.4062 35.2734ZM29.4344 31.9312C30.7371 30.7498 31.5547 29.0428 31.5547 27.1426C31.5547 23.5713 28.6572 20.6738 25.0859 20.6738C21.5146 20.6738 18.6172 23.5713 18.6172 27.1426C18.6172 29.0428 19.4348 30.7498 20.7375 31.9312C18.177 33.3912 16.416 36.0955 16.2812 39.2131C16.2723 39.4152 16.4385 39.5859 16.6406 39.5859H18.8014C18.99 39.5859 19.1473 39.4377 19.1607 39.2445C19.3359 36.1359 21.9279 33.6562 25.0859 33.6562C28.2439 33.6562 30.8359 36.1359 31.0111 39.2445C31.0201 39.4332 31.1773 39.5859 31.3705 39.5859H33.5312C33.7379 39.5859 33.8996 39.4152 33.8906 39.2131C33.7603 36.091 31.9949 33.3912 29.4344 31.9312ZM25.0859 23.5488C27.0715 23.5488 28.6797 25.157 28.6797 27.1426C28.6797 29.1281 27.0715 30.7363 25.0859 30.7363C23.1004 30.7363 21.4922 29.1281 21.4922 27.1426C21.4922 25.157 23.1004 23.5488 25.0859 23.5488Z"
                      fill="#225677"
                    />
                  </svg>
                </div>
                <div>
                  <strong className="min-[320px]:max-sm:text-sm">
                    Penguasaan Kompetensi Teknis & Non Teknis
                  </strong>
                  <p className="text-justify min-[320px]:max-md:hidden">
                    Meliputi standar kompetensi yang M-Knows terapkan, dimana
                    gap kompetensi akan diidentifikasi dan ditentukan solusi
                    perbaikannya.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="min-[320px]:max-sm:w-full w-[50%] mt-8 text-justify">
            Selama melakukan magang kerja, mahasiswa akan di monitoring dan
            evaluasi progress kerjanya oleh Kampus Gratis. Laporan yang dibuat
            akan di berikan akses kepada mahasiswa dan pihak perusahaan, sesuai
            kebutuhan dan kepentingannya.
          </p>
        </section>
      </main>
    </>
  );
};

export default OfficerDevPage;
