import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function MediaPressDesktop() {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] py-16 mx-auto flex flex-col justify-center">
        <div className="w-[100%] flex flex-row">
          <div className="flex flex-col justify-center gap-4  w-[50%]">
            <h3 className="text-[45px]  font-[700] font-[RFDewiExtended] leading-[53px] capitalize">
              Media & Press Inquiries
            </h3>
            <p className="w-[463px] text-[16px] leading-[23px] font-[400] font-[Roboto]">
              Interested in featuring Paul Mann in your publication, news
              segment, or podcast? We welcome media opportunities and
              collaborations! <br />
              <br />
              Fill out the form below, and our team will get back to you
              promptly.
              <br />
              <br />
              For urgent requests, email us directly at <br />{" "}
              <span className="font-[700]">press@iampaulmann.com</span>
            </p>
          </div>
          <div className="px-8 py-8 flex flex-col gap-4 rounded-lg bg-[#027496] w-[50%]  ">
            <h3 className="text-[28px] font-[800] text-[#fff] font-[RFDewiExtended] capitalize">
              Contact Form
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[100%]  py-2  placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff] font-[Roboto] font-[400] text-[16px] leading-[23px]"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Your Organization/Publication"
                className="w-[100%] py-2  placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff] font-[Roboto] font-[400] text-[16px] leading-[23px]"
                name=""
                id=""
              />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-[100%]  py-2 placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff] font-[Roboto] font-[400] text-[16px] leading-[23px]"
                name=""
                id=""
              />
              <input
                type="number"
                placeholder="Phone (Optional)"
                className="w-[100%] py-2  placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff] font-[Roboto] font-[400] text-[16px] leading-[23px]"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Details of Inquiry"
                className="w-[100%]  py-2 placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff] font-[Roboto] font-[400] text-[16px] leading-[23px]"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Deadline (if any)"
                className="w-[100%] py-2  placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff] font-[Roboto] font-[400] text-[16px] leading-[23px]"
                name=""
                id=""
              />
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default MediaPressDesktop;
