import React, {useEffect} from "react";

function GlimpseMobile() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="">
        GlimpseMobile
    </div>
  );
}

export default GlimpseMobile;
