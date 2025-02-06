import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function PressCoveragedesktop() {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] h-[650px] pt-10 mx-auto flex flex-col justify-center relative">
        <div className="relative ">
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
              <div className="flex flex-row items-center gap-[100px]">
                <div className="w-[397px]  ">
                  <img src="/mobile-assets/Coverage/card-img.webp" alt="" />
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="w-[720px] font-[RFDewi-Light] text-[45px] text-start font-[900] leading-[53px] capitalize">
                    Press Coverage & Features
                  </h3>
                  <h4 className="w-[579px] text-[28px] font-[RFDewi-Light]  text-start font-[700] leading-[36px] capitalize">
                    Innovating Water Solutions: Paul
                    <br /> Mann on the Future of Water Reuse
                  </h4>
                  <p className=" w-[639px] text-[16px] font-[RFDewi-Light] leading-[23px]  font-[400] ">
                    Paul Mann shares his groundbreaking approach to water reuse,
                    detailing how sustainable technologies can reduce water
                    consumption by 70%.
                  </p>
                  <button className="w-[120px] block font-[RFDewi-Light]  h-[50px] text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-[#073B63]">
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row items-center gap-[100px]">
                <div className="w-[397px]  ">
                  <img src="/mobile-assets/Coverage/card-img.webp" alt="" />
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="w-[720px] font-[RFDewi-Light] text-[45px] text-start font-[900] leading-[53px] capitalize">
                    Press Coverage & Features
                  </h3>
                  <h4 className="w-[579px] text-[28px] font-[RFDewi-Light]  text-start font-[700] leading-[36px] capitalize">
                    Innovating Water Solutions: Paul
                    <br /> Mann on the Future of Water Reuse
                  </h4>
                  <p className=" w-[639px] text-[16px] font-[RFDewi-Light] leading-[23px]  font-[400] ">
                    Paul Mann shares his groundbreaking approach to water reuse,
                    detailing how sustainable technologies can reduce water
                    consumption by 70%.
                  </p>
                  <button className="w-[120px] block font-[RFDewi-Light]  h-[50px] text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-[#073B63]">
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row items-center gap-[100px]">
                <div className="w-[397px]  ">
                  <img src="/mobile-assets/Coverage/card-img.webp" alt="" />
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="w-[720px] font-[RFDewi-Light] text-[45px] text-start font-[900] leading-[53px] capitalize">
                    Press Coverage & Features
                  </h3>
                  <h4 className="w-[579px] text-[28px] font-[RFDewi-Light]  text-start font-[700] leading-[36px] capitalize">
                    Innovating Water Solutions: Paul
                    <br /> Mann on the Future of Water Reuse
                  </h4>
                  <p className=" w-[639px] text-[16px] font-[RFDewi-Light] leading-[23px]  font-[400] ">
                    Paul Mann shares his groundbreaking approach to water reuse,
                    detailing how sustainable technologies can reduce water
                    consumption by 70%.
                  </p>
                  <button className="w-[120px] block font-[RFDewi-Light]  h-[50px] text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] font-[900] font-[Inter] border border-[#073B63]">
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="swiper-button-prev-Coverage  !w-[30px] !h-[30px]  absolute z-10 !left-[-4%] !bottom-[50%]  ">
          <img
            className="w-[30px] h-[30px] "
            src={"/mobile-assets/glimpse/arw.svg"}
            alt=""
          />
        </button>
        <button className="swiper-button-next-Coverage rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[-4%] !bottom-[50%] ">
          <img
            className="w-[30px] h-[30px]"
            src={"/mobile-assets/glimpse/arw.svg"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default PressCoveragedesktop;
