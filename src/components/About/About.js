import React from "react";
import { getComponentTexts } from "@/utilities/CommonFunction";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
function About() {
  const content = getComponentTexts("aboutSection");
  const hopeContent = getComponentTexts("hopeAndaspiration");
  const chooseUsContent = getComponentTexts("chooseUs");
  const founderContent = getComponentTexts("founderMsg");

  return (
    <div className="md:pt-10 ">
      <div className="pl-4 md:pl-[120px]">
        <h2 className="text-amber-400 md:text-3xl text-xl font-bold">About</h2>
      </div>
      <Link href="/">
        <IoIosArrowRoundBack className="h-15 w-15 pl-4 pt-5 md:hidden animate-pulse" />
      </Link>
      <div
        className="grid md:grid-cols-3 md:px-[120px] px-4 md:py-10 py-2 md:gap-10 gap-5 "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {content.map((item, index) => (
          <div key={index} className="border rounded px-5 py-5">
            <img
              className="h-10 w-10  md:h-12 md:w-12 md:rounded-full rounded"
              src={item.image}
              alt="loading..."
            ></img>
            <h2 className=" md:text-lg  font-semibold md:py-5 pt-2">{item.heading}</h2>
            <p className="">{item.para}</p>
          </div>
        ))}
      </div>
      {/* hope & aspiration section */}
      <section className="md:px-[120px] md:py-10 px-4">
        {hopeContent.map((item, index) => (
          <div key={index} className="md:px-10 md:py-5  py-5">
            <div className="flex gap-2 text-xl md:text-3xl font-bold ">
              <h2 className="text-amber-400 ">{item.heading}</h2>
              <span>{item.title}</span>
            </div>
            <p className="md:pt-5 pt-2">{item.para}</p>
          </div>
        ))}
      </section>
      {/* why choose us section start */}
      <div className="md:px-[120px] md:py-10 px-4">
        <div className=" flex gap-2 font-bold">
          <h2 className="text-amber-400 md:text-3xl text-xl">Why</h2>
          <span className="md:text-3xl text-xl">Choose Us ?</span>
        </div>
        <div
          className="grid md:grid-cols-2 py-5 md:gap-8 gap-5 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {chooseUsContent.map((item, index) => (
            <div key={index} className="border rounded px-4 py-5">
              <img
                className="h-10 w-10 md:h-12 md:w-12 md:rounded-full rounded"
                src={item.image}
              ></img>
              <h2 className="text-xl font-semibold pt-2 md:py-5">{item.heading}</h2>
              <p className="">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Founder messages started */}
      <div className="md:px-[120px] px-4">
        <div className="">
          {founderContent.map((item, index) => (
            <div key={index} className="md:flex flex-col md:gap-20 ">
              <div className="flex justify-center items-center">
                <img
                  className="rounded-full md:h-100 md:w-100 h-60 w-60"
                  src={item.image}
                />
              </div>
              <div className="py-5">
                <h4 className="md:text-2xl text-xl font-semibold">{item.heading}</h4>
                <p className=" md:pt-10 pt-3 text-lg">{item.para}</p>
                <p className="md:py-5 py-5 text-amber-400 md:text-xl text-lg font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
