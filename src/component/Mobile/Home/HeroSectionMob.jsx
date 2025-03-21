import React, { useRef, useState } from "react";

function HeroSectionMob() {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  const handleEnableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setSoundOn(true);
    }
  };

  return (
    <div className="relative w-full h-full mt-4 overflow-hidden">
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        src="/video/hero-video.mp4"   // ✅ Corrected path: no `/public`
        autoPlay
        muted
        loop
        playsInline
      />

      {!soundOn && (
        <button
          onClick={handleEnableSound}
          className="absolute z-10 px-4 py-2 text-sm text-white bg-black rounded-full shadow-lg bottom-2 left-4 bg-opacity-60"
        >
          🔊 Enable Sound
        </button>
      )}
    </div>
  );
}

export default HeroSectionMob;





// import {
//     FaFacebook,
//     FaTwitter,
//     FaInstagram,
//     FaLinkedin,
//     FaYoutube,
//   } from "react-icons/fa";
  
//   function HeroSectionMob() {
//     return (
//       <div className="heroBGmob min-h-[650px] mt-4 flex items-end">
//         <div className="max-w-[1440px] w-full h-full mx-auto pb-[30px]">
//           <div className="max-w-[1200px] gap-8 flex justify-center items-end w-full h-full mx-auto ">
//             <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 text-white">
//               <h1 className="text-[20px] font-[RFDewiExtended] max-w-[350px] w-[100%] font-[700]">
//                 Paul Is A Seasoned Industry Expert Specializing In The Design And
//                 Implementation Of Innovative Water Reuse And Efficiency Solutions
//                 That Make Water Go Farther
//               </h1>
  
//               <div className="flex items-center gap-6 w-[100%] mt-[28px]">
//                 <h3 className="text-[12px] font-[500] leading-[100%] font-[Roboto] uppercase">follow Paul:</h3>
              
//                 <a href="https://www.linkedin.com/in/pauldmann/" className="hover:text-gray-300">
//                 <img className="object-cover" src={'/mobile-assets/hero/hero (4).svg'} alt="" />

//                 </a>
//                 <a href="https://www.youtube.com/@IAmPaulMann" className="hover:text-gray-300">
//                 <img className="object-cover" src={'/mobile-assets/hero/hero (5).svg'} alt="" />

//                 </a>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default HeroSectionMob;
  