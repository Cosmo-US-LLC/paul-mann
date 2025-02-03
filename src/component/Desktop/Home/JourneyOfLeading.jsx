import React from "react";

function JourneyOfLeading() {
  return (
    <div className="journeyOfLeadingBG">
      <div className="max-w-[1440px] w-full h-full mx-auto  ">
        <div className="max-w-[1200px] gap-8 h-[750px] mx-auto flex flex-col items-start justify-center">
          <div className="">
            <p class="w-[948.84px] text-white text-[45px] leading-[53px] font-[700] capitalize">
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

              <h4 className="mb-2 text-lg font-bold">Leading Change</h4>

              <p className="text-[14px] font-[300] leading-6 ">
                Provides water conservation education and solutions through
                Renova Academy and Water Champions
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

              <h4 className="mb-2 text-lg font-bold">Inc. 5000®</h4>

              <p className="text-[14px] font-[300] leading-6 ">
                Paul Mann’s entrepreneurial <br/> vision earned him the honor of
                making the prestigious <br/> Inc. 5000® List
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

              <h4 className="mb-2 text-lg font-bold">Leadership for the Future</h4>

              <p className="text-[14px] font-[300] leading-6 ">
              Educated industry <br/> professionals on water <br/> conservation <br/> and sustainability
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

              <h4 className="mb-2 text-lg font-bold">Earth 2050 - California</h4>

              <p className="text-[14px] font-[300]leading-6 ">
              Keynote speaker at <br/> Environmental Festival in Mill Valley
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-12 py-5 bg-[#073B63] text-white rounded-2xl shadow-lg gap-6 w-full  ">
            <div className="flex flex-col">
              <h4 className="mb-2 text-[45px] font-[700]">Vision</h4>
              <p className="text-sm leading-6 w-[490px]">
                To drive a global shift in water usage, making water
                conservation <br/> and reuse a priority and empowering individuals,
                businesses, and <br/> communities to act before it's too late.
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
            <button class="inline-flex items-center justify-center gap-[10px] px-[25px] py-[12px] border border-white bg-transparent shadow-[inset_0px_0px_0px_1px_#FFF] backdrop-blur-[0.5px] uppercase text-white">
              purpose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyOfLeading;
