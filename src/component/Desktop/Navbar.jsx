import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 w-[100%] z-[99]">
      <nav className="bg-white h-[48px] flex-shrink-0 shadow-sm">
        <div className="max-w-[1440px] w-full h-full mx-auto ">
          <div className="max-w-[1200px]   w-full h-full mx-auto flex items-center justify-between">
            <div className="flex space-x-8 uppercase md:flex">
              <Link to="/about">
                <p className="flex flex-col justify-center text-center text-black font-[RFDewiExtended] font-[800] text-[16.222px] leading-[98.144px] uppercase     hover:text-gray-900">
                  About
                </p>
              </Link>

              {/* <Link to="/podcast">
                <p className="flex flex-col justify-center text-center text-black font-[RFDewiExtended] font-[800] text-[16.222px] leading-[98.144px] uppercase    hover:text-gray-900">
                  Podcast
                </p>
              </Link> */}
              {/* <a
                href="/glimpse"
                className="flex flex-col justify-center text-center text-black font-[RFDewiExtended] font-[800] text-[16.222px] leading-[98.144px] uppercase     hover:text-gray-900"
              >
                Press
              </a> */}
            </div>
            <a href="/" className="relative flex flex-col items-center">
              <div
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => location.reload()}
              >
                <img
                  src="/desktop-assets/navbar/faul-mann-logo.webp"
                  alt="Faul-mann-logo"
                  className="cursor-pointer w-[212px] h-[21px]"
                />
              </div>
            </a>
            <div className="flex space-x-8 md:flex">
              <a
                href="https://www.renovaacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleScroll(e, "Coaching", 90)}
                className="flex flex-col justify-center text-center text-black font-[RFDewiExtended] font-[800] text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
              >
                Coaching
              </a>
              <a
                href="/contact"
                onClick={(e) => handleScroll(e, "Connect", 90)}
                className="flex flex-col justify-center text-center text-black font-[RFDewiExtended] font-[800] text-[16.222px] leading-[98.144px] capitalize  flex-shrink-0 hover:text-gray-900"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
