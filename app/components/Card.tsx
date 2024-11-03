import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardItem {
  title: string;
  img: string;
  link: string;
}

interface CardProps {
  cardItems?: CardItem[]; // Make cardItems optional
}

const Card: React.FC<CardProps> = ({ cardItems = [] }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 mx-20">
          {cardItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="relative cursor-pointer group rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-full object-cover transition-transform duration-200 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-15 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
