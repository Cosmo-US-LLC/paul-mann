import React, {useEffect} from "react";

function ContactUsMobile() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="w-[90%] mx-auto py-[30px]">
    <div className="flex flex-col justify-center mx-auto ">
      <div className="flex flex-col items-start justify-between gap-10 bg-white md:flex-row ">
        <div className="w-full space-y-5 md:w-1/2">
          <h2 className="text-[28px] font-[RFDewiExtended] font-[700] text-center capitalize leading-[128.571%]">
            Still Have <br /> Questions?
          </h2>
          <div className="!mt-[14px]">
          <p className="text-[#000] font-[Roboto] text-center font-[400] text-[14px] leading-[23px] ">
            Email us:{" "}
            <a
              href="mailto:info@waterchampion.com"
              className="text-black font-[Roboto] "
            >
              info@iampaulmann.com
            </a>
          </p>
          {/* <p className="text-[#000] text-center font-[Roboto] font-[400] text-[14px] leading-[23px] ">
            Call us:{" "}
            <span className="">866-3WATERS | 866-392-8372</span>
          </p> */}
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full py-2 text-[14px] font-[Roboto] placeholder:text-[#000] border-b border-[#000] outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 text-[14px] font-[Roboto] placeholder:text-[#000] border-b border-[#000] outline-none focus:border-black"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full py-2 text-[14px] font-[Roboto] placeholder:text-[#000] border-b border-[#000] outline-none focus:border-black"
            />
            <button
              type="submit"
              className="w-[123.53px] h-[50px] mt-4   text-[#073B63] text-[12px] hover:bg-[#073B63] hover:text-[#FFF] font-[800] font-[Roboto] border border-[#073B63] bg-white shadow-inner"
            
            >
              SEND
            </button>
          </form>
        </div>

        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="/desktop-assets/ContactUs/contactUs.webp"
            alt="Person relaxing on the grass"
            className=""
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ContactUsMobile;
