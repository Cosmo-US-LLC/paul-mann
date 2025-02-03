import React from "react";
import hypeimg1 from "../../assets/Hype/hypeimg (6).png";
import hypeimg2 from "../../assets/Hype/hypeimg (5).png";
import hypeimg3 from "../../assets/Hype/hypeimg (4).png";
import hypeimg4 from "../../assets/Hype/hypeimg (3).png";
import hypeimg5 from "../../assets/Hype/hype-bus.webp";
import hypeimg6 from "../../assets/Hype/hypeimg (1).png";

function HypeMobSec() {
  return (
    <div className="relative w-[100%] pt-[40px] pb-[40px] Hypebg overflow-hidden">
      <div className="w-[90%] space-y-[25px] mx-auto ">
        <div className=" w-[100%]">
          <h3
            style={{
              textShadow: "0px 9px 33.4px rgba(0, 0, 0, 0.63)",
            }}
            className="text-[25px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase"
          >
            The Hype is Real
          </h3>
        </div>
        <div className="flex flex-col items-center gap-[1.2rem] justify-between">
          <div className="w-[100%] space-y-[1.2rem]">
            <div className="flex justify-between gap-[1.2rem]">
              <div>
                <img className="rounded-[13px]" src={hypeimg1} alt="" />
              </div>
              <div className="gap-[0rem] flex flex-col justify-between">
                <img src={hypeimg2} alt="" />
                <img src={hypeimg3} alt="" />
              </div>
            </div>
            <div>
              <img src={hypeimg4} alt="" />
            </div>
          </div>
          <div className="">
            <div className="w-[100%] space-x-[1rem] flex justify-between">
              <div className="relative w-[45%] rounded-[13px] overflow-hidden">
                {/* <div className="absolute inset-0 bg-black pointer-events-none opacity-20"></div> */}
                <img className="w-[100%] h-full" src={hypeimg5} alt="" />
              </div>
              <img className="w-[55%]" src={hypeimg6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HypeMobSec;
