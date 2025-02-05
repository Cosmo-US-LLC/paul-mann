import React, {useEffect} from "react";
import PodcastsEvery from "./PodcastsEvery";

function PodcastsMobile() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="">
      <PodcastsEvery />
    </div>
  );
}

export default PodcastsMobile;
