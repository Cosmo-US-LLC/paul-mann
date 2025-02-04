import React, {useEffect} from "react";
import FounderOfOrganizationsForMobile from "./FounderOfOrganizationsForMobile";
import FounderHighlightMobile from "./FounderHighlightMobile";

function AboutMobile() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div>
      <FounderHighlightMobile />
      <FounderOfOrganizationsForMobile />
    </div>
  );
}

export default AboutMobile;
