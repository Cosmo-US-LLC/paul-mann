import { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FiShare2 } from "react-icons/fi";
import { podcastData } from "../../Desktop/Podcasts/PodcastData";

function PodcastsEvery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showIcons, setShowIcons] = useState(false);
  const [shareIndex, setShareIndex] = useState(null)
  const [activeTab, setActiveTab] = useState("featured")

  const tabs = [
    { key: "featured", label: "Featured Episodes" },
    { key: "guest", label: "Guest Podcast" },
    { key: "water", label: "Water Champions Podcast" },
  ]

  // Define the videoStates state to track play/pause for each video
  const [videoStates, setVideoStates] = useState(
    podcastData.map(() => ({ isPlaying: false })) // Initialize with all videos paused
  );

  const shareUrl = "https://www.youtube.com/watch?v=d8mw9kot9pk&t=2032s";
  const title = "Check out this podcast!";

  const handleShareClick = () => {
    setShowIcons((prev) => !prev);
  };

  const handlePlayPauseClick = (index) => {
    setVideoStates((prevStates) => {
      return prevStates.map((state, i) => {
        if (i === index) {
          return { isPlaying: !state.isPlaying }; // Toggle play/pause for clicked podcast
        }
        return state;
      });
    });
  };

  const paginatedPodcasts = podcastData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="flex flex-col items-center py-12">
      <div className="w-[90%]">
        {/* <div className="py-6">
          <h3 className="text-[20px] font-[Roboto] font-[500] text-[#000] text-center uppercase leading-[171.429%]">
            New Podcast Every Week
          </h3>
        </div> */}

        {/* Platform Buttons */}
        <div className="flex flex-col items-center justify-center gap-6 pb-4 pt-7 ">
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/@IAmPaulMann"
              className="relative hover:text-black "
            >
              <button className="tracking-[0.9px] flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[130px] h-[44px] uppercase hover:bg-[#e5e7eb] hover:text-gray-800">
                <img
                  src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
                  className="w-6 h-6 mr-2"
                  alt="YouTube"
                />
                YouTube
              </button>
            </a>

            <div className="relative tooltip-container">
              <a
                href="https://open.spotify.com/show/5JGG4GsUy9X3Zv41o0utGN"
                className="relative hover:text-black "
              >
                <button className="tracking-[0.9px] flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[130px] h-[44px] uppercase hover:bg-[#e5e7eb] hover:text-gray-800">
                  <img
                    src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
                    className="w-6 h-6 mr-2"
                    alt="Spotify"
                  />
                  Spotify
                </button>
              </a>
              {/* <span className="absolute hidden w-[90px] px-2 py-2 mb-2 text-[12px] font-[400] text-white transform -translate-x-1/2 bg-black rounded tooltip-text bottom-full left-1/2">
                Coming soon
              </span> */}
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="relative tooltip-container">
              <a
                href="https://podcasts.apple.com/us/podcast/the-water-champions-podcast/id1811129595"
                className="relative hover:text-black "
              >
              <button className="tracking-[0.9px] flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[130px] h-[44px] uppercase hover:bg-[#e5e7eb] hover:text-gray-800">
                <img
                  src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
                  className="w-6 h-6 mr-2"
                  alt="Apple"
                />
                Apple
              </button>
              </a>
            </div>

            <div className="relative tooltip-container">
            <a
                href="https://music.amazon.com/podcasts/1085a5b3-0753-4e00-923d-a9817fced663/the-water-champions-podcast"
                className="relative hover:text-black "
              >
              <button className="tracking-[0.9px] flex items-center justify-center text-[14px] font-[500] font-[Roboto] border border-black w-[130px] h-[44px] uppercase hover:bg-[#e5e7eb] hover:text-gray-800">
                <img
                  src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
                  className="w-6 h-6 mr-2"
                  alt="Amazon"
                />
                Amazon
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Categories Buttons */}
        <div className="flex items-center flex-col justify-center pt-8 pb-12">
        <div className="flex items-center justify-center border-b border-black max-w-[300px] w-[100%]">
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
        <div className="flex flex-wrap w-[90%] max-w-[330px] pt-4 justify-around mx-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-[14px] font-medium mt-2 font-[Roboto] hover:border-black uppercase border-b-2 border-[#fff] cursor-pointer whitespace-nowrap ${
                  activeTab === tab.key ? "border-b-2 border-black" : "text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          
        </div>

        {/* Display Podcasts */}
        <div className="space-y-[43px]">
          {paginatedPodcasts
            .filter((podcast) => {
              if (activeTab === "guest") return podcast.youtubeId === ""
              if (activeTab === "water") return podcast.youtubeId !== ""
              return true // "featured" tab shows all
            })
            .map((podcast, index) => {
              const videoUrl = podcast?.youtubeId
                ? `https://www.youtube.com/embed/${podcast.youtubeId}?autoplay=1&mute=1`
                : ""

              return (
                <div key={index}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative w-[336px]">
                      {videoUrl !== "" ? (
                        <div className="relative w-full h-[100%]]">
                          {videoStates[index]?.isPlaying ? (
                            <iframe
                              src={videoUrl}
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
                                src={podcast.thumbnail || "/placeholder.svg"}
                                alt="Video Thumbnail"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="relative w-full h-[100%]">
                          <div className="relative w-full h-full cursor-pointer">
                            <a href={podcast?.shareUrl} target="_blank" rel="noopener noreferrer">
                              <img
                                src={podcast.thumbnail || "/placeholder.svg"}
                                alt="Image Thumbnail"
                                className="object-cover w-full h-full"
                              />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="flex items-center justify-center "
                      style={{
                        transform: "rotate(90deg)",
                        transformOrigin: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <p className="text-[14px] font-[Roboto] font-[400] uppercase">{podcast.episode}</p>
                    </div>
                  </div>

                  {/* Title and Date */}
                  <div className="py-4">
                    <p className="text-[14px] font-[Roboto] font-[400] uppercase leading-[240%]">{podcast.date}</p>
                    <h5 className="text-[16px] font-[Roboto] font-[500] uppercase leading-[142.857%]">
                      {podcast.title}
                    </h5>
                  </div>

                  {/* Play/Pause button */}
                  <div className="flex items-center gap-4">
                    {videoUrl !== "" ? (
                      <div className="flex items-center gap-[8px]" onClick={() => handlePlayPauseClick(index)}>
                        <p className="text-[16px] font-[400] font-[Roboto]">
                          {videoStates[index]?.isPlaying ? "Pause" : "Watch"}
                        </p>
                        {videoStates[index]?.isPlaying ? (
                          <FaPause className="w-4 h-4" />
                        ) : (
                          <FaPlay className="w-4 h-4" />
                        )}
                      </div>
                    ) : (
                      <div
                        className="flex gap-2 cursor-pointer"
                        onClick={() => window.open(podcast?.shareUrl, "_blank")}
                      >
                        <p className="text-[16px] font-[400] font-[Roboto]">Listen</p>
                        <img src="/mobile-assets/Podcasts/VoiceImage.png" alt="Voice Image" />
                      </div>
                    )}

                    {/* Share Button */}
                    <div className="relative flex items-center gap-1 cursor-pointer" onClick={handleShareClick}>
                      <p className="text-[16px] font-[Roboto] font-[400] leading-[182.592%] ">SHARE</p>
                      <FiShare2 className="w-4 h-4" />

                      {/* Show the icons when 'showIcons' state is true */}
                      {showIcons && (
                        <div className="absolute left-[30px] z-10 flex items-center space-x-2 top-full">
                          <FacebookShareButton url={podcast.shareUrl}>
                            <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                              <FaFacebookF size={16} round target="_blank" />
                            </div>
                          </FacebookShareButton>
                          <TwitterShareButton url={podcast.shareUrl}>
                            <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                              <FaTwitter size={16} round target="_blank" />
                            </div>
                          </TwitterShareButton>

                          {/* LinkedIn Share Button */}
                          <LinkedinShareButton url={podcast.shareUrl}>
                            <div className="flex items-center justify-center border border-gray-500 rounded-full w-7 h-7">
                              <FaLinkedinIn size={16} round target="_blank" />
                            </div>
                          </LinkedinShareButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center pt-8 space-x-4">
          <div className="w-[80px]">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex font-[Roboto] items-center text-[12px]"
              >
                <img
                  src="/mobile-assets/Podcasts/Vector (5).svg"
                  className="mr-3 rotate-[180deg]"
                  alt=""
                />
                Previous
              </button>
            )}
          </div>

          <span className="text-[12px] font-[Roboto]">
            {currentPage} / {Math.ceil(podcastData.length / itemsPerPage)}
          </span>

          <div className="w-[100px]">
            {currentPage < Math.ceil(podcastData.length / itemsPerPage) && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 text-[12px] font-[Roboto] flex items-center"
              >
                Next
                <img
                  src="/mobile-assets/Podcasts/Vector (5).svg"
                  className="ml-3"
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PodcastsEvery;

// import { useState } from "react";
// import { podcastData } from "../../Desktop/Podcasts/PodcastData";

// function PodcastsEvery() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // Slice the podcasts for the current p)(*&^%%@@

//   const paginatedPodcasts = podcastData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <section className="flex flex-col items-center py-12">
//       <div className="w-[90%]">
//         <div>
//           <div className="pb-[10px]">
//             <h3 className="text-[14px] font-[Roboto] font-[500] text-[#000] text-center uppercase leading-[171.429%]" >
//             New Podcast Every Week
//             </h3>
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <button className="flex justify-center items-center font-[Roboto] text-[6.152px] font-[400] border border-[#000] w-[77px] h-[27px] leading-[106.667%] uppercase">
//             <img
//               src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
//               className="object-cover mr-2"
//               alt=""
//             />
//             Spotify
//           </button>
//           <button className="flex justify-center items-center font-[Roboto] text-[6.152px] font-[400] border border-[#000] w-[77px] h-[27px] leading-[106.667%] uppercase">
//             <img
//               src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
//               className="object-cover mr-2"
//               alt=""
//             />
//             Apple
//           </button>
//           <button className="flex justify-center items-center font-[Roboto] text-[6.152px] font-[400] border border-[#000] w-[77px] h-[27px] leading-[106.667%] uppercase">
//             <img
//               src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
//               className="object-cover mr-2"
//               alt=""
//             />
//             amazon
//           </button>
//           <a href="https://www.youtube.com/@IAmPaulMann" className="hover:text-gray-300">
//           <button className="flex justify-center items-center font-[Roboto] text-[6.152px] font-[400] border border-[#000] w-[77px] h-[27px] leading-[106.667%] uppercase">
//             <img
//               src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
//               className="object-cover mr-2"
//               alt=""
//             />
//             Youtube
//           </button>
//           </a>
//         </div>
//         <div className="pt-[17px] pb-[29px] flex justify-between items-center">
//           <div className="w-[50%]">
//             <div className="flex items-center mt-1 space-x-2">
//               <h4 className="text-[12px] font-[Roboto] font-[500]">Featured Episodes</h4>
//               <img
//                 src="/mobile-assets/Podcasts/Arrow 2 (Stroke).svg"
//                 className="mt-1"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="w-[50%]">
//             <div className="flex justify-between border-b border-[#000]">
//               <input
//                 className="w-[98%] font-[Roboto] px-2 outline-none text-[12px] placeholder:uppercase"
//                 placeholder="Search"
//                 type="text"
//                 name=""
//                 id=""
//               />
//               <img src="/mobile-assets/Podcasts/SVG (1).svg" alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="space-y-[33px]">
//           {paginatedPodcasts.map((podcast, index) => (
//             <div key={index} className="">
//               <div className="flex space-x-[19px] justify-between items-center">
//                 <div>
//                   <img
//                     src={podcast.image}
//                     className="object-cover"
//                     alt={`Podcast ${index + 1}`}
//                   />
//                   <div className="pt-[6px]">
//                     <p className="text-[10px] font-[Roboto] font-[400] uppercase leading-[240%]">
//                       {podcast.date}
//                     </p>
//                     <h5 className="text-[14px] font-[Roboto] font-[500] uppercase leading-[142.857%]">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Etiam tincidunt nulla enim, consectetur sagittis mauris
//                       tincidunt sollicitudin. Nulla scelerisque efficitur
//                       euismod.
//                     </h5>
//                   </div>
//                   <p className="text-[12px] font-[Roboto] pt-[16px] font-[500] uppercase w-[70px] border-b border-[#000]">
//                     Read More
//                   </p>
//                 </div>
//                 <div style={{ writingMode: "sideways-lr" }}>
//                   <p className="text-[12px] font-[Roboto] font-[500] leading-[200%] uppercase">
//                     {podcast.episode}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-between pt-[20px]">
//                 <div className="flex items-center space-x-2">
//                   <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
//                     Watch
//                   </p>
//                   <img
//                     src="/mobile-assets/Podcasts/pd-card-icn (1).svg"
//                     className="w-[12.115px] h-[14.306px]"
//                     alt="Watch"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
//                     Listen
//                   </p>
//                   <img
//                     src="/mobile-assets/Podcasts/pd-card-icn (2).svg"
//                     className="w-[18.259px] h-[18.259px]"
//                     alt="Listen"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
//                     24
//                   </p>
//                   <img
//                     src="/mobile-assets/Podcasts/pd-card-icn (3).svg"
//                     className="w-[21.911px] h-[21.911px]"
//                     alt="Comments"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
//                     155
//                   </p>
//                   <img
//                     src="/mobile-assets/Podcasts/pd-card-icn (4).svg"
//                     className="w-[21.911px] h-[21.911px]"
//                     alt="Likes"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
//                     SHARE
//                   </p>
//                   <img
//                     src="/mobile-assets/Podcasts/pd-card-icn (5).svg"
//                     className="w-[21.911px] h-[21.911px]"
//                     alt="Share"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//      <div className="flex items-center justify-center pt-8 space-x-4">
//      <div className="w-[80px]">
//   {currentPage > 1 && (
//     <button
//       onClick={() => handlePageChange(currentPage - 1)}
//       className="flex font-[Roboto] items-center text-[12px]"
//     >
//       <img src="/mobile-assets/Podcasts/Vector (5).svg" className="mr-3 rotate-[180deg]" alt="" />
//       Previous
//     </button>
//   )}
//      </div>

//   <span className="text-[12px] font-[Roboto]">
//      {currentPage} / {Math.ceil(podcastData.length / itemsPerPage)}
//   </span>

//   <div className="w-[100px]">
//   {currentPage < Math.ceil(podcastData.length / itemsPerPage) && (
//     <button
//       onClick={() => handlePageChange(currentPage + 1)}
//       className="px-4 text-[12px] font-[Roboto] flex items-center"
//     >
//       Next
//       <img src="/mobile-assets/Podcasts/Vector (5).svg" className="ml-3" alt="" />
//     </button>
//   )}
//   </div>
// </div>
//       </div>
//     </section>
//   );
// }

// export default PodcastsEvery;
