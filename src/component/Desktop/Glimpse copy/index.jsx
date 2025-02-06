import React, {useEffect} from "react";

function GlimpseDesktop() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="h-[100vh] bg-red-300">
        GlimpseDesktop
    </div>
  );
}

export default GlimpseDesktop;
