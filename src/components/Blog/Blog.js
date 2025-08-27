import { getComponentTexts } from "@/utilities/CommonFunction";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function Blog() {
  const content = getComponentTexts("blogSection");
  return (
    <div className="md:py-10 py-8">
      <h2 className="md:text-3xl text-xl font-bold px-4 md:px-[120px] md:pb-10 text-amber-400">
        Blogs
      </h2>
      <Link href="/">
        <IoIosArrowRoundBack className="h-15 w-15 pl-4 md:hidden animate-pulse" />
      </Link>
      <div className="grid md:grid-cols-3 gap-5 px-4 md:px-[120px] ">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 opacity-70"
          >
            <img className="" src={item.image}></img>
            <h3 className="md:text-lg font-semibold text-center pb-5 pt-2">
              {item.heading}
            </h3>
            <p className="md:pl-10 px-5 text-amber-400">{item.title}</p>
            <p className="md:pl-10 px-5 py-2 font-sans"> {item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
