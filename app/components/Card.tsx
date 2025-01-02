import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface card {
  title: string;
  imgSrc: string;
  link: string;
}

const Card: FC<card> = ({ title, imgSrc, link }) => {
  return (
    <Link href={link}>
      <div className="relative cursor-pointer group rounded-3xl overflow-hidden shadow-lg w-full h-60">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="transition-transform duration-200 transform group-hover:scale-105"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
