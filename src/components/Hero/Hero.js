import { getComponentTexts } from "@/utilities/CommonFunction";
import React from "react";

function Hero() {
  const content = getComponentTexts("heroSection");

  return (
    <div className=" md:pt-5 px-4 md:px-[120px]">
      {content.map((item, index) => (
        <div key={index} className=" w-full h-auto">
          <h2 className="text-amber-400 md:text-3xl text-xl  text-shadow-2xs text-center font-bold">
            {item.heading}
          </h2>
          <div className="md:flex  gap-[120px] md:pt-10 md:pb-10">
            <p className="flex items-center py-2 md:w-[50%] md:text-lg text-justify ">
              {item.para}
            </p>
            <div className="relative inline-block rounded transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <img
                src={item.image}
                alt="hero img"
                className="md:h-[350px] md:w-[400px] object-cover rounded drop-shadow-xl drop-shadow-black/60 "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 rounded" />
            </div>
          </div>
          <div className="md:pt-3 md:pb-3 ">
            <button className="md:px-2 px-1 py-1 hover:opacity-70 rounded text-white bg-amber-400 transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
