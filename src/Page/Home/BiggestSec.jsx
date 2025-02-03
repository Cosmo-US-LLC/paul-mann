import React from "react";
import cardimg from "../../assets/BiggestSec/img.png";
import Star from "../../assets/BiggestSec/Star.svg";
import user from "../../assets/BiggestSec/user.png";

function BiggestSec() {
  return (
    <div className="relative w-[100%] h-[900px] flex justify-center items-center mx-auto  Biggestbg overflow-hidden">
      <div className="max-w-[1440px] w-[100%] space-y-[100px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="pb-[40px] text-[50px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
          The Biggest Crypto Event in 2025
          </h3>
        </div>
        <div className="flex gap-[1rem] justify-between items-center max-w-[1320px]  w-[100%]  2xl:!m-auto xl:ml-auto">
        <div className="w-[518.39px] min-h-[528.21px] rounded-[22px] Biggestbgcard">
            <div className="px-[55px] pt-[120px] pb-[40px] space-y-[10px]">
                <div className="w-[100%]">
                <img className="rounded-[8px] w-[100%]" src={cardimg} alt="" />
                </div>
                <div className="space-y-[10px]">
                    <p className="text-[18.955px] font-[400] text-[#fff]">I'm interested in profitable sectors, and as we all know, Doge vs Pepe are highly profitable. Many people believe it will pump Doge and Pepe both of the competition Between both memes as both have huge fanbase.</p>
                    <div className="flex items-center space-x-3">
                        <img src={user} alt="" />
                        <div className="space-y-[4px]">
                            <div className="flex items-center justify-center space-x-3">
                                <h3 className="text-[23.168px] font-[700] text-[#fff] leading-[138.636%]">Mike Johnson</h3>
                                <div className="flex space-x-1">
                                    <img className="w-[15.663px] h-[15.663px]" src={Star} alt="" />
                                    <img className="w-[15.663px] h-[15.663px]" src={Star} alt="" />
                                    <img className="w-[15.663px] h-[15.663px]" src={Star} alt="" />
                                    <img className="w-[15.663px] h-[15.663px]" src={Star} alt="" />
                                    <img className="w-[15.663px] h-[15.663px]" src={Star} alt="" />
                                </div>
                            </div>
                            <p className="text-[18.955px] font-[400] text-[#fff]">Youtuber | 30k Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[394.77px] rounded-[22px] Biggestcardgr">
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
        </div>
        </div>
      </div>
    </div>
  );
}

export default BiggestSec;
