import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const glimpseData = [
  {
    image: "/mobile-assets/glimpse/card-img (7).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (6).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (5).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (4).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (3).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (2).webp",
  },
  {
    image: "/mobile-assets/glimpse/card-img (1).webp",
  },
];

function MediaPressMob() {
  return (
    <div className="w-[90%] mx-auto pt-[30px] pb-[30px] space-y-[34px]">
      <div className="space-y-[15px]">
        <h3 className="text-[28px]  font-[700] leading-[128.571%] capitalize">
        Media & Press <br /> Inquiries
        </h3>
        <p className="text-[14px]  font-[400] ">
        Interested in featuring Paul Mann in your publication, news segment, or podcast? We welcome media opportunities and collaborations! <br /><br />
        Fill out the form below, and our team will get back to you promptly.
<br /><br />
For urgent requests, email us directly at <br /> <span className="font-[700]">press@paulmann.com</span> 

        </p>
      </div>
      <div className="px-[21px] pt-[21px] pb-[35px] rounded-[6.178px] bg-[#027496]">
        <h3 className="text-center text-[18px] font-[800] text-[#fff] capitalize">Contact Form</h3>
        <div className="space-y-[20px]">
            <input type="text" placeholder="Your Name"  className="w-[100%] px-1 py-[10px] placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff]" name="" id="" />
            <input type="text" placeholder="Your Organization/Publication"  className="w-[100%] px-1 py-[10px] placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff]" name="" id="" />
            <input type="email" placeholder="Email"  className="w-[100%] px-1 py-[10px] placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff]" name="" id="" />
            <input type="number" placeholder="Phone (Optional)"  className="w-[100%] px-1 py-[10px] placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff]" name="" id="" />
            <input type="text" placeholder="Details of Inquiry"  className="w-[100%] px-1 py-[10px] placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff]" name="" id="" />
            <input type="text" placeholder="Deadline (if any)"  className="w-[100%] px-1 py-[10px] placeholder:opacity-[0.9] border-b border-[#fff] outline-none bg-[#027496] text-[#fff]" name="" id="" />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default MediaPressMob;
