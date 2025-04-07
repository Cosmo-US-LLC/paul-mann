import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,  FaPlay, FaPause, } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
 
} from "react-share";
import ReviewSlider from "./ReviewSlider";
import { podcastData, sliderData } from "./PodcastData";
import SuggestTopicForm from "../../ui/SuggestTopicForm";

function PodcastsEveryDesktop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(podcastData.length / itemsPerPage);

  // Play/pause state for each video
  const [videoStates, setVideoStates] = useState(
    podcastData.map(() => ({ isPlaying: false }))
  );

  // State to track visibility of share buttons
  const [showShareButtons, setShowShareButtons] = useState(false);

  // Track expanded/collapsed descriptions
  const [expandedDescription, setExpandedDescription] = useState(
    podcastData.map(() => false)
  ); // Initially, all descriptions are collapsed

  const listContainerRef = useRef(null);
  const shareUrl = window.location.href;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedPodcasts = podcastData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle play/pause toggle for each video
  const handlePlayPauseClick = (index) => {
    setVideoStates((prevStates) => {
      return prevStates.map((state, i) => {
        if (i === index) {
          return { isPlaying: !state.isPlaying };
        }
        return state;
      });
    });
  };

  // Toggle expanded/collapsed state for descriptions
  const handleDescriptionToggle = (index) => {
    setExpandedDescription((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Toggle the visibility of share buttons
  const toggleShareButtons = () => {
    setShowShareButtons(!showShareButtons);
  };

  useEffect(() => {
    window.scrollTo({
      top: listContainerRef.current.offsetTop,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="max-w-[1440px] w-full h-full py-16 mx-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center">
        <div className="py-3 text-left">
          <h3 className="text-[24px] font-bold font-[RFDewiExtended] uppercase leading-[1.5]">
            New Podcast Every Week
          </h3>
        </div>

        {/* Platform Buttons */}
        <div className="flex justify-center gap-8 py-4">
          <a
            href="https://www.youtube.com/@IAmPaulMann"
            className="relative hover:text-black "
          >
            <button className="tracking-[0.9px] flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[120px] h-[40px] uppercase hover:bg-black hover:text-white">
              <img
                src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
                className="w-6 h-6 mr-2"
                alt="YouTube"
              />
              YouTube
            </button>
          </a>

          <div className="relative tooltip-container">
            <button className="flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[120px] h-[40px] uppercase bg-gray-200 hover:bg-gray-300 pointer-events-none">
              <img
                src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
                className="w-6 h-6 mr-2"
                alt="Spotify"
              />
              Spotify
            </button>
            <span className="absolute hidden w-[90px] px-2 py-2 mb-2 text-[12px] font-[400] text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
              Coming soon
            </span>
          </div>

          <div className="relative tooltip-container">
            <button className="flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[120px] bg-gray-200 h-[40px] uppercase hover:bg-gray-300 pointer-events-none">
              <img
                src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
                className="w-6 h-6 mr-2"
                alt="Apple"
              />
              Apple
            </button>
            <span className="absolute w-[90px] hidden px-2 py-2 mb-2 text-[12px] font-[400] text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
              Coming soon
            </span>
          </div>

          <div className="relative tooltip-container">
            <button className="flex items-center justify-center text-sm font-medium font-[Roboto] border border-black w-[120px] h-[40px] bg-gray-200 uppercase hover:bg-gray-300 pointer-events-none">
              <img
                src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
                className="w-6 h-6 mr-2"
                alt="Amazon"
              />
              Amazon
            </button>
            <span className="absolute w-[90px] hidden px-2 py-2 mb-2 text-[12px] font-[400] text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
              Coming soon
            </span>
          </div>
        </div>

        {/* Categories Buttons */}
        <div className="flex items-center justify-between pt-8 pb-12">
          <div className="flex gap-6">
            <button
              title="Coming soon"
              className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer border-b-2 border-black pb-1"
            >
              Featured Episodes
            </button>
            {/* <button
              title="Coming soon"
              className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black"
            >
              Rain Water
            </button>
            <button
              title="Coming soon"
              className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black"
            >
              Project Design
            </button>
            <button
              title="Coming soon"
              className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black"
            >
              Implementation
            </button>
            <button
              title="Coming soon"
              className="text-[14px] font-medium font-[Roboto] uppercase cursor-pointer text-gray-600 hover:text-black"
            >
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

        {/* Display Podcasts */}
        <div ref={listContainerRef} className="space-y-12">
          {displayedPodcasts.map((podcast, index) => {
            const youtubeUrl = `https://www.youtube.com/embed/${podcast.youtubeId}`;
            const isDescriptionExpanded = expandedDescription[index];

            return (
              <div
                key={index}
                className="flex items-start gap-6 pb-8 border-b border-gray-500"
              >
                <div className="relative w-[336px]">
                  <div className="relative w-full h-[200px]">
                    {videoStates[index]?.isPlaying ? (
                      <iframe
                        src={youtubeUrl}
                        title={`YouTube video ${index + 1}`}
                        className="object-cover w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handlePlayPauseClick(index)}
                      >
                        <img
                          src={podcast.thumbnail}
                          alt="Video Thumbnail"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                  {/* Episode Label */}
                </div>
                <div className="relative flex items-center justify-center h-[200px]  ">
                  <div
                    className="      text-black font-bold uppercase text-[14px] font-[Roboto]"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {podcast.episode}
                  </div>{" "}
                </div>

         
                <div className="  text-left  w-[600px] flex flex-col gap-2 ">
                  <p className="text-[14px] font-medium font-[Roboto] uppercase text-gray-600 ">
                    {podcast.date}
                  </p>
                  <h5 className="text-[16px] font-[600] font-[RFDewiExtended] leading-[24px] tracking-[0.06em] ">
                    {podcast.title}
                  </h5>

                  {/* Description Section */}
                  {/* <p className="text-[14px] text-gray-700 mb-4">
                    {isDescriptionExpanded
                      ? podcast.description
                      : podcast.description.substring(0, 100) + '...'}
                  < /p>

                  <button
                    onClick={() => handleDescriptionToggle(index)}
                    className="text-[14px] font-medium text-blue-500"
                  >
                    {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                  </button> */}
                </div>

                {/* Share Section */}
                <div className="flex flex-col flex-1 gap-3 pt-8">
                  
                  <div className="flex flex-col h-full gap-4 text-right ">
                    <div className="flex flex-col items-end gap-6">
                      <div
                        className="flex items-center gap-[8px]"
                        onClick={() => handlePlayPauseClick(index)} // Play/Pause toggle on thumbnail click
                      >
                        <p className="text-[16px] font-[400] font-[Roboto]">
                          {videoStates[index]?.isPlaying ? "Pause" : "Watch"}
                        </p>
                        {videoStates[index]?.isPlaying ? (
                          <FaPause className="w-4 h-4" />  
                        ) : (
                          <FaPlay className="w-4 h-4" />  
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative group" >
                    <div className="flex items-center justify-end gap-2 cursor-pointer " >
                      <p
                        className="text-left text-[16px] font-[400] font-[Roboto]  "
                        onClick={toggleShareButtons}
                      >
                        Share
                      </p>
                      <FiShare2 className="w-4 h-4" onClick={toggleShareButtons}/>
                    </div>
                    {/* Social Media Share Buttons */}
                    {showShareButtons && (
                      <div className="absolute left-0 flex gap-3 mt-2 top-full">
                        {/* Facebook Share Button */}
                        <FacebookShareButton url={shareUrl}>
                        <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                          <FaFacebookF size={16} round target="_blank" />
                          </div>
                        </FacebookShareButton>

                        {/* Twitter Share Button */}
                        <TwitterShareButton url={shareUrl}>
                          <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                          <FaTwitter size={16} round target="_blank" />
                          </div>
                        </TwitterShareButton>

                        {/* LinkedIn Share Button */}
                        <LinkedinShareButton url={shareUrl}>
                        <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                          <FaLinkedinIn size={16} round target="_blank" />
                          </div>
                        </LinkedinShareButton>

                        {/* Instagram Share Button (using link to Instagram) */}
                        <a
                          href={`https://www.instagram.com/?url=${encodeURIComponent(
                            shareUrl
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7"> 
                          <FaInstagram size={16} />
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-6 mt-8">
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
            {currentPage}/{totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`text-[14px] font-medium font-[Roboto] ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            Next <span className="ml-1">&gt;</span>
          </button>
        </div>

        {/* <ReviewSlider sliderData={sliderData} /> */}

        <SuggestTopicForm />
      </div>
    </div>
  );
}

export default PodcastsEveryDesktop;
