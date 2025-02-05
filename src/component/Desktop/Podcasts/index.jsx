import React, {useEffect} from "react";
import PodcastsEveryDesktop from "./PodcastsEveryDesktop";
 

function PodcastsDesktop() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="">
        <PodcastsEveryDesktop />
    </div>
  );
}

export default PodcastsDesktop;
