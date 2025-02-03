import React from "react";
import Logo from "../assets/footer/logo.svg";
import socialicn1 from "../assets/footer/telegram.svg";
import socialicn2 from "../assets/footer/instagram.svg";
import socialicn3 from "../assets/footer/twitter.svg";

function Footer() {
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };
  return (
    <div className="w-[100%] z-[99] bg-[#181818] pt-[56px] pb-[36px] overflow-hidden">
      <div className="max-w-[1296px]  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[100%]  mx-auto space-y-[64px]">
        <div className="flex justify-between px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={Logo} alt="footer logo" className="" />
          </div>
          <div className="space-y-[10px]">
            <a
              href="firstever"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "firstever", 90)}
            >
              What is DogevsPepe?
            </a>
            {/* <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              The First Ever Crypto Meme Fight
            </a> */}
            <a
              href="rules"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "rules", 90)}
            >
              The 7 Rules
            </a>
            <a
              href="milestones"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "milestones", 90)}
            >
              Milestones
            </a>
            {/* <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              The Community Decides{" "}
            </a> */}
            <a
              href="roadmap"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "roadmap", 90)}
            >
              Roadmap
            </a>
          </div>
          <div className="space-y-[10px]">
            <a
              href="tokenomics"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "tokenomics", 90)}
            >
              $DOGE Tokenomics
            </a>
            <a
              href="tokenomics"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "tokenomics", 90)}
            >
              $PEPE Tokenomics
            </a>
            {/* <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Support Your Team On Telegram
            </a> */}
            {/* <a
              href="https://example.com"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
            >
              Don’t Wait – The Race is On!
            </a> */}
            <a
              href="need-help"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "faq", 90)}
            >
              Need Help?
            </a>
            <a
              href="faq"
              className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block"
              onClick={(e) => handleScroll(e, "faq", 90)}
            >
              FAQ
            </a>
          </div>
          <div className="max-w-fit w-[100%] space-y-[10px] flex flex-col  items-start">
            <h4 className="text-[18px] text-[#fff] font-[400] leading-[119.856%]">
              Join us now{" "}
            </h4>
            <div className="flex space-x-2">
              <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full relative transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-80">
                <img
                  src={socialicn1}
                  alt="social 1"
                  className="absolute w-full h-full bottom-[2px] "
                />
              </div>
              {/* <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full relative transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-80">
                <img
                  src={socialicn2}
                  alt="social 1"
                  className="absolute w-full h-full bottom-[2px] "
                />
              </div> */}
              <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full relative transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-80">
                <a
                  href="https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socialicn3}
                    alt="social 1"
                    className="absolute w-full h-full bottom-[2px] "
                  />
                </a>
              </div>
            </div>
            <div className="w-full pt-6">
              <h4 className="text-[18px] text-[#fff] font-[400] leading-[119.856%] text-left mb-1">
                E-mail
              </h4>
              <a
                href="mailto:Support@dogevspepe.io"
                className="cursor-pointer text-[18px] text-[#fff] font-[400] leading-[119.856%] hover:opacity-80 text-left underline underline-offset-2 decoration-white"
              >
                Support@dogevspepe.io
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[90%] xl:max-w-[1031px] w-[100%] mx-auto space-y-[27px]">
          <p className="text-[18px] font-[400] text-center leading-[119.856%] text-[#fff]">
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go up as well as down. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
          </p>
          <p className="text-[18px] font-[400] text-center leading-[119.856%] text-[#fff]">
            Copyright 2025 DogevsPepe | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
