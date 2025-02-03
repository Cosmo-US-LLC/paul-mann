import React from "react";
import rule1 from "../../assets/RuleSec/rule1.webp";
import rule2 from "../../assets/RuleSec/rule2.webp";
import rule3 from "../../assets/RuleSec/rule3.webp";
import rule4 from "../../assets/RuleSec/rule4.webp";
import rule5 from "../../assets/RuleSec/rule5.webp";
import rule6 from "../../assets/RuleSec/rule6.webp";
import rule7 from "../../assets/RuleSec/mask_group (6).webp";
import telicn from "../../assets/RuleSec/logos_telegram.svg";
import xicn from "../../assets/RuleSec/X-app.svg";
import leftMan from "../../assets/RuleSec/left-crdimg.png";
import rightMan from "../../assets/RuleSec/right-crdimg.png";
import topShodow from "../../assets/RuleSec/rectangle_287.webp";
import bottomShodow from "../../assets/RuleSec/rectangle_288.webp";

function TheRulesSec() {
  return (
    <div
      className="relative bgrule overflow-hidden w-[100%] py-[36px]"
      id="rules"
    >
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShodow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShodow} alt="" />
      </div>
      <div className="max-w-[1143px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px]">
        <div>
          <h3 className="text-[#FFFCFC] font-HiJack uppercase text-center text-[50px] leading-[104.377%] font-[400]">
            The 7 Rules
          </h3>
        </div>
        <div className="relative space-y-[30px]">
          <img
            src={leftMan}
            alt="card_image_1"
            className="min-h-[220px] absolute left-[-12%] top-[35%] z-20"
          />
          <img
            src={rightMan}
            alt="card_image_2"
            className="min-h-[220px] absolute right-[-14%] top-[65%] z-20"
          />
          <div className="flex Rulesborder justify-between px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img
                src={rule1}
                alt="card_image_3"
                className="min-h-[220px] w-[250px] rounded-[30px]"
              />
            </div>
            <div className="max-w-[727.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  1. Choose Your Champion
                </h2>
              </div>
              <ol className="flex flex-col gap-4 pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Team Doge ($DOGE)</span> <br />{" "}
                  The undisputed and undefeated Meme Heavyweight Champions who
                  pave the way for all others. If you stand for greatness and
                  legacy, this is your corner!
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Team Pepe ($PEPE)</span> <br />{" "}
                  No one has shaken up the Meme Heavyweight scene in recent
                  years like this maverick. If you stand for bold moves and
                  fresh energy, this is your corner!
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-between Rulesborder2 px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="max-w-[727.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  2. Buy To Support Your Team
                </h2>
              </div>
              <ol className="flex flex-col pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400]">
                  Buy tokens and support your favorite meme.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  Every token purchased is a vote toward their victory.
                </li>
                {/* <li className="text-[20px] text-[#FFF] font-[400]">
                  Maximum Buy-In: Each wallet can buy for up to $10,000.
                </li> */}
              </ol>
            </div>
            <div className="w-[40%] flex justify-end">
              <img
                src={rule2}
                alt="card_image_4"
                className="min-h-[220px] w-[250px] rounded-[30px]"
              />
            </div>
          </div>
          <div className="flex Rulesborder justify-between px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img
                src={rule3}
                alt="card_image_5"
                className="min-h-[220px] w-[250px] rounded-[30px]"
              />
            </div>
            <div className="max-w-[655.31px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  3. The Race To $1 Million
                </h2>
              </div>
              <ol className="flex flex-col pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400]">
                  The fight is decided when the first team reaches $1 million.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  Only the winner will remain and launch.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  The launch date will be announced directly after the first
                  coin reaches $1M.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  Until the launch date, only the winner coin can be purchased.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex  Rulesborder2 justify-between px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="max-w-[655.31px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  4. The Winner Takes It All
                </h2>
              </div>
              <ol className="flex flex-col gap-3 pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400]">
                  The losing team’s funds aren’t wasted. They’re added to the
                  liquidity pool of the winning team, making the winner’s token
                  stronger and more valuable.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  The launch is taking place shortly after the winner is
                  announced. The time in between will be used to secure CEX
                  listings and ensure the best possible launch.
                </li>
              </ol>
            </div>
            <div className="w-[40%] flex justify-end">
              <img
                src={rule4}
                alt="card_image_6"
                className="min-h-[220px] w-[250px] rounded-[30px]"
              />
            </div>
          </div>
          <div className="flex justify-between Rulesborder px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img
                src={rule5}
                alt="card_image_7"
                className="min-h-[220px] w-[250px] rounded-[30px]"
              />
            </div>
            <div className="max-w-[655.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  5. Rewards For Picking The Winner
                </h2>
              </div>
              <ol className="flex flex-col pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400]">
                  All participants will receive the winning coin.
                </li>
                <li className="text-[20px] font-[700] text-[#FFF]">
                  <strong>
                    However, only the winning team will receive the exclusive
                    prize money, which will be airdropped to their wallets.
                  </strong>
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  Find more details below. Winners can claim their coins 24
                  hours earlier.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-between Rulesborder2 px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="max-w-[755.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  6. Transparency And Fairness
                </h2>
              </div>
              <ol className="flex flex-col pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Public Contracts:</span> Both
                  pre-sale contracts are fully visible to ensure complete
                  transparency.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Fair Play:</span> Each wallet is
                  limited to $25,000 to give everyone a chance to participate.
                </li>
              </ol>
            </div>
            <div className="w-[40%] flex justify-end rounded-[30px]">
              <img
                src={rule6}
                alt="card_image_8"
                className="min-h-[195px] w-[250px] rounded-[30px]"
              />
            </div>
          </div>
          <div className="flex justify-between  Rulesborder px-[90px] pt-[35px] pb-[25px] items-start w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img
                src={rule7}
                alt="card_image_9"
                className="min-h-[190px] w-[250px] rounded-[30px]"
              />
            </div>
            <div className="max-w-[655.98px] w-[100%] flex flex-col gap-6">
              <div className="">
                <h2 className="text-[32px] font-HiJack font-[400] text-[#fff]">
                  7. SUPPORT YOUR TEAM
                </h2>
                <p className="pl-[2.0rem] text-[18px] pb-[0px] text-[#FFF] ">
                  Join the community on X and Telegram to stay updated with the
                  latest news and be part of the story. Do not forget to share
                  Doge vs Pepe with your friends, as they will not want to miss
                  out!
                </p>
              </div>
              <ol className="flex flex-col pl-[52px] text-base leading-relaxed text-gray-200 list-disc">
                <li className="text-[20px] text-[#FFF] font-[400] ">
                  General Channel: For updates and discussions.
                </li>
                <li className="text-[20px] font-[400] text-[#FFF]">
                  Team Pepe Channel: For Pepe supporters.
                </li>
                <li className="text-[20px] text-[#FFF] font-[400]">
                  Team Doge Channel: For Doge believers.
                </li>
              </ol>
              <div className="pt-[10px] flex gap-4 pl-8">
                <a
                  href="https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00B7FF] max-w-[130px] flex justify-center space-x-2 items-center w-[100%] rounded-full h-[39px] uppercase text-[18px] text-[#fff] font-[600] transition-all duration-300 hover:bg-[#F2B60F] hover:text-[#fff]"
                >
                  Join X
                  <div className="bg-[white] w-7 h-7 rounded-full ml-4 flex justify-center items-center">
                    <img
                      src={xicn}
                      className="w-3 h-3 transition-transform duration-300 hover:scale-110"
                      alt="card_image_10"
                    />
                  </div>
                </a>

                <button className="bg-[#00B7FF] max-w-[210px] flex justify-center space-x-2 items-center w-[100%]   rounded-full h-[39px] uppercase text-[18px] text-[#fff] font-[600] transition-all duration-300 hover:bg-[#F2B60F] hover:text-[#fff]">
                  Join Telegram
                  <img
                    src={telicn}
                    className="ml-4 transition-transform duration-300 hover:scale-110"
                    alt="card_image_10"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheRulesSec;
