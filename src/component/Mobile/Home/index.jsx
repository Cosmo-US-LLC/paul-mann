import React, {useEffect} from 'react'
import HeroSectionMob from './HeroSectionMob'
import OrganizationsMob from './OrganizationsMob'
import JourneyOfLeadingMob from './JourneyOfLeadingMob'
import AdvocacyMob from './AdvocacyMob'
import WeNeedReThinkMob from './WeNeedReThinkMob'
import WhoWeServeMob from './WhoWeServeMob'
import EndToEndMob from './EndToEndMob'
import WaterCycleMob from './WaterCycleMob'
import WaterSolutionsMob from './WaterSolutionsMob'
import EducationCoursesMob from './EducationCoursesMob'

function HomeMobile() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
        <HeroSectionMob />
        <OrganizationsMob />
        <JourneyOfLeadingMob/>
        <AdvocacyMob/>
        <WeNeedReThinkMob />
        <WhoWeServeMob />
        <EndToEndMob />
        <WaterCycleMob />
        <WaterSolutionsMob />
        <EducationCoursesMob />
    </div>
  )
}

export default HomeMobile
