import React from "react";

function JourneyOfLeadingMob() {
  return (
    <div className="journeyOfLeadingBG">
      <div className="max-w-[1440px] w-[90%] py-[24px] h-full mx-auto  ">
        <div className="max-w-[1200px] gap-8  mx-auto space-y-[30px]">
          <div className="">
            <p class=" text-white text-[24px] leading-[118%] font-[700] capitalize">
              Paul Mann’s Journey of <br /> Leading Water <br /> Conservation Efforts
            </p>
          </div>
          <div className="space-y-[15px]">
            <div className="flex flex-col p-6 bg-[#073B63] text-white rounded-2xl shadow-lg max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon1.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-[18px] font-[800]">Leading Change</h4>

              <p className="text-[16px] font-[400] leading-[140%] ">
                Provides water conservation education and solutions through
                Renova Academy and Water Champions
              </p>
            </div>
            <div className="flex flex-col   p-6 bg-[#FFF] text-black rounded-2xl shadow-lg max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon2.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-[18px] font-[800] text-[#073B63]">Inc. 5000®</h4>

              <p className="text-[16px] font-[400] leading-[140%] text-[#073B63]">
                Paul Mann’s entrepreneurial vision earned him the honor of
                making the prestigious Inc. 5000® List
              </p>
            </div>
            <div className="flex flex-col p-6 bg-[#073B63] text-white rounded-2xl shadow-lg  max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon4.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-[18px] font-[800]">Leadership for the Future</h4>

              <p className="text-[16px] font-[300]  leading-[140%] ">
              Educated industry professionals on water conservation and sustainability
              </p>
            </div>
            <div className="flex flex-col   p-6 bg-[#FFF] text-black rounded-2xl shadow-lg  max-w-full">
              <div className="flex w-[87px] h-[40px] mb-4">
                <img
                  src="/desktop-assets/journey/icon3.webp"
                  alt="Icon"
                  className=""
                />
              </div>

              <h4 className="mb-2 text-[18px] text-[#073B63] font-bold">Earth 2050 - California</h4>

              <p className="text-[16px] font-[300] text-[#073B63] leading-6 ">
              Keynote speaker at Environmental Festival in Mill Valley
              </p>
            </div>
          <div className="px-5 py-5  bg-[#073B63] text-white rounded-2xl shadow-lg gap-6 w-full  ">
            <div className="flex flex-col">
              <h4 className="mb-2 text-[34.45px] font-[700]">Vision</h4>
              <p className="text-[16px] leading-6 ">
                To drive a global shift in water usage, making water
                conservation and reuse a priority and empowering individuals,
                businesses, and communities to act before it's too late.
              </p>
            </div>

            <div className="space-y-[10px]">
               <div className="flex justify-end">
               <img src="/mobile-assets/journey/vector.webp" className="h-[28px]" alt="" />
               </div>
              <img
                src="/mobile-assets/journey/card-img.webp"
                alt="Sample Image"
                class="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          </div>
          <div className="w-[100%] flex justify-center items-center">
          <button class="inline-flex items-center justify-center gap-[10px] px-[25px] py-[12px] border border-white bg-transparent text-[12px] shadow-[inset_0px_0px_0px_1px_#FFF] backdrop-blur-[0.5px] uppercase text-white">
          Purpose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyOfLeadingMob;
