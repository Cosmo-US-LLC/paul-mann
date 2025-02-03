import React, { useState } from "react";
import arw from "../../assets/footer/Group 1410124940.svg";

const faqData = [
  {
    question: "What is DogevsPepe?",
    answer: `DogevsPepe is a crypto presale with a twist. It’s a competition between two iconic memes, Doge and Pepe, to determine which one escapes the matrix and launches as a live cryptocurrency. Investors choose your side by purchasing tokens for either team (which raises $1M first wins), and the team with the most funds raised wins.`,
  },
  {
    question: "How does the presale work?",
    answer: `
      <ul className="pl-8 text-white list-disc">
        <li>Choose your champion: Team Doge (DODE) or Team Pepe (PEPE).</li>
        <li>Buy tokens to support your chosen team(s). When the combined presale total hits $1 million, the team with the most funds raised is declared the winner.</li>
      </ul>
    `,
  },
  {
    question: "What happens to the losing team’s funds?",
    answer:
      "The losing team’s funds are added to the winning token’s liquidity pool, increasing its value and ensuring a strong launch. If your team loses, you’ll still get the same amount in the winning coin but won’t receive prize money.",
  },
  {
    question: "How many times can i buy?",
    answer:
      "You can buy as many times as you like, but the total purchase is capped at $25,000 to ensure fair participation and prevent whales from dominating the presale and holding too much of the total supply.",
  },
  {
    question: "Can I buy into both teams?",
    answer:
      "Yes! You can support both Doge and Pepe by purchasing tokens for both teams. However, only one will win, so choose wisely!",
  },

  {
    question: "Is the presale fair and secure?",
    answer:
      "Absolutely. Both presale contracts are public and fully transparent, so you can see how funds are being allocated.",
  },
  {
    question: "When does the winning token launch?",
    answer: `
   The launch date for the winning token will be announced within 24 hours of reaching the $1M target and determining the winner. The winning token will be launched on the Solana blockchain and available on Raydium. We recommend using a Phantom Wallet.
      
    `,
  },
  {
    question: "How do I track the progress of the presale?",
    answer:
      "Live stats for the Fight will be displayed on the website, showing how much each team has raised. Stay connected to see if your team is winning!",
  },
  {
    question: " How do I join the community?",
    answer: `
<div className="w-[900px]">
  <ul className="pl-5 text-white list-decimal">
    <li>
      You can join our community on X and Telegram at the footer to connect and support your team. Don’t wait, join now!
      <ul className="pl-8 text-white list-disc">
        <li>General Channel: For overall updates and discussions.</li>
        <li>Team Pepe Channel: For Green Coin supporters</li>
         <li>Team Doge Channel: For Orange Coin fans.</li>
          <li>After the Fight ends, all channels merge into one unified community supporting the winning project.</li>
      </ul>
    </li>
   
  </ul>
</div>

    `,
  },
 
  {
    question: "What happens if my team loses?",
    answer:
      "If your team loses, you’ll still get the same amount in the winning coin but won’t receive prize money.",
  },
  {
    question: "Why should I join DogevsPepe?",
    answer:
      "DogeVsPepe isn’t just another meme battle but a movement to crown the true Meme Heavyweight Champion. By joining, you are not just supporting your favorite meme coin but becoming part of an exciting and competitive event reshaping crypto history.",
  },
];

const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9s ease, opacity 2s ease",
  };

  return (
    <div>
      <div
        className={`border faqsbrder flex-col rounded-[15px] border-solid bg-[#181818] ${
          isOpen ? "border-[#fff]" : "border-[#fff]"
        }`}
      >
        <div
          className="flex justify-between items-center px-[34px] py-[30px] gap-[25px] cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center gap-5 xs:pt-[14px]">
            <div className="text-[22px] text-[#fff] font-[600] font-k2d">
              {question}
            </div>
          </div>

          <h4
            className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px] flex items-center justify-center plusIcon ${
              !isOpen ? "rotate-0" : "rotate-[-180deg]"
            }`}
          >
            <img src={arw} alt="" />
          </h4>
        </div>
        <div style={contentStyles}>
          <div className="w-[100%] px-[34px] pb-[20px]">
            <p
              className="pb-[10px] answer text-[22px] text-white leading-[150%] font-[600] font-k2d"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSec = () => {
  const [openItems, setOpenItems] = useState(null);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <div className="relative font-k2d" id="faq">
      <div className="w-[100%] max-w-[1143px] pt-[73px] mx-auto pb-[63px] flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-[#fff] font-HiJack uppercase text-[42px] font-[400] leading-[142.857%] pb-[10px] font-k2d">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mx-auto">
          <div className="space-y-[15px]">
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

export default FaqSec;
