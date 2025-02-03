import React from "react";
import cardimg2 from "../../assets/CommunitySec/pepe-icon.webp";
import cardimg1 from "../../assets/CommunitySec/doge-icon.webp";
import vectcard2 from "../../assets/CommunitySec/Ellipse 80.webp";
import vectcard1 from "../../assets/CommunitySec/Ellipse 81.webp";
import arwl from "../../assets/herosec/Arrowlf.svg";
import arwr from "../../assets/herosec/Arrowrght.svg";
import topShadow from "../../assets/CommunitySec/rectangle_290.webp";
import bottomShadow from "../../assets/CommunitySec/rectangle_294.webp";

function CommunitySec() {
  return (
    <div className="w-[100%] flex justify-center items-center  h-[900px] Communitybg overflow-hidden relative">
       <div className="absolute top-0 left-0 right-0 w-full h-full">
              <img className="w-full h-full" src={topShadow} alt="" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full h-full">
              <img className="w-full h-full" src={bottomShadow} alt="" />
            </div>
      <div className="max-w-[1312px] px-[30px] py-[80px] space-y-[40px] w-[100%] mx-auto z-10 relative"
       style={{backdropFilter:"blur(9.899999618530273px)",
        background: "rgba(0, 0, 0, 0.47)",
        borderRadius: "21.168px",
       }}
      >
        <div>
          <h3
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
            className="text-[50px] text-[#FFFCFC] font-HiJack text-center font-[400]"
          >
            The Community Decides{" "}
          </h3>
          <p
            style={{
              textShadow: "0px 0px 26.2px #000, 0px 0px 14.5px #000",
            }}
            className="text-[20px] font-[400] text-center text-[#FFF]"
          >
            This isn’t just about picking a meme <br /> it’s about choosing a
            winner that you are proud to represent.{" "}
          </p>
        </div>
        <div className="flex justify-between space-x-[15px]">
          <div
            className="p-4 relative rounded-[21.168px]"
            // style={{
            //   backdropFilter: "blur(25.049999237060547px)",
            //   background: "rgba(0, 0, 0, 0.47)",
            //   borderRadius: "21.168px",
            // }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)", // Apply blur here
                WebkitBackdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.47)", // Semi-transparent background
                borderRadius: "21.168px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={vectcard1}
              className="absolute -left-[18%] top-[6%] z-[10]"
              alt=""
            />
            <div className="flex roadborder  relative max-w-[588px] space-x-[2rem]  w-[100%]  px-5 py-11 justify-between ">
              <div className="w-[38%] min-h-[220px]">
                <img src={cardimg1} className="h-[220px] absolute left-2 top-2" alt="" />
              </div>
              <div className="w-[62%] space-y-[10px]">
                <div>
                  <h3 className="text-[22px] text-[#FFF] font-HiJack font-[400]">
                    TEAM DOGE
                  </h3>
                  <hr className="bg-[#F1A900] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] text-[#FFF] font-HiJack font-[400]">$DOGE</h4>
                <p className="text-[18px] text-[#FFF] font-[400] leading-[130%]">
                "Pepe, you’re just a hyped up fair-weather fighter. This will be my easiest payday. I’ll show you why I’m the undisputed champ!"
                </p>
                <button
                  className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2 absolute bottom-[-17px] left-[32%] transition-all duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)",
                    boxShadow: "0px 2px 0px 0px #FFF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
                    e.currentTarget.style.boxShadow =
                      "0px 4px 8px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #FEC576 0%, #FFBF01 100%)";
                    e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
                  }}
                >
                  <img className="mr-2" src={arwr} alt="" />
                  BUY $DOGE
                </button>
              </div>
            </div>
          </div>
          <div
            className="p-4 relative rounded-[21.168px]"
            style={{
              // backdropFilter: "blur(25.049999237060547px)",
              // background: "rgba(0, 0, 0, 0.47)",
              // borderRadius: "21.168px",
            }}
          > 
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(15px)", // Apply blur here
                WebkitBackdropFilter: "blur(15px)",
                backgroundColor: "rgba(0, 0, 0, 0.47)", // Semi-transparent background
                borderRadius: "21.168px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={vectcard2}
              className="absolute -right-[40%] -top-[60%]"
              alt=""
            />
            <div className="flex card2border  max-w-[588px] space-x-[2rem]  w-[100%]  px-5 py-11 justify-between ">
              <div className="w-[38%] min-h-[220px]">
                <img src={cardimg2} className="h-[220px] absolute left-2 top-2" alt="" />
              </div>
              <div className="w-[62%] space-y-[10px]">
                <div>
                  <h3 className="text-[22px] font-HiJack text-[#FFF] font-[400]">
                    TEAM PEPE
                  </h3>
                  <hr className="bg-[#4EB52A] h-[5px] border-none w-[68px] rounded-full" />
                </div>
                <h4 className="text-[20px] font-HiJack text-[#FFF] font-[400]">$PEPE</h4>
                <p className="text-[18px] text-[#FFF] font-[400] leading-[130%]">
                "Doge, your time is up. You’re just an old dog now. One punch, and I’ll have you chasing your tail! This will be your retirement party!"
                </p>
                <button
                  className="rounded-[60px] max-w-[175px] w-[100%] h-[40px] flex justify-center items-center text-[14px] font-[700] text-[#000] space-x-2 absolute bottom-[-17px] left-[32%] transition-all duration-300  hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)",
                    boxShadow: "0px 2px 0px 0px #FFF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #F2B60F 0%, #F7D635 100%)";
                    e.currentTarget.style.boxShadow =
                      "0px 4px 8px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #7CEC91 0%, #01FE37 100%)";
                    e.currentTarget.style.boxShadow = "0px 2px 0px 0px #FFF";
                  }}
                >
                  BUY $PEPE <img className="ml-2 " src={arwl} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySec;
