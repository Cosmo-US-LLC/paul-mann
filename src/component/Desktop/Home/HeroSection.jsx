import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function HeroSection() {
  return (
    <div className="heroBG">
      {/* <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px] gap-8 flex w-full h-full mx-auto "> */}
      <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px] h-[750px] gap-10 mx-auto flex flex-col justify-center text-white">
          <div className="relative z-10 flex flex-col justify-end h-full gap-10 py-10 text-white">
            <h1 className="w-[857px] text-[26px] font-[700]">
              Paul Is A Seasoned Industry Expert Specializing In The <br />{" "}
              Design And Implementation Of Innovative Water Reuse And <br />{" "}
              Efficiency Solutions That Make Water Go Farther
            </h1>

            <div className="flex gap-10">
              <p className="text-[16px] font-[500] leading-[24px] uppercase">
                follow Paul :
              </p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>

                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaYoutube size={24} />
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
