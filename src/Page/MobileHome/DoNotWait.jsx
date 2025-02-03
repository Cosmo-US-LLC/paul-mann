import React from "react";
import dogeImage from "../../assets/DontWaitSec/doge.webp";
import pepeImage from "../../assets/DontWaitSec/pepe.webp";
function DoNotWait() {
  return (
    <div className="w-[100%] relative DontWaitmobSec overflow-hidden  pb-[150px]">
      <div className="w-[168px] h-[175px] absolute bottom-0 left-[-23px]">
        <img src={dogeImage} alt="doge-image" className="w-full h-full" />
      </div>
      <div className="w-[155px] h-[175px] absolute bottom-0 right-[-10px]">
        <img src={pepeImage} alt="pepe-image" className="w-full h-full" />
      </div>
      <div className="space-y-[20px]">
        <div
          className="max-w-[341px] px-[22px] py-[40px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative  howitborder bg-[#01010182]"
          style={{ backdropFilter: "blur(9.899999618530273px)" }}
        >
          <div className="space-y-[15px]">
            <h3 className="text-[#FFFCFC] font-HiJack text-center text-[22px] leading-[104.377%] font-[400]">
              Don’t Wait, <br /> The Fight Is On!
            </h3>
            <p className="max-w-[535px] w-[100%] font-[400] mx-auto text-[#fff] leading-[114%] text-[15px] text-center">
              DogevsPepe is fast-paced and competitive. Once the $1 million goal
              is reached, the winner is decided. Will your meme champion rise
              and win this epic fight.{" "}
            </p>
            <h4 className="text-[#fff] leading-[130%] font-[700] text-[15px] text-center">
              Make your choice and support your favorite meme before it is too
              late!
            </h4>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            style={{
              background:
                "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
            }}
            className="w-[165px] w-[100%] text-[12px] leading-[100%] mx-auto h-[36px] font-[400] rounded-[60px]"
            onClick={() =>
              (window.location.href = "https://forms.gle/J11hnTDHwJVfhY348")
            }
          >
            Join the Whitelist Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoNotWait;
