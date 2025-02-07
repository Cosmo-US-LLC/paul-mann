import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] h-[750px] mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-start justify-between gap-10 mb-8 bg-white md:flex-row ">
          <div className="w-full space-y-5 md:w-1/2">
            <h2 className="text-[45px] font-[RFDewiExtended] font-[700] capitalize leading-[53px]">
              Still Have Questions?
            </h2>
            <p className="text-[#000] font-[Roboto] font-[400] text-[16px] leading-[23px] w-[330px]">
              Email us:{" "}
              <a href="mailto:info@waterchampion.com" className="text-black ">
                info@waterchampion.com
              </a>
            </p>
            <p className="text-[#000] font-[Roboto] font-[400] text-[16px] leading-[23px] w-[330px]">
              Call us:{" "}
              <span className="font-medium">866-3WATERS | 866-392-8372</span>
            </p>

            <form className="flex flex-col space-y-1">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-6  font-[Roboto] text-[14px] font-[400] leading-[14px] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full  py-6 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full  py-6 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
              />
            </form>
          </div>

          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="/desktop-assets/ContactUs/contactUs.webp"
              alt="Person relaxing on the grass"
              className=" shadow w-[672px] h-[460px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[120px] py-3 font-semibold font-[Roboto] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] border border-[#073B63] bg-white shadow-inner"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
