import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import awr1 from "../../assets/RoadmapSec/Vector (2).svg";
import line from "../../assets/RoadmapSec/Line 1.png";
import verc1 from "../../assets/RoadmapSec/Ellipse 80 (3).png";
import verc2 from "../../assets/RoadmapSec/Ellipse 81 (1).png";
import imgrod from "../../assets/RoadmapSec/imgrd.png";

function RoadmapMobile() {
  return (
    <div className="w-full bgroadmapMob pt-[40px] overflow-hidden bg-black relative" id="roadmap">
       {/* <div className="absolute inset-0 bg-black pointer-events-none opacity-30"></div> */}
      <div className="relative z-10 mb-6 text-center">
        <h3 className="text-[22px] text-white font-HiJack font-[400]">Roadmap</h3>
      </div>
      <div className="flex items-center justify-center gap-11 pb-[1rem] relative z-10">
        <div className="flex w-[152px] h-[28px] justify-center items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600">
          <span className="text-[#131212] font-inter text-[12px] font-[700] leading-none">
          The  $DOGE Roadmap
          </span>
        </div>
        <div className="flex w-[153px] h-[28px] justify-center items-center rounded-full bg-gradient-to-r from-green-400 to-green-600">
          <span className="text-[#131212] font-inter text-[12px] font-[700] leading-none">
          The  $PEPE Roadmap
          </span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-10 p-2 px-4">
        <div className="w-[100%] mx-auto h-[100%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next1",
              prevEl: ".swiper-button-prev1",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            loop={false}
            className="!min-h-[600px]"
          >
            <SwiperSlide>
              <div className="bg-[#181818] !min-h-[547px] !max-h-[600px] rounded-[6px] p-2   text-white relative">
                <h4 className="text-yellow-400 text-[10px] font-[600] mb-4">
                The Battle Begins
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px]">
                  <li>
                    <span className="font-bold">Concept Development:</span>{" "}
                    Craft the vision for $DOGE, combining Doge’s charm with a
                    competitive presale.
                  </li>
                  <li>
                    <span className="font-bold">Website Launch:</span> Launch
                    the $DOGE site with presale details, community channels, and
                    resources for supporters.
                  </li>
                  <li>
                    <span className="font-bold">Community Setup:</span> Create
                    Telegram channels for rallying Team Doge fans.
                  </li>
                  <li>
                    <span className="font-bold">Marketing Kickoff:</span> Roll
                    out social media campaigns, influencer promos, and press
                    releases to unite Doge fans globally.
                  </li>
                </ul>
                <div
                  className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
                <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
                  The Presale Showdown
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px]">
                  <li>
                    <span className="font-bold">Presale Launch:</span> Team Doge
                    enters as the Orange Coin, rallying positivity and community
                    spirit.
                  </li>
                  <li>
                    <span className="font-bold">Live Updates:</span> Real-time
                    funding stats drive $DOGE’s climb.
                  </li>
                  <li>
                    <span className="font-bold">Community Challenges:</span>{" "}
                    Polls and contests energize Doge supporters.
                  </li>
                </ul>
                <div
                  className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[6px] !min-h-[547px] !max-h-[600px] p-2 text-white relative">
                <h4 className="text-yellow-400 text-[10px] font-semibold mb-4">
                  Crowning the Champion
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px]">
                  <li>
                    <span className="font-bold">Winner Announcement:</span>{" "}
                    $DOGE is crowned the winning token, showcasing Team Doge’s
                    dominance.
                  </li>
                  <li>
                    <span className="font-bold">Liquidity Boost:</span> Rival
                    funds strengthen $DOGE’s liquidity pool.
                  </li>
                  <li>
                    <span className="font-bold">Token Launch:</span> $DOGE goes
                    live within 24 hours.
                  </li>
                </ul>
                <div
                  className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #FAC000 0%, #FF9D00 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="!h-[35px] !w-[35px] swiper-button-prev1 swiper-button-next cursor-pointer  absolute !left-[-2%] !top-[49%] rotate-180">
            <img src={awr1} className="w-[16px] h-[16px]" alt="Previous" />
          </div>
          <div className="!h-[35px] !w-[35px] swiper-button-next1 swiper-button-next cursor-pointer  absolute !right-[48%] !top-[49%] ">
            <img src={awr1} className="w-[16px] h-[16px]" alt="Next" />
          </div>
        </div>

        <div className="w-[100%] mx-auto h-[100%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            loop={false}
            className="!min-h-[600px]"
          >
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
                <h4 className="text-green-400 text-[10px] font-semibold mb-4">
                The Battle Begins
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px]">
                  <li>
                    <span className="font-bold">Concept Development:</span>{" "}
                    Craft the vision for $PEPE, combining Pepe’s iconic status
                    with a thrilling presale.
                  </li>
                  <li>
                    <span className="font-bold">Website Launch:</span> Launch
                    the $PEPE site with presale details and community tools.
                  </li>
                  <li>
                    <span className="font-bold">Community Setup:</span> Create
                    Telegram channels for rallying Team Pepe believers.
                  </li>
                  <li>
                    <span className="font-bold">Marketing Kickoff:</span> Launch
                    social media campaigns, influencer shoutouts, and press
                    releases to unite the Pepe army.
                  </li>
                </ul>
                <div
                  className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
                <h4 className="text-green-400 text-[10px] font-[600] mb-4">
                  The Presale Showdown
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px]">
                  <li>
                    <span className="font-bold">Presale Launch:</span> Team Pepe
                    takes the lead as the Green Coin, fueled by humor and
                    resilience.
                  </li>
                  <li>
                    <span className="font-bold">Live Updates:</span> Real-time
                    stats highlight $PEPE’s progress.
                  </li>
                  <li>
                    <span className="font-bold">Community Challenges:</span>{" "}
                    Polls and events energize the Pepe army.
                  </li>
                </ul>
                <div
                  className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#181818] rounded-[6px] p-2  !min-h-[547px] !max-h-[600px] text-white relative">
                <h4 className="text-green-400 text-[10px] font-semibold mb-4">
                  Crowning the Champion
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px]">
                  <li>
                    <span className="font-bold">Winner Announcement:</span>{" "}
                    $PEPE is crowned the ultimate meme king, solidifying Pepe’s
                    legacy.
                  </li>
                  <li>
                    <span className="font-bold">Liquidity Boost:</span> Rival
                    funds strengthen $PEPE’s market position.
                  </li>
                  <li>
                    <span className="font-bold">Token Launch:</span> $PEPE goes
                    live for trading within 24 hours.
                  </li>
                </ul>
                <div
                  className="h-[4.914px] rounded-[19.453px] absolute bottom-0 left-0 w-[100%]"
                  style={{
                    background:
                      "linear-gradient(90deg, #5BCC33 0%, #4EB52A 100%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="!h-[35px] !w-[35px] swiper-button-prev2 swiper-button-next cursor-pointer   absolute !left-[48%] !top-[49%] rotate-180">
            <img src={awr1} className="w-[16px] h-[16px]" alt="Previous" />
          </div>
          <div className="!h-[35px] !w-[35px] swiper-button-next2  swiper-button-next cursor-pointer absolute !right-[-2%] !top-[49%] ">
            <img src={awr1} alt="Next" className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapMobile;
