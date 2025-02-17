import React from "react";

function JourneyOfLeading() {
  return (
    <div className="journeyOfLeadingBG">
      <div className="max-w-[1440px] w-full h-full mx-auto  ">
        <div className="max-w-[1200px] gap-8 h-[750px] mx-auto flex flex-col items-start justify-center">
          <div className="">
            <p class="w-[948.84px] text-white font-[RFDewiExtended] text-[45px] leading-[53px] font-[700] capitalize">
              Paul Mann’s Journey of Leading <br /> Water Conservation Efforts
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col p-6 bg-[#073B63] text-white rounded-2xl shadow-lg w-[276px] h-[234px] max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon1.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-lg font-bold font-[RFDewiExtended]">
                Leading Change
              </h4>

              <p className="text-[14px] font-[300] font-[Roboto] leading-[18px] ">
                Provides water conservation <br /> education and solutions <br /> through
                Renova Academy and <br /> Water Champions
              </p>
            </div>
            <div className="flex flex-col   p-6 bg-[#FFF] text-black rounded-2xl shadow-lg w-[276px] h-[234px] max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon2.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-lg font-bold font-[RFDewiExtended]">
                Inc. 5000®
              </h4>

              <p className="text-[14px] font-[300] font-[Roboto] leading-[18px] ">
                Paul Mann’s entrepreneurial <br />  vision earned him the honor
                of <br /> making the prestigious   Inc. <br /> 5000® List
              </p>
            </div>
            <div className="flex flex-col p-6 bg-[#073B63] text-white rounded-2xl shadow-lg w-[276px] h-[234px]  max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon4.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-lg font-bold font-[RFDewiExtended]">
                Leadership for the Future
              </h4>

              <p className="text-[14px] font-[300] font-[Roboto] leading-[18px] ">
                Educated industry <br />  professionals on water <br />
                conservation and sustainability
              </p>
            </div>
            <div className="flex flex-col   p-6 bg-[#FFF] text-black rounded-2xl shadow-lg w-[276px] h-[234px] max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon3.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-lg font-bold font-[RFDewiExtended]">
                Earth 2050 - California
              </h4>

              <p className="text-[14px] font-[300]leading-6 font-[Roboto] leading-[18px]">
                Keynote speaker at <br /> Environmental Festival in Mill <br /> Valley
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-12 py-5 bg-[#073B63] text-white rounded-2xl shadow-lg gap-6 w-full  ">
            <div className="flex flex-col">
              <h4 className="mb-2 text-[45px] font-[700] font-[RFDewiExtended]">
                Vision
              </h4>
              <p className="text-sm leading-6 w-[490px] font-[Roboto]">
                To drive a global shift in water usage, making water
                conservation <br /> and reuse a priority and empowering
                individuals, businesses, and <br /> communities to act before
                it's too late.
              </p>
            </div>

            <div className="w-[432px] h-[184px]">
              <img
                src="/desktop-assets/journey/org-journey.webp"
                alt="Sample Image"
                class="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center">
          
              <div className="px-6 py-3 tracking-[0.9px] text-[12px] font-[500] font-[Roboto] border border-white text-white uppercase   ">
                Purpose
              </div>
            
            {/* <a href="/podcast" rel="noopener noreferrer">
              <button className="px-6 py-3 tracking-[0.9px] font-[RFDewiExtended] border border-white text-white uppercase   hover:bg-white hover:text-[#073B63] transition">
                Purpose
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyOfLeading;
