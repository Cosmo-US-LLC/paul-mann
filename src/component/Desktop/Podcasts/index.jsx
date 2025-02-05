import React, {useEffect} from "react";

function PodcastsDesktop() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="h-[100vh] bg-red-300">
        PodcastsDesktop
    </div>
  );
}

export default PodcastsDesktop;
