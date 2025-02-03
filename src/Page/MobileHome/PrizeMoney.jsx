import React from "react";
import prizeimg from "../../assets/PrizeMoneySec/prize-belt.png";

function PrizeMoney() {
  return (
    <div className="w-[100%] bgmobprizsec overflow-hidden pt-[60px] pb-[80px] px-4">
      <div className="py-6 rounded-[26.9px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px] border boredr-[#fff] bg-[#01010182]">
        <div className="space-y-[20px]">
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[22px] leading-[104.377%] font-[400]">
            Prize Money <br /> For The Winning Team
          </h3>
          <h4 className="text-center w-full font-HiJack text-[#fff] text-[46.799px] font-[400]  ">
            250’000 USD*
          </h4>
          <div className="flex justify-center">
            <img src={prizeimg} alt="" />
          </div>
          <div className="space-y-[20px]">
            <h4 className="text-center leading-normal text-[18px] text-[#fff] font-[700] max">
              The prize money will be airdropped and shared by all token holders
              of the winning coin.
            </h4>
            <p className="text-center text-[12px] text-[#FFFCFC] font-[700]">
              *The prize money will be distributed <br /> in the winning token
              based on your holdings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeMoney;
