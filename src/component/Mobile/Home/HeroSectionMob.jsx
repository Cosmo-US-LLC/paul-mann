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
    <div className="relative w-full h-full mt-4 overflow-hidden">
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        src="/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <button
        onClick={handleToggleSound}
        className="absolute z-10 px-4 py-2 text-sm text-white bg-black rounded-full shadow-lg bottom-2 left-4 bg-opacity-60"
      >
        {soundOn ? "🔇 Mute" : "🔊 Sound On"}
      </button>
    </div>
  );
}

export default HeroSectionMob;
