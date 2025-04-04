import { useState } from "react";
import { podcastData } from "../../Desktop/Podcasts/PodcastData";

import { FaPlay, FaPause, FaInstagram } from "react-icons/fa";  
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

function PodcastsEvery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showIcons, setShowIcons] = useState(false);  
  const shareUrl = "https://example.com";  
  const title = "Check out this podcast!";  

  const handleShareClick = () => {
    setShowIcons((prev) => !prev);  
  };

  const paginatedPodcasts = podcastData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleThumbnailClick = (youtubeId) => {
 
    const iframe = document.getElementById(`iframe-${youtubeId}`);
    iframe.style.display = "block";  
    const thumbnail = document.getElementById(`thumbnail-${youtubeId}`);
    thumbnail.style.display = "none"; 
  };

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="flex flex-col items-center py-12">
      <div className="w-[90%]">
        <div className="py-6">
          <h3 className="text-[20px] font-[Roboto] font-[500] text-[#000] text-center uppercase leading-[171.429%]">
            New Podcast Every Week
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@IAmPaulMann"
            className="hover:text-gray-300"
          >
            <button className="flex justify-center items-center font-[Roboto] text-[16.152px] font-[400] border border-[#000] w-[147px] h-[47px] leading-[106.667%] uppercase">
              <img
                src="/mobile-assets/Podcasts/pd-btn-icn (4).svg"
                className="object-cover mr-2"
                alt=""
              />
              Youtube
            </button>
          </a>
          <button className="flex justify-center bg-gray-200 items-center font-[Roboto] text-[16.152px] font-[400] border border-[#000] w-[147px] h-[47px] leading-[106.667%] uppercase">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (1).svg"
              className="object-cover mr-2"
              alt=""
            />
            Spotify
          </button>
          <button className="flex justify-center bg-gray-200 items-center font-[Roboto] text-[16.152px] font-[400] border border-[#000] w-[147px] h-[47px] leading-[106.667%] uppercase">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (2).svg"
              className="object-cover mr-2"
              alt=""
            />
            Apple
          </button>
          <button className="flex justify-center bg-gray-200 items-center font-[Roboto] text-[16.152px] font-[400] border border-[#000] w-[147px] h-[47px] leading-[106.667%] uppercase">
            <img
              src="/mobile-assets/Podcasts/pd-btn-icn (3).svg"
              className="object-cover mr-2"
              alt=""
            />
            amazon
          </button>
        </div>
        <div className="flex items-center justify-between py-12">
          <div className="w-[50%]">
            <div className="flex items-center mt-1 space-x-2">
              <h4 className="text-[16px] font-[Roboto] font-[500]">
                Featured Episodes
              </h4>
              {/* <img
                src="/mobile-assets/Podcasts/Arrow 2 (Stroke).svg"
                className="mt-1"
                alt=""
              /> */}
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex justify-between border-b border-[#000]">
              <input
                className="w-[98%] font-[Roboto] px-2 outline-none text-[12px] placeholder:uppercase"
                placeholder="Search"
                type="text"
                name=""
                id=""
              />
              <img src="/mobile-assets/Podcasts/SVG (1).svg" alt="" />
            </div>
          </div>
        </div>
        <div className="space-y-[43px]">
          {podcastData.map((podcast, index) => (
            <div key={index}>
              <div className="flex space-x-[19px] justify-between items-center">
                <div>
                  {/* Thumbnail Image */}
                  <div
                    id={`thumbnail-${podcast.youtubeId}`}
                    className="relative cursor-pointer"
                    onClick={() => handleThumbnailClick(podcast.youtubeId)}
                  >
                    <img
                      src={podcast.thumbnail} // Use thumbnail from the data
                      className="object-cover w-full"
                      alt={`Podcast ${index + 1}`}
                    />
                    {/* <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                  <img
                    src="/mobile-assets/Podcasts/play-icon.svg" // A play icon to indicate video
                    alt="Play"
                    className="w-12 h-12"
                  />
                </div> */}
                  </div>

                  {/* YouTube Embed (hidden by default) */}
                  <iframe
                    id={`iframe-${podcast.youtubeId}`}
                    width="100%"
                    height="215"
                    style={{ display: "none" }} // Hidden initially, shown when thumbnail clicked
                    src={`https://www.youtube.com/embed/${podcast.youtubeId}`} // YouTube ID for each podcast
                    title={`YouTube video for ${podcast.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <div className="py-2">
                    <p className="text-[16px] font-[Roboto] font-[400] uppercase leading-[240%]">
                      {podcast.date}
                    </p>
                    <h5 className="text-[14px] font-[Roboto] font-[500] uppercase leading-[142.857%]">
                      {podcast.title}
                    </h5>
                  </div>
                  {/* <p className="text-[12px] font-[Roboto] pt-[16px] font-[500] uppercase w-[70px] border-b border-[#000]">
                Read More
              </p> */}
                </div>
                <div style={{ writingMode: "sideways-lr" }}>
                  <p className="text-[12px] font-[Roboto] font-[500] leading-[200%] uppercase">
                    {podcast.episode}
                  </p>
                </div>
              </div>
              <div className="flex justify-left gap-6 pt-[20px]">
                <div className="flex items-center space-x-2">
                  <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
                    Watch
                  </p>
                  <img
                    src="/mobile-assets/Podcasts/pd-card-icn (1).svg"
                    className="w-[12.115px] h-[14.306px]"
                    alt="Watch"
                  />
                </div>

                <div
                  className="relative flex items-center space-x-2 cursor-pointer"
                  onClick={handleShareClick}
                >
                  <p className="text-[12px] font-[Roboto] font-[500] leading-[182.592%] mb-[2px]">
                    SHARE
                  </p>
                  <div>
                    <img
                      src="/mobile-assets/Podcasts/pd-card-icn (5).svg"
                      className="w-[21.911px] h-[21.911px]"
                      alt="Share"
                    />
                  </div>

                  {/* Show the icons when 'showIcons' state is true */}
                  {showIcons && (
                    <div className="absolute left-0 z-10 flex items-center mt-2 space-x-2 top-full">
                      <FacebookShareButton url={shareUrl} quote={title}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <TwitterShareButton url={shareUrl} title={title}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                      <FaInstagram size={32} className="cursor-pointer" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
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
