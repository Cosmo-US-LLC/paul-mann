import React, {useEffect} from "react";

function ContactUsDesktop() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="h-[100vh] bg-red-300">
        ContactUsDesktop
    </div>
  );
}

export default ContactUsDesktop;
