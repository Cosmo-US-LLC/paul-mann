import React from "react";
import bit from "../../assets/DogeVSPepeSec/bit.svg";
import coin from "../../assets/DogeVSPepeSec/coin.svg";
import tioicn from "../../assets/DogeVSPepeSec/crypto.svg";
import arw from "../../assets/DogeVSPepeSec/arw.svg";
import topShadow from "../../assets/DogeVSPepeSec/top-shadow.webp";
import bottomShadow from "../../assets/DogeVSPepeSec/bottom-shadow.webp";
import cryShadow from "../../assets/DogeVSPepeSec/cry-shadow.png";

function DogeVSPepeSec() {
  return (
    <div className="relative w-[100%] h-[900px] flex justify-center items-center dogevspepebg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div className="max-w-[1038px] w-[100%] space-y-[50px] mx-auto relative z-10">
        <div className=" w-[100%]">
          <h3 className="text-[50px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            DOGE VS PEPE IS MAKING HEADLINES
          </h3>
        </div>
        <div className="flex justify-center space-x-[30px]">
          <div className="crypbg rounded-[15.016px] border min-h-[614.73px] max-w-[675.732px]  border-[#fff]">
            <div className="py-[20px] px-[35px] bg-[#fff] rounded-t-[15.016px]">
              <img src={tioicn} alt="" />
            </div>
            <div className="px-[35px] space-y-[20px] pt-[290px] pb-[20px] relative overflow-hidden">
              <div className="relative z-10 space-y-0">
                <h3 className="text-[42.703px] font-[400] text-[#fff] leading-[100%]  uppercase font-HiJack">
                  <span className="text-[#FFBF01]">Doge</span> vs{" "}
                  <span className="text-[#00FF2F]">Pepe ?</span>
                </h3>

                <p className="w-[500.806px] h-[131.076px] rotate-[-0.081deg] flex-shrink-0 text-[#FFF] font-[K2D] text-[25px] font-[400] leading-[33.2px]">
                  Doge or Pepe? Fans are rallying to decide who has the
                  strongest community. Will Doge stay on top, or is Pepe set to
                  dethrone him? The battle is on!
                </p>
              </div>
              <div className="relative z-10 flex space-x-2">
                <h4 className=" text-[16.893px] font-[700] text-[#fff]">
                  Find out more
                </h4>
                <img src={arw} alt="" className="mt-[5px]" />
              </div>
              <div className="absolute bottom-[0px] left-0 right-0">
                <img className="rounded-b-[15.016px]" src={cryShadow} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-[20px]">
            <div className="crypbg2 rounded-[15.016px] border min-h-[300.97px]  max-w-[675.732px]  border-[#fff]">
              <div className="py-[10px] px-[15px] bg-[#fff] rounded-t-[15.016px]">
                <img src={coin} alt="" />
              </div>
              <div className="px-[15px] pt-[126px] space-y-[10px]  pb-[20px]">
                <div className="">
                  <h3 className="text-[20.907px] leading-[100%] font-[400] text-[#fff] uppercase font-HiJack">
                    <span className="text-[#FFBF01]">legendary</span>
                    <span className="text-[#00FF2F]">memes face off</span>
                  </h3>

                  <p className="w-[305.664px] h-[67.998px] rotate-[-0.081deg] flex-shrink-0 text-[#FFF] font-[K2D] text-[14px] font-[400] leading-[18.592px] pt-[10px]">
                    Two legendary memes face off in an exciting presale, with
                    rumors of well-known crypto developers behind the project.
                    This could be the next big thing!
                  </p>
                </div>
                <div className="flex pt-4 space-x-2">
                  <h4 className="text-[8.271px] font-[700] text-[#fff]">
                    Find out more
                  </h4>
                  <img src={arw} alt="" />
                </div>
              </div>
            </div>
            <div className="crypbg3 rounded-[15.016px] border min-h-[300.97px]  max-w-[675.732px]  border-[#fff]">
              <div className="py-[10px] px-[15px] bg-[#fff] rounded-t-[15.016px]">
                <img src={bit} alt="" />
              </div>
              <div className="px-[15px] pt-[112px] space-y-[10px]  pb-[20px]">
                <div className="">
                  <h3 className="text-[20.907px] leading-[100%] font-[400] text-[#fff] uppercase font-HiJack">
                    <span className="text-[#FFBF01]">Who will</span>
                    <span className="text-[#00FF2F]">be the Winner</span>
                  </h3>

                  <p className="w-[309.443px] h-[69.514px] rotate-[-0.081deg] flex-shrink-0 text-[#FFF] font-[K2D] text-[14px] font-[400] leading-[18.592px] pt-[5px]">
                    Finding the next winning narrative is the key to hitting big
                    with memes. Two presales, but only one will win and launch!
                    Backed by two of the most iconic meme coins, this might just
                    be it.
                  </p>
                </div>
                <div className="flex pt-5 space-x-2">
                  <h4 className="text-[8.271px] font-[700] text-[#fff]">
                    Find out more
                  </h4>
                  <img src={arw} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogeVSPepeSec;
