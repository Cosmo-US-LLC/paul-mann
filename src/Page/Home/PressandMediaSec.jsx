import React from "react";
import pressicn1 from "../../assets/PressSec/coin-market-cap.webp";
import pressicn2 from "../../assets/PressSec/coin-pedia.webp";
import pressicn3 from "../../assets/PressSec/updates-thecrypto.webp";
import topShadow from "../../assets/PressSec/rectangle_298.webp";
import bottomShadow from "../../assets/PressSec/rectangle_301.webp";

function PressandMediaSec() {
  return (
    <div className="relative w-[100%] h-[879px] flex justify-center items-center Pressbg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div className="max-w-[1139px] w-[100%] space-y-[50px] mx-auto z-10">
        <div className=" w-[100%]">
          <h3 className="text-[50px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            Press and Media
          </h3>
        </div>
        <div className="flex gap-[3rem] justify-between relative z-10">
          <div
            className="bg-[#28649721] p-4 relative rounded-[21.168px]"
            style={{
              backdropFilter: "blur(25.049999237060547px)",
              background: "rgba(0, 0, 0, 0.47)",
              borderRadius: "21.168px",
            }}
          >
            <div className="Pressborder  flex justify-between flex-col min-h-[402px] max-w-[333px] h-[100%] px-2 pt-10 space-y-[30px] w-[100%]">
              <div className="min-h-[150px] flex justify-center items-center">
                <img src={pressicn1} alt="" className="w-[204px] h-[140px]"/>
              </div>
              <div className="flex items-start h-[100%]">
                <p className="text-[18px] text-[#fff] text-center font-[400]">
                  Doge or Pepe? Fans are rallying to decide who has the
                  strongest community. Will Doge stay on top, or is Pepe set to
                  dethrone him? The battle is on!
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#28649721] p-4 relative rounded-[21.168px]"
            style={{
              backdropFilter: "blur(25.049999237060547px)",
              background: "rgba(0, 0, 0, 0.47)",
              borderRadius: "21.168px",
            }}
          >
            <div className="Pressborder  flex justify-between flex-col min-h-[402px] max-w-[333px] h-[100%] px-2 pt-10 space-y-[30px] w-[100%]">
              <div className="min-h-[150px] flex justify-center items-center">
                <img src={pressicn2} alt="" className="w-[256px] h-[61px]"/>
              </div>
              <div className="flex items-start h-[100%]">
                <p className="text-[18px] text-[#fff] text-center font-[400]">
                  Two legendary memes face off in an exciting presale, with
                  rumors of well-known crypto developers behind the project.
                  This could be the next big thing!
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#28649721] p-4 relative rounded-[21.168px]"
            style={{
              backdropFilter: "blur(25.049999237060547px)",
              background: "rgba(0, 0, 0, 0.47)",
              borderRadius: "21.168px",
            }}
          >
            <div className="Pressborder  flex justify-between flex-col min-h-[402px] max-w-[333px] h-[100%] px-2 pt-10 space-y-[30px] w-[100%]">
              <div className="min-h-[150px] flex justify-center items-center">
                <img src={pressicn3} alt="" className="w-[230px] h-[86px]"/>
              </div>
              <div className="flex items-start h-[100%]">
                <p className="text-[18px] text-[#fff] text-center font-[400]">
                  Finding the next winning narrative is the key to hitting big
                  with memes. Two presales, but only one will win and launch!
                  Backed by two of the most iconic meme coins, this might just
                  be it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressandMediaSec;
