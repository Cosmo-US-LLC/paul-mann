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
];

function GlimpseIntoMob() {
  return (
    <div className="w-[90%] mx-auto pt-[30px] pb-[50px] space-y-[26px]">
      <div className="space-y-[15px]">
        <h3 className="text-[28px] text-center font-[700] font-[RFDewiExtended] leading-[128.571%] capitalize">
          A glimpse into <br /> our work
        </h3>
        <p className="text-[14px] font-[Roboto] text-center font-[400] ">
          Some of the creative works we ve Done
        </p>
      </div>
      <div>
        <div className="relative">
       
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next-glimpse",
              prevEl: ".swiper-button-prev-glimpse",
            }}
            modules={[Navigation]}
            loop={false}
            className="mySwiper "
          >
            {glimpseData.map((glimpse, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={glimpse.image} className="object-cover" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-w-[200px] flex space-x-3 mx-auto">
            <button className="swiper-button-prev-glimpse  !w-[30px] !h-[30px]  absolute z-10 !left-[40%] !bottom-[-24%]  ">
              <img
                className="w-[30px] h-[30px] "
                src={"/mobile-assets/glimpse/arw.svg"}
                alt=""
              />
            </button>
            <button className="swiper-button-next-glimpse rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[40%] !bottom-[-24%] ">
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

export default GlimpseIntoMob;
