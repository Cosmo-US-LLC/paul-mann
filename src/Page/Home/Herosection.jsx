import React from "react";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import vsimg from "../../assets/herosec/vs.png";
import doge from "../../assets/herosec/hero-doge.webp";
import pepe from "../../assets/herosec/hero-pepe.webp";
import downShodow from "../../assets/herosec/down-shodwo.svg";
import downArrow from "../../assets/herosec/down-arrow.svg";

function HeroSection() {
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="relative w-[100%] bgherosec pt-[9rem] pb-[30px] h-[770px]"
      id="what-is"
    >
      <img
        src={downShodow}
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        alt=""
      />
      <div className="max-w-[1245px] w-[100%] mx-auto relative min-h-[700px]">
        <div className="max-w-[575px] w-[100%] mx-auto text-center flex flex-col gap-2">
          <div className="flex items-center justify-center space-x-4">
            <h1
              className="text-[#F2B60F]  font-HiJack   text-[83.305px] font-[700] "
              style={{
                textShadow: "6.534px -0.817px 24.583px #F1AD03",
                WebkitTextStrokeWidth: "1.5px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              DOGE
            </h1>
            <h4
              className="text-[#fff] text-[31.852px] font-[400] "
              style={{
                textShadow: "0px 0px 7.024px #74FF60",
                WebkitTextStrokeWidth: "1.5px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              <img className="max-w-[83px]" src={vsimg} alt="" />
            </h4>
            <h1
              className="text-[#00FF2F] font-HiJack text-[83.305px] font-[700] "
              style={{
                textShadow: "6.534px -0.817px 24.583px #74FF60",
                WebkitTextStrokeWidth: "1.5px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              PEPE
            </h1>
          </div>
          <h3 className="text-[39px] font-[400] font-HiJack uppercase leading-[43.838px] text-[#FFF]  text-center">
            THE ULTIMATE showdown
          </h3>
          <h4 className="text-[34px] font-[700] leading-[43.838px] text-[#FFF] text-center">
            Who’s Raising $1 Million First?
          </h4>
          <div
            className="border rounded-[26.9px] px-4 max-w-[593px] w-[100%] py-6"
            style={{
              boxShadow: "0px 8px 13.3px 0px rgba(0, 0, 0, 0.49",
              backgroundColor: "#242424c9",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="text-[20px] max-w-[536px] w-[100%] mx-auto font-[700] leading-[22px] text-[#FFF]">
              Only one will win this epic fight and launch! <br /> <br /> On one
              side, we have Doge, the undefeated OG Meme Heavyweight Champion,
              dominating the meme world
              <br /> for years with his unpredictable style.
              <br /> <br /> On the other side, we have Pepe, the fearless rising
              star, already ranked in the top 3 meme heavyweights and famous for
              his brutal knockouts. <br />
              <br />
              The first to hit $1M wins the championship and launches. The
              choice is yours!
            </p>
          </div>
        </div>
        <div className="max-w-[573px] pt-[23px] w-[100%] justify-between flex items-center  mx-auto">
          <button
            className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2 transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
              boxShadow: "0px 2px 0px 0px #FFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #FFBF01 0%, #FEC576 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)";
            }}
          >
            <img
              className="mr-2 transition-transform duration-300 hover:scale-110"
              src={arwr}
              alt=""
            />
            BUY $DOGE
          </button>
          <button
            className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2 transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
              boxShadow: "0px 2px 0px 0px #FFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #01FE37 0%, #7CEC91 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
            }}
          >
            BUY $PEPE{" "}
            <img
              className="ml-2 transition-transform duration-300 hover:scale-110"
              src={arwl}
              alt=""
            />
          </button>
        </div>
        <div className="absolute -left-[3%] bottom-[2%] w-[370px] h-[690px]">
          <img src={doge} className="w-full h-full" alt="" />
        </div>
        <div className="absolute -right-3 bottom-[5%] w-[335px] h-[690px]">
          <img className="w-full h-full" src={pepe} alt="" />
        </div>
      </div>
      <div className=" bottom-[-3%]  absolute left-0 right-0 flex items-center justify-center z-30">
        <img
          className="transition-all duration-300 cursor-pointer hover:animate-bounce hover:scale-110"
          src={downArrow}
          alt=""
          onClick={(e) => handleScroll(e, "how-to-buy", 90)}
        />
      </div>
    </div>
  );
}

export default HeroSection;
