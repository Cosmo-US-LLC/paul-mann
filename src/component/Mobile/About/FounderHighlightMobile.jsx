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
    <div className="bg-[#073B63] w-full flex flex-col  text-white">
      <img
        src="/mobile-assets/About/founder-bg.webp"
        alt="Founder Team"
        className="w-full h-[232px] object-cover"
      />

      <div className="flex flex-col gap-4 px-8 py-8 ">
        <div className="flex flex-col gap-6">
          <div className="">
            <h2 className="text-[32px] font-semibold font-[RFDewiExtended] uppercase">
              FOUNDER
            </h2>
            <p className="text-[14px] font-[500] font-[Roboto] uppercase mt-2">
              Water Champions and Renova Academy
            </p>
          </div>
          <div className="">
            <h2 className="text-[33px] font-[400] font-[RFDewiExtended] uppercase">
              2.1K+
            </h2>
            <p className="text-[14px] font-[500] font-[Roboto] uppercase mt-1">
              Followers Across Social Media
            </p>
          </div>

          <div className="">
            <h2 className="text-[33px] font-[400] font-[RFDewiExtended] uppercase">
            33K+
            </h2>
            <p className="text-[14px] font-[500] font-[Roboto] uppercase mt-1">
              Impressions Across Media Platforms
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-[14px] font-medium font-[Roboto] uppercase">
            Follow Paul:
          </p>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a> */}
            <a href="https://www.linkedin.com/in/pauldmann/" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@IAmPaulMann" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderHighlightMobile;
