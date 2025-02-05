import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] h-[650px] mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-start justify-between gap-10 bg-white md:flex-row ">
          <div className="w-full space-y-5 md:w-1/2">
            <h2 className="text-[45px] font-[700] capitalize leading-[53px]">
              Still Have Questions?
            </h2>
            <p className="text-[#000] font-[400] text-[16px] leading-[23px] w-[330px]">
              Email us:{" "}
              <a
                href="mailto:info@waterchampion.com"
                className="text-blue-500 underline"
              >
                info@waterchampion.com
              </a>
            </p>
            <p className="text-[#000] font-[400] text-[16px] leading-[23px] w-[330px]">
              Call us:{" "}
              <span className="font-medium">866-3WATERS | 866-392-8372</span>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-2 border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-2 border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full py-2 border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-6 py-2 mt-4 font-semibold text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] border border-[#073B63] bg-white shadow-inner"
              
              >
                SEND
              </button>
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
      </div>
    </div>
  );
};

export default ContactForm;
