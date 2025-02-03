import React from "react";
import bit from "../../assets/DogeVSPepeSec/bit.svg";
import coin from "../../assets/DogeVSPepeSec/bit-coin.svg";
import tioicn from "../../assets/DogeVSPepeSec/crypto.svg";
import arw from "../../assets/DogeVSPepeSec/arw.svg";
import dogeFight from "../../assets/DogeVSPepeSec/card-3.webp";
import pepeFight from "../../assets/DogeVSPepeSec/card-2.webp";
import cryShadow from "../../assets/DogeVSPepeSec/cry-shadow.png";

function DogeVSPepeMobSec() {
  return (
    <div className="relative w-[100%] pt-[40px] pb-[40px] dogevspepebg overflow-hidden">
      <div className=" w-[90%] space-y-[43px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="text-[22px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            DOGE VS PEPE IS <br /> MAKING HEADLINES
          </h3>
        </div>
        <div className=" space-y-[15px]">
          <div className="crypbg rounded-[15.016px] border min-h-[314.73px] max-w-[675.732px]  border-[#fff]">
            <div className="py-[14px] px-[20px] bg-[#fff] rounded-t-[15.016px]">
              <img className=" max-w-[100px]" src={tioicn} alt="" />
            </div>
            <div className="px-[20px] space-y-[10px] pt-[100px] pb-[20px] relative">
              <div className="space-y-[10px] relative z-10">
                <h3 className="text-[22.529px] font-[400] text-[#fff] uppercase font-HiJack pt-2">
                  <span className="text-[#FFBF01]">Doge</span> vs{" "}
                  <span className="text-[#00FF2F]">Pepe ?</span>
                </h3>

                <p className="text-[16px] font-[400] leading-[130%] text-[#fff]">
                  Doge or Pepe? Fans are rallying to decide who has the
                  strongest community. Will Doge stay on top, or is Pepe set to
                  dethrone him? The battle is on!
                </p>
              </div>
              <div className="relative z-10 flex space-x-2">
                <h4 className="text-[8.913px] font-[700] text-[#fff]">
                  Find out more
                </h4>
                <img src={arw} alt="" />
              </div>
              <div className="absolute bottom-[0px] left-0 right-0">
                <img className="rounded-b-[15.016px]" src={cryShadow} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative overflow-hidden rounded-[15.016px] border border-[#fff]   w-[174px] min-h-[194px]">
              <div className="py-[13px] px-[15px] bg-[#fff] rounded-t-[15.016px]">
                <img src={coin} alt="" className="w-[100px]" />
              </div>
              <div className="relative flex flex-col justify-center w-full h-full px-2 pt-8 overflow-hidden">
                <div className="absolute inset-0 -top-8">
                  <img alt="doge" src={pepeFight} className="w-full h-full" />
                </div>
                <div className="relative z-10 flex flex-col w-full">
                  <h3 className="text-[11.03px] font-[400] text-[#fff] uppercase font-HiJack">
                    <span className="text-[#FFBF01]">legendary</span>
                    <span className="text-[#00FF2F]">
                      memes <br /> face off
                    </span>
                  </h3>

                  <p className="pt-[6px] text-[6px] font-[400]  text-[#fff]">
                    Two legendary memes face off in an exciting presale, with
                    rumors of well-known crypto developers behind the project.
                    This could be the next big thing!
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-start gap-2">
                  <h4 className="text-[4.364px] font-[700] text-[#fff]">
                    Find out more
                  </h4>
                  <img src={arw} alt="" />
                </div>
                <div className="absolute bottom-[0px] left-0 right-0">
                  <img
                    className="rounded-b-[15.016px]"
                    src={cryShadow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[15.016px] border border-[#fff] w-[174px] min-h-[194px]">
              <div className="py-[13px] px-[15px] bg-[#fff] rounded-t-[15.016px]">
                <img src={bit} alt="" className="w-[100px]" />
              </div>
              <div className="relative flex flex-col justify-center w-full h-full px-2 pt-6 overflow-hidden">
                <div className="absolute inset-0 -top-8">
                  <img alt="doge" src={dogeFight} className="w-full h-full" />
                </div>
                <div className="relative z-10 flex flex-col w-full">
                  <h3 className="text-[11.03px] font-[400] text-[#fff] uppercase font-HiJack">
                    <span className="text-[#FFBF01]">Who will</span>
                    <span className="text-[#00FF2F]">be the Winner</span>
                  </h3>

                  <p className="pt-[6px] text-[6px] font-[400]  text-[#fff]">
                    Finding the next winning narrative is the key to hitting big
                    with memes. Two presales, but only one will win and launch!
                    Backed by two of the most iconic meme coins, this might just
                    be it.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-start gap-2 pt-1">
                  <h4 className="text-[4.364px] font-[700] text-[#fff]">
                    Find out more
                  </h4>
                  <img src={arw} alt="" />
                </div>
                <div className="absolute bottom-[0px] left-0 right-0">
                  <img
                    className="rounded-b-[15.016px]"
                    src={cryShadow}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogeVSPepeMobSec;
