import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const WaterSolutionsMob = () => {
  const solutions = [
    {
      title: (
        <p>
          Greywater <br /> Recycling
        </p>
      ),
      description:
        "Reduce potable water use by up to 45% by processing greywater into germ-free recycled water for toilet flushing, laundry, irrigation and more.",
      icon: "/desktop-assets/WaterSolutions/company1.webp",
    },
    {
      title: <p>Raw Greywater <br/> Systems</p >,
      description:
        "Reduce potable water used for irrigation by 10-25% by supplying landscapes with greywater from showers, bathtubs, bathroom sinks and washing machines.",
      icon: "/desktop-assets/WaterSolutions/company2.webp",
    },
    {
      title: "Rainwater Harvesting",
      description:
        "Reduce potable water use by 30-50% by capturing and reusing rainwater for irrigation, topping off pools and hot tubs, and more.",
      icon: "/desktop-assets/WaterSolutions/company3.webp",
    },
    {
      title: "Water Efficiency Solutions",
      description:
        "Reduce potable water use by 30-50% with recirculating showers, smart irrigation and leak detection devices, and high-efficiency fixtures.",
      icon: "/desktop-assets/WaterSolutions/company4.webp",
    },
    {
      title: "Permaculture Solutions",
      description:
        "Reduce potable water use for irrigation by 15-30% by implementing solutions that slow, spread and sink stormwater on-site.",
      icon: "/desktop-assets/WaterSolutions/company5.webp",
    },
    {
      title: (
        <p>
          Water <br /> Production & <br /> Purification
        </p>
      ),
      description: "Systems to generate new water & purify for household use.",
      icon: "/desktop-assets/WaterSolutions/company6.webp",
    },
  ];

  return (
    <div className="WaterSolutionsBG">
      <div className="w-[90%] py-[30px] mx-auto">
        <div className="gap-[20px] mx-auto flex flex-col justify-center text-white">
          <h1 className="text-[20px] font-[RFDewiExtended] text-center leading-[140%] capitalize font-[700] ">
            Making Water <br /> Go Farther
          </h1>
          <div className="flex justify-center max-w-[158px] mx-auto">
            <img src="/mobile-assets/Making/logo.webp" alt="" />
          </div>
          <p className="text-[15px] font-[Roboto] leading-[20px] font-[400] ">
            Water Champions is a leading design and engineering consulting firm
            for water reuse and efficiency solutions, and it offers a
            comprehensive range of services, including greywater
            recycling, rainwater harvesting systems, and water generation
            technologies. Water Champions empowers individuals, businesses, and
            communities to reduce potable water usage by up to 50%, restoring
            balance to ecosystems and promoting long-term sustainability. With a
            focus on practical impact, Water Champions leads the way in making
            water go farther while creating resilient, water-smart futures.
          </p>
          {/* <div className="flex flex-wrap items-start w-full gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex flex-row items-center  bg-[#ffffff29] p-6 rounded-2xl shadow-lg text-left border border-gray-300 w-[384px] h-[196px]"
              >
                <div className="w-[30%]">
                  <img
                    src={solution.icon}
                    alt={`${solution.title} icon`}
                    className="object-cover w-[69px] h-32 border border-blue-500 rounded-md"
                  />
                </div>
                <div className="w-[70%] flex flex-col gap-2">
                  <h2 className="text-[25px] font-[600] leading-[24px] text-white ">
                    {solution.title}
                  </h2>
                  <p className="text-[16px] font-[400] leading-[18px] text-white">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="relative w-[98%] mx-auto">
            <div className="max-w-[300px] flex space-x-3 mx-auto">
              <button className="swiper-button-prev-water  !w-[30px] !h-[30px]  absolute z-10 !left-[-5%] !top-[44%]  ">
                <img
                  className="w-[30px] h-[30px] "
                  src={"/mobile-assets/End-to-End/awr.png"}
                  alt=""
                />
              </button>
              <button className="swiper-button-next-water rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[-5%] !top-[44%] ">
                <img
                  className="w-[30px] h-[30px]"
                  src={"/mobile-assets/End-to-End/awr.png"}
                  alt=""
                />
              </button>
            </div>
            <Swiper
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-water",
                prevEl: ".swiper-button-prev-water",
              }}
              modules={[Navigation]}
              loop={false}
              className="relative mySwiper "
            >
              {solutions.map((solution, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-row items-center  bg-transparent p-4 rounded-2xl shadow-lg text-left border border-gray-300  h-[211px]">
                    <div className="w-[30%]">
                    <div className="w-[69px] h-32 rounded-lg overflow-hidden">
                      <img
                        src={solution.icon}
                        alt={`${solution.title} icon`}
                        className="object-cover w-full h-full "
                      />
                      </div>
                    </div>
                    <div className="w-[70%] flex flex-col gap-2">
                      <h2 className="text-[25px] font-[RFDewiExtended] font-[600] leading-[24px] text-white ">
                        {solution.title}
                      </h2>
                      <p className="w-[225px] text-[16px] font-[Roboto] font-[400] leading-[18px] text-white">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center mb-2">
          <a href="https://waterchampions.com/" rel="noopener noreferrer">
            <button className="font-[Roboto] tracking-[0.9px] px-6 py-3 border border-white text-[14px] font-[500] text-white uppercase   hover:bg-white hover:text-[#073B63] transition">
            water champions
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterSolutionsMob;
