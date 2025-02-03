import React from "react";
import firstDoge from "../../assets/Mobile/century-doge.png";
import firstPepe from "../../assets/Mobile/century-pepe.png";
import dogePepe from "../../assets/Mobile/century-fighters.png";
import greenShodow from "../../assets/Mobile/green-shodow.svg";
import yellowShodow from "../../assets/Mobile/yellow-shodow.svg";
function MobileFirstEverSec() {
  return (
    <div
      className="w-[100%] bgeversecmob overflow-hidden relative pt-[50px] pb-[10px] "
      id="whitepaper"
    >
      <div className=" space-y-[15px] w-[90%] mx-auto">
        <h3 className="text-[#fff] text-center text-[22px] font-HiJack">
          THE FIGHT OF THE CENTURY
        </h3>

        <div className="relative">
          <p className="text-[14px] w-full pb-4 mx-auto font-[600] leading-[1.2] rounded-[15px] px-2 py-4 text-[#FFF] border border-white bg-[#00000057] text-center drop-shadow-xl shadow-md shadow-neutral-800">
            Welcome to Team Doge vs. Team Pepe, where the community decides who
            wins! This isn’t just another crypto pre-sale, it’s the ultimate
            showdown between two meme heavyweights as only one token will launch
            in the end! <br /> <br />
            Your mission is simple:
            <br /> <br /> 1. Pick your favorite meme by buying the coin you
            prefer.
            <br /> <br /> 2. The first to hit $1M raised wins
            <br /> <br /> 3. Launch Date will be announced
            <br /> <br /> 4. Winner Launches on DEX and CEX
            <br /> <br />
            So, who will it be? Will you back Doge,
            <br /> the iconic Shiba? Or will you choose
            <br /> Pepe, the rebellious frog?
          </p>
        </div>
      </div>
      <div className="min-h-[250px] flex justify-center items-end">
        {/* <img
          src={firstDoge}
          alt="firstDoge"
          className="w-auto h-[190px] object-cover"
        /> */}
        {/* <img
          src={firstPepe}
          alt="firstPepe"
          className="w-auto h-[237px] object-contain"
        /> */}
        <img
          src={dogePepe}
          alt="firstPepe"
          className="w-auto min-h-[250px] h-full object-contain"
        />
      </div>
    </div>
  );
}

export default MobileFirstEverSec;
