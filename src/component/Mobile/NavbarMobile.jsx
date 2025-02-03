import React, { useState } from "react";
 
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
 

function NavbarMobile() {
  const [sideOpen, setSideOpen] = useState(false);

  const handleClick = (e, targetId, offset) => {
    e.preventDefault();
  
    setSideOpen(false);
  
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calculate the position with offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
  
        // Smooth scroll with offset applied
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <div className="pb-[5rem]">
      this is navbar
      {/* <div className="fixed top-0 w-[100%] z-[99]">
    <div className="bg-white h-[68px] flex justify-between items-center py-[14px] px-5">
      <div className="flex items-center gap-3">
        <Sheet open={sideOpen} onOpenChange={setSideOpen}>
          <SheetTrigger asChild>
            <button
              onClick={() => setSideOpen(true)}
              className="bg-[#F4EFEA] w-[40px] h-[40px] p-2 rounded-sm"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 18H4M14.5 12H4M20 6H4"
                  stroke="#5200FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="bg-[#e5ddd4] z-[101] flex flex-col"
          >
            <SheetHeader>
              <SheetTitle>
                <a href="/" onClick={() => setSideOpen(false)}>
                  <img
                    src="/mobile/feel-attune-logo.webp"
                    alt="Attune Logo"
                    className="w-[113px] h-[35px] object-contain"
                  />
                </a>
              </SheetTitle>
              <SheetDescription hidden></SheetDescription>
            </SheetHeader>
            <div className="relative bg-[#E5DDD4] py-[30px] grow overflow-y-auto">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col justify-between grow">
                  <div className="flex flex-row items-start justify-start">
                    <h1 className="text-left font-miniature text-[38px] leading-[48px]">
                      Talk to a <br />
                      professional
                    </h1>
                  </div>
                  <div className="relative mt-8">
                    <div className="flex flex-col gap-4 font-[500]">
                      <a
                        href={"#Mpathtosupport2"}
                        onClick={(e) => handleClick(e, "Mpathtosupport2", 50)}
                      >
                        Path To Support
                      </a>
                      <a
                        href={"#Mhowitworks2"}
                        onClick={(e) => handleClick(e, "Mhowitworks2", 50)}
                      >
                        How It Works
                      </a>
                      <a
                        href={"#Mourapproach2"}
                        onClick={(e) => handleClick(e, "Mourapproach2", 220)}
                      >
                        Our Approach
                      </a>
                      <a href={"#Mfaqs2"} onClick={(e) => handleClick(e, "Mfaqs2", 60)}>
                        FAQs
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-0 mt-6">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <a href="https://www.linkedin.com/company/easecare/">
                        <img
                          src="/mobile/footer/linkedIn.svg"
                          alt="linkedIn"
                          className=""
                        />
                      </a>
                      <a href="https://www.facebook.com/easecare.ca">
                        <img
                          src="/mobile/footer/facebook.svg"
                          alt="facebook"
                          className=""
                        />
                      </a>
                      <a href="https://www.instagram.com/easecare.ca/">
                        <img
                          src="/mobile/footer/instagram.svg"
                          alt="instagram"
                          className=""
                        />
                      </a>
                    </div>

                    <a href="https://innovacare.tech/listenerhub/signup">
                      <button className="bg-[#5200FF] text-white px-[10px] h-[38px] my-0 min-w-[112px] rounded-full text-[15px] whitespace-nowrap">
                        Get Started
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mt-8 text-xs text-left">
                    © 2025 Attune. All rights reserved
                  </p>
                  <div className="my-4 border-[0.5px] border-[black] w-full" />
                  <p className="mt-4 text-xs text-left capitalize">
                    We would like to acknowledge the traditional, ancestral, and
                    unceded territory of the many First Nations, Metis, and
                    Inuit who have lived and cared for the lands known as Canada
                    for generations. We are grateful for the traditional
                    knowledge keepers and elders who are still with us today and
                    those who have gone before us. We make this acknowledgment
                    as an act of reconciliation and gratitude to those whose
                    territory we reside on.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-[43%] h-[28dvh] z-0 flex justify-start items-center">
                <h1 className="font-miniature text-center rotate-90 w-full text-[#ded6ce] text-[20dvh] z-0">
                  Att<span className="italic">une</span>
                </h1>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <a href="/" onClick={() => setSideOpen(false)}>
        <img
          src="/mobile/feel-attune-logo.webp"
          alt="Attune Logo"
          className="w-[113px] h-[35px] object-contain"
        />
        </a>
      </div>

      <a href="https://innovacare.tech/listenerhub/signup">
        
      </a>
    </div>
    </div> */}
    </div>
  );
}

export default NavbarMobile;
