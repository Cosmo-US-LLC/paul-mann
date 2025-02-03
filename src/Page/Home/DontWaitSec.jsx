import React from "react";
import topShadow from "../../assets/DontWaitSec/rectangle_285.webp";
import bottomShadow from "../../assets/DontWaitSec/rectangle_297.webp";
import doge from "../../assets/DontWaitSec/doge-d.webp";
import pepe from "../../assets/DontWaitSec/pepe-d.webp";
function DontWaitSec() {
  return (
    <div className="w-[100%] h-[900px] relative DontWaitSec flex justify-center items-start pt-[120px] aspect-video overflow-hidden">
           <div className="absolute top-0 left-0 right-0 w-full h-full">
              <img className="w-full h-full" src={topShadow} alt="" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full">
              <img className="w-full h-full" src={bottomShadow} alt="" />
            </div>
                 <div className="w-[562px] h-[545px] absolute bottom-0 left-[-23px]">
                    <img src={doge} alt="doge-image" className="w-full h-full"/>
                  </div>
                  <div className="w-[507px] h-[545px] absolute bottom-0 right-[-10px]">
                    <img src={pepe} alt="pepe-image" className="w-full h-full"/>
                  </div>
      <div className="space-y-[35px]">
      <div className="max-w-[593px] px-[22px] py-[40px] rounded-[26.9px] space-y-[23px] w-[100%] mx-auto relative border border-neutral-400 bg-[#0101019f]" 
      style={{backdropFilter:"blur(0px)"}}
      >
        <div className="space-y-[27px]">
          <h3 className="text-[#FFFCFC] font-HiJack text-center text-[50px] leading-[104.377%] font-[400]">
          Don’t Wait, <br /> The Fight Is On!
          </h3>
          <p className="max-w-[535px] w-[100%] font-[400] mx-auto text-[#fff] leading-[114%] text-[18px] text-center">DogevsPepe is fast-paced and competitive. Once the $1 million goal is reached, the winner is decided. Will your meme champion rise and win this epic fight. </p>
            <h4 className="text-[#fff] leading-[130%] font-[700] text-[30px] text-center">
            Make your choice and support your  favorite meme before it is too late!
            </h4>
        </div>
      </div>
      <div className="flex justify-center">
      <button
  style={{
    background: "linear-gradient(90deg, #FFBF01 36%, #01FE37 134.57%)",
  }}
  className="w-[457px] w-[100%] leading-[100%] mx-auto h-[94px] text-[32px] font-[700] rounded-[60px] cursor-pointer relative z-10"
  onClick={() => window.location.href = "https://forms.gle/J11hnTDHwJVfhY348"}
>
  Join the Whitelist Now
</button>
</div>
      </div>
    </div>
  );
}

export default DontWaitSec;
