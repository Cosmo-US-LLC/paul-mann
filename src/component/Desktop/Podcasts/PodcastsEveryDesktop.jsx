import React, { useState, useRef, useEffect } from "react";
import SuggestTopicForm from "../../ui/SuggestTopicForm"
import TestimonialCarousel from "../../ui/TestimonialCarousel";

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
          <h3 className="text-[24px] font-bold uppercase leading-[1.5]">
            Podcasts Every *Insert Day
          </h3>
        </div>

        {/* Platform Buttons */}
        <div className="flex justify-center gap-8 mb-8">
          <button className="flex items-center justify-center text-sm font-medium border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
              className="mr-2"
              alt="Spotify"
            />
            Spotify
          </button>
          <button className="flex items-center justify-center text-sm font-medium border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
              className="mr-2"
              alt="Apple"
            />
            Apple
          </button>
          <button className="flex items-center justify-center text-sm font-medium border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
              className="mr-2"
              alt="Amazon"
            />
            Amazon
          </button>
          <button className="flex items-center justify-center text-sm font-medium border border-black w-[120px] h-[40px] uppercase hover:bg-gray-300">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
              className="mr-2"
              alt="YouTube"
            />
            YouTube
          </button>
        </div>

        <div className="flex items-center justify-between pb-2 mb-12">
          <div className="flex gap-6">
            <button className="text-[14px] font-medium uppercase cursor-pointer border-b-2 border-black pb-1">
              Featured Episodes
            </button>
            <button className="text-[14px] font-medium uppercase cursor-pointer text-gray-600 hover:text-black">
              Rain Water
            </button>
            <button className="text-[14px] font-medium uppercase cursor-pointer text-gray-600 hover:text-black">
              Project Design
            </button>
            <button className="text-[14px] font-medium uppercase cursor-pointer text-gray-600 hover:text-black">
              Implementation
            </button>
            <button className="text-[14px] font-medium uppercase cursor-pointer text-gray-600 hover:text-black">
              On Work
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border-b border-black w-[300px]">
            <input
              className="w-full px-2 py-1 outline-none text-[14px] placeholder:uppercase"
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

        {/* Podcast Cards */}
        <div ref={listContainerRef} className="space-y-12">
          {" "}
          {/* Ref added here */}
          {displayedPodcasts.map((podcast, index) => (
            <div
              key={index}
              className="flex items-start gap-8 pb-8 border-b border-gray-300"
            >
              {/* Podcast Image */}
              <div className="relative w-[336px]">
                <img
                  src={podcast.image}
                  className="object-cover "
                  alt={`Podcast ${index + 1}`}
                />
                {/* Episode Display */}
                <div
                  className="absolute inset-y-0 right-[-40px] flex items-center justify-center text-black font-bold uppercase text-[14px]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {podcast.episode}
                </div>
              </div>

              {/* Podcast Info */}
              <div className="flex-1 text-left w-[600px] flex flex-col px-12 py-12">
                <p className="text-[14px] font-medium uppercase text-gray-600 mb-2">
                  {podcast.date}
                </p>
                <h5 className="text-[18px] font-bold leading-[1.4] mb-4 truncate">
                  {podcast.title}
                </h5>
                <p className="text-[14px] font-semibold uppercase cursor-pointer underline">
                  Read More
                </p>
              </div>

              {/* Episode Info and Actions */}
              <div className="flex flex-col gap-4 text-right">
                <div className="flex flex-col items-end gap-6">
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium">Watch</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (1).svg"
                      className="w-6 h-6"
                      alt="Watch"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium">Listen</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (2).svg"
                      className="w-6 h-6"
                      alt="Listen"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium">24</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (3).svg"
                      className="w-6 h-6"
                      alt="Comments"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium">155</p>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (4).svg"
                      className="w-6 h-6"
                      alt="Likes"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-medium">Share</p>
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
            className={`text-[14px] font-medium ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            <span>&lt;</span> Previous
          </button>
          <p className="text-[14px] font-medium">
            {currentPage}/{podcastData.length}{" "}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`text-[14px] font-medium ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:text-black"
            }`}
          >
            Next
            <span className="ml-1">&gt;</span>
          </button>
        </div>

        <SuggestTopicForm/>
      </div>
    </div>
  );
}

export default PodcastsEveryDesktop;
