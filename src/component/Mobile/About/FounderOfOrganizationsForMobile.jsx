import React from "react";

const FounderOfOrganizationsForMobile = () => {
  return (
    <div className="w-full h-full px-4 py-10">
      <div className="flex flex-col items-center w-full text-black">
        <div className="mb-4 w-[340px]">
          <span className="block text-[14px] font-[Roboto] font-bold uppercase leading-[20px] text-[#073B63]">
            FOUNDER OF 2 ORGANIZATIONS
          </span> {" "}
          <span className="block text-[14px] font-[Roboto] font-normal leading-[20px] text-[#000]">
            dedicated to water conservation through technology and education.
          </span>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <img
            src="/mobile-assets/About/org1.webp"
            alt="Water Champions Logo"
            className="object-contain w-[61px] h-full "
          />
          <img
            src="/mobile-assets/About/org2.webp"
            alt="Renova Academy Logo"
            className="object-contain w-[170px] h-full"
          />
        </div>

        <div className="w-full space-y-4 text-block">
          <p className="text-[14px] font-normal font-[Roboto] leading-[20px]">
            Paul is a seasoned industry expert specializing in the design and
            implementation of innovative water reuse and efficiency solutions
            that make water usage go 50-70% farther. With a deep passion for
            sustainability, Paul is dedicated to providing practical, actionable
            strategies that not only reduce water consumption but also promote
            long-term environmental stewardship.
          </p>
          <p className="text-[14px] font-normal font-[Roboto] leading-[20px]">
            As the founder of two groundbreaking organizations, Water Champions
            and Renova Academy, Paul combines technology and education to
            advance water conservation efforts. Water Champions focuses on
            cutting-edge water reuse technologies, empowering individuals and
            businesses to implement impactful solutions. Renova Academy serves
            as an online platform aimed at educating communities on water reuse
            and sustainable practices.
          </p>
          <p className="text-[14px] font-normal font-[Roboto] leading-[20px]">
            Paul's vision extends beyond immediate solutions, seeking to drive a
            global shift in water usage habits. His ultimate goal is to restore
            balance to our planet's water cycle, promote resilience in the face
            of climate change, and inspire a collective commitment to
            sustainable living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderOfOrganizationsForMobile;
