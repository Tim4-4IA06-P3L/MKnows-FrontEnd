"use client";
import React, { useState, useRef } from 'react';
import Image from "next/image";

const LMSVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsPlayed(true);
  };

  const handleEnd = () => {
    setIsPlayed(false);
  };

  return (
    <section className="relative w-full h-[500px] min-[320px]:max-md:mt-32 mt-20">
      {!isPlayed &&
        <div className="absolute top-0 left-0 w-full h-full cursor-pointer z-[30]" onClick={() => handlePlay()} title="Play Video">
          <Image
            src="/lms/LMSVideoThumbnail.png"
            alt="Learning Management System M-Knows Consulting"
            width={1000}
            height={800}
            priority
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-16 w-16 z-[35] opacity-[80%]">
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z"></path> </g></svg>
          </div>
          <div className="bg-neutral-800/[0.5] absolute top-0 left-0 w-full h-full"></div>
        </div>
      }

      <div className="w-full h-full flex justify-center items-center">
        <video
          ref={(e) => { videoRef.current = e }}
          onEnded={() => handleEnd()}
          onLoad={() => handlePlay()}
          width="100%"
          height="100%"
          controls
          controlsList="nodownload"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        >
          <source src="https://e3aqifnbdssfg3bh.public.blob.vercel-storage.com/LMS.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default LMSVideo;