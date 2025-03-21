import React, { useRef, useState } from "react";

function HeroSection() {
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
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        src="/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {!soundOn && (
        <button
          onClick={handleEnableSound}
          className="absolute z-10 px-4 py-2 text-sm text-white bg-black rounded-full shadow-lg bottom-6 left-6 bg-opacity-60"
        >
          🔊 Enable Sound
        </button>
      )}
    </div>
  );
}

export default HeroSection;


// import React from "react";

// function HeroSection() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <video
//         className="absolute top-0 left-0 object-cover w-full h-full"
//         src="/public/video/hero-video.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional dark overlay */}

//       <div className="absolute left-0 flex items-end justify-start w-full h-full max-h-screen px-4 mx-auto bottom-10">
//         <div className="max-w-[1200px] w-full mx-auto gap-10 flex flex-col justify-center items-start text-white">
//           <div className="relative z-10 flex flex-col justify-end h-full gap-10 pb-3 text-white">
//             <h1 className="w-[857px] font-[RFDewiExtended] text-[26px] font-[700] tracking-[0.4px] capitalize leading-normal">
//               Paul is a seasoned industry expert specializing in the <br /> 
//               design and implementation of innovative water reuse and <br /> 
//               efficiency solutions that make water go farther
//             </h1>

//             <div className="flex items-center gap-10">
//               <p className="text-[16px] font-[RFDewi-Regular] font-[500] leading-[24px] uppercase">
//                 follow Paul :
//               </p>
//               <div className="flex gap-8">
//                 <a
//                   href="https://www.linkedin.com/in/pauldmann/"
//                   className="hover:text-gray-300"
//                 >
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo4.svg"}
//                     alt="LinkedIn Logo"
//                   />
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@IAmPaulMann"
//                   className="hover:text-gray-300"
//                 >
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo5.svg"}
//                     alt="YouTube Logo"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;



// import React from "react";

// function HeroSection() {
//   return (
//     <div className="relative">
//       <img
//         className="object-cover w-full h-auto pt-6"
//         src={"/desktop-assets/hero/hero-bg-desktop.webp"}
//         alt="Hero background"
//       />

//       <div className="absolute left-0 flex items-end justify-start w-full h-full max-h-screen mx-auto bottom-10">
//         <div className="max-w-[1200px] w-full mx-auto gap-10 flex flex-col justify-center items-start text-white">
//           <div className="relative z-10 flex flex-col justify-end h-full gap-10 pb-3 text-white">
//             <h1 className="w-[857px] font-[RFDewiExtended] text-[26px] font-[700] tracking-[0.4px] capitalize leading-normal">
//               Paul is a seasoned industry expert specializing in the <br />{" "}
//               design and implementation of innovative water reuse and <br />{" "}
//               efficiency solutions that make water go farther
//             </h1>

//             <div className="flex items-center gap-10">
//               <p className="text-[16px] font-[RFDewi-Regular] font-[500] leading-[24px] uppercase">
//                 follow Paul :
//               </p>
//               <div className="flex gap-8">
//                 <a href="#" className="hover:text-gray-300">
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo1.svg"}
//                     alt="Facebook Logo"
//                   />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo2.svg"}
//                     alt="Twitter Logo"
//                   />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo3.svg"}
//                     alt="Instagram Logo"
//                   />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/pauldmann/"
//                   className="hover:text-gray-300"
//                 >
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo4.svg"}
//                     alt="LinkedIn Logo"
//                   />
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@IAmPaulMann"
//                   className="hover:text-gray-300"
//                 >
//                   <img
//                     className="object-cover h-6"
//                     src={"/desktop-assets/hero/logo5.svg"}
//                     alt="YouTube Logo"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
 