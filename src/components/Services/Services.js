import { getComponentTexts } from "@/utilities/CommonFunction";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
function Services() {
  const content = getComponentTexts("ourServices");
  const everythingContent = getComponentTexts("everythingService");
  return (
    <div className="md:py-10 md:px-[120px] px-4">
      <div className="flex gap-1 md:gap-3 py-4">
        <h2 className="text-amber-400 md:text-3xl text-xl font-bold">Our</h2>
        <span className="md:text-3xl text-lg font-bold">Services</span>
      </div>
      <Link href="/">
        <IoIosArrowRoundBack className="h-15 w-15 pt-5 md:hidden animate-pulse" />
      </Link>

      <div
        className="grid md:grid-cols-3 gap-10 md:pt-5 pt-2 "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {content.map((item, index) => (
          <div
            key={index}
            className=" md:px-2 px-1 py-1 md:py-2 border rounded-lg  transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <h2 className="text-white text-3xl font-bold text-center md:py-10 py-5">
              {item.heading}
            </h2>
            <p className="text-white text-center md:pb-5 pb-3 px-1">
              {item.para}
            </p>

            <Link href={item.link}>
              <button className=" md:px-2 bg-amber-400 rounded md:py-1 px-1 py-1  hover:opacity-70 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ">
                {item.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
      {/* Everything we do section started */}
      <div className="md:pt-10 pt-5">
        <div className="flex gap-2 pb-10">
          <h2 className="text-3xl text-amber-400 font-bold">Everything</h2>
          <span className="text-3xl font-bold">We Do</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {everythingContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center border pt-5 pb-5 rounded"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                className="rounded-full md:h-15 md:w-15 h-15 w-15 bg-amber-400 transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
                src={item.image}
                alt="Image"
              />
              <p className="text-xl pt-5">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
