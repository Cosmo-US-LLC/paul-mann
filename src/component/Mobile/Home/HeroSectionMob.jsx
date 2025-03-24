import React, { useRef, useState } from "react";

function HeroSectionMob() {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  const handleToggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setSoundOn(!videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full pt-10 overflow-hidden ">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src="/video/hero-video.mp4"  // Make sure your file is in /public/video/
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />

      <button
        onClick={handleToggleSound}
        className="absolute bottom-2 left-3 bg-black bg-opacity-60 text-white px-3 py-1.5 rounded-full text-xs shadow-lg z-10"
      >
        {soundOn ? "🔇 Mute" : "🔊 Sound On"}
      </button>
    </div>
  );
}

export default HeroSectionMob;
