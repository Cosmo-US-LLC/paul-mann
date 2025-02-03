import React from "react";
import bnicon1 from "../../assets/banner/bnicns (3).svg";
import bnicon2 from "../../assets/banner/bnicns (1).svg";
import bnicon3 from "../../assets/banner/bnicns (2).svg";
import bnicon4 from "../../assets/banner/bnicns (4).svg";
import bnicon5 from "../../assets/banner/bnicns (5).svg";

function BannerSec() {
  return (
    <div className="w-[100%] h-[150px] overflow-hidden flex items-end">
      <div className="flex justify-center items-center space-x-[40px] max-w-[1390px] w-[100%] mx-auto relative">
        <div>
        <h4 className="text-[#FFFCFC] text-[50px] font-HiJack font-[400] uppercase">As seen on</h4>
        </div>
        <div className="flex justify-center space-x-[30px] items-center">
            <img src={bnicon1} className="w-[188px] h-[32pxpx]" alt="" />
            <img src={bnicon2} className="w-[148px] h-[33pxpx]" alt="" />
            <img   src={bnicon3} className="w-[148px] h-[33pxpx]" alt="" />
            <img src={bnicon4} className="w-[160px] h-[40pxpx]" alt="" />
            <img src={bnicon5} className="w-[150px] h-[38pxpx]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BannerSec;
