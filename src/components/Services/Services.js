import { getComponentTexts } from "@/utilities/CommonFunction";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
function Services() {
  const content = getComponentTexts("ourServices");
  const everythingContent = getComponentTexts("everythingService");
  return (
    <div className="md:px-[120px] px-4">
      <div className="flex gap-1 md:gap-3 py-4">
        <h2 className="text-amber-400 md:text-3xl text-xl font-bold">Our</h2>
        <span className="md:text-3xl text-lg font-bold">Services</span>
      </div>
      <Link href="/">
        <IoIosArrowRoundBack className="h-10 w-10 md:hidden animate-pulse" />
      </Link>

      <div
        className=" grid md:grid-cols-3 gap-5 md:pt-5 pt-2 "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {content.map((item, index) => (
          <div
            key={index}
            className=" object-cover drop-shadow-xl drop-shadow-black/60 bg-black"
          >
            <img className="h-50 w-full opacity-65" src={item.image}></img>
            <h2 className="text-white md:text-2xl text-xl font-bold text-center md:py-2 py-1">
              {item.heading}
            </h2>
            <p className="text-white text-center px-1">
              {item.para}
            </p>

            <Link href={item.link}>
            <div className="pl-2 py-2 md:pl-4 md:py-4 flex justify-center">
               <button className=" md:px-2 px-1 bg-amber-400 rounded md:py-1  py-1  hover:opacity-70 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ">
                {item.button}
              </button>
            </div>
             
            </Link>
          </div>
        ))}
      </div>
      {/* Everything we do section started */}
      <div className="md:pt-10 pt-5">
        <div className="flex gap-2 md:py-5">
          <h2 className="md:text-3xl text-xl text-amber-400 font-bold flex items-center">Everything</h2>
          <span className="md:text-3xl text-xl font-bold">We Do</span>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {everythingContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center pb-5 object-cover drop-shadow-xl drop-shadow-black/60 bg-black"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img className="md:w-full md:h-full h-50 w-full  pb-3 opacity-65" src={item.fullimage}></img>
              <p className=" flex items-center">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
