import React from "react";

const AdvocacyMob = () => {
  return (
    <section className="flex flex-col items-center min-h-screen  py-12 bgavd">
      <div className="w-[90%]  overflow-hidden bg-transparent shadow-lg rounded-2xl">
        <div
          className="relative  bg-transparent border border-[#a4a4a4]"
          style={{
            borderRadius: "16.405px 16.405px 0px 0px",
            borderColor: "rgba(217, 217, 217, 0.01)",
          }}
        >
          <div className="flex items-center p-[16px]">
            <img src="/mobile-assets/Advocated/icns (1).svg" alt="" />
            <div className=" px-3 py-1 text-[14px] font-[700] text-white bg-transparent rounded-lg top-4 left-4 leading-[107.143%]">
              Advocated for Water Conservation <br /> on CBS Evening News
            </div>
          </div>
         <div>
         <img
              className="object-cover -m-[1px]"
              src="/desktop-assets/AdvocacyOfPaulMann/AdvocacyOfPaulOwner.webp"
              alt="Advocated for Water Conservation"
            />
         </div>
        </div>
      </div>

      <div className="w-[90%] space-y-[20px] mt-[20px]">
        <div className="flex items-center justify-center py-[30px]  space-x-2 bg-[#D9D9D9] shadow-lg rounded-[8.978px]">
          <div className="">
            <img
              className="object-cover w-[25.063px] h-[25.063px]"
              src="/mobile-assets/Advocated/icns (4).svg"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between space-x-3">
            <span className="text-[27.877px] font-[900] text-[#073B63]">
              1,000+
            </span>
            <div className="w-[2px] h-[29px] bg-[#073B63]"></div>
            <p className="text-[12.39px] font-[700] text-[#073B63] leading-[114%]">
              LinkedIn <br /> Followers
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center px-[20px] py-[12px] space-x-2 bg-[#D9D9D9] shadow-lg rounded-[8.978px]">
          <p className="text-[12.431px] font-[700] text-[#073B63]">
            Featured In:
          </p>
          <div>
            <div className="flex items-cneter mt-1 space-x-2">
              <div className="bg-[#fff] flex items-center justify-center rounded-[5.633px] px-[2px]">
                <img src="/mobile-assets/Advocated/icns (3).svg" alt="" />
              </div>
              <div className="bg-[#fff] flex items-center justify-center py-[16px] px-[8px] rounded-[5.633px]">
                <img
                  src="/mobile-assets/Advocated/image_157.webp"
                  className="max-h-[47.253px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="inline-flex mt-[20px] items-center justify-center gap-[10px] px-[25px] py-[12px] border border-white bg-transparent text-[12px] shadow-[inset_0px_0px_0px_1px_#FFF] backdrop-blur-[0.5px] uppercase text-white">
        PRESS
      </button>
    </section>
  );
};

export default AdvocacyMob;
