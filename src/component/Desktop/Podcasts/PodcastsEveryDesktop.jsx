import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SuggestTopicForm from "../../ui/SuggestTopicForm";
import thumbnail1 from "../../../../public/mobile-assets/Podcasts/Thumbnail4.png";

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

const formatDate = (date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}.${day}.${year}`;
};


const podcastData = [
  {
    date: "04.03.2025",
    youtubeId: "4snXR5Scgvc",  
    thumbnail: thumbnail1,  
    episode: "EP – 2",
    title:
      "Inside California's Rainwater Program | Water Champions Podcast Ep.2 with Noelle Johnson",
  },
  {
    date: "04.03.2025",
    youtubeId: "d8mw9kot9pk", 
    thumbnail: "/mobile-assets/Podcasts/Thumbnail4.png",  
    episode: "EP – 1",
    title:
      "How Rainwater Harvesting Can Replace Water Supply | Water Champions Podcast Ep.1 with Rain Brothers",
  },
];

function PodcastsEveryDesktop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const listContainerRef = useRef(null);  
  
  const shareUrl = window.location.href;
  
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

 
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
        <div className="mb-8 text-left">
          <h3 className="text-[24px] font-bold font-[RFDewiExtended] uppercase leading-[1.5]">
            New Podcast Every Week
          </h3>
        </div>

        {/* Platform Buttons */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.youtube.com/@IAmPaulMann"
            className="relative hover:text-black "
          >
            <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
              <img
                src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
                className="mr-2"
                alt="YouTube"
              />
              YouTube
            </button>
          </a>

          <div className="relative tooltip-container">
  <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] uppercase bg-gray-200 hover:bg-gray-300 pointer-events-none">
    <img
      src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
      className="mr-2"
      alt="Spotify"
    />
    Spotify
  </button>
  <span className="absolute hidden w-[90px] px-2 py-1 mb-2 text-xs text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
    Coming soon
  </span>
</div>


<div className="relative tooltip-container">
  <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] bg-gray-200 h-[40px] uppercase hover:bg-gray-300 pointer-events-none">
    <img
      src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
      className="mr-2"
      alt="Apple"
    />
    Apple
  </button>
  <span className="absolute w-[90px] hidden px-2 py-1 mb-2 text-xs text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
    Coming soon
  </span>
</div>


<div className="relative tooltip-container">
  <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] bg-gray-200 uppercase hover:bg-gray-300 pointer-events-none">
    <img
      src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
      className="mr-2"
      alt="Amazon"
    />
    Amazon
  </button>
  <span className="absolute w-[90px] hidden px-2 py-1 mb-2 text-xs text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
    Coming soon
  </span>
</div>

        </div>

        <div className="flex items-center justify-between pb-2 mb-12">
          <div className="flex gap-6">
            <button
              title="Coming soon"
              className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer border-b-2 border-black pb-1"
            >
              Featured Episodes
            </button>
            {/* <button title="Coming soon" className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              Rain Water
            </button>
            <button title="Coming soon" className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              Project Design
            </button>
            <button title="Coming soon" className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              Implementation
            </button>
            <button title="Coming soon" className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black">
              On Work
            </button> */}
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
          {displayedPodcasts.map((podcast, index) => {
            const youtubeUrl = podcast.youtubeId
              ? `https://www.youtube.com/embed/${podcast.youtubeId}`
              : null; // Fallback if youtubeId is missing
            return (
              <div
                key={index}
                className="flex items-start gap-8 pb-8 border-b border-gray-300"
              >
                {/* Video Section */}
                <div className="relative w-[336px]">
                  <div className="relative w-full h-[200px]">
                    {youtubeUrl ? (
                      <iframe
                        src={youtubeUrl}
                        title={`YouTube video ${index + 1}`}
                        className="object-cover w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="flex items-center justify-center text-gray-500">
                        <p>No video available</p>
                      </div>
                    )}

                    {/* Thumbnail fallback if video not available */}
                    {!youtubeUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={podcast.thumbnail || "/default-thumbnail.jpg"} // Replace with the actual thumbnail path or fallback
                          alt={`Podcast ${index + 1} Thumbnail`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>

                  {/* Episode Label */}
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

                {/* Podcast Info Section */}
                <div className="flex-1 text-left w-[600px] flex flex-col px-12 py-12">
                  <p className="text-[14px] font-medium font-[Roboto] uppercase text-gray-600 mb-2">
                    {podcast.date}
                  </p>
                  <h5 className="text-[18px] font-bold font-[RFDewiExtended] leading-[1.4] mb-4 truncate">
                    {podcast.title}
                  </h5>
                  {/* <p className="text-[14px] font-semibold font-[Roboto] uppercase cursor-pointer underline">
                    Read More
                  </p> */}
                </div>

                {/* Action Section */}
                <div className="flex flex-col h-full gap-4 text-right">
                  <div className="flex flex-col items-end gap-6">
                    <div className="flex items-center gap-2"  onClick={handleWatchClick}>
                      <p className="text-[14px] font-medium font-[Roboto]">
                        Watch
                      </p>
                      <img
                        src="/mobile-assets/Podcasts/pd-card-icn (1).svg"
                        className="w-6 h-6"
                        alt="Watch"
                      />
                    </div>

                    <div className="relative group">
            <p className="text-[14px] font-medium font-[Roboto]">Share</p>

            {/* Social Media Share Buttons */}
            <div className="absolute left-0 hidden gap-2 mt-2 top-full group-hover:flex">
              {/* Facebook Share Button */}
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              {/* Twitter Share Button */}
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              {/* LinkedIn Share Button */}
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
                  </div>
                </div>
              </div>
            );
          })}
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
