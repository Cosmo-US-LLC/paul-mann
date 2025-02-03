import React from "react";
import fightimg from "../../assets/FightSec/fight.png";
import mobimg from "../../assets/FightSec/doge-vs-pepe.webp";
import mobicons from "../../assets/FightSec/d-p-suppoter.webp";

import vsimgr from "../../assets/FightSec/Arrowrght.svg";
import vsimgl from "../../assets/FightSec/Arrowlf.svg";

function TheFightSecMob() {

  return (
    <div className="relative w-[100%] pt-[90px] pb-[60px] overflow-hidden">
      <div className=" w-[90%] mx-auto space-y-[20px] ">
        <div className="space-y-[12px]">
          <h3 className="text-[25px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            The Fight is <br  /> Made Possible By
          </h3>
          <p className="text-[15px] max-w-[869px] w-[100%] mx-auto text-center font-[400] text-[#fff]">
            A huge thank you to the incredible service
            providers who have made the  Doge vs. Pepe boxing event a reality! <br /><br />
            This groundbreaking showdown wouldn’t be possible without the
            support of the innovative platforms, software, and database
            solutions that power every aspect of this event.
          </p>
            <div className="max-w-[400px] pt-[10px] w-[100%] justify-between flex items-center  mx-auto">
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
                        src={vsimgr}
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
                        src={vsimgl}
                        alt=""
                      />
                    </button>
                  </div>
        </div>
        <div className="space-y-[20px] relative">
        {/* <div className="absolute inset-0 bg-black opacity-10 rounded-[10px] pointer-events-none"></div> */}

          <img className="  h-[275.78px] mx-auto" src={mobimg} alt="" />
          <img className="h-[382.29px]   mx-auto" src={mobicons} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TheFightSecMob;
