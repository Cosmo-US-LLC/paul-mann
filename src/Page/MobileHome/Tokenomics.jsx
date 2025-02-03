import React from "react";
import dogePepeScale from "../../assets/tokenomics/doge-pepe-scale.png";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";

function TokenmobSec() {
  return (
    <div className="relative w-[100%] pt-[50px] Tokenomicsbg overflow-hidden" id="tokenomics">
      <div className="w-[90%] mx-auto flex justify-between">
        <div className="max-w-[479.306px] relative space-y-[10px] w-[100%]">
          <h3
          style={{
            WebkitTextStrokeWidth: "0.8px",
            WebkitTextStrokeColor: "#000",
          }}
          className="text-[22px] font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            $DOGE <br /> Tokenomics
          </h3>
          <div className="space-y-[8px]">
            <h5 className="text-[14px] leading-normal font-[700] text-[#FFF] uppercase">
            tOTAL sUPPLY <br /> $8.88 BILLION
            </h5>
            <p className="text-[10px] leading-normal font-[600] text-[#FFF] ">
            Coin will be launched on <br /> Solana Blockchain
            </p>
          </div>
          <img src={verc1} className="absolute top-[-55%] left-[-10%]" alt="" />
        </div>
        <div>
          <div className="max-w-[479.306px] relative space-y-[10px] w-[100%]">
            <h3
             style={{
              WebkitTextStrokeWidth: "0.8px",
              WebkitTextStrokeColor: "#000",
            }}
            className="text-[22px] font-HiJack text-right leading-[102.804%] font-[400] text-[#FFF] uppercase">
              $pepe <br /> Tokenomics
            </h3>
            <div className="space-y-[8px]">
              <h5 className="text-[14px] text-right leading-normal font-[700] text-[#FFF] uppercase">
              tOTAL sUPPLY <br /> $8.79 BILLION
              </h5>
              <p className="text-[10px] text-right leading-normal font-[600] text-[#FFF] ">
              Coin will be launched on <br /> Solana Blockchain
              </p>
            </div>
            <img
              src={verc2}
              className="absolute top-[-55%] right-[-10%]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-6 ">
        <img src={dogePepeScale} alt="Your Image" className="object-cover w-full" />
      </div>
    </div>
  );
}

export default TokenmobSec;
