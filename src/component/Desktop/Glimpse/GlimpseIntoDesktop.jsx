import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const glimpseData = [
  {
    image: "/mobile-assets/glimpse/card-img (7).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (6).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (5).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (4).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (3).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (2).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (1).webp",
  },
  
  {
    image: " ",
  },
];

function GlimpseIntoDesktop() {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] pt-14   mx-auto flex flex-col  justify-center relative">
    <div className="flex flex-col gap-12 py-6">
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-[45px] text-center font-[700] font-[RFDewi-Light] leading-[128.571%] capitalize">
          A glimpse into   our work
        </h3>
        <p className="text-[16px] text-center leading-[23px] font-[400] font-[RFDewi-Light] ">
          Some of the creative works we ve Done
        </p>
      </div>
  
        <div className="relative">
       
          <Swiper
            slidesPerView={5}
            spaceBetween={90}
            navigation={{
              nextEl: ".swiper-button-next-glimpse",
              prevEl: ".swiper-button-prev-glimpse",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper"
          >
            {glimpseData.map((glimpse, index) => (
              <SwiperSlide key={index}>
                <div className="h-[350px] w-[242px]">
                  <img src={glimpse.image} className="object-cover" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
            <button className="swiper-button-prev-glimpse  !w-[30px] !h-[30px]  absolute z-10 !left-[-4%] !bottom-[45%]  ">
              <img
                className="w-[30px] h-[30px] "
                src={"/mobile-assets/glimpse/arw.svg"}
                alt=""
              />
            </button>
            <button className="swiper-button-next-glimpse  font-[RFDewi-Light] rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[-4%] !bottom-[45%] ">
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

export default GlimpseIntoDesktop;
