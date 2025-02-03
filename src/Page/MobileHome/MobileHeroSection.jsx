import React from "react";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import vsimg from "../../assets/herosec/vs.png";
import vsimgr from "../../assets/herosec/vects (2).png";
import vsimgl from "../../assets/herosec/vects (1).png";
import downArrow from "../../assets/herosec/down-arrow.svg";

import coinMarketCop from "../../assets/Mobile/coin-market-cop.webp";
import ambCrypto from "../../assets/Mobile/amb-crypto.webp";
import cryptoNews from "../../assets/Mobile/cryptonews.webp";
import bitCoinist from "../../assets/Mobile/bitcoinist.webp";
import newsBit from "../../assets/Mobile/newsbit.webp";

function MobileHeroSection() {
  const handleScroll = (event, targetId, offset = 0) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const elementPosition =
        targetElement.getBoundingClientRect().top + scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-[100%] bgheromobsec pt-[5rem] min-h-[647px] relative"
      id="what-is"
    >
      <div className="w-[90%] relative mx-auto px-3">
        <div className="max-w-[575px] w-full flex flex-col justify-center items-center mx-auto">
          <div className="flex items-end justify-center space-x-[15px] text-stroke-2">
            <h1
              className="text-[#ffbf0c] text-[50px] font-[400] font-HiJack"
              style={{
                WebkitTextStrokeWidth: "2.301823854446411px",
                WebkitTextStrokeColor: "#000",
                textShadow: "3.76px -0.47px 14.147px #F1AD03",
              }}
            >
              DOGE
            </h1>

            <h4
              className="text-[#FFF] text-[22.559px] font-[400] font-Lato h-[48px]"
              style={{
                textShadow: "0px 0px 4.534px #74FF60",
                WebkitTextStrokeWidth: "1.2px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              VS.
            </h4>

            <h1
              className="text-[#00FF2F] text-[50px] font-[400] font-HiJack"
              style={{
                textShadow: "3.76px -0.47px 14.147px #74FF60",
                WebkitTextStrokeWidth: "2.301823854446411px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              PEPE
            </h1>
          </div>

          <h3 className="w-[340px] text-[23px] font-HiJack drop-shadow-[0px_0px_15px_rgba(0,0,0)] uppercase leading-[1.13] text-[#FFF] text-center ">
            THE ULTIMATE showdown
          </h3>
          <h4 className="w-[340px] text-[20px] font-semibold drop-shadow-[0px_0px_15px_rgba(0,0,0)] pb-4 leading-[1.3] text-[#FFF] text-center">
            Who’s Raising $1 Million First?
            {/* Who’s Raising <span className="text-[#00FF2F]">$1 Million</span> */}
            {/* &nbsp; First? */}
          </h4>
          <p className="text-[14px] max-w-[320px] w-full pb-4 mx-auto font-[700] leading-[1.2] rounded-[15px] px-2 py-4 text-[#FFF] border border-white bg-[#0000009f] text-center drop-shadow-xl shadow-md shadow-neutral-800">
            Only one will win this epic fight and launch!
            <br />
            <br />
            On one side, we have Doge, the undefeated OG Meme Heavyweight
            Champion, dominating the meme world for years with his unpredictable
            style.
            <br />
            <br />
            On the other side, we have Pepe, the fearless rising star, already
            ranked in the top 3 meme heavyweights and famous for his brutal
            knockouts.
            <br />
            <br />
            The first to hit $1M wins the championship and launches. The choice
            is yours!
          </p>
        </div>

        <div className="flex items-center justify-center pt-2">
          <img
            src={vsimgr}
            className="h-[294px] w-[153px] object-contain"
            alt=""
          />
          <img
            src={vsimg}
            className="w-[63px] h-[55px] object-contain mb-8"
            alt=""
          />
          <img
            className="h-[283px] w-[131px] object-contain rotate-1 mb-3"
            src={vsimgl}
            alt=""
          />
        </div>
      </div>

      <div className="max-w-[618px] w-[100%] flex items-center justify-evenly gap-4 px-6 pb-5">
        <button
          className="rounded-[60px] max-w-[112.957px] w-[100%] h-[25px] flex justify-center items-center text-[9px] font-[700] text-[#000] space-x-2"
          style={{
            background: "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
            boxShadow: "0px 2px 0px 0px #FFF",
          }}
        >
          <img className="mr-2 max-h-[10px]" src={arwr} alt="" />
          BUY $DOGE
        </button>
        <button
          className=" rounded-[60px] max-w-[112.957px] w-[100%] h-[25px] flex justify-center items-center text-[9px] font-[700] text-[#000] space-x-2"
          style={{
            background: "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
            boxShadow: "0px 2px 0px 0px #FFF",
          }}
        >
          BUY $PEPE <img className="ml-2 max-h-[10px]" src={arwl} alt="" />
        </button>
      </div>
      {/* <div className="absolute bottom-[0%] left-0 right-0 flex items-center justify-center z-30">
        <img
          className="h-[32px] w-[32px]"
          src={downArrow}
          alt=""
          onClick={(e) => handleScroll(e, "how-to-buy", 50)}
        />
      </div> */}
      <div className="w-full py-4 bg-black">
        <h2 className="text-[#FFFCFC] text-center text-[22px] font-HiJack font-[400] uppercase mb-2">
          As Seen On
        </h2>

        <div className="flex items-center justify-start overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            <img
              src={coinMarketCop}
              alt="Coin market cop"
              className="h-[20px] mx-4"
            />
            <img src={ambCrypto} alt="AMB Crypto" className="h-[20px] mx-4" />
            <img src={cryptoNews} alt="Crypto News" className="h-[20px] mx-4" />
            <img src={bitCoinist} alt="Bitcoinist" className="h-[20px] mx-4" />
            <img src={newsBit} alt="NewsBit" className="h-[20px] mx-4" />
            <img src={ambCrypto} alt="AMB Crypto" className="h-[20px] mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeroSection;
