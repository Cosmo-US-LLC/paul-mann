import React from "react";
// import rule_1 from "../../assets/Mobile/rule_1.webp";
// import rule_2 from "../../assets/Mobile/rule_2.webp";
// import rule_3 from "../../assets/Mobile/rule_3.webp";
// import rule_4 from "../../assets/Mobile/rule_4.webp";
// import rule_5 from "../../assets/Mobile/rule_5.webp";
// import rule_6 from "../../assets/Mobile/rule_6.webp";
// import rule_7 from "../../assets/Mobile/rule_7.webp";
import rule1 from "../../assets/Mobile/rules1.png";
import rule2 from "../../assets/Mobile/rules2.png";
import rule3 from "../../assets/Mobile/rules3.png";
import rule4 from "../../assets/Mobile/rules4.png";
import rule5 from "../../assets/Mobile/rules5.png";
import rule6 from "../../assets/Mobile/rules6.png";
import rule7 from "../../assets/Mobile/rules7.png";
// import side_dog from "../../assets/Mobile/doge-mobile.png";
// import side_frog from "../../assets/Mobile/pepe-mobile.png";
// import telegram_icon from "../../assets/Mobile/telegram_icon.svg";

function TheRules() {
  return (
    <div
      id="rules"
      className="flex flex-col items-center p-4 px-4 border-t border-transparent bgRulesmob"
    >
      <p className="text-[22px] leading-[31px] text-[white] mt-4 mb-4 font-HiJack">
        THE 7 RULES
      </p>

      <div className="flex flex-col gap-y-2.5 pb-14">
        <RuleCard img={rule1} number="1." title="PICK YOUR CHAMPION">
          <ol className="flex flex-col gap-4 pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[#FFF]">
              <span className="text-[15px] text-[#FFF] font-[700]">
                Team Doge ($DOGE)
              </span>{" "}
              <br />{" "}
              <p className="text-[15px] text-[#FFF] font-[400] leading-snug">
                The undisputed and undefeated Meme Heavyweight Champions who
                pave the way for all others. If you stand for legacy and
                greatness, this is your corner!
              </p>
            </li>
            <li className="text-[#FFF]">
              <span className="text-[15px] text-[#FFF] font-[700]">
                Team Pepe ($PEPE)
              </span>{" "}
              <br />{" "}
              <p className="text-[15px] text-[#FFF] font-[400] leading-snug">
                No one has shaken up the Meme Heavyweight scene in recent years
                like this maverick. If you stand for bold moves and fresh
                energy, this is your corner!
              </p>
            </li>
          </ol>
        </RuleCard>

        <RuleCard
          img={rule2}
          number="2."
          title="BUY TO SUPPORT <br /> YOUR TEAM"
        >
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              Buy tokens and support your favorite meme.
            </li>
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              Every token purchased is a vote toward their victory.
            </li>
          </ol>
        </RuleCard>

        <RuleCard img={rule3} number="3." title="THE RACE TO $1 MILLION">
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              The fight is decided when the first team reaches $1 million.
            </li>
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              Only the winner will remain and launch.
            </li>
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              The launch date will be announced directly after the first coin
              reaches $1M.
            </li>
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              Until the launch date, only the winner coin can be purchased.
            </li>
          </ol>
        </RuleCard>

        <RuleCard img={rule4} number="4." title="THE WINNER TAKES IT ALL">
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              The losing team’s funds aren’t wasted. They’re added to the
              liquidity pool of the winning team, making the winner’s token
              stronger and more valuable.
            </li>
            <br />
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              The launch is taking place shortly after the winner is announced.
              The time in between will be used to secure CEX listings and ensure
              the best possible launch.
            </li>
          </ol>
        </RuleCard>

        <RuleCard
          img={rule5}
          number="5."
          title="REWARDS FOR <br /> PICKING THE WINNER"
        >
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              All participants will receive the winning coin.
            </li>
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              However, only the winning team will receive the exclusive prize
              money, which will be airdropped to their wallets.
            </li>
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              Find more details below. Winners can claim their coins 24 hours
              earlier.
            </li>
          </ol>
        </RuleCard>

        <RuleCard
          img={rule6}
          number="6. "
          title="TRANSPARENCY <br /> AND FAIRNESS"
        >
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              <strong>Public Contracts:</strong> Both pre-sale contracts are
              fully visible to ensure complete transparency.
            </li>
            <br />
            <li className="text-[15px] text-[#FFF] font-[400] leading-snug">
              <strong>Fair Play:</strong> Each wallet is limited to $25,000 to
              give everyone a fair chance to participate.
            </li>
          </ol>
        </RuleCard>

        <RuleCard img={rule7} number="7." title="SUPPORT YOUR TEAM">
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-none">
            <p className="text-[15px] text-[#FFF] font-[700] leading-snug">
              Join the community on X and Telegram to stay updated with the
              latest news and be part of the story. Do not forget to share Doge
              vs Pepe with your friends, as they will not want to miss out!
            </p>
          </ol>
          <ol className="flex flex-col pl-6 mt-2 text-base leading-relaxed text-gray-200 list-disc">
            <li className="text-[15px] text-[#FFF] font-[700] leading-snug">
              General Channel: For updates and discussions.
            </li>
            <li className="text-[15px] text-[#FFF] font-[700] leading-snug">
              Team Pepe Channel: For Pepe supporters.
            </li>
            <li className="text-[15px] text-[#FFF] font-[700] leading-snug">
              Team Doge Channel: For Doge believers.
            </li>
          </ol>
        </RuleCard>
      </div>
    </div>
  );
}

function RuleCard({ img, title, children, number }) {
  return (
    <div className="relative flex flex-col items-center w-full rounded-[10px]">
      <div className="flex flex-col items-center justify-center bg-[#181818] rounded-[10px] w-full p-4 pt-1">
        <img
          src={img}
          className="object-contain w-full h-auto mt-2"
          alt="rule_1"
        />
        <div className="flex flex-col items-start justify-center w-[300px] mt-4">
          <div className="flex items-start space-x-1">
            <span className="text-[22px] leading-[26px] text-[white] font-HiJack">
              {number}
            </span>
            <p
              className="text-[22px] leading-[26px] text-[white] font-HiJack"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default TheRules;
