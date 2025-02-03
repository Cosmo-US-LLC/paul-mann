import React from "react"
import Navbar from "../../component/mobile/navbar";
import MobileHeroSection from "./MobileHeroSection";
import HeroWalletSec from "./HeroWalletSec";
import MobileFirstEverSec from "./MobileFirstEverSec";
import TheRules from "./TheRules";
import PrizeMoney from "./PrizeMoney";
import Community from "./Community";
import Milestones from "./Milestones";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import TheFightSecMob from "./TheFightSecMob";
import DoNotWait from "./DoNotWait";
import FAQ from "./FAQ";
import Footer from "./Footer";
import MobileTicket from "./MobileTicket";
import BiggestMobSec from "./BiggestMobSec";
import DogeVSPepeMobSec from "./DogeVSPepeMobSec";
import PressandMediamobSec from "./PressandMediamobSec";
import HypeMobSec from "./HypeMobSec";
import HowItmobSec from "./HowItmobSec";
import MadeBy from "./MadeBy";


function MobileHome() {
  return (
    <div className="bg-[black] w-[100%]">
      <div>
        <Navbar />
        <MobileHeroSection />
        <HeroWalletSec />
        <MobileTicket />
        <MobileFirstEverSec />
        <TheRules />
        <Milestones />
        <PrizeMoney /> 
        <HowItmobSec />
        <Roadmap />
        <Community />
        <Tokenomics />
        <HypeMobSec />
        {/* <PressandMediamobSec /> */}
        <DogeVSPepeMobSec />
        <BiggestMobSec />
        {/* <MadeBy /> */}
        <TheFightSecMob />
        <DoNotWait />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default MobileHome;
