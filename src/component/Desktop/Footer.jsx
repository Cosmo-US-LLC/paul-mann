import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
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

    if (!formData.Name || !formData.Email) {
      setMessage("Please fill in all fields.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/f64a041e-df86-44d8-a751-6cbaac589147",
        [formData]
      );
      console.log("Response from Sheet.best:", response.data);
      setMessage("Subscription successful!");
      setIsError(false);
      setFormData({ Name: "", Email: "" });
    } catch (error) {
      console.error("Error during subscription:", error);
      setMessage("Failed to subscribe. Please try again.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Automatically hide the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <footer className="bg-[#F3F3F3] overflow-hidden relative w-full">
      <div className="max-w-[1440px]   mx-auto ">
        <div className="max-w-[1200px] h-[354px] mx-auto ">
          <div className="relative h-[90%] flex flex-row w-full   py-12 ">
            <div className="w-[13%] flex  flex-col gap-3 justify-start items-start relative z-10 uppercase">
              <Link to="/about">
                <p className="text-[14px] font-[RFDewiExtended] font-[700] leading-[13px]">
                  About
                </p>
              </Link>

              {/* <Link to="/podcast">
                <p className="text-[14px] font-[RFDewiExtended] font-[700] leading-[13px]">
                  Podcast
                </p>
              </Link> */}
              {/* <a
                href="#Press"
                className="text-[14px] font-[RFDewiExtended] font-[700] leading-[13px]"
              >
                Press
              </a> */}
              <a
                href="https://www.renovaacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-[RFDewiExtended] font-[700] leading-[13px]"
                onClick={(e) => handleScroll(e, "FaqD", 90)}
              >
                Coaching
              </a>
              <a
                href="/contact"
                className="text-[14px] font-[RFDewiExtended] font-[700] leading-[13px]"
                onClick={(e) => handleScroll(e, "FaqD", 90)}
              >
                Connect
              </a>
            </div>
            <div className="w-[38%] gap-6 flex flex-col relative z-10">
              <a href="/" className="relative flex flex-col items-center">
                <div
                  className="relative z-10 flex w-full "
                  onClick={() => location.reload()}
                >
                  <img
                    src="/desktop-assets/footer/footer-logo.webp"
                    alt="fual-mann-logo"
                    className="cursor-pointer w-[246px] h-[97px]"
                  />
                </div>
              </a>
              <p className="text-[14px] font-[Roboto] font-[300] leading-[23px] w-[400px]">
                Paul is a seasoned industry expert specializing in the design
                and implementation of innovative water reuse and efficiency
                solutions that make water go farther.
              </p>
            </div>
            <div className="w-[50%] flex flex-col gap-6 pl-16 relative z-10">
              <div className="">
                <h2 className="text-[14px] font-[RFDewiExtended] font-[600] text-black leading-[24px] uppercase ">
                  SIGN UP FOR OUR NEWSLETTER
                </h2>
                <p className="text-black font-[Roboto] font-[300] text-[14px] leading-[23.24px]">
                  Stay updated on the latest news and exclusive promotions!
                </p>
              </div>
              <div className="w-full mx-auto ">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="Name"
                      placeholder="NAME"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                      className="w-1/3 p-3 font-[Roboto] bg-[#073B63] text-[#FFFFFF] placeholder:text-white focus:outline-none focus:border-transparent"
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="EMAIL"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                      className="w-1/3 p-3 border-2 font-[Roboto] bg-[#073B63] text-[#FFFFFF] placeholder:text-white focus:outline-none focus:border-transparent"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3 text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-black font-[Roboto] hover:bg-[#073B63] hover:text-[#FFF] font-[900] border border-black"
                    >
                      {isLoading ? "SUBSCRIBING..." : "SUBSCRIBE"}
                    </button>
                  </div>

                  {message && (
                    <p
                      className={` text-[10px] w-[95%] font-[Roboto] rounded-sm text-white px-4 py-2 ${
                        isError ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
              {/* <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-1/3 p-3 font-[Roboto] bg-[#073B63] text-[#FFFFFF] "
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-1/3 p-3 border-2 font-[Roboto] bg-[#073B63] text-[#FFFFFF]"
                />
                <button className="px-6 py-3 text-[12px] leading-[12px] uppercase tracking-[0.6px] text-center bg-[#FFF] text-black font-[Roboto] hover:bg-[#073B63] hover:text-[#FFF] font-[900]   border border-black">
                  SUBSCRIBE
                </button>
              </div> */}
              <div className="flex items-center gap-10">
                <p className="text-[16px] font-[Roboto] font-[500] leading-[24px] uppercase">
                  follow Paul :
                </p>
                <div className="flex gap-6">
                  {/* <a href="#" className="text-black hover:text-gray-300">
                    <img
                      className="object-cover h-5 "
                      src={"/desktop-assets/footer/logo6.svg"}
                      alt=""
                    />
                  </a> */}
                  {/* <a href="#" className="text-black hover:text-gray-300">
                    <img
                      className="object-cover h-5 "
                      src={"/desktop-assets/footer/logo1.svg"}
                      alt=""
                    />
                  </a> */}

                  {/* <a href="#" className="hover:text-gray-300">
                    <img
                      className="object-cover h-5"
                      src={"/desktop-assets/footer/logo2.svg"}
                      alt=""
                    />
                  </a> */}

                  <a
                    href="https://www.linkedin.com/in/pauldmann/"
                    className="hover:text-gray-300"
                  >
                    <img
                      className="object-cover h-5"
                      src={"/desktop-assets/footer/logo3.svg"}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@IAmPaulMann"
                    className="hover:text-gray-300"
                  >
                    <img
                      className="object-cover h-5"
                      src={"/desktop-assets/footer/logo4.svg"}
                      alt=""
                    />
                  </a>
                  {/* <a href="#" className="hover:text-gray-300">
                    <img
                      className="object-cover h-5"
                      src={"/desktop-assets/footer/logo5.svg"}
                      alt=""
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-[10%]">
            <div className="flex gap-6 uppercase">
              <a
                href="#Paul-Mann"
                className="font-[Roboto] text-[14px] font-[500] test-[#000]   leading-[22px]"
              >
                © Paul Mann
              </a>
              <a
                href="#Privacy-Policy"
                className="font-[Roboto] text-[14px] font-[500] test-[#000]   leading-[22px]"
              >
                Privacy Policy
              </a>
              <a
                href="#Terms"
                className="font-[Roboto] text-[14px] font-[500] test-[#000]   leading-[22px]"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
