import React, { useState } from "react";
import arwbtn1 from "../../assets/walletsec/btnicns (3).svg";
import arwbtn2 from "../../assets/walletsec/btnicns (1).svg";
import arwbtn3 from "../../assets/walletsec/btnicns (2).svg";
import coinsw1 from "../../assets/walletsec/coinsw (5).svg";
import coinsw2 from "../../assets/walletsec/coinsw (2).svg";
import coinsw3 from "../../assets/walletsec/coinsw (3).svg";
import coinsw4 from "../../assets/walletsec/coinsw (1).svg";
import coinsw5 from "../../assets/walletsec/coinsw (6).svg";
import coinsw6 from "../../assets/walletsec/coinsw (4).svg";
import ggicon from "../../assets/walletsec/gg.svg";
import shodow from "../../assets/shodow.svg";
import downShodow from "../../assets/Mobile/down-shodwo.svg";
import arw from "../../assets/walletsec/arw.svg";
import downArrow from "../../assets/herosec/down-arrow.svg";
import Widget from "../../component/Widget/Widget";
import coinsultIcon from "../../assets/walletsec/coinsult.webp";
import solidIcon from "../../assets/walletsec/solid-proof.webp";

const Buybuttons = [
  { id: "Buy", label: "Buy", img: arwbtn1 },
  { id: "Stake", label: "Stake", img: arwbtn2 },
  { id: "History", label: "History", img: arwbtn3 },
];

const options = [
  {
    img: coinsw2,
    text: "ETH (ERC-20)",
  },
  {
    img: coinsw1,
    text: "Option 2",
  },
  {
    img: coinsw3,
    text: "Option 3",
  },
  {
    img: coinsw4,
    text: "Option 4",
  },
  {
    img: coinsw5,
    text: "Option 5",
  },
  {
    img: coinsw6,
    text: "Option 5",
  },
];
const iconsData = [
  {
    img: coinsw1,
  },
  {
    img: coinsw2,
  },
  {
    img: coinsw3,
  },
  {
    img: coinsw4,
  },
  {
    img: coinsw5,
  },
  {
    img: coinsw6,
  },
];

function WalletSec() {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [selectedItempepe, setSelectedItempepe] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenpepe, setIsDropdownOpenpepe] = useState(false);
  const [activeButton, setActiveButton] = useState("Buy");
  const [activeButtonpepe, setActiveButtonpepe] = useState("Buy");

  const handleSelect = (option) => {
    setSelectedItem(option);
    setIsDropdownOpen(false);
  };
  const handleSelectpepe = (option) => {
    setSelectedItempepe(option);
    setIsDropdownOpenpepe(false);
  };

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
  };

  return (
    <div
      className="relative w-[100%] h-[810px] bgwltsec pt-[107px] pb-[128px] "
      id="how-to-buy"
    >
      <div className="h-[100%] hidden bg-[#000000cf] flex justify-center items-center z-[-1] absolute w-[100%] top-0 ">
        <div className="max-w-[700px] mx-auto space-y-[5px]">
          <h3
            className="text-[#FFFCFC] text-[61.623px] text-center font-[400] uppercase font-HiJack"
            style={{
              textShadow: "0px 0px 32.291px #000, 0px 0px 17.871px #000",
            }}
          >
            The Fight Starts In
          </h3>
          <div className="flex items-center justify-center space-x-5">
            <div
              className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
              style={{
                background: "rgb(0 0 0 / 53%)",
              }}
            >
              <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
                16
              </h3>
              <p className="text-[27.553px] font-[700] text-[#FFF]">Days</p>
            </div>
            <span className="text-[#FFF] text-[85.755px] font-[700] leading-[100%]">
              :
            </span>
            <div
              className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
              style={{
                background: "rgb(0 0 0 / 53%)",
              }}
            >
              <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
                02
              </h3>
              <p className="text-[27.553px] font-[700] text-[#FFF]">Hours</p>
            </div>
            <span className="text-[#FFF] text-[85.755px] font-[700] leading-[100%]">
              :
            </span>
            <div
              className="relative z-[80] rounded-[26.089px] border border-[#fff] w-[160.97px] h-[160.97px] flex flex-col justify-center items-center"
              style={{
                background: "rgb(0 0 0 / 53%)",
              }}
            >
              <h3 className="text-[#FFF] text-[76.413px] font-[600] leading-[100%]">
                55
              </h3>
              <p className="text-[27.553px] font-[700] text-[#FFF]">Sec</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={shodow}
        alt="shodow"
        className="absolute top-0 z-[1] left-0 right-0 w-full"
      />
      <img
        src={downShodow}
        alt="shodow"
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
      />
      <div className="max-w-[922px] w-[100%] mx-auto relative z-[9]">
        {/* <div className="flex justify-between">
          <div className="min-h-[596.83px] max-w-[404.01px] bg-[#F2B60F] w-[100%] space-y-[14px]  px-[16px] pb-[26px] pt-[24px] rounded-[24px] border border-[#fff]">
            <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
              {Buybuttons.map((button) => (
                <div
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`w-[104.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center cursor-pointer ${
                    activeButton === button.id
                      ? "bg-[#EFAB00] border border-black"
                      : "text-[#000]"
                  }`}
                >
                  <img src={button.img} alt={button.label} />
                  <p
                    className={`text-[18.364px] font-[700] ${
                      activeButton === button.id ? "text-[#000]" : "text-[#000]"
                    }`}
                  >
                    {button.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-[8px]">
              <h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
                Buy $DOGE
              </h3>
              <h5 className="text-[#000] leading-[133.333%] text-[18.364px] font-[700] text-center">
                1 GG = $0.0005
              </h5>
            </div>
            <div className=" pb-2 space-y-[8px]">
              <div className="bg-[#FFFFFF47] w-[100%] h-[16px] rounded-[30px]">
                <div className="bg-[#000] h-[16px] w-[60%] rounded-[30px]"></div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-[18.364px] font-[600] text-[#000]">
                  USD Raised
                </h4>
                <h5 className="text-[18.364px] font-[600] text-[#000]">
                  $252,523 / $1,000,000
                </h5>
              </div>
            </div>
            <div className="bg-[#00000078] px-5 flex relative z-[9] justify-between items-center  py-3 rounded-[14px]">
              <div className="">
                <h5 className="text-[#fff] text-[15.303px] font-[600]">
                  You pay
                </h5>
                <input
                  type="text"
                  className="text-[#fff] w-[155px] text-[18.364px] font-[700] bg-[transparent] outline-none"
                  defaultValue={1}
                />
              </div>

              <div className="relative max-w-[205px] w-[100%] inline-block text-left">
                <div
                  className="flex items-center justify-between space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={selectedItem.img}
                      className="w-[20px] h-[20px]"
                      alt="Selected Icon"
                    />
                    <h5 className="text-[15.303px] text-[#fff] leading-[80%] font-[400]">
                      {selectedItem.text}
                    </h5>
                  </div>
                  <img
                    src={arw}
                    className="w-[12px] h-[12px]"
                    alt="Arrow Icon"
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
                        onClick={() => handleSelect(option)}
                      >
                        <img
                          src={option.img}
                          className="w-[20px] h-[20px]"
                          alt={`Option ${index + 1}`}
                        />
                        <h5 className="text-[12.8px] text-[#fff] font-[400]">
                          {option.text}
                        </h5>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#00000078] relative z-[1] px-5 flex justify-between items-center  py-3 rounded-[14px]">
              <div className="w-[55%]">
                <h5 className="text-[#fff] text-[15.303px]  font-[600]">
                  You receive
                </h5>
                <input
                  type="text"
                  className="text-[#fff] text-[18.364px] font-[700] bg-[transparent] outline-none"
                  defaultValue={`7,414,420`}
                />
              </div>

              <div className="relative max-w-[203px] w-[100%] inline-block text-left">
                <div className="flex items-center justify-center space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
                  <img
                    src={ggicon}
                    className="w-[25px] h-[25px]"
                    alt="Selected Icon"
                  />
                  <h5 className="text-[15.303px] text-[#fff] font-[600]">
                    GG (ERC-20)
                  </h5>
                </div>
              </div>
            </div>
            <div className="pb-[10px] space-y-[10px]">
              <h5 className="text-[#000] text-[18.364px] font-[700] text-center">
                Accepting
              </h5>
              <div className="flex justify-center space-x-6">
                {iconsData.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="h-[29px] w-[29px]"
                    alt={`Icon`}
                  />
                ))}
              </div>
            </div>
            <div className="">
              <button className="bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer">
                Connect Wallet
              </button>
            </div>

            <div className="flex items-center justify-center ">
              <p className="text-[15px] font-normal text-black font-k2d capitalize leading-normal">
                Max Buy-in $25,000
              </p>
            </div>
          </div>
          <div
            className="min-h-[596.83px] max-w-[404.01px]  w-[100%] space-y-[14px]  px-[16px] pb-[26px] pt-[24px] rounded-[24px] border border-[#fff]"
            style={{
              background:
                "linear-gradient(180deg, #4EB52A 64.5%, #4EB52A 100%)",
            }}
          >
            <div className="bg-[#00000040] flex justify-between p-1 rounded-[30px]">
              {Buybuttons.map((button) => (
                <div
                  key={button.id}
                  onClick={() => setActiveButtonpepe(button.id)}
                  className={`w-[104.8px] rounded-[30px] py-[2px] space-x-2 flex justify-center items-center cursor-pointer ${
                    activeButtonpepe === button.id
                      ? "bg-[#4EB52A] border border-black"
                      : "text-[#000]"
                  }`}
                >
                  <img src={button.img} alt={button.label} />
                  <p
                    className={`text-[18.364px] font-[700] ${
                      activeButtonpepe === button.id
                        ? "text-[#000]"
                        : "text-[#000]"
                    }`}
                  >
                    {button.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-[8px]">
              <h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
                Buy $PEPE
              </h3>
              <h5 className="text-[#000] leading-[133.333%] text-[18.364px] font-[700] text-center">
                1 GG = $0.0005
              </h5>
            </div>
            <div className="pb-2 space-y-[8px]">
              <div className="bg-[#FFFFFF47] w-[100%] h-[16px] rounded-[30px]">
                <div className="bg-[#000] h-[16px] w-[60%] rounded-[30px]"></div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-[18.364px] font-[600] text-[#000]">
                  USD Raised
                </h4>
                <h5 className="text-[18.364px] font-[600] text-[#000]">
                  $252,523 / $1,000,000
                </h5>
              </div>
            </div>
            <div className="bg-[#00000078] px-5 flex relative z-[9] justify-between items-center  py-3 rounded-[14px]">
              <div className="">
                <h5 className="text-[#fff] text-[15.303px] font-[600]">
                  You pay
                </h5>
                <input
                  type="text"
                  className="text-[#fff] w-[155px] text-[18.364px] font-[700] bg-[transparent] outline-none"
                  defaultValue={1}
                />
              </div>

              <div className="relative max-w-[205px] w-[100%] inline-block text-left">
                <div
                  className="flex items-center justify-between space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A]"
                  onClick={() => setIsDropdownOpenpepe((prev) => !prev)}
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={selectedItempepe.img}
                      className="w-[20px] h-[20px]"
                      alt="Selected Icon"
                    />
                    <h5 className="text-[15.303px] text-[#fff] leading-[80%] font-[400]">
                      {selectedItempepe.text}
                    </h5>
                  </div>
                  <img
                    src={arw}
                    className="w-[12px] h-[12px]"
                    alt="Arrow Icon"
                  />
                </div>

                {isDropdownOpenpepe && (
                  <div className="absolute mt-2 w-full bg-[#191F1F] rounded-md shadow-lg">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-gray-800"
                        onClick={() => handleSelectpepe(option)}
                      >
                        <img
                          src={option.img}
                          className="w-[20px] h-[20px]"
                          alt={`Option ${index + 1}`}
                        />
                        <h5 className="text-[12.8px] text-[#fff] font-[400]">
                          {option.text}
                        </h5>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#00000078] relative z-[1] px-5 flex justify-between items-center  py-3 rounded-[14px]">
              <div className="w-[55%]">
                <h5 className="text-[#fff] text-[15.303px]  font-[600]">
                  You receive
                </h5>
                <input
                  type="text"
                  className="text-[#fff] text-[18.364px] font-[700] bg-[transparent] outline-none"
                  defaultValue={`7,414,420`}
                />
              </div>

              <div className="relative max-w-[203px] w-[100%] inline-block text-left">
                <div className="flex items-center justify-center space-x-2 cursor-pointer  p-2 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] w-[100%]">
                  <img
                    src={ggicon}
                    className="w-[25px] h-[25px]"
                    alt="Selected Icon"
                  />
                  <h5 className="text-[15.303px] text-[#fff] font-[600]">
                    GG (ERC-20)
                  </h5>
                </div>
              </div>
            </div>
            <div className="pb-[10px] space-y-[10px]">
              <h5 className="text-[#000] text-[18.364px] font-[700] text-center">
                Accepting
              </h5>
              <div className="flex justify-center space-x-6">
                {iconsData.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="h-[29px] w-[29px]"
                    alt={`Icon`}
                  />
                ))}
              </div>
            </div>
            <div className="">
              <button className="bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer">
                Connect Wallet
              </button>
            </div>

            <div className="flex items-center justify-center ">
              <p className="text-[15px] font-normal text-black font-k2d capitalize leading-normal">
                Max Buy-in: $25,000
              </p>
            </div>
          </div> */}
          <div className="flex justify-between">
          <Widget
            project="doge"
            symbol="DOGE"
            theme={{bg: "#f2b60f"}}
          />
          <Widget
            project="pepe"
            symbol="PEPE"
            theme={{bg: "#4eb52a"}}
          />
        </div>
      </div>
      <div className="absolute bottom-[-3%] left-0 right-0 flex items-center justify-center z-30">
        <img
          className="transition-all duration-300 cursor-pointer hover:animate-bounce hover:scale-110"
          src={downArrow}
          alt=""
          onClick={(e) => handleScroll(e, "firstever", 90)}
        />
      </div>
    </div>
  );
}

export default WalletSec;
