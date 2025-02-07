import React from "react";
import { FaLinkedin } from "react-icons/fa";
// AdvocacyOfPaulMann
const AdvocacyOfPaulMann = () => {
  return (
    <div className="AdvocacyOfPaulMannBG">
      <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px]  h-[750px] gap-8 mx-auto flex flex-col justify-center items-center text-white">
          <div className="relative w-full max-w-[908px] h-[492px] overflow-hidden shadow-lg rounded-2xl ">
            <img
              className="object-cover rounded-lg w-full max-w-[908px] h-[492px]"
              src="/desktop-assets/AdvocacyOfPaulMann/AdvocacyOfPaulOwner.webp"
              alt="Advocated for Water Conservation"
            />

            {/* Top Caption */}
            <div className="absolute top-0 left-0 right-0 flex items-center px-4 py-2 text-white bg-gray-700 bg-opacity-75">
              <img src="/desktop-assets/AdvocacyOfPaulMann/cbs-header-logo.webp" alt="CBS Logo" className="mr-4 h-14" />
              <p className="text-[19px] font-[700] w-[381px] h-[58px] font-[RFDewiExtended]">
                Advocated for Water Conservation on CBS Evening News
              </p>
            </div>

            {/* Bottom Overlay */}
            {/* <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white bg-blue-800">
                  <h2 className="text-lg font-bold">PAUL MANN</h2>
                  <p className="text-sm font-medium">Owner, Water Champions</p>
                </div> */}
          </div>

          <div className="flex justify-center w-full gap-10">
            <div className="flex justify-center items-center w-full max-w-[435px] p-6 space-x-4 bg-[#D9D9D9] shadow-lg rounded-lg  ">
              <img
                src="/desktop-assets/AdvocacyOfPaulMann/linkedin-logo.webp"
                alt="CBS Logo"
                className="h-12 pr-2"
              />
              <div className="flex flex-row pr-12">
                <span className="text-[45px] font-[600] leading-[52px] text-[#073B63] font-[RFDewiExtended]">
                  1,000+
                </span>
              </div>
              <div className="flex flex-row pl-3 border-l-2 border-gray-800">
                <p className="text-[20px] font-[800] text-[#073B63] font-[RFDewiExtended]">
                  LinkedIn <br /> Followers
                </p>
              </div>
            </div>

            <div className="flex items-center w-full max-w-[435px] justify-between gap-4 p-6 space-x-4 bg-[#D9D9D9] shadow-lg rounded-lg">
              <p className="text-[18px] font-[700] text-[#073B63] font-[RFDewiExtended]">
                Featured In:
              </p>
              <div className="flex gap-8">
                <img
                  src="/desktop-assets/AdvocacyOfPaulMann/cbs-logo.webp"
                  alt="CBS Logo"
                  className="h-16"
                />
                <img
                  src="/desktop-assets/AdvocacyOfPaulMann/smart-business-logo.webp"
                  alt="Smart Business Logo"
                  className="h-16"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
          <a href="/glimpse" rel="noopener noreferrer">
            <button className="px-6 py-3 border font-[RFDewiExtended] tracking-[0.9px] border-white text-white uppercase   hover:bg-white hover:text-[#073B63] transition">
              The Press
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvocacyOfPaulMann;
