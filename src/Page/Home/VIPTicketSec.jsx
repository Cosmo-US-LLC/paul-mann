import React from "react";
import img1 from "../../assets/Vipticketsec/img (1).png";
import img3 from "../../assets/Vipticketsec/img (2).png";
import img2 from "../../assets/Vipticketsec/icon2.svg";
import starts from "../../assets/Vipticketsec/Star.svg";
import vector from "../../assets/Vipticketsec/Ellipse 143.png";
import topSgodow from "../../assets/top-shodow.webp";
import bottomShadow from "../../assets/Vipticketsec/rectangle_284.webp";

function VIPTicketSec() {
  return (
    <div className="overflow-hidden w-[100%] h-[1342px] pt-[60px] pb-[80px] bgmainvip relative">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topSgodow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={bottomShadow} alt="" />
      </div>
      <div className="max-w-[1291.63px] h-[100%] space-y-[45px] w-[100%] mx-auto flex flex-col justify-center items-center">
        <div className="max-w-[868px] mx-auto z-10 mt-6">
          <h3
            className="text-[#FFFCFC] text-center text-[50px] font-[400] uppercase font-HiJack"
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
          >
            Get Your VIP Ticket For The Fight
          </h3>
          <p
            className="text-[24px] text-center font-[600] text-[#FFF] mt-3"
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
          >
            The long-awaited fight of the year is just around the corner! To get
            early access and join the action, make sure to secure your whitelist
            spot
          </p>
        </div>
        <div
          className="max-w-[1012px] mx-auto w-[100%] pt-[100px] pb-[25px] px-[25px] rounded-[49px] border border-[#fff] z-10"
          style={{
            background: "rgba(0, 0, 0, 0.16)",
            backdropFilter: "blur(8.300000190734863px)",
          }}
        >
          <div className="relative pb-1 bgmainvipcard">
            <div className="flex items-center justify-center">
              <div className="absolute -top-[12%] ">
                <h2
                  className="text-[#FFBF01] text-center font-HiJack text-[168.593px] leading-[80%] font-[400] uppercase"
                  style={{
                    WebkitTextStrokeWidth: "2.8px",
                    WebkitTextStrokeColor: "#000",
                  }}
                >
                  VIP
                </h2>
                <h3
                  className="text-[#fff] text-center tracking-[2px] font-HiJack text-[75.515px] leading-[90%] font-[400] uppercase"
                  style={{
                    WebkitTextStroke: "2px",
                    WebkitTextStrokeColor: "#000",
                  }}
                >
                  Ticket
                </h3>
                <p
                  className="text-[#fff] text-center text-[20px] font-[600]"
                  style={{
                    textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
                  }}
                >
                  World's Meme Heavyweight Championship
                </p>
              </div>
            </div>

            <div className="px-[55px] pt-[30px] pb-[20px] flex justify-between items-center">
              <p
                className="text-[18px] font-[400] text-[#fff]"
                style={{
                  textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
                }}
              >
                Main Event
              </p>
              <p
                className="text-[18px] font-[400] text-[#fff]"
                style={{
                  textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
                }}
              >
                9 February at 5 pm UTC
              </p>
            </div>
            <div className="flex justify-between items-end px-[50px]">
              <div>
                <img src={img1} alt="" />
              </div>

              <img
                src={vector}
                className="absolute top-0 max-h-[600px] z-[-1]"
                alt=""
              />
              <div className="pb-1">
                <img src={img2} alt="" />
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="bgmainvipcardbox py-[15px] w-[99%] mx-auto px-[50px] flex justify-between">
              <h3
                className="text-[#FFBF01] font-HiJack text-[98.498px] leading-[100%] font-[400] uppercase"
                style={{
                  WebkitTextStroke: "2",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                Doge
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <img src={starts} alt="" />
                <img src={starts} alt="" />
                <img src={starts} alt="" />
                <img src={starts} alt="" />
                <img src={starts} alt="" />
              </div>
              <h3
                className="text-[#00FF2F] font-HiJack text-[98.498px] leading-[100%] font-[400] uppercase"
                style={{
                  WebkitTextStroke: "2",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                Pepe
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-[2rem] mt-2 z-10">
          <button
            className="text-[#000] text-[32px] font-[700] text-center mx-auto rounded-[60px] px-12 max-w-[457px] w-[100%] h-[94px]"
            style={{
              background: "linear-gradient(90deg, #FFBF01 0%, #01FE37 134.57%)",
              boxShadow: "0px 2px 0px 0px #FFF",
            }}
            onClick={() => {
              window.location.href = "https://forms.gle/J11hnTDHwJVfhY348";
            }}
          >
            Join The Whitelist Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default VIPTicketSec;
