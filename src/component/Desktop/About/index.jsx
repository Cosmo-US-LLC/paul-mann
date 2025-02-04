import React from "react";
import { useEffect } from "react";
import FounderHighlight from "./FounderHighlight";
import FounderOfOrganizations from "./FounderOfOrganizations";

function AboutDesktop() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    
  return (
    <div>
    <FounderHighlight />
    <FounderOfOrganizations />
    </div>
  );
}

export default AboutDesktop;
