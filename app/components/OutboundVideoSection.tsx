"use client";
import React, { FC, useState, useRef } from 'react';
import Image from "next/image";

interface Videos {
  title: string,
  src: string,
  videoSrc: string,
};

const OutboundVideoSection: FC<{ videos: Videos[] }> = ({ videos }) => {
  const videosRef = useRef<(HTMLVideoElement | null)[]>(Array(5).fill(null));
  const [isPlayed, setIsPlayed] = useState<boolean[]>(Array(5).fill(false));

  const handlePlay = (index: number) => {
    if (videosRef.current[index]) {
      videosRef.current[index].play();
    }
    setIsPlayed(isPlayed.map((_, i) => i == index ? true : isPlayed[i]));
  };

  const handleEnd = (index: number) => {
    setIsPlayed(isPlayed.map((_, i) => i == index ? false : isPlayed[i]));
  };

  return (
    <section className="py-10 px-20">
      <h2 className="text-center text-3xl font-semibold mb-16">
        Video Outbound
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg flex-none"
          >
            {!isPlayed[index] &&
              <div className="absolute top-0 left-0 z-[30] w-full h-full cursor-pointer" onClick={() => handlePlay(index)} title="Play Video">
                <Image
                  src={video.src}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform"
                />
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-8 w-8 z-[35] opacity-[80%]">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z"></path> </g></svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <p className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center">
                    {video.title}
                  </p>
                </div>
              </div>
            }

            <div className="w-full h-full flex justify-center items-center">
              <video
                ref={(e) => { videosRef.current[index] = e }}
                onEnded={() => handleEnd(index)}
                width="100%"
                height="100%"
                controls
                controlsList="nodownload"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              >
                <source src={video.videoSrc} type="video/mp4" />
                Browser tidak mendukung tag video.
              </video>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
};

export default OutboundVideoSection