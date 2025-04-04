import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ReviewSlider = ({ sliderData }) => {
  return (
    <div className="relative pt-[4rem]">
      <div className="max-w-[300px] flex space-x-3 mx-auto">
        <button className="swiper-button-prev-3 !w-[30px] !h-[30px] absolute z-10 !left-[-2%] !top-[40%]">
          <img
            className="w-[30px] h-[30px]"
            src={"/mobile-assets/Podcasts/Button - Previous slide.svg"}
            alt=""
          />
        </button>
        <button className="swiper-button-next-3 rotate-[180deg] !w-[30px] !h-[30px] absolute z-10 !right-[-2%] !top-[40%]">
          <img
            className="w-[30px] h-[30px]"
            src={"/mobile-assets/Podcasts/Button - Previous slide.svg"}
            alt=""
          />
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next-3',
          prevEl: '.swiper-button-prev-3',
        }}
        modules={[Navigation]}
        loop={false}
        className="relative mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-[196px] p-[24px] flex flex-col justify-between">
              <div>
                <p className="text-[14px] font-[Roboto] leading-[200%] uppercase font-[500]">
                  {slide.text}
                </p>
              </div>
              <div>
                <p className="uppercase text-[12px] font-[Roboto] text-[#000] opacity-[0.6]">
                  {slide.user}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
