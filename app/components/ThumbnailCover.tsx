import React, { FC } from 'react';

const ThumbnailCover: FC<{
  bgSrc: string,
  title: string,
  subtitle?: string
}> = ({ bgSrc, title, subtitle }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat 
      flex flex-col justify-center items-start top-[15%] w-full h-[200px]
      sm:h-[300px] md:h-[400px]"
      style={{ backgroundImage: `url('${bgSrc}')` }}
    >
      <div className="bg-neutral-800/[0.5] w-full h-full absolute top-0 left-0"></div>
      <div className="p-5 absolute ">
        <p className="font-bold text-white text-lg sm:text-3xl md:text-4xl lg:text-6xl">{title}</p>
        <p className="sm:text-2xl md:text-3xl lg:text-5xl text-sky-300">{subtitle}</p>
      </div>
    </div>
  )
}

export default ThumbnailCover;