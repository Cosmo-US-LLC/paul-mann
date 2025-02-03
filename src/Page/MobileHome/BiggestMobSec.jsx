import React from "react";
import cardimg from "../../assets/BiggestSec/img.png";
import Star from "../../assets/BiggestSec/Star.svg";
import user from "../../assets/BiggestSec/user.png";

function BiggestMobSec() {
  return (
    <div className="relative w-[100%] pt-[40px] pb-[40px] Biggestmobbg overflow-hidden">
      <div className="w-[90%] space-y-[34px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="text-[22px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
          The Biggest <br /> Crypto  Event in 2025
          </h3>
        </div>
        <div className="flex gap-[1rem] justify-between items-center max-w-[1320px]  w-[100%]  2xl:!m-auto xl:ml-auto">
        <div className="w-[518.39px] min-h-[348.873px] max-h-[368.873px] rounded-[22px] Biggestbgcard">
            <div className="px-[35px] pt-[80px] pb-[30px] space-y-[10px]">
                <div className="w-[100%]">
                <img className="rounded-[8px] w-[100%]" src={cardimg} alt="" />
                </div>
                <div className="space-y-[10px]">
                    <p className="text-[12px] leading-normal font-[400] text-[#fff]">I'm interested in profitable sectors, and as we all know, Doge vs Pepe are highly profitable. Many people believe it will pump Doge and Pepe both of the competition Between both memes as both have huge fanbase.</p>
                    <div className="flex items-center space-x-3">
                        <img src={user} className="w-[40px] h-[40px]" alt="" />
                        <div className="space-y-[0px]">
                            <div className="flex items-center justify-center space-x-3">
                                <h3 className="text-[15.168px] font-[700] text-[#fff] leading-[138.636%]">Mike Johnson</h3>
                                <div className="flex space-x-1">
                                    <img className="w-[12.663px] h-[12.663px]" src={Star} alt="" />
                                    <img className="w-[12.663px] h-[12.663px]" src={Star} alt="" />
                                    <img className="w-[12.663px] h-[12.663px]" src={Star} alt="" />
                                    <img className="w-[12.663px] h-[12.663px]" src={Star} alt="" />
                                    <img className="w-[12.663px] h-[12.663px]" src={Star} alt="" />
                                </div>
                            </div>
                            <p className="text-[12.955px] font-[400] text-[#fff]">Youtuber | 30k Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="w-[394.77px] rounded-[22px] Biggestcardgr">
        <div className="px-[30px] pt-[80px] pb-[30px] space-y-[10px]">
                <div className="w-[100%]">
                <img className="rounded-[8px] w-[100%]" src={cardimg} alt="" />
                </div>
                <div className="space-y-[10px]">
                    <p className="text-[16px] font-[400] text-[#fff]">I'm interested in profitable sectors, and as we all know, Doge vs Pepe are highly profitable. Many people believe it will pump Doge and Pepe both of the competition Between both memes as both have huge fanbase.</p>
                    <div className="flex items-center space-x-3">
                        <img className="w-[50px] h-[50px]" src={user} alt="" />
                        <div className="space-y-[0px]">
                            <div className="flex items-center justify-center space-x-3">
                                <h3 className="text-[20px] font-[700] text-[#fff] leading-[130.636%]">Mike Johnson</h3>
                                <div className="flex space-x-1">
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                </div>
                            </div>
                            <p className="text-[16px] font-[400] text-[#fff]">Youtuber | 30k Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[394.77px] h-[444px] rounded-[22px] Biggestcardgr">
        <div className="px-[30px] pt-[80px] pb-[30px] space-y-[10px]">
                <div className="w-[100%]">
                <img className="rounded-[8px] w-[100%]" src={cardimg} alt="" />
                </div>
                <div className="space-y-[10px]">
                    <p className="text-[16px] font-[400] text-[#fff]">I'm interested in profitable sectors, and as we all know, Doge vs Pepe are highly profitable. Many people believe it will pump Doge and Pepe both of the competition Between both memes as both have huge fanbase.</p>
                    <div className="flex items-center space-x-3">
                        <img className="w-[50px] h-[50px]" src={user} alt="" />
                        <div className="space-y-[0px]">
                            <div className="flex items-center justify-center space-x-3">
                                <h3 className="text-[20px] font-[700] text-[#fff] leading-[130.636%]">Mike Johnson</h3>
                                <div className="flex space-x-1">
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                    <img className="w-[13.56px] h-[13.56px]" src={Star} alt="" />
                                </div>
                            </div>
                            <p className="text-[16px] font-[400] text-[#fff]">Youtuber | 30k Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default BiggestMobSec;
