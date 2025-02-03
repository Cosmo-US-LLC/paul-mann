import React, { useRef } from "react";
import howitimg from "../../assets/HowItSec/how-it-img4.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import vecleft from "../../assets/HowItSec/P (43).png";
import vecright from "../../assets/HowItSec/P (43) (1).png";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import img1 from "../../assets/HowItSec/slide1.webp";
import img2 from "../../assets/HowItSec/slide2.webp";
import img3 from "../../assets/HowItSec/slide3.webp";
import img4 from "../../assets/HowItSec/slide4.webp";
import img5 from "../../assets/HowItSec/slide5.webp";
import img6 from "../../assets/HowItSec/slide6.webp";
import img7 from "../../assets/HowItSec/slide7.webp";
import img8 from "../../assets/HowItSec/slide8.webp";
import img9 from "../../assets/HowItSec/slide9.webp";
import img10 from "../../assets/HowItSec/slide10.webp";
function HowItmobSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div
      className="w-[100%] howitbg overflow-hidden pt-[60px] pb-[50px]"
      id="how-it-all-began"
    >
      <div
        className="relative  rounded-[20.9px] w-[90%] mx-auto relative min-h-[480px]  bg-[#01010182]"
        style={{ backdropFilter: "blur(9.899999618530273px)" }}
      >
        <div className="howitborder px-[22px] pt-[20px] pb-[80px]">
          <div className="space-y-[20px]">
            <p className="text-[#fff] leading-[114%] font-[400] text-[12px] text-center">
              Chapter I
            </p>
            <h3 className="text-[#FFFCFC] font-HiJack text-center text-[22px] leading-[104.377%] font-[400]">
              How It All Began
            </h3>
            <p className="max-w-[317px] w-[100%] font-[400] mx-auto text-[#fff] leading-[114%] text-[15px] text-center">
              The rivalry started when Pepe, the rising star, climbed to #3
              among all meme heavyweight champions and called out Doge, the
              undefeated champion. Doge couldn’t let this slide. After months of
              back-of-forth insults on social media, they ran into each other at
              MOON, the city’s hottest nightclub. Things escalated quickly,
              turning into a big fight with serious consequences.
            </p>
            <div className="relative flex justify-center w-full">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                navigation={{
                  nextEl: ".swiper-button-next4",
                  prevEl: ".swiper-button-prev4",
                }}
                className="max-w-[240px]"
              >
                {[
                  img1,
                  img2,
                  img3,
                  img4,
                  img5,
                  img6,
                  img7,
                  img8,
                  img9,
                  img10,
                ].map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="!h-[25px] !w-[25px] swiper-button-prev4   cursor-pointer  absolute !left-[-1%] !top-[45%] rotate-180">
                <img
                  src={awr1}
                  className="!h-[20px] !w-[20px]"
                  alt="Previous"
                />
              </div>
              <div className="!h-[25px] !w-[25px] swiper-button-next4   cursor-pointer  absolute !right-[-1%] !top-[45%] ">
                <img src={awr1} className="!h-[20px] !w-[20px]" alt="Next" />
              </div>
            </div>

            <div className="space-y-[10px]">
              <h3 className="text-[#FFFCFC] font-HiJack text-center text-[22px] leading-[104.377%] font-[400]">
                More info coming soon
              </h3>

              <div className="flex flex-col justify-center space-y-2">
                <div
                  className="flex items-center justify-center gap-1 space-x-1 cursor-pointer"
                  onClick={() => {
                    window.location.href =
                      "https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09";
                  }}
                >
                  <p className="text-[12px] font-[600] text-[#fff] leading-3 uppercase">
                    Join X
                  </p>
                  <img className="w-[18px] h-[18px]" src={telicon1} alt="" />
                </div>

                <div className="flex items-center justify-center gap-1 space-x-1">
                  <p className="text-[12px] font-[600] text-[#fff] leading-3 uppercase">
                    {" "}
                    Join Telegram
                  </p>
                  <img
                    className="cursor-pointer w-[18px] h-[18px]"
                    src={telicon2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={vecleft}
          className="absolute z-10 bottom-[-10%] max-h-[200px] left-[-20%]"
          alt=""
        />
        <img
          src={vecright}
          className="absolute z-10 bottom-[-10%] max-h-[200px] right-[-23%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default HowItmobSec;
