import React, {useEffect} from "react";
import GlimpseIntoMob from "./GlimpseInto.";
import PressCoveragemob from "./PressCoverage";
import MediaPressMob from "./MediaPress";

function GlimpseMobile() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="">
        <GlimpseIntoMob />
        <PressCoveragemob />
         <MediaPressMob />
    </div>
  );
}

export default GlimpseMobile;
