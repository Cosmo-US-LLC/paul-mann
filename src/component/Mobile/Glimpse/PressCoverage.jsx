import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function PressCoveragemob() {
  return (
    <div className="w-[90%] mx-auto pt-[30px] pb-[50px]">
      <div>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next-Coverage",
              prevEl: ".swiper-button-prev-Coverage",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="space-y-[33px]">
                <h3 className="text-[28px] font-[RFDewiExtended] text-start font-[700] leading-[125%] capitalize">
                  Press Coverage & Features
                </h3>
                <h4 className="text-[18px] !mt-[17px] font-[RFDewiExtended] text-start font-[700] leading-[150%] capitalize">
                  Innovating Water Solutions: <br /> Paul Mann on the Future of
                  Water Reuse
                </h4>
                <p className="text-[14px] font-[Roboto] !mt-[17px] font-[400] ">
                  Paul Mann shares his groundbreaking approach to water reuse,
                  detailing how sustainable technologies can reduce water
                  consumption by 70%.
                </p>
                <button className="block px-[22px] h-[50px] text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-[#073B63]">
                  Read more
                </button>
                <img src="/mobile-assets/Coverage/card-img.webp" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-[33px]">
                <h3 className="text-[28px] font-[RFDewiExtended] text-start font-[700] leading-[125%] capitalize">
                  Press Coverage & Features
                </h3>
                <h4 className="text-[18px] !mt-[17px] font-[RFDewiExtended] text-start font-[700] leading-[150%] capitalize">
                  Innovating Water Solutions: <br /> Paul Mann on the Future of
                  Water Reuse
                </h4>
                <p className="text-[14px] !mt-[17px] font-[Roboto] font-[400] ">
                  Paul Mann shares his groundbreaking approach to water reuse,
                  detailing how sustainable technologies can reduce water
                  consumption by 70%.
                </p>
                <button className="block px-[22px] h-[50px] text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-[#073B63]">
                  Read more
                </button>
                <img src="/mobile-assets/Coverage/card-img.webp" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="max-w-[200px] flex space-x-3 mx-auto">
            <button className="swiper-button-prev-Coverage  !w-[30px] !h-[30px]  absolute z-10 !left-[40%] !bottom-[-8%]  ">
              <img
                className="w-[30px] h-[30px] "
                src={"/mobile-assets/glimpse/arw.svg"}
                alt=""
              />
            </button>
            <button className="swiper-button-next-Coverage rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[40%] !bottom-[-8%] ">
              <img
                className="w-[30px] h-[30px]"
                src={"/mobile-assets/glimpse/arw.svg"}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressCoveragemob;
