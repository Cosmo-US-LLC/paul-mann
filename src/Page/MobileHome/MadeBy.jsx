import React from "react";
import made_by_bg from "../../assets/Mobile/baby-bg.png";
import babeDoge from "../../assets/madebySec/baby-doge-logo.png";
import babePepe from "../../assets/madebySec/baby-pepe.svg";
import downShodow from "../../assets/Mobile/shadow-down-mobile.svg";

function MadeBy() {
  return (
    <div
      style={{
        backgroundImage: `url(${made_by_bg})`,
      }}
      className="relative flex flex-col items-center mt-4 bg-[black] min-h-[339px] bg-cover bg-center"
    >
      <p className="text-[26px] font-[700] leading-[22px] text-[white] mt-6 text-center">
        Made by Ex Team Members Of
      </p>
      <h4 className="  text-center space-x-1  text-[24px] pt-2">
        <span
          className="text-[#F2B60F] text-right font-[700] text-[40.168px] leading-[24px] font-k2d"
          style={{
            textShadow: "2.511px -0.439px 13.211px #F1AD03",
            WebkitTextStrokeWidth: "1.049px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          Baby Doge
        </span>
        <span
          className="text-[#FFF] font-[700] text-[47.29px] leading-[normal] font-k2d"
          style={{
            textShadow: "3.511px -0.439px 13.211px #F1AD03",
            WebkitTextStrokeWidth: "1.149px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          &
        </span>
        <span
          className="text-[#00FF2F] font-bold text-[44.767px] font-k2d leading-normal"
          style={{
            textShadow: "3.511px -0.439px 13.211px #74FF60",
            WebkitTextStrokeWidth: "1.687px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          PEPE
        </span>
      </h4>
      <div className="z-20 flex items-end justify-center w-full gap-8 pt-6">
        <div className="w-[127px] h-[164px] bg-[#ECB214] rounded-[15px] shadow-md flex flex-col items-center justify-center p-4 border-[3px] border-[#FFF]">
          <img
            src={babeDoge}
            alt="Dog"
            className="w-[84px] h-[85px] object-contain"
          />

          <div className="text-center ">
            <h3 className="text-[16px] font-[700] text-black">Market Cap</h3>
            <p
              className="text-[28.957px] font-[800] text-white text-center font-k2d leading-normal"
              style={{
                WebkitTextStrokeWidth: "0.98px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              $530M
            </p>
             
          </div>
        </div>
        <div className="w-[127px] h-[164px] bg-[#00FF2F] rounded-[15px] shadow-md flex flex-col items-center justify-center p-4 border-[3px] border-[#FFF]">
          <img
            src={babePepe}
            alt="Dog"
            className="w-[102px] h-[104px] object-contain"
          />

          <div className="text-center ">
            <h3 className="text-[16px] font-[700] text-black">Market Cap</h3>
            <p
              className="text-[28.957px] font-[800] text-white text-center font-k2d leading-normal"
              style={{
                WebkitTextStrokeWidth: "0.98px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              $6.93B
            </p>
          </div>
        </div>
      </div>
      <img
        src={downShodow}
        alt="Dog"
        className="absolute bottom-0 left-0 right-0"
      />
    </div>
  );
}

export default MadeBy;
