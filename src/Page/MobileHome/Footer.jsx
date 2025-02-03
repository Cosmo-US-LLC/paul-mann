import React from "react";
import socialicn1 from "../../assets/footer/telegram.svg";
import socialicn2 from "../../assets/footer/instagram.svg";
import socialicn3 from "../../assets/footer/twitter.svg";
import dogevspepe from "../../assets/Mobile/dogevspepe.png";

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
    <div className="w-full z-[99] bg-[black] pt-[40px] pb-[20px]">
      <div className="max-w-[1296px] w-[90%] mx-auto space-y-[32px]">
         
        <div className="flex flex-col space-y-4">
          <img src={dogevspepe} alt="dogevspepe" className="w-[173px]" />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <a
            href="https://example.com"
            className="text-[18px] text-[#fff] font-[400] block"
            onClick={(e) => handleScroll(e, "how-it-all-began", 90)}
          >
            What is DogevsPepe?
          </a>
          {/* <a href="https://example.com" className="text-[18px] text-[#fff] font-[400] block">
            The First Ever Crypto Meme Fight
          </a> */}
          <a
            href="https://example.com"
            className="text-[18px] text-[#fff] font-[400] block"
            onClick={(e) => handleScroll(e, "rules", 90)}
          >
            The 7 Rules
          </a>
          <a
            href="https://example.com"
            className="text-[18px] text-[#fff] font-[400] block"
            onClick={(e) => handleScroll(e, "milestones", 90)}
          >
            Milestones
          </a>
          {/* <a href="https://example.com" className="text-[18px] text-[#fff] font-[400] block">
            The Community Decides
          </a> */}
          <a
            href="https://example.com"
            className="text-[18px] text-[#fff] font-[400] block"
            onClick={(e) => handleScroll(e, "roadmap", 90)}
          >
            Roadmap
          </a>
          {/* <a href="https://example.com" className="mt-4 text-[18px] text-[#fff] font-[400] block">
            $DOGE Tokenomics
          </a> */}
          {/* <a href="https://example.com" className="text-[18px] text-[#fff] font-[400] block">
            $PEPE Tokenomics
          </a> */}
          {/* <a href="https://example.com" className="text-[18px] text-[#fff] font-[400] block">
            Join And Support Your Team On Telegram
          </a> */}
          {/* <a href="https://example.com" className="text-[18px] text-[#fff] font-[400] block">
            Don’t Wait – The Race is On!
          </a> */}
          <a
            href="https://example.com"
            className="text-[18px] text-[#fff] font-[400] block"
            onClick={(e) => handleScroll(e, "faq", 90)}
          >
            FAQ
          </a>
          <a
            href="https://example.com"
            className="text-[18px] text-[#fff] font-[400] block"
            onClick={(e) => handleScroll(e, "faq", 90)}
          >
            Need Help?
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-[16px] text-[#fff] font-[400]">Join us now</h4>
          <div className="flex space-x-3 ">
            <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full relative">
              <img
                src={socialicn1}
                alt="social 1"
                className="absolute w-full h-full bottom-[2px]"
              />
            </div>
            {/* <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full relative">
              <img
                src={socialicn2}
                alt="social 1"
                className="absolute w-full h-full bottom-[2px]"
              />
            </div> */}
            <a
              href="https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full relative cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-300">
                <img
                  src={socialicn3}
                  alt="social 1"
                  className="absolute w-full h-full bottom-[2px]"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16">
          <p className="text-[16px] font-[400] text-[#B4A5A5] leading-[18px] text-center">
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go up as well as down. Profits may be subject
            to capital gains or other taxes applicable in your jurisdiction.
          </p>
          <p className="mt-4 text-[16px] font-[400] text-[#fff] leading-[18px] text-center">
            Copyright 2025 DogevsPepe | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
