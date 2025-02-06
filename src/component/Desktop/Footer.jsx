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
                <p className="text-[11px] font-[700] leading-[13px]">About</p>
              </Link>

              <Link to="/podcast">
                <p
                  className="text-[11px] font-[Roboto] font-[700] leading-[13px]"
                >
                  Podcast
                </p>
              </Link>
              <a
                href="#Press"
                className="text-[11px] font-[Roboto] font-[700] leading-[13px]"
              >
                Press
              </a>
              <a
                href="https://www.renovaacademy.com/"
                className="text-[11px] font-[Roboto] font-[700] leading-[13px]"
                onClick={(e) => handleScroll(e, "FaqD", 90)}
              >
                Coaching
              </a>
              <a
                href="/contact"
                className="text-[11px] font-[Roboto] font-[700] leading-[13px]"
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
              <p className="text-[13px] font-[Roboto] font-[300] leading-[23px] capitalize w-[400px]">
                Paul is a seasoned industry expert specializing in the design
                and implementation of innovative water reuse and efficiency
                solutions that make water go farther.
              </p>
            </div>
            <div className="w-[50%] flex flex-col gap-6 pl-16 relative z-10">
              <div className="">
                <h2 className="text-[14px] font-[Roboto] font-[600] text-black leading-[24px] uppercase font-roboto">
                  SIGN UP FOR OUR NEWSLETTER
                </h2>
                <p className="text-black font-[Roboto] font-light text-[14px] leading-[23.24px] font-roboto">
                  Stay updated on the latest news and exclusive promotions!
                </p>
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-1/3 p-3 font-[Roboto] bg-[#073B63] text-[#FFFFFF] "
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-1/3 p-3 border-2 font-[Roboto] bg-[#073B63] text-[#FFFFFF]"
                />
                <button className="px-6 py-3 text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-black font-[Roboto] hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-black">
                  SUBSCRIBE
                </button>
              </div>
              <div className="flex items-center gap-10">
              <p className="text-[16px] font-[Roboto] font-[500] leading-[24px] uppercase">
                follow Paul :
              </p>
              <div className="flex gap-8">
              <a href="#" className="text-black hover:text-gray-300">
                <img className="object-cover h-6 "  src={'/desktop-assets/footer/logo6.svg'} alt="" />
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                <img className="object-cover h-6 "  src={'/desktop-assets/footer/logo1.svg'} alt="" />
                </a>
                
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover h-6" src={'/desktop-assets/footer/logo2.svg'} alt="" />
                </a>

                <a href="https://www.linkedin.com/in/pauldmann/" className="hover:text-gray-300">
                <img className="object-cover h-6" src={'/desktop-assets/footer/logo3.svg'} alt="" />
                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover h-6" src={'/desktop-assets/footer/logo4.svg'} alt="" />
                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover h-6" src={'/desktop-assets/footer/logo5.svg'} alt="" />
                </a>
              </div>
            </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-[10%]">
            <div className="text-[10px] font-[500] test-[#000] flex leading-[22px] gap-6 uppercase">
              <a href="#Paul-Mann" className="font-[Roboto]">© Paul Mann</a>
              <a href="#Privacy-Policy" className="font-[Roboto]">Privacy Policy</a>
              <a href="#Terms" className="font-[Roboto]">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
