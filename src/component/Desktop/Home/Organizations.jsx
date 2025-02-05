import React from "react";
function Organizations() {
  return (
    <div className="organizationsBG">
      <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px] h-[750px] mx-auto flex flex-col justify-center  ">
          <div className="flex flex-row w-[100%]   justify-around ">
            <div className="flex flex-col w-[50%] max-w-[438px] justify-center">
              <p class=" text-[#00D4F1] font-[RFDewi-bold] font-[700] text-[45px] leading-[53px] capitalize">
                Founder of <br/> 2 Organizations
              </p>

              <p class=" text-white text-[16px] font-[Roboto] leading-[23.24px] font-[400]">
                Dedicated to water conservation through technology and
                education.
              </p>
            </div>
            <div className="w-[50%] max-w-[438px]  ">
              <img
                src="/desktop-assets/organization/org1.webp"
                alt="Organization Image 1"
                className="object-cover mb-4 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%] justify-around ">
            <div className="w-[50%] max-w-[438px] ">
              <img
                src="/desktop-assets/organization/org2.webp"
                alt="Organization Image 1"
                className="object-cover rounded-xl w-[492px] h-[230px]"
              />
            </div>
            <div className="flex flex-col w-[50%] max-w-[438px] justify-center">
              <p class=" text-[#00D4F1] font-[RFDewi-bold] font-[700] text-[45px] leading-[53px] capitalize">
                50-70% farther
              </p>

              <p class=" text-white text-[16px] font-[Roboto] leading-[23.24px] font-[400]">
                An industry expert skilled in designing and implementing
                innovative water reuse and efficiency solutions that make water
                go
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[100%]   justify-around ">
            <div className="flex flex-col w-[50%] max-w-[438px] justify-center">
              <p class=" text-[#00D4F1] font-[RFDewi-bold] font-[700] text-[45px] leading-[53px] capitalize">
                Passionate about sustainability,
              </p>

              <p class=" text-white text-[16px] font-[Roboto] leading-[23.24px] font-[400]">
                Paul is committed to providing practical solutions that help
                reduce water usage.
              </p>
            </div>
            <div className="w-[50%] max-w-[438px]  ">
              <img
                src="/desktop-assets/organization/org3.webp"
                alt="Organization Image 1"
                className="object-cover rounded-xl w-[492px] h-[230px]"
              />
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center mt-4 mb-1">
            <button class="inline-flex items-center justify-center gap-[10px] px-[25px] py-[12px] border border-white bg-transparent shadow-[inset_0px_0px_0px_1px_#FFF] backdrop-blur-[0.5px] uppercase text-white">
              purpose
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Organizations;
