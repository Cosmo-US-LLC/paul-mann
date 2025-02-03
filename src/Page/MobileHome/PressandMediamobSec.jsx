import React from "react";
import pressicn1 from "../../assets/PressSec/coin-market-cap.webp";
import pressicn2 from "../../assets/PressSec/coin-pedia.webp";
import pressicn3 from "../../assets/PressSec/updates-thecrypto.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";

function PressandMediamobSec() {
  return (
    <div className=" w-[100%] pt-[60px] pb-[60px] Pressbgmob relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-15 rounded-[10px] pointer-events-none"></div>
      <div className="relative max-w-[1139px] w-[100%] space-y-[50px] mx-auto ">
        <div className=" w-[100%]">
          <h3 className="text-[25px] text-center font-HiJack leading-[102.804%] font-[400] text-[#FFF] uppercase">
            Press and Media
          </h3>
        </div>
        <div className="max-w-[510px] w-[100%] relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            className="!max-w-[300px]  mx-auto"
            navigation={{
              nextEl: ".swiper-button-next1",
              prevEl: ".swiper-button-prev1",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="bg-[#28649721] p-4 relative rounded-[21.168px] z-10"
                style={{
                  WebkitBackdropFilter: "blur(17.731342315673828px)",  
                  backdropFilter: "blur(17.731342315673828px)",
                  background: "rgba(0, 0, 0, 0.48)",  
                  borderRadius: "18.168px",
                }}
              >
                <div className="Pressborder flex justify-between flex-col min-h-[350px] max-w-[333px] h-[100%] px-2 pt-10 pb-5 space-y-[0px] w-[100%]">
                  <div className="min-h-[150px] flex justify-center items-center">
                    <img src={pressicn1} className="relative z-10 w-[178px] h-[122px]" alt="" />
                  </div>
                  <div className="flex items-start h-[100%]">
                    <p className="text-[15px] text-[#fff] text-center font-[400] relative z-10">
                      Doge or Pepe? Fans are rallying to decide who has the
                      strongest community. Will Doge stay on top, or is Pepe set
                      to dethrone him? The battle is on!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="bg-[#28649721] p-4 relative rounded-[18.168px]"
                style={{
                  WebkitBackdropFilter: "blur(17.731342315673828px)",
                  backdropFilter: "blur(17.731342315673828px)",
                  background: "rgba(0, 0, 0, 0.48)",
                  borderRadius: "18.168px",
                }}
              >
                <div className="Pressborder  flex justify-between flex-col min-h-[350px] max-w-[333px] h-[100%] px-2 pt-10 pb-5 w-[100%]">
                  <div className="min-h-[150px] flex justify-center items-center">
                    <img src={pressicn2} className="relative z-10 w-[188px] h-[51px]" alt="" />
                  </div>
                  <div className="flex items-start h-[100%]">
                    <p className="text-[15px] text-[#fff] text-center font-[400]">
                      Two legendary memes face off in an exciting presale, with
                      rumors of well-known crypto developers behind the project.
                      This could be the next big thing!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#28649721] p-4 relative rounded-[18.168px]"
                style={{
                  WebkitBackdropFilter: "blur(17.731342315673828px)",
                  backdropFilter: "blur(17.731342315673828px)",
                  background: "rgba(0, 0, 0, 0.48)",
                  borderRadius: "18.168px",
                }}
              >
                <div className="Pressborder  flex justify-between flex-col min-h-[350px] max-w-[333px] h-[100%] px-2 pt-10 pb-5  w-[100%]">
                  <div className="min-h-[150px] flex justify-center items-center">
                    <img src={pressicn3} className="relative z-10 w-[201px] h-[75px]" alt="" />
                  </div>
                  <div className="flex items-start h-[100%]">
                    <p className="text-[15px] text-[#fff] text-center font-[400]">
                      Finding the next winning narrative is the key to hitting
                      big with memes. Two presales, but only one will win and
                      launch! Backed by two of the most iconic meme coins, this
                      might just be it.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="!h-[10px] !w-[8px] swiper-button-prev1 swiper-button-next cursor-pointer  absolute !left-[2%] !top-[52%] rotate-180">
            <img src={awr1} className="" alt="Previous" />
          </div>
          <div className="!h-[10px] !w-[8px] swiper-button-next1 swiper-button-next cursor-pointer  absolute !right-[2%] !top-[52%] ">
            <img src={awr1} className="" alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressandMediamobSec;
