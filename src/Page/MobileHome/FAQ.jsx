import React, { useState } from "react";

import arw from "../../assets/footer/Group 1410124940.svg";
import { faqData } from "../Utils/FAQs";

const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9s ease, opacity 2s ease",
  };

  return (
    <div className="">
    <div
      className={`border faqsbrder flex-col rounded-[10px] border-solid bg-[#181818] ${
        isOpen ? "border-[#fff]" : "border-[#fff]"
      }`}
    >
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          <div
            dangerouslySetInnerHTML={{ __html: question }}
            className={`text-[16px] text-[#fff] font-[600]`}
          />
        </div>
  
        <div
          className={`text-[14px] w-[20px] h-[20px] flex items-center justify-center ${
            !isOpen ? "rotate-0" : "rotate-[-180deg]"
          } transition-transform`}
        >
          <img src={arw} alt="" />
        </div>
      </div>
      <div style={contentStyles}>
        <div className="w-[100%] px-4 pb-3">
          <p
            className="text-[14px] text-[#fff] leading-[150%] font-[600]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <div className="relative" id="faq">
      <div className="w-[100%] pt-12 mx-auto pb-6 px-4">
        <div className="mb-4 text-center">
          <h2 className="text-[#fff] uppercase text-[22px] font-HiJack font-[400] leading-[142.857%] pb-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full mx-auto">
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems === index}
                handleClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
