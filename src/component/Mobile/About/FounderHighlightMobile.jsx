import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FounderHighlightMobile = () => {
  return (
    <div className="bg-[#073B63] w-full min-h-screen flex flex-col items-center text-white">
     
      <img
        src="/mobile-assets/About/founder-bg.webp"
        alt="Founder Team"
        className="w-full h-[232px] object-cover"
      />

     
      <div className="flex flex-col items-center gap-4 py-6 px-2 w-full max-w-[400px]">
        <div className="">
          <h2 className="text-[32px] font-semibold font-[RFDewi-Light] uppercase">FOUNDER</h2>
          <p className="text-[12px] font-medium font-[Roboto] uppercase mt-2">
            Water Champions and Renova Academy
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="">
            <h2 className="text-[28px] font-semibold font-[RFDewi-Light] uppercase">1.1K+</h2>
            <p className="text-[12px] font-medium font-[Roboto] uppercase mt-1">
              Followers Across Social Media
            </p>
          </div>

          <div className="">
            <h2 className="text-[28px] font-semibold font-[RFDewi-Light] uppercase">5K+</h2>
            <p className="text-[12px] font-medium font-[Roboto] uppercase mt-1">
              Impressions Across Media Platforms
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[14px] font-medium font-[Roboto] uppercase">Follow Paul:</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderHighlightMobile;
