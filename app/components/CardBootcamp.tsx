import React, { FC } from "react";
import Logo from "./Logo";

interface cardBootcamp {
  thumbnail: string;
  title: string;
  level: string;
  description: string;
  bootcampID: string;
}

const CardBootcamp: FC<cardBootcamp> = ({
  thumbnail,
  title,
  level,
  description,
  bootcampID,
}) => {
  return (
    <div
      className="relative basis-[410px] bg-center-top bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url('${thumbnail}')`,
      }}
    >
      <Logo props="absolute top-2 left-2" />
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274.285 410">
          <polygon
            fill="#69BD45"
            points="0,132.766 0,104.286 274.285,145 274.285,151.146"
          />
          <polygon
            fill="#262262"
            points="274.285,410 0,410 0,132.766 274.285,151.146 "
          />
        </svg>
      </div>
      <div className="absolute top-[37%] px-5 w-full h-full">
        <strong className="sm:text-lg text-white">{title}</strong>
        <br />
        <strong className="text-blue-300">{level}</strong>
        <div
          className="w-full max-h-[30%] overflow-y-auto 
          [&::-webkit-scrollbar]:w-1
					[&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-thumb]:bg-clip-content 
					[&::-webkit-scrollbar-thumb]:bg-[#b3ff00]"
        >
          <p className="text-left text-sm text-white pr-2">{description}</p>
        </div>
      </div>
      <a
        className="absolute flex flex-row justify-end space-x-1 items-center 
					right-[20px] bottom-[15px] bg-blue-600 hover:bg-blue-700
					active:ring-1 active:ring-offset-1 active:ring-black
					rounded-lg py-2 px-4 text-white"
        href={`/bootcamp/${title}_${bootcampID}`}
      >
        <p>Detail</p>
        <div className="w-4 h-4">
          <svg
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 13.8337L13.8333 10.5003M13.8333 10.5003L10.5 7.16699M13.8333 10.5003H7.16663M18.8333 10.5003C18.8333 15.1027 15.1023 18.8337 10.5 18.8337C5.89759 18.8337 2.16663 15.1027 2.16663 10.5003C2.16663 5.89795 5.89759 2.16699 10.5 2.16699C15.1023 2.16699 18.8333 5.89795 18.8333 10.5003Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default CardBootcamp;
