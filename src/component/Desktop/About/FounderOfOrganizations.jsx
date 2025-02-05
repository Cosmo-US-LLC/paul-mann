import React from "react";

const FounderOfOrganizations = () => {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] h-[750px] gap-12 mx-auto flex flex-col justify-center items-center text-black">
        <h2 className="">
          <span className="  text-[16px] font-[Roboto]  font-[900] uppercase leading-[24px] text-center text-[#073B63]">FOUNDER OF 2 ORGANIZATIONS</span>{" "}
          <span className="text-[16px] font-[Roboto]  font-[400] leading-[24px] text-center text-[#000]">
            dedicated to water conservation through technology and education.
          </span>
        </h2>

        <div className="flex items-center justify-center gap-12 mb-8">
          <img
            src="/desktop-assets/About/org1.webp"
            alt="Water Champions Logo"
            className="object-contain  w-[97px]"
          />
          <img
            src="/desktop-assets/About/org2.webp"
            alt="Renova Academy Logo"
            className="object-contain   w-[272px]"
          />
        </div>

 
        <div className="w-[1022px] space-y-6 text-block">
          <p className="text-[16px] font-[400] font-[Roboto] leading-[23px]">
            Paul is a seasoned industry expert specializing in the design and
            implementation of innovative water reuse and efficiency solutions
            that make water usage go 50-70% farther. With a deep passion for
            sustainability, Paul is dedicated to providing practical, actionable
            strategies that not only reduce water consumption but also promote
            long-term environmental stewardship. His work is driven by the
            belief that sustainable water management is key to addressing the
            global water crisis and ensuring a balanced future for our
            ecosystems.
          </p>
          <p className="text-[16px] font-[400] font-[Roboto]  leading-[23px]">
            As the founder of two groundbreaking organizations, Water Champions
            and Renova Academy, Paul combines technology and education to
            advance water conservation efforts. Water Champions focuses on
            cutting-edge water reuse technologies, empowering individuals and
            businesses to implement impactful solutions. Renova Academy, on the
            other hand, serves as an online platform aimed at educating
            communities on water reuse, conservation, and sustainable practices.
          </p>
          <p className="text-[16px] font-[400] font-[Roboto]  leading-[23px]">
            Paul's vision extends beyond immediate solutions, seeking to drive a
            global shift in water usage habits. He strives to make water
            conservation and reuse a top priority by empowering individuals,
            businesses, and communities to take action before it's too late. His
            ultimate goal is to restore balance to our planet's water cycle,
            promote resilience in the face of climate change, and inspire a
            collective commitment to sustainable living for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderOfOrganizations;
