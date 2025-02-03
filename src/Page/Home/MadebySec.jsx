import React from "react";
import babeDoge from "../../assets/madebySec/baby-doge-logo.png";
import babePepe from "../../assets/madebySec/baby-pepe.svg";
import downShodow from "../../assets/madebySec/down-shodwo.svg";

function MadebySec() {
  return (
    <div className="relative bgMadebySec   overflow-hidden w-[100%] pt-[60px] pb-[80px]">
      <div className="max-w-[1291.63px]   flex items-center justify-center h-[100%] space-y-[45px] w-[100%] mx-auto relative ">
        <div className="space-y-[8px]">
          <h3 className="text-[#fff] text-center text-[42px] leading-[74.377%] font-[700]">
            Made by Ex Team Members Of
          </h3>
          <h4 className="pt-4 space-x-3 text-center">
            <span
              className="text-[#EFAB00] leading-[100%] text-[64px] font-[700]"
              style={{
                textShadow: "6.534px -0.817px 24.583px #F1AD03",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              Baby Doge
            </span>
            <span
              className="text-[#fff] leading-[100%] text-[88px] font-[700] "
              style={{
                textShadow: "6.534px -0.817px 24.583px #F1AD03",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              &
            </span>
            <span
              className="text-[#00FF2F] leading-[100%] text-[75px] font-[700]"
              style={{
                textShadow: "6.534px -0.817px 24.583px #74FF60",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              PEPE
            </span>
          </h4>
          <div className="flex items-end justify-center w-full gap-8 pt-6">
            <div className="w-[208px] h-[266px] bg-[#ECB214] rounded-[15px] shadow-md flex flex-col items-center justify-center p-4 border-[3px] border-[#FFF]">
              <img
                src={babeDoge}
                alt="Dog"
                className="w-[136px] h-[145px] object-contain"
              />

              <div className="text-center ">
                <h3 className="text-[22px] font-[700] text-black">Market Cap</h3>
                <p
                  className="text-[39px] font-[700] text-white text-center font-k2d leading-normal"
                  style={{
                    WebkitTextStrokeWidth: "1.22px",
                    WebkitTextStrokeColor: "#000",
                  }}
                >
                  $530M
                </p>
              </div>
            </div>
            <div className="w-[208px] h-[266px] bg-[#00FF2F] rounded-[15px] shadow-md flex flex-col items-center justify-center p-4 border-[3px] border-[#FFF]">
              <img
                src={babePepe}
                alt="Dog"
                className="w-[136px] h-[145px] object-contain"
              />

              <div className="text-center ">
                <h3 className="text-[22px] font-[700] text-black">Market Cap</h3>
                <p
                  className="text-[39px] font-[700] text-white text-center font-k2d leading-normal"
                  style={{
                    WebkitTextStrokeWidth: "1.22px",
                    WebkitTextStrokeColor: "#000",
                  }}
                >
                  $6.93B
                </p>
              </div>
            </div>
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

export default MadebySec;
