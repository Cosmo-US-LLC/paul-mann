import React, { useRef, useState } from "react";

function HeroSection() {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  const handleToggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setSoundOn(!videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src="/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />

      <button
        onClick={handleToggleSound}
        className="absolute z-10 px-4 py-2 text-sm text-white bg-black rounded-full shadow-lg bottom-6 left-6 bg-opacity-60"
      >
        {soundOn ? "🔇 Mute" : "🔊 Sound On"}
      </button>
    </div>
  );
}

export default HeroSection;
