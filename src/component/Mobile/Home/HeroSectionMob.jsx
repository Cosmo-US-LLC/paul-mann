import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
  } from "react-icons/fa";
  
  function HeroSectionMob() {
    return (
      <div className="heroBGmob min-h-[650px] flex items-end">
        <div className="max-w-[1440px] w-full h-full mx-auto pb-[30px]">
          <div className="max-w-[1200px] gap-8 flex justify-center items-end w-full h-full mx-auto ">
            <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 text-white">
              <h1 className="text-[20px] font-[RFDewiExtended] max-w-[350px] w-[100%] font-[700]">
                Paul Is A Seasoned Industry Expert Specializing In The Design And
                Implementation Of Innovative Water Reuse And Efficiency Solutions
                That Make Water Go Farther
              </h1>
  
              <div className="flex justify-between w-[100%] mt-[28px]">
                <h3 className="text-[12px] font-[500] leading-[100%] font-[Roboto] uppercase">follow Paul:</h3>
                <a href="#" className="hover:text-gray-300">
                 <img className="object-cover" src={'/mobile-assets/hero/hero (1).svg'} alt="" />
                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover" src={'/mobile-assets/hero/hero (2).svg'} alt="" />

                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover" src={'/mobile-assets/hero/hero (3).svg'} alt="" />

                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover" src={'/mobile-assets/hero/hero (4).svg'} alt="" />

                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover" src={'/mobile-assets/hero/hero (5).svg'} alt="" />

                </a>
                <a href="#" className="hover:text-gray-300">
                <img className="object-cover" src={'/mobile-assets/hero/hero (6).svg'} alt="" />

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroSectionMob;
  