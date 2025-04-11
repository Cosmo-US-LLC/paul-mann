import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");  
  const [isError, setIsError] = useState(false);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data to be submitted:", formData);

    if (!formData.Name || !formData.Email || !formData.Message) {
      setMessage("Please fill in all fields.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage("");  

    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/b4827b4b-3b27-4144-85be-843b5122ad2b",
        [formData]
      );
      console.log("Response from Sheet.best:", response.data);
      setMessage("Message sent successfully!");
      setIsError(false);
      setFormData({ Name: "", Email: "", Message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage("Failed to send message. Please try again.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] h-[750px] mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-start justify-between gap-10 mb-8 bg-white md:flex-row ">
          <div className="w-full md:w-1/2">
            <h2 className="text-[45px] font-[RFDewiExtended] font-[700] capitalize leading-[53px]">
              Still Have Questions?
            </h2>
            <p className="text-[#000] mt-2 font-[Roboto] font-[400] text-[16px] leading-[23px] w-[330px]">
              Email us:{" "}
              <a href="mailto:info@iampaulmann.com" className="text-black ">
                info@iampaulmann.com
              </a>
            </p>

            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full py-5 font-[Roboto] text-[14px] font-[400] leading-[14px] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="w-full py-5 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                rows="6"
                value={formData.Message}
                onChange={handleChange}
                required
                className="w-full py-5 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-[120px] py-3 font-semibold font-[Roboto] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] border border-[#073B63] bg-white shadow-inner"
              >
                {isLoading ? "Sending..." : "SEND"}
              </button>

              {message && (
                <p
                  className={`mt-4 text-[18px] font-[600] font-[Roboto] flex items-center justify-center text-white px-4 py-2 rounded-sm ${
                    isError ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>

          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="/desktop-assets/ContactUs/paul-mann-contact-us.webp"
              alt="Person relaxing on the grass"
              className="object-cover w-full h-full rounded max-w-[662px] max-h-[652px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;