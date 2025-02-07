import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const solutionsData = [
  {
    image: "/desktop-assets/EndToEndSolutions/card1.webp",
    title: "Site Assessments & Estimates",
    description:
      "On-site and web-based meetings to evaluate your project and provide customized estimates based on your needs.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card2.webp",
    title: "Project Design & Engineering",
    description:
      "Customized solutions informed by rigorous analysis and cutting-edge water reuse technologies.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card3.webp",
    title: "Drafting & Documentation for Permits",
    description:
      "Long-term partnership; system monitoring, maintenance instructions, and optimization to maximize efficiency and value over time.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card4.webp",
    title: (
      <p>
        Field <br /> Training
      </p>
    ),
    description:
      "Hands-on guidance for field crews, ensuring seamless installation and maintenance of water systems.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card5.webp",
    title: "Product Procurement & Delivery",
    description:
      "Customized solutions informed by rigorous analysis and cutting-edge water reuse technologies.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card6.webp",
    title: (
      <p>
        Implementation & <br /> Support
      </p>
    ),
    description:
      "Long-term partnership; system monitoring, maintenance instructions, and optimization to maximize efficiency and value over time.",
  },
];

function EndToEndMob() {
  return (
    <div className="EndToEndSolutionsBGmob">
      <div className=" w-[90%] mx-auto py-[30px]  overflow-hidden">
        <div className="flex flex-col text-white justify-center space-y-[30px]  ">
          <div className="">
            <h2 className="text-[20px] font-[RFDewiExtended] font-[700] leading-[140%] capitalize">
              End-to-End Solutions for <br /> Water Management
            </h2>
          </div>


          <div className="relative">
              <div className="max-w-[300px] flex space-x-3 mx-auto">
                <button className="swiper-button-prev-3  !w-[30px] !h-[30px]  absolute z-10 !left-[-0%] !top-[49%]  ">
                  <img
                    className="w-[30px] h-[30px] "
                    src={'/mobile-assets/End-to-End/awr.png'}
                    alt=""
                  />
                </button>
                <button className="swiper-button-next-3 rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[-0%] !top-[49%] ">
                  <img
                    className="w-[30px] h-[30px]"
                    src={'/mobile-assets/End-to-End/awr.png'}
                    alt=""
                  />
                </button>
              </div>
              <Swiper
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-3",
                  prevEl: ".swiper-button-prev-3",
                }}
                modules={[Navigation]}
                loop={false}
                className="relative mySwiper "
              >

                {solutionsData.map((solution, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col p-4 bg-[#ffffff29] w-[90%] mx-auto h-[475px] bg-opacity-60 rounded-xl overflow-hidden shadow-lg ">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-[232px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col gap-4 py-6">
                      <h4 className="text-[23.297px] font-[RFDewiExtended] font-[400] leading-[142.857%]">
                        {solution.title}
                      </h4>
                      <p className="font-[Roboto] text-[14.977px] font-[400] leading-[21px]">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>

        </div>
      </div>
    </div>
  );
}

export default EndToEndMob;
