import React, { useState } from "react";
import chestImage from "../../assets/MilestonesSec/deal-box.webp";
import groupImage from "../../assets/MilestonesSec/flag-line-trophy.png";
import pepeicon from "../../assets/MilestonesSec/Mask group (5).png";
import dogeicon from "../../assets/MilestonesSec/Mask group (4).png";

function MilestonesSec() {
  const [dogePercentage, setDogePercentage] = useState(0);
  const [pepePercentage, setPepePercentage] = useState(0);
  return (
    <div className="Mysterybg relative w-[100%] h-[900px] flex justify-center items-center overflow-hidden" id="milestones">
      <div className="max-w-[1168px] space-y-[20px] w-[100%] mx-auto ">
        <div className="space-y-[40px] flex flex-col items-center justify-center">
          <div
            className="px-4 py-4 bg-black Mysteryborder"
            style={{
              background: "rgba(0, 0, 0, 0.33)",
              backdropFilter: "blur(7.5px)",
              WebkitBackdropFilter: "blur(7.5px)",
            }}
          >
            <h3 className="text-[50px] text-[#FFFCFC] font-HiJack uppercase text-center font-[400]">
              Mystery Milestones Reveal
            </h3>
            <p className="text-[20px] font-[400] pb-[18px] leading-[96%] text-center text-[#FFF]">
              The fight heats up with every milestone!
            </p>
            <p className="max-w-[707px] mx-auto leading-[96%] text-[20px] font-[400] text-center text-[#FFF]">
              When one side hits a milestone, it reveals a mystery feature for
              the opposing team, keeping the competition alive and rewarding
              both sides. With three key milestones: 250k, 500k, and 750k, each
              unlocks exciting surprises that drive both teams closer to the
              finish line.
            </p>
          </div>
        </div>
        <div className="pt-[60px] pb-[30px]">
          <div className="relative px-16">
            <img
              className="absolute top-[-160%] left-[6%] h-[62px]"
              src={dogeicon}
              alt=""
            />
            <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[40.415px] border-[0.794px] border-[#EFAB00]">
              <div
                className="flex items-center justify-center h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ width: `${dogePercentage}%`, minWidth: "80px" }}
              >
                <span className="text-[32.668px] font-[400] font-HiJack text-[#0B0101] leading-none font-[Inter]">
                  {dogePercentage}%
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[330px] justify-center items-center flex-col ">
            <div className="absolute top-[4%] left-[23%] gap-[140px] flex">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="mb-2 w-[59] h-[57px]"
                />
                <span className="text-white font-inter text-[16px] font-bold leading-normal">
                  $250,000
                </span>
              </div>
              <div>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="mb-2 w-[59] h-[57px]"
                />
                <span className="text-white font-inter text-[16px] font-bold leading-normal opacity-30">
                  $500,000
                </span>
              </div>
              <div>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="mb-2 w-[59] h-[57px]"
                />
                <span className="text-white font-inter text-[16px] font-bold leading-normal opacity-30">
                  $750,000
                </span>
              </div>
            </div>
            <div className="relative z-50 flex items-center justify-center">
              <span className="text-white font-HiJack  text-[36px] font-[400] leading-normal absolute right-[3%] top-[-21%]">
                The Winner
              </span>

              <img src={groupImage} alt="flag" className="" />
            </div>
            <div className="absolute bottom-[8%] left-[23%] gap-[140px] flex ">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[16px] font-bold leading-normal">
                  $250,000
                </span>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="mt-2 w-[59] h-[57px]"
                />
              </div>
              <div>
                <span className="text-white font-inter text-[16px] font-bold leading-normal opacity-30">
                  $500,000
                </span>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="mt-2 w-[59] h-[57px]"
                />
              </div>
              <div>
                <span className="text-white font-inter text-[16px] font-bold leading-normal opacity-30">
                  $750,000
                </span>
                <img
                  src={chestImage}
                  alt="Treasure Chest"
                  className="mt-2 w-[59] h-[57px]"
                />
              </div>
            </div>
          </div>
          <div className="relative px-16">
            <img
              src={pepeicon}
              className="absolute top-[-200%] left-[5%] w-[76px] h-[71px]"
              alt=""
            />
            <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[40.415px] border-[0.794px] border-[#09FC3C]">
              <div
                className="flex items-center justify-center h-full rounded-full bg-gradient-to-r"
                style={{
                  width: `${pepePercentage}%`,
                  minWidth: "80px",
                  background:
                    "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
                }}
              >
                <span className="text-[32.668px] font-HiJack font-[400] text-[#0B0101] leading-none font-[Inter]">
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

export default MilestonesSec;
