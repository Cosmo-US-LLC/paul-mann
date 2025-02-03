import React, { useState } from "react";
import chestImage from "../../assets/MilestonesSec/deal-box.webp";
import groupImage from "../../assets/MilestonesSec/flag-line-trophy.png";
import pepeicon from "../../assets/MilestonesSec/Mask group (5).png";
import dogeicon from "../../assets/MilestonesSec/Mask group (4).png";


function Milestones() {
  const [dogePercentage, setDogePercentage] = useState(0);
  const [pepePercentage, setPepePercentage] = useState(0);
  return (
    <div className="Mysterymobbg relative w-[100%] pt-[50px] overflow-hidden pb-[50px]" id="milestones">
      <div className="space-y-[15px] w-[90%] mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <div className="Mysteryborder p-[20px]" style={{backdropFilter:"blur(9px)", WebkitBackdropFilter: "blur(9px)"}}>
            <h3 className="text-[22px] text-[#FFFCFC] font-HiJack uppercase text-center leading-tight">
            Mystery <br /> Milestones Reveal
            </h3>
            <p className="text-[15px] font-[400] pt-[8px] pb-[18px] leading-[114%] text-center text-[#FFF]">
            The fight heats up with every milestone! 
            </p>
            <p className="max-w-[707px] mx-auto leading-[114%] text-[15px] font-[400] text-center text-[#FFF]">
            When one side hits a milestone, it reveals a mystery feature for the opposing team, keeping the competition alive and rewarding both sides. With three key milestones: 250k, 500k, and 750k, each unlocks exciting surprises that drive both teams closer to the finish line.
            </p>
          </div>
        </div>
        <div className="">
         <div className="flex items-center justify-between space-x-1">
         <img className="w-[30.702px] h-[30.702px]" src={dogeicon} alt="" />
          <div className="bg-[#181818] rounded-[40.835px] w-[100%] h-[14.862px] border-[0.794px] border-[#EFAB00]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${dogePercentage}%`, minWidth: '25px' }}
            >
              <span className="text-[9.233px] font-[400] font-HiJack text-[#0B0101] leading-none font-[Inter]">
                {dogePercentage}%
              </span>
            </div>
          </div>
         </div>

          <div className="relative flex min-h-[150px] my-[0px] justify-center items-center flex-col ">
            <div className="absolute top-[4%] left-[21%] gap-[42px] flex ">
              <div className="flex flex-col items-center justify-center">
                <img src={chestImage} alt="Treasure Chest" className="mb-1 w-[29px] h-[29px] " />
                <span className="text-white font-inter text-[6.218px] font-bold leading-normal">
                  $250,000
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={chestImage} alt="Treasure Chest" className="mb-1 w-[29px] h-[29px] " />
                <span className="text-white font-inter text-[6.218px] font-bold leading-normal opacity-30">
                  $500,000
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src={chestImage} alt="Treasure Chest" className="mb-1 w-[29px] h-[29px] " />
                <span className="text-white font-inter text-[6.218px] font-bold leading-normal opacity-30">
                  $750,000
                </span>
              </div>
            </div>
            <div className="relative z-50 flex items-center justify-center">
              <span className="text-white font-HiJack  text-[10.175px] font-[400] leading-normal absolute right-[3%] top-[-21%]">
              The Winner
              </span>

              <img src={groupImage} alt="flag" className="" />
              
            </div>
            <div className="absolute bottom-[4%] left-[21%] gap-[42px] flex ">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[6.218px] font-bold leading-normal">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-1 w-[29px] h-[29px] " />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[6.218px] font-bold leading-normal opacity-30">
                  $500,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-1 w-[29px] h-[29px] " />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[6.218px] font-bold leading-normal opacity-30">
                  $750,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-1 w-[29px] h-[29px] " />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-1">
          <img src={pepeicon} className="w-[30.702px] h-[30.702px]" alt="" />
          <div className="bg-[#181818] rounded-[40.835px] w-[100%] h-[14.862px] border-[0.794px] border-[#09FC3C]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r"
              style={{
                width: `${pepePercentage}%`,
                minWidth: '25px',
                background:
                  "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
              }}
            >
              <span className="text-[9.233px] font-HiJack font-[400] text-[#0B0101] leading-none font-[Inter]">
                {pepePercentage}%
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
