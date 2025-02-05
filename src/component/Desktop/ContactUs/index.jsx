import React, {useEffect} from "react";
import ContactForm from "./ContactForm";

function ContactUsDesktop() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="">
        <ContactForm />
    </div>
  );
}

export default ContactUsDesktop;
