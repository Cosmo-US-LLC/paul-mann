import React, {useEffect} from "react";
import GlimpseIntoDesktop from "./GlimpseIntoDesktop";
import PressCoveragedesktop from "./PressCoveragedesktop";
import MediaPressDesktop from "./MediaPressDesktop";

function GlimpseDesktop() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="">
         <GlimpseIntoDesktop />
         <PressCoveragedesktop />
         {/* <MediaPressDesktop/> */}
    </div>
  );
}

export default GlimpseDesktop;
