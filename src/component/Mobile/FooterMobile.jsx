import React from "react";
import { Link } from "react-router-dom";
function FooterMobile() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#F3F3F3] overflow-hidden relative w-full">
      <div className="mx-auto w-[90%] mx-auto py-[30px]">
        <div className="mx-auto ">
          <div className="relative">
            <div className="w-[38%] gap-6 flex flex-col relative z-10">
            <a href="/" className="relative flex flex-col items-center">
              <div
                className="relative z-10 flex w-full "
                // onClick={handleLogoClick}
                onClick={() => location.reload()}
              >
                <img
                  src="/desktop-assets/footer/footer-logo.webp"
                  alt="fual-mann-logo"
                  className="cursor-pointer object-cover max-w-[164px]"
                />
              </div>
              </a>
              <p className="text-[14px] font-[Roboto] font-[300] leading-[23px] w-[350px]">
                Paul is a seasoned industry expert specializing in the design
                and implementation of innovative water reuse and efficiency
                solutions that make water go farther.
              </p>
            </div>
            <div className="flex justify-between py-[20px]">
              <div className="w-[50%] flex flex-col justify-center space-y-[10px]   relative z-10 uppercase">
                <Link to="/about">
                  <p className="block font-[RFDewiExtended]  text-[11px] font-[700] leading-[13px]">
                    About
                  </p>
                </Link>

                {/* <Link to="/podcast">
                  <p className="text-[11px]  block font-[RFDewiExtended] font-[700] leading-[13px]">
                    Podcast
                  </p>
                </Link> */}
                <Link to="/glimpse">
                  <p className="text-[11px]  block font-[RFDewiExtended] font-[700] leading-[13px]">
                    Press
                  </p>
                </Link>
              </div>
              <div className="w-[50%] flex flex-col justify-center space-y-[10px]  block font-[Roboto]relative z-10 uppercase">
                <a
                  href="https://www.renovaacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] block font-[RFDewiExtended] font-[700] leading-[13px]"
                  onClick={(e) => handleScroll(e, "FaqD", 90)}
                >
                  Coaching
                </a>
                <Link to="/contact">
                  <p className="text-[11px] block font-[RFDewiExtended] font-[700] leading-[13px]">
                    Connect
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-[100%] flex flex-col space-y-[10px] relative z-10">
              <div className="">
                <h2 className="text-[14px] font-[RFDewiExtended] font-[600] text-black leading-[24px] uppercase font-roboto">
                  SIGN UP FOR OUR NEWSLETTER
                </h2>
                <p className="text-black font-[Roboto] font-light text-[14px] leading-[23.24px] font-roboto">
                  Stay updated on the latest news and exclusive promotions!
                </p>
              </div>
              <div className="space-y-[10px]">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-[100%] text-[12px] p-3 h-[50px] placeholder:text-white outline-none placeholder:font-[700] block font-[Roboto] bg-[#073B63] text-[#FFFFFF] "
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-[100%] text-[12px] p-3 h-[50px] outline-none placeholder:text-white placeholder:font-[700]  bg-[#073B63] text-[#FFFFFF]"
                />
                <button className="block font-[Roboto] px-[24px] h-[50px] text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] font-[900]    border border-[#073B63]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-start space-y-[28px] pt-[20px] items-center ">
            <div className="text-[10px] font-[500] test-[#000] flex leading-[22px] gap-6 uppercase">
              <a
                href="#Paul-Mann"
                className="text-[10.656px] font-[Roboto] font-[500]"
              >
                © Paul Mann
              </a>
              <a
                href="#Privacy-Policy"
                className="text-[10.656px] font-[Roboto] font-[500]"
              >
                Privacy Policy
              </a>
              <a
                href="#Terms"
                className="text-[10.656px] font-[Roboto] font-[500]"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;
