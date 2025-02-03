import React from "react";
import howitimg from "../../assets/HowItSec/how-it-img3.png";
import telicon1 from "../../assets/HowItSec/logos_telegram.svg";
import telicon2 from "../../assets/HowItSec/logos_telegram (1).svg";
import vecleft from "../../assets/HowItSec/P (43).png";
import vecright from "../../assets/HowItSec/P (43) (1).png";
import topShadow from "../../assets/tokenomics/rectangle_306.webp";
import bottomShadow from "../../assets/tokenomics/rectangle_307.webp";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

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
function HowItSec() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <div className="w-[100%] h-[900px] pt-[60px] flex justify-center items-start howitbg relative overflow-hidden  ">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <img className="w-full h-full" src={topShadow} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 ">
        <img className="w-full h-auto" src={bottomShadow} alt="" />
      </div>
      <div
        className="max-w-[992px]  px-[22px] py-[26px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative min-h-[500px] howitborder bg-[#01010182]"
        style={{ backdropFilter: "blur(9.899999618530273px)" }}
      >
        <div className="space-y-[16px] flex flex-col justify-center items-center ">
          <p className="text-[#fff] leading-[114%] font-[400] text-[20px] text-center">
            Chapter I
          </p>
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[50px] leading-[104.377%] font-[400]">
            How It All Began
          </h3>
          <p className="w-[650px]   font-[400] mx-auto text-[#fff] leading-[114%] text-[20px] text-center">
            The rivalry started when Pepe, the rising star, climbed to #3 among
            all meme heavyweight champions and called out Doge, the undefeated
            champion. Doge couldn’t let this slide. After months of
            back-of-forth insults on social media, they ran into each other at
            MOON, the <br /> city’s hottest nightclub. Things escalated quickly,
            turning into a big fight with serious consequences.
          </p>

          <div className="relative flex justify-center w-[469px] z-40">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next3",
                prevEl: ".swiper-button-prev3",
              }}
              className="w-full"
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
              ].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="!h-[35px] !w-[35px] swiper-button-prev3   cursor-pointer  absolute !left-[-10%] !top-[48%] rotate-180">
              <img src={awr1} className="!h-[25px] !w-[25px]" alt="Previous" />
            </div>
            <div className="!h-[35px] !w-[35px] swiper-button-next3   cursor-pointer  absolute !right-[-10%] !top-[48%] ">
              <img src={awr1} className="!h-[25px] !w-[25px]" alt="Next" />
            </div>
 
          </div>
           
          <div className="space-y-[23px]  ">
            <h4 className="text-[#fff] leading-[114%] font-[400] text-[20px] text-center  ">
              Follow us on social media to keep up with the story!
            </h4>
            <div className="flex justify-center space-x-[4rem] relative">
              <div className="flex items-center justify-center space-x-2 relative z-[99]">
                <a
                  href="https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <p className="text-[18px] font-[600] text-[#fff] uppercase cursor-pointer">
                    Join X
                  </p>
                  <img className="cursor-pointer" src={telicon1} alt="X Icon" />
                </a>
              </div>

              <div className="relative z-10 flex items-center justify-center space-x-2">
                <p className="text-[18px] font-[600] text-[#fff] uppercase">
                  Join Telegram
                </p>
                <img className="cursor-pointer" src={telicon2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[100px] left-[-32%] h-[646px] w-[528px]">
          <img src={vecleft} className="w-full" alt="" />
        </div>
        <div className="absolute top-[100px] right-[-40%] h-[646px] w-[599px]">
          <img src={vecright} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowItSec;
