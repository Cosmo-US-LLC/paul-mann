import React from "react";

function HeroSection() {
  return (
    <div className="relative">
      <img
        className="absolute inset-0 object-cover w-full h-full "
        src={"/desktop-assets/hero/hero-bg.webp"}
        alt="Hero background"
      />

      <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px] h-[750px] gap-10 mx-auto flex flex-col justify-center text-white">
          <div className="relative z-10 flex flex-col justify-end h-full gap-10 py-10 text-white">
            <h1 className="w-[857px] font-[RFDewiExtended] text-[26px] font-[700] tracking-[0.4px] leading-normal">
              Paul is a seasoned industry expert specializing in the <br /> design and
              implementation of innovative water reuse and <br /> efficiency solutions
              that make water go farther
            </h1>

            <div className="flex items-center gap-10">
              <p className="text-[16px] font-[RFDewi-Regular] font-[500] leading-[24px] uppercase">
                follow Paul :
              </p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-gray-300">
                  <img
                    className="object-cover h-6"
                    src={"/desktop-assets/hero/logo1.svg"}
                    alt="Facebook Logo"
                  />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <img
                    className="object-cover h-6"
                    src={"/desktop-assets/hero/logo2.svg"}
                    alt="Twitter Logo"
                  />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <img
                    className="object-cover h-6"
                    src={"/desktop-assets/hero/logo3.svg"}
                    alt="Instagram Logo"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/pauldmann/"
                  className="hover:text-gray-300"
                >
                  <img
                    className="object-cover h-6"
                    src={"/desktop-assets/hero/logo4.svg"}
                    alt="LinkedIn Logo"
                  />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <img
                    className="object-cover h-6"
                    src={"/desktop-assets/hero/logo5.svg"}
                    alt="YouTube Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";

// function HeroSection() {
//   return (
//     <div className="heroBG">
//       {/* <div className="max-w-[1440px] w-full h-full mx-auto">
//         <div className="max-w-[1200px] gap-8 flex w-full h-full mx-auto "> */}
//       <div className="max-w-[1440px] w-full h-full mx-auto">
//         <div className="max-w-[1200px] h-[750px] gap-10 mx-auto flex flex-col justify-center text-white">
//           <div className="relative z-10 flex flex-col justify-end h-full gap-10 py-10 text-white">
//             <h1 className="w-[857px] font-[RFDewi-bold] text-[26px] font-[700]">
//               Paul Is A Seasoned Industry Expert Specializing In The <br />{" "}
//               Design And Implementation Of Innovative Water Reuse And <br />{" "}
//               Efficiency Solutions That Make Water Go Farther
//             </h1>

//             <div className="flex items-center gap-10">
//               <p className="text-[16px] font-[Roboto] font-[500] leading-[24px] uppercase">
//                 follow Paul :
//               </p>
//               <div className="flex gap-8">
//                 <a href="#" className="hover:text-gray-300">
//                 <img className="object-cover h-6" src={'/desktop-assets/hero/logo1.svg'} alt="" />
//                 </a>

//                 <a href="#" className="hover:text-gray-300">
//                 <img className="object-cover h-6" src={'/desktop-assets/hero/logo2.svg'} alt="" />
//                 </a>

//                 <a href="#" className="hover:text-gray-300">
//                 <img className="object-cover h-6" src={'/desktop-assets/hero/logo3.svg'} alt="" />
//                 </a>
//                 <a href="https://www.linkedin.com/in/pauldmann/" className="hover:text-gray-300">
//                 <img className="object-cover h-6" src={'/desktop-assets/hero/logo4.svg'} alt="" />
//                 </a>
//                 <a href="#" className="hover:text-gray-300">
//                 <img className="object-cover h-6" src={'/desktop-assets/hero/logo5.svg'} alt="" />
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
