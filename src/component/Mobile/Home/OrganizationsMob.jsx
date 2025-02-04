import React from "react";
function OrganizationsMob() {
  return (
    <div className="organizationsBG">
      <div className="max-w-[1440px] w-[90%] py-[30px] h-full mx-auto">
        <div className="max-w-[1200px] mx-auto flex flex-col space-y-[24px] justify-center  ">
          <div className="w-[100%] space-y-[15px] ">
            <div className="flex flex-col w-[100%] space-y-[10px] justify-center">
              <p class=" text-[#00D4F1] font-[700] text-[24px] leading-[114%] capitalize">
                Founder of <br/> 2 Organizations
              </p>

              <p class=" text-white text-[15px] font-roboto leading-[23.24px] font-[400]">
                Dedicated to water conservation through technology and
                education.
              </p>
            </div>
            <div className="w-[100%]  ">
              <img
                src="/desktop-assets/organization/org1.webp"
                alt="Organization Image 1"
                className="object-cover  rounded-xl"
              />
            </div>
          </div>
          <div className="w-[100%] space-y-[15px]">
          <div className="flex flex-col w-[100%] space-y-[10px] justify-center">
              <p class=" text-[#00D4F1] font-[700] text-[24px] leading-[114%] capitalize">
                50-70% farther
              </p>

              <p class=" text-white text-[15px] leading-[154.933%] font-[400]">
                An industry expert skilled in designing and implementing
                innovative water reuse and efficiency solutions that make water
                go
              </p>
            </div>
            <div className="w-[100%]  ">
              <img
                src="/desktop-assets/organization/org2.webp"
                alt="Organization Image 1"
                className="object-cover rounded-xl w-[492px] h-[230px]"
              />
            </div>
           
          </div>
          <div className="w-[100%] space-y-[15px]">
            <div className="flex flex-col w-[100%] space-y-[10px] justify-center">
              <p class=" text-[#00D4F1] font-[700] text-[24px] leading-[114%] capitalize">
                Passionate about <br /> sustainability,
              </p>

              <p class=" text-white text-[15px] leading-[154.933%] font-[400]">
                Paul is committed to providing practical solutions that help
                reduce water usage.
              </p>
            </div>
            <div className="w-[100%]   ">
              <img
                src="/desktop-assets/organization/org3.webp"
                alt="Organization Image 1"
                className="object-cover rounded-xl w-[492px] h-[230px]"
              />
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center mt-4 mb-1">
            <button class="inline-flex items-center justify-center gap-[10px] px-[25px] py-[12px] border border-white bg-transparent text-[12px] shadow-[inset_0px_0px_0px_1px_#FFF] backdrop-blur-[0.5px] uppercase text-white">
            About
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default OrganizationsMob;
