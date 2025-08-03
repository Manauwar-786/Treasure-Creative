import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className="flex flex-col justify-baseline py-4 md:px-[120px] px-4 bg-gray-600">
      <div>
        <div className="flex gap-2">
          <h2 className="md:text-3xl text-xl text-amber-400 font-bold">
            Treasure
          </h2>
          <span className="md:text-3xl text-xl font-bold">Creatives</span>
        </div>
        <p className="font-mono md:py-5 py-3">
          Treasure Creatives works to transform conceptual ideas into meaningful
          results. We serve brands to help them expand their business digitally
          and build customer loyalty.
        </p>
      </div>

      <div className="flex md:gap-6 gap-2 py-5">
        <a href="https://treasurecreatives/">
          <FaInstagramSquare className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400 " />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebook className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
        </a>
        <a href="https://www.linkedin.com/company/79476477/admin/dashboard/">
          <FaLinkedin className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
        </a>

        <a href="https://github.com/Manauwar-786">
          <FaGithub className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
        </a>
        <a href="https://www.youtube.com/@TreasureCreatives">
          <IoLogoYoutube className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
        </a>
        <a href="https://TreasureCrtvs">
          <FaSquareXTwitter className="md:h-10 md:w-10 h-7 w-7  hover:bg-amber-400" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
