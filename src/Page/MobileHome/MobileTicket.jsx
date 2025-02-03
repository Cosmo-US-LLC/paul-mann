import React from "react";
import fightTicket from "../../assets/Vipticketsec/vip-doge-vs-pepe.png";

function MobileTicket() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white ticketBgMob">
      <h2 className="font-HiJack text-[22px] mt-14 leading-tight">
        GET YOUR VIP TICKET
        <br />
        FOR THE FIGHT
      </h2>

      <p className="text-[15px] py-3 w-[80%]">
        The long-awaited fight of the year is just around the corner! To get
        early access and join the action, make sure to secure your whitelist
        spot.
      </p>

      <img
        src={fightTicket}
        alt="Fight ticket"
        className="w-full max-w-[90%] h-auto"
      />

      <a
        href="https://forms.gle/J11hnTDHwJVfhY348"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="my-5 w-[165px] h-[36px] bg-gradient-to-r rounded-[16px] bg-[#0184E2] text-black text-[12px] from-[#FFBF01] to-[#01FE37] font-[700] transition-all duration-300 hover:bg-[#F2B60F] hover:scale-105">
          Join the Whitelist Now
        </button>
      </a>
    </div>
  );
}

export default MobileTicket;
