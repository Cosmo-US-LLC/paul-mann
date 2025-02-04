import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="bg-[#F3F3F3] overflow-hidden relative w-full">
      <div className="max-w-[1440px]   mx-auto ">
        <div className="max-w-[1200px] h-[354px] mx-auto ">
          <div className="relative h-[90%] flex flex-row w-full   py-12 ">
            <div className="w-[13%] flex  flex-col gap-3 justify-start items-start relative z-10 uppercase">
              <Link to="/about">
                <p
                  className="text-[11px] font-[700] leading-[13px]"
                >
                  About
                </p>
              </Link>
              <a
                href="#Podcast"
                className="text-[11px] font-[700] leading-[13px]"
              >
                Podcast
              </a>
              <a
                href="#Press"
                className="text-[11px] font-[700] leading-[13px]"
              >
                Press
              </a>
              <a
                href="#Coaching"
                className="text-[11px] font-[700] leading-[13px]"
                onClick={(e) => handleScroll(e, "FaqD", 90)}
              >
                Coaching
              </a>
              <a
                href="#Connect"
                className="text-[11px] font-[700] leading-[13px]"
                onClick={(e) => handleScroll(e, "FaqD", 90)}
              >
                Connect
              </a>
            </div>
            <div className="w-[38%] gap-6 flex flex-col relative z-10">
              <div
                className="relative z-10 flex w-full "
                onClick={handleLogoClick}
              >
                <img
                  src="/desktop-assets/footer/footer-logo.webp"
                  alt="fual-mann-logo"
                  className="cursor-pointer w-[246px] h-[97px]"
                />
              </div>
              <p className="text-[13px] font-[300] leading-[23px] capitalize w-[400px]">
                Paul is a seasoned industry expert specializing in the design
                and implementation of innovative water reuse and efficiency
                solutions that make water go farther.
              </p>
            </div>
            <div className="w-[50%] flex flex-col gap-6 pl-16 relative z-10">
              <div className="">
                <h2 className="text-[14px] font-[600] text-black leading-[24px] uppercase font-roboto">
                  SIGN UP FOR OUR NEWSLETTER
                </h2>
                <p className="text-black font-light text-[14px] leading-[23.24px] font-roboto">
                  Stay updated on the latest news and exclusive promotions!
                </p>
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-1/3 p-3 bg-[#073B63] text-[#FFFFFF] "
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-1/3 p-3 border-2  bg-[#073B63] text-[#FFFFFF]"
                />
                <button className="px-6 py-3 text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-black hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-black">
                  SUBSCRIBE
                </button>
              </div>
              <div className="flex gap-6 ">
                <p className="font-bold">FOLLOW PAUL:</p>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaPinterest size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-[10%]">
            <div className="text-[10px] font-[500] test-[#000] flex leading-[22px] gap-6 uppercase">
              <a href="#Paul-Mann">© Paul Mann</a>
              <a href="#Privacy-Policy">Privacy Policy</a>
              <a href="#Terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
