import React from "react";
import prizeimg from "../../assets/PrizeMoneySec/prize-belt.png";
import topShadow from "../../assets/PrizeMoneySec/rectangle_288.webp";
import bottomShadow from "../../assets/PrizeMoneySec/rectangle_289.webp";

function PrizeMoneySec() {
  return (
    <div className="w-[100%] bgprizsec h-[900px] flex justify-center items-center overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div className="max-w-[992px] px-[22px] py-[28px] rounded-[26.9px] w-[100%]   relative min-h-[500px] border boredr-[#fff] bg-[#01010182]">
        <div className="space-y-[8px]">
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[50px] leading-[78.377%] font-[400]">
            Prize Money For The Winning Team
          </h3>
          <h4 className="text-center font-HiJack text-[#fff] text-[96px] font-[400] leading-[116.377%]">
            250’000 USD*
          </h4>
          <div className="flex justify-center ">
            <img src={prizeimg} alt="" className="w-[522px] h-[325px]" />
          </div>
          <div className="space-y-[8px]">
            <h4 className="text-center leading-[108.377%] text-[32px] text-[#fff] font-[700] max">
              The prize money will be airdropped and shared <br /> by all token
              holders of the winning coin.
            </h4>
            <p className="text-center text-[16px] text-[#FFFCFC] font-[700] pt-2">
              *The prize money will be distributed in the winning token based on
              your holdings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeMoneySec;
