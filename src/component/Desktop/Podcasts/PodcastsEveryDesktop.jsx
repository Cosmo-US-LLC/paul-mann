import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SuggestTopicForm from "../../ui/SuggestTopicForm";

const podcastData = [
  {
    date: "7.31.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (11).webp",
    episode: "EP – 497",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla enim, consectetur sagittis mauris tincidunt sollicitudin. Nulla scelerisque efficitur euismod.",
  },
  {
    date: "7.30.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (10).webp",
    episode: "EP – 496",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla enim, consectetur sagittis mauris tincidunt sollicitudin.",
  },
  {
    date: "7.29.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (9).webp",
    episode: "EP – 495",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla enim, consectetur sagittis mauris tincidunt sollicitudin.",
  },
  {
    date: "7.28.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (8).webp",
    episode: "EP – 494",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla enim, consectetur sagittis mauris tincidunt sollicitudin.",
  },
  {
    date: "7.27.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (7).webp",
    episode: "EP – 493",
    title: "Accusantium doloremque laudantium.",
  },
  {
    date: "7.26.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (6).webp",
    episode: "EP – 492",
    title: "Nemo enim ipsam voluptatem quia voluptas.",
  },
  {
    date: "7.25.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (5).webp",
    episode: "EP – 491",
    title: "Neque porro quisquam est qui dolorem ipsum.",
  },
  {
    date: "7.24.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (4).webp",
    episode: "EP – 490",
    title: "Dolor sit amet, consectetur, adipisci velit.",
  },
  {
    date: "7.23.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (3).webp",
    episode: "EP – 489",
    title: "Lorem ipsum dolor sit amet consectetur elit.",
  },
  {
    date: "7.22.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (2).webp",
    episode: "EP – 488",
    title: "Nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    date: "7.21.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (1).webp",
    episode: "EP – 487",
    title: "Quis autem vel eum iure reprehenderit.",
  },
  {
    date: "7.20.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (11).webp",
    episode: "EP – 486",
    title: "Velit esse quam nihil molestiae consequatur.",
  },
  {
    date: "7.19.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (10).webp",
    episode: "EP – 485",
    title: "Quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    date: "7.18.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (9).webp",
    episode: "EP – 484",
    title: "Ut aliquid ex ea commodi consequatur.",
  },
  {
    date: "7.17.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (8).webp",
    episode: "EP – 483",
    title: "Facere possimus, omnis voluptas assumenda est.",
  },
  {
    date: "7.24.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (4).webp",
    episode: "EP – 490",
    title: "Dolor sit amet, consectetur, adipisci velit.",
  },
  {
    date: "7.23.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (3).webp",
    episode: "EP – 489",
    title: "Lorem ipsum dolor sit amet consectetur elit.",
  },
  {
    date: "7.22.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (2).webp",
    episode: "EP – 488",
    title: "Nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    date: "7.21.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (1).webp",
    episode: "EP – 487",
    title: "Quis autem vel eum iure reprehenderit.",
  },
  {
    date: "7.20.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (11).webp",
    episode: "EP – 486",
    title: "Velit esse quam nihil molestiae consequatur.",
  },
  {
    date: "7.19.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (10).webp",
    episode: "EP – 485",
    title: "Quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    date: "7.18.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (9).webp",
    episode: "EP – 484",
    title: "Ut aliquid ex ea commodi consequatur.",
  },
  {
    date: "7.17.2023",
    image: "/mobile-assets/Podcasts/pd-card-img (8).webp",
    episode: "EP – 483",
    title: "Facere possimus, omnis voluptas assumenda est.",
  },
];
function PodcastsEveryDesktop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const listContainerRef = useRef(null); // New ref for scrolling

  // Pagination logic
  const totalPages = Math.ceil(podcastData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedPodcasts = podcastData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToTop = () => {
    const cardHeight = 200; // Adjust this value based on your card height
    const offset = 80; // Adjust this value for additional spacing if needed
    const targetPosition =
      listContainerRef.current.offsetTop - (cardHeight + offset);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  // Effect to scroll to top when currentPage changes
  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Update the current page immediately
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Update the current page immediately
    }
  };

  return (
    <div className="max-w-[1440px] w-full h-full py-16 mx-auto">
      <div className="max-w-[1200px]   mx-auto flex flex-col justify-center">
        <div className="mb-8 text-center">
          <h3 className="text-[24px] font-bold font-[RFDewiExtended] uppercase leading-[1.5]">
          New Podcast Every Week
          </h3>
        </div>

        {/* Platform Buttons */}
        <div className="flex justify-center gap-8 mb-8">
          <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
              className="mr-2"
              alt="Spotify"
            />
            Spotify
          </button>
          <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
              className="mr-2"
              alt="Apple"
            />
            Apple
          </button>
          <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
              className="mr-2"
              alt="Amazon"
            />
            Amazon
          </button>
          <a href="https://www.youtube.com/@IAmPaulMann" className="hover:text-gray-300">
          <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
              className="mr-2"
              alt="YouTube"
            />
            YouTube
          </button>
          </a>
        </div>

        <div className="flex items-center justify-between pb-2 mb-12">
          <div className="flex gap-6">
            <button className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer border-b-2 border-black pb-1">
              Featured Episodes
            </button>
            <button className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              Rain Water
            </button>
            <button className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              Project Design
            </button>
            <button className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              Implementation
            </button>
            <button className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              On Work
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border-b border-black w-[300px]">
            <input
              className="w-full px-2 py-1 font-[Roboto] outline-none text-[14px] placeholder:uppercase"
              placeholder="Search"
              type="text"
              aria-label="Search podcasts"
            />
            <img
              src="/mobile-assets/Podcasts/SVG (1).svg"
              className="w-5 h-5"
              alt="Search Icon"
            />
          </div>
        </div>

        <div ref={listContainerRef} className="space-y-12">
          {displayedPodcasts.map((podcast, index) => (
            <div
              key={index}
              className="flex items-start gap-8 pb-8 border-b border-gray-300"
            >
              <div className="relative w-[336px]">
                <img
                  src={podcast.image}
                  className="object-cover "
                  alt={`Podcast ${index + 1}`}
                />

                <div
                  className="absolute inset-y-0 right-[-40px] flex items-center justify-center text-black font-bold uppercase text-[14px] font-[Roboto]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {podcast.episode}
                </div>
              </div>

              <div className="flex-1 text-left w-[600px] flex flex-col px-12 py-12">
                <p className="text-[14px] font-medium  font-[Roboto] uppercase text-gray-600 mb-2">
                  {podcast.date}
                </p>
                <h5 className="text-[18px] font-bold font-[RFDewiExtended] leading-[1.4] mb-4 truncate">
                  {podcast.title}
                </h5>
                <p className="text-[14px] font-semibold font-[Roboto] uppercase cursor-pointer underline">
                  Read More
                </p>
              </div>

              <div className="flex flex-col gap-4 text-right">
                <div className="flex flex-col items-end gap-6">
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium font-[Roboto]">Watch</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (1).svg"
                      className="w-6 h-6"
                      alt="Watch"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium font-[Roboto]">Listen</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (2).svg"
                      className="w-6 h-6"
                      alt="Listen"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium font-[Roboto]">24</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (3).svg"
                      className="w-6 h-6"
                      alt="Comments"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium font-[Roboto]">155</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (4).svg"
                      className="w-6 h-6"
                      alt="Likes"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium font-[Roboto]">Share</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (5).svg"
                      className="w-6 h-6"
                      alt="Share"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`text-[14px] font-medium font-[Roboto] ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <span>&lt;</span> Previous
          </button>
          <p className="text-[14px] font-medium font-[Roboto]">
            {currentPage}/{podcastData.length}{" "}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`text-[14px] font-medium font-[Roboto] ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:text-black "
            }`}
          >
            Next
            <span className="ml-1">&gt;</span>
          </button>
        </div>

        <div className="relative pt-[4rem]">
          <div className="max-w-[300px] flex space-x-3 mx-auto">
            <button className="swiper-button-prev-3  !w-[30px] !h-[30px]  absolute z-10 !left-[-2%] !top-[40%]  ">
              <img
                className="w-[30px] h-[30px] "
                src={"/mobile-assets/Podcasts/Button - Previous slide.svg"}
                alt=""
              />
            </button>
            <button className="swiper-button-next-3 rotate-[180deg] !w-[30px] !h-[30px]  absolute z-10 !right-[-2%] !top-[40%] ">
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
              nextEl: ".swiper-button-next-3",
              prevEl: ".swiper-button-prev-3",
            }}
            modules={[Navigation]}
            loop={false}
            className="relative mySwiper "
          >
            <SwiperSlide>
              <div className="min-h-[196px] p-[24px] flex flex-col justify-between">
                <div>
                  <p className="text-[14px] font-[Roboto] leading-[200%] uppercase font-[500]">
                    “Love this podcast!”
                  </p>
                </div>
                <div>
                  <p className="uppercase text-[12px] font-[Roboto] text-[#000] opacity-[0.6]">
                    By SHU12323
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[196px] p-[24px] flex flex-col justify-between">
                <div>
                  <p className="text-[14px] font-[Roboto] leading-[200%] uppercase font-[500]">
                    “Amazing and life changing podcast”
                  </p>
                </div>
                <div>
                  <p className="uppercase text-[12px] font-[Roboto] text-[#000] opacity-[0.6]">
                    By ChrisAlan83
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[196px] p-[24px] flex flex-col justify-between">
                <div>
                  <p className="text-[14px] font-[Roboto] leading-[200%] uppercase font-[500]">
                    “Jay has a special energy that draws people towards him, and
                    a talent at taking people on a journey””
                  </p>
                </div>
                <div>
                  <p className="uppercase text-[12px] font-[Roboto] text-[#000] opacity-[0.6]">
                    By ChrisAlan83
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[196px] p-[24px] flex flex-col justify-between">
                <div>
                  <p className="text-[14px] font-[Roboto] leading-[200%] uppercase font-[500]">
                    “Thank you Paul Mann for your spiritual wisdom and insight.
                    ”
                  </p>
                </div>
                <div>
                  <p className="uppercase text-[12px] font-[Roboto] text-[#000] opacity-[0.6]">
                  By PearlJelly9
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[196px] p-[24px] flex flex-col justify-between">
                <div>
                  <p className="text-[14px] font-[Roboto] leading-[200%] uppercase font-[500]">
                    “Thank you Paul Mann for your spiritual wisdom and insight.
                    ”
                  </p>
                </div>
                <div>
                  <p className="uppercase text-[12px] font-[Roboto] text-[#000] opacity-[0.6]">
                  By PearlJelly9
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <SuggestTopicForm />
      </div>
    </div>
  );
}

export default PodcastsEveryDesktop;
