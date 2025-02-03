import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";
import topShadow from "../../assets/RoadmapSec/rectangle_289.webp";
import bottomShadow from "../../assets/RoadmapSec/rectangle_333.webp";

function RoadmapSec() {
  return (
    <div className="w-[100%] h-[1039px]  relative flex justify-center items-center  bgroadmap  overflow-hidden pb-[90px]" id="roadmap">
       <div className="absolute top-0 left-0 right-0 w-full h-full">
                    <img className="w-full h-full" src={topShadow} alt="" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 w-full h-full">
                    <img className="w-full h-full" src={bottomShadow} alt="" />
                  </div>
      <div className="max-w-[1245px] space-y-[40px] w-[100%] mx-auto relative z-10">
        <div className="space-y-[50px]">
          <div>
            <h3 className="text-[50px] font-HiJack text-[#FFFCFC] text-center font-[400]">
              Roadmap
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between pt-20">
          <div className="space-y-[3rem] max-w-[560px] w-[100%]">
            <div className="max-w-[510px] mx-auto w-[100%]">
              <button
                className=" rounded-[60px] mx-auto ml-[2.9rem] max-w-[353px] w-[100%] h-[59px] flex justify-center items-center text-[25px] font-[700] text-[#131212] "
                style={{
                  background:
                    "linear-gradient(66deg, #FFC676 25.98%, #FFBF00 65.48%)",
                  boxShadow: "0px 16px 30px 0px #615500",
                }}
              >
                The $DOGE Roadmapp
              </button>
            </div>
            <div className="max-w-[510px] w-[100%] relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                className="!min-h-[500px]"
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
                  <div className="p-3 roadborder">
                    <div className="pl-[50px] relative pr-[70px] pt-[36px] min-h-[550px]  pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#FEBF01] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 1: The Battle Begins
                      </h4>
                      <ol className="pl-[1.5rem] list-disc space-y-[15px] space-y-[15px]">
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Concept Development:
                          </span>{" "}
                          Craft the vision for $DOGE, combining Doge’s charm
                          with a competitive presale.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">Website Launch:</span>{" "}
                          Launch the $DOGE site with presale details, community
                          channels, and resources for supporters.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">Community Setup: </span>
                          Create Telegram channels for rallying Team Doge fans.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">Marketing Kickoff:</span>{" "}
                          Roll out social media campaigns, influencer promos,
                          and press releases to unite Doge fans globally.
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 roadborder">
                    <div className="pl-[50px] relative pr-[70px] min-h-[550px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#FEBF01] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 2: The Presale Showdown
                      </h4>
                      <ol className="pl-[1.5rem] list-disc space-y-[15px]">
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">Presale Launch: </span>
                          Team Doge enters as the Orange Coin, rallying
                          positivity and community spirit.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Live Updates: Real-time funding stats drive $DOGE's
                            climb.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Community Challenges: Polls and contests energize
                            Doge supporters.
                          </span>
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 roadborder">
                    <div className="pl-[50px] relative min-h-[550px] pr-[70px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#FEBF01] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 3: Crowning the Champion
                      </h4>
                      <ol className="pl-[1.5rem] list-disc space-y-[15px]">
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Winner Announcement:{" "}
                          </span>
                          $DOGE is crowned the winning token, showcasing Team
                          Doge's dominance.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            <span className="font-[600]">
                              Liquidity Boost:{" "}
                            </span>
                            Rival funds strengthen $DOGE’s liquidity pool.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">Token Launch:</span>$DOGE
                          goes live within 24 hours.
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="!h-[35px] !w-[35px] swiper-button-prev1 swiper-button-next cursor-pointer  absolute !left-[-10%] !top-[48%] rotate-180" >
            <img src={awr1} className="" alt="Previous" />
          </div>
              <div className="!h-[35px] !w-[35px] swiper-button-next1 swiper-button-next cursor-pointer  absolute !right-[-10%] !top-[48%] ">
                <img src={awr1} className="" alt="Next" />
              </div>
            </div>
          </div>
          <div className="space-y-[3rem] max-w-[560px] w-[100%]">
            <div className="max-w-[510px] ml-[0.6rem] mx-auto w-[100%]">
              <button
                className=" rounded-[60px] mx-auto max-w-[353px] w-[100%] h-[59px] flex justify-center items-center text-[25px] font-[700] text-[#131212] "
                style={{
                  background:
                    "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
                  boxShadow: "0px 16px 30px 0px rgba(9, 252, 60, 0.35)",
                }}
              >
                The $PEPE Roadmap
              </button>
            </div>
            <div className="max-w-[510px] w-[100%] relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                className="!min-h-[500px]"
                navigation={{
                  nextEl: ".swiper-button-next2",
                  prevEl: ".swiper-button-prev2",
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
                  <div className="p-3 card2border ">
                    <div className="pl-[50px] relative pr-[70px] min-h-[550px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#4EB52A] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 1: The Battle Begins
                      </h4>
                      <ol className="pl-[1.5rem] list-disc space-y-[15px]">
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          Concept Development: Craft the vision for $PEPE,
                          combining Pepe’s iconic status with a thrilling
                          presale.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          Website Launch: Launch the $PEPE site with presale
                          details and community tools.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          Community Setup: Create Telegram channels for rallying
                          Team Pepe believers..
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          Marketing Kickoff: Launch social media campaigns,
                          influencer shoutouts, and press releases to unite the
                          Pepe army..
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 card2border">
                    <div className="pl-[50px] relative pr-[70px] min-h-[550px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#4EB52A] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 2: The Presale Showdown
                      </h4>
                      <ol className="pl-[1.5rem] list-disc space-y-[15px]">
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          Presale Launch: Team Pepe takes the lead as the Green
                          Coin, fueled by humor and resilience.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Live Updates: Real-time stats highlight $PEPE’s
                            progress.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Community Challenges: Polls and events energize the
                            Pepe army.
                          </span>
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-3 card2border">
                    <div className="pl-[50px] relative min-h-[550px] pr-[70px] pt-[36px] pb-[50px] bg-[#181818] rounded-[19.453px]">
                      <h4 className="text-[#4EB52A] pb-[25px] text-[25px] font-[600] leading-[121.903%]">
                        Phase 3: Crowning the Champion
                      </h4>
                      <ol className="pl-[1.5rem] list-disc space-y-[15px]">
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            Winner Announcement:{" "}
                          </span>
                          $PEPE is crowned the ultimate meme king, solidifying
                          Pepe’s legacy.
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">
                            <span className="font-[600]">
                              Liquidity Boost:{" "}
                            </span>
                            Rival funds strengthen $PEPE’s market position.
                          </span>
                        </li>
                        <li className="text-[18px] text-[#fff] font-[600] leading-[169.309%]">
                          <span className="font-[600]">Token Launch:</span>{" "}
                          $PEPE goes live for trading within 24 hours..
                        </li>
                      </ol>
                      <div
                        className="h-[14.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                        style={{
                          background:
                            "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* <div className="!h-[35px] !w-[35px] swiper-button-prev  absolute !left-[9%] !top-[19%] -translate-y-1/2 bg-[#fff] border border-black p-2 hover:bg-white/90 z-10" >
            <img src={awr1} className="" alt="Previous" />
          </div> */}
            <div className="!h-[35px] !w-[35px] swiper-button-prev2 swiper-button-next cursor-pointer   absolute !left-[-10%] !top-[49%] rotate-180" >
            <img src={awr1} className="" alt="Previous" />
          </div>
              <div className="!h-[35px] !w-[35px] swiper-button-next2  swiper-button-next cursor-pointer absolute !right-[-10%] !top-[48%] ">
                <img src={awr1} className="" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSec;
