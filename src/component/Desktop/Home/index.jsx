import React from "react";
import HeroSection from "./HeroSection";
import Organizations from "./Organizations";
import JourneyOfLeading from "./JourneyOfLeading";
import WeNeedReThink from "./WeNeedReThink";
import WhoWeServe from "./WhoWeServe";
import EndToEndSolutions from "./EndToEndSolutions";
import WaterCycleRestoration from "./WaterCycleRestoration";
import WaterSolutions from "./WaterSolutions";
import EducationCourses from "./EducationCourses";
import AdvocacyOfPaulMann from "./AdvocacyOfPaulMann";

function HomeDesktop() {
  return (
    <div>
      <HeroSection />
      <Organizations />
      <JourneyOfLeading/>
      <AdvocacyOfPaulMann/>
      <WeNeedReThink/>
      <WhoWeServe/>
      <EndToEndSolutions/>
      <WaterCycleRestoration/>
      <WaterSolutions/>
      <EducationCourses/>
    </div>
  );
}

export default HomeDesktop;
