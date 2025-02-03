import React, { useState } from "react";
import Logo from "../assets/navbar/navLogo.svg";
import menuIcon from "../assets/navbar/Group 1410124892.svg";
import { getConfig, useAccount } from "../presale-gg/web3";
import { disconnect } from "@wagmi/core";
import { showConnectionModal } from "../presale-gg/stores/modal.store";
// import xIcon from "../assets/navbar/X-app.svg";
// import telegramIcon from "../assets/navbar/telegram.svg";
// import copyIcon from "../assets/navbar/copy.svg";
import twitterIcon from "../assets/navbar/X-copy.svg";
import telegramIcon from "../assets/navbar/tele-copy.svg";

// import React, { useState } from "react";
// import Logo from "../assets/navbar/navLogo.svg";
// import menuIcon from "../assets/navbar/Group 1410124892.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const accountData = useAccount();

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

  const [copied, setCopied] = useState(false);

  // Function to copy link to clipboard
  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Reset after 2 seconds
    });
  };

  return (
    <div className="fixed w-[100%]  z-[99] bg-[#000000]">
      <div className="max-w-[1296px] relative max-md:w-[90%] md:w-[100%] mx-auto max-md:h-[62px] max-sm:h-[72px] h-[112px] flex justify-between items-center px-[17px]">
        <div className="flex items-center">
          <div
            className="max-md:block hidden mr-[12px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuIcon} alt="Menu " className=" w-[29px] h-[29px]" />
          </div>

          <img
            className="max-w-[100%] sm:max-w-[100px] max-sm:max-w-[140px] cursor-pointer"
            src={Logo}
            alt="Logo"
            onClick={(e) => handleScroll(e, "what-is", 90)}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="2xl:flex xl:flex lg:flex md:flex max-md:hidden justify-center items-center space-x-[30px]">
          <a
            href="#firstever"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "firstever", 90)}
          >
            What is DogevsPepe?
          </a>
          <a
            href="#rules"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "rules", 90)}
          >
            The 7 Rules
          </a>
          {/* <a
            href="#how-to-buy"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "how-to-buy", 90)}
          >
            How To Buy
          </a> */}
          <a
            href="#tokenomics"
            className="text-[#fff] text-[16px] font-[600]"
            onClick={(e) => handleScroll(e, "tokenomics", 90)}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "roadmap", 90)}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "faq", 90)}
          >
            FAQ
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="absolute top-[73px] left-[20px] w-[230px] bg-[#000000] text-[#FFFFFF] z-[100]">
            <div className="border-[2px] border-white rounded-[4px] px-2 py-4">
              <a
                href="#firstever"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "firstever", 90)}
              >
                What is DOGEVSPEPE
              </a>
              <a
                href="#rules"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "rules", 90)}
              >
                Rules
              </a>
              <a
                href="#how-to-buy"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "how-to-buy", 90)}
              >
                How To Buy
              </a>
              <a
                href="#whitepaper"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "whitepaper", 90)}
              >
                Whitepaper
              </a>
              <a
                href="#tokenomics"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "tokenomics", 90)}
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "roadmap", 90)}
              >
                Roadmap
              </a>
              <a
                href="#faq"
                className="block py-[8px] px-[12px] text-[#FFF] font-k2d font-semibold text-[15px] leading-[15.657px] border-b border-[#fff]"
                onClick={(e) => handleScroll(e, "faq", 90)}
              >
                FAQ
              </a>
            </div>
          </div>
        )}

        <div className="relative flex p-4 space-x-4 bg-black">
          <div
            className="flex items-center justify-center cursor-pointer h-9 w-18"
            onClick={() =>
              copyToClipboard(
                "https://x.com/Doge_V_Pepe?t=4XlB3j6oNybhEgxK1R5KZw&s=09"
              )
            }
          >
            <img src={twitterIcon} alt="Twitter" className="w-full h-full" />
          </div>

          <div
            className="flex items-center justify-center cursor-pointer h-9 w-18"
            onClick={() => copyToClipboard("https://t.me/your-link")}
          >
            <img src={telegramIcon} alt="Telegram" className="w-full h-full" />
          </div>

          {copied && (
            <div className="absolute top-0 px-4 py-1 mt-2 text-sm text-white transform -translate-x-1/2 bg-gray-800 rounded-md left-1/2">
              Link Copied!
            </div>
          )}
        </div>

        <div className="flex justify-between space-x-[24px]">
          <button
            style={{
              background: "linear-gradient(90deg, #FFBF01 0%, #01FE37 134.57%)",
            }}
            className="w-[237px] sm:w-[173px] max-sm:w-[109px] 
             h-[40px] sm:h-[27px] max-sm:h-[36px] 
             rounded-[60px]  text-[#000] 
             max-md:text-[12px] text-[20px]
             font-[700] transition-all duration-300 hover:bg-[#F2B60F] hover:scale-105"
            onClick={() => {
              window.location.href = "https://forms.gle/J11hnTDHwJVfhY348";
            }}
          >
            Join The Whitelist Now
          </button>

          {/* <button
            style={{
              background: "linear-gradient(90deg, #FFBF01 0%, #01FE37 134.57%)",
              boxShadow: "adow: 0px 2px 0px 0px #FFF",
            }}
            className="w-[237px] sm:w-[173px] max-sm:w-[109px] 
                   h-[40px] sm:h-[27px] max-sm:h-[36px] 
                   rounded-[60px]  text-[#000] 
                   max-md:text-[12px] text-[20px]
                   font-[700] transition-all duration-300 hover:bg-[#F2B60F] hover:scale-105"
            onClick={async () => {
              if (accountData.isConnected) {
                const { config } = await getConfig();
                disconnect(config);
              } else {
                showConnectionModal();
              }
            }}
          >
           
            {!accountData.isConnected ? "Connect Wallet" : "Disconnect Wallet"}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
