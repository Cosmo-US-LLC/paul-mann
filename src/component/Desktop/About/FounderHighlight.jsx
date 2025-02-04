import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FounderHighlight = () => {
  return (
    <div className="aboutFounderSectionBG">
      <div className="max-w-[1440px] w-full h-full mx-auto ">
        <div className="max-w-[1200px] h-[650px] gap-10 mx-auto flex flex-col justify-center text-white">
          <div className="relative z-10 flex items-end justify-center w-full h-full ">
            <div className="flex w-full gap-8 ">
              <div className="flex flex-col gap-2">
                <h2 className="text-[46px] font-[400] uppercase ">FOUNDER</h2>
                <p className="text-[12px] font-[500] uppercase ">
                  Water Champions and Renova Academy
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[46px] font-[400] uppercase">1.1K+</h2>
                <p className="text-[12px] font-[500] uppercase">
                  Followers Across Social Media
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[46px] font-[400] uppercase ">5K+</h2>
                <p className="text-[12px] font-[500] uppercase ">
                  Impressions Across Media Platforms
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-[500] leading-[24px] uppercase">
                follow Paul :
              </p>
              <div className="flex gap-8">
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
      </div>
    </div>
  );
};

export default FounderHighlight;
