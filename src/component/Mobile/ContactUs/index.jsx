import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactUsMobile() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="w-[90%] mx-auto py-[70px]">
      <div className="flex flex-col justify-center mx-auto ">
        <div className="flex flex-col items-start justify-between gap-10 bg-white md:flex-row ">
          <div className="w-full space-y-5 md:w-1/2">
            <h2 className="text-[28px] font-[RFDewiExtended] font-[700] text-center capitalize leading-[128.571%]">
              Still Have <br /> Questions?
            </h2>
            <div className="!mt-[14px]">
              <p className="text-[#000] font-[Roboto] text-center font-[400] text-[14px] leading-[23px] ">
                Email us:{" "}
                <a
                  href="mailto:info@iampaulmann.com"
                  className="text-black font-[Roboto] "
                >
                  info@iampaulmann.com
                </a>
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full py-2 text-[14px] font-[Roboto] placeholder:text-[#000] border-b border-[#000] outline-none focus:border-black"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="w-full py-2 text-[14px] font-[Roboto] placeholder:text-[#000] border-b border-[#000] outline-none focus:border-black"
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                rows="4"
                value={formData.Message}
                onChange={handleChange}
                required
                className="w-full py-2 text-[14px] font-[Roboto] placeholder:text-[#000] border-b border-[#000] outline-none focus:border-black"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-[123.53px] h-[50px] mt-4 text-[#073B63] text-[12px] hover:bg-[#073B63] hover:text-[#FFF] font-[800] font-[Roboto] border border-[#073B63] bg-white shadow-inner"
              >
                {isLoading ? "Sending..." : "SEND"}
              </button>

              {message && (
                <p
                  className={`mt-4 text-[14px] flex justify-center items-center font-[Roboto] text-white px-4 py-2 rounded-md ${
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
              src="/desktop-assets/ContactUs/contactUs.webp"
              alt="Person relaxing on the grass"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMobile;
