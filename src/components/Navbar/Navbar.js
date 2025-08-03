"use client";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Aos from "aos";
function Navbar() {
  useEffect(() => {
    Aos.init();
    return () => {};
  }, []);

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className="flex w-full h-20 px-4 md:px-32 justify-between items-center z-50 relative"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="flex gap-2">
        <h1 className="md:text-4xl text-2xl  font-semibold  text-amber-400">
          Treasure
        </h1>
        <span className="md:text-4xl text-2xl  font-semibold text-white top-0 left">
          Creative
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-semibold text-white text-xl ">
        <li className="hover:text-amber-400 hover:opacity-100">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-amber-400 hover:opacity-100">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-amber-400 hover:opacity-100">
          <Link href="/service">Services</Link>
        </li>
        <li className="hover:text-amber-400 hover:opacity-100">
          <Link href="/blog">Blogs</Link>
        </li>
        <li className="hover:text-amber-400 hover:opacity-100">
          <Link href="/carrer">Carrer</Link>
        </li>
        <li className="hover:text-amber-400 hover:opacity-100">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden" onClick={toggleNav}>
        {navOpen ? (
          <AiOutlineClose className="" size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 font-medium text-white text-xl md:hidden z-50 ">
          <li className="hover:text-amber-400 hover:opacity-100">
            <Link href="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li className="hover:text-amber-400 hover:opacity-100">
            <Link href="/about" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li className="hover:text-amber-400 hover:opacity-100">
            <Link href="/service" onClick={toggleNav}>
              Services
            </Link>
          </li>
          <li className="hover:text-amber-400 hover:opacity-100">
            <Link href="/blog" onClick={toggleNav}>
              Blogs
            </Link>
          </li>
          <li className="hover:text-amber-400 hover:opacity-100">
            <Link href="/carrer" onClick={toggleNav}>
              Carrer
            </Link>
          </li>
          <li className="hover:text-amber-400 hover:opacity-100">
            <Link href="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
