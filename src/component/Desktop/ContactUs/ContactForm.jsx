import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[1440px] w-full h-full mx-auto">
      <div className="max-w-[1200px] h-[750px] mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-start justify-between gap-10 mb-8 bg-white md:flex-row ">
          <div className="w-full space-y-5 md:w-1/2">
            <h2 className="text-[45px] font-[RFDewiExtended] font-[700] capitalize leading-[53px]">
              Still Have Questions?
            </h2>
            <p className="text-[#000] font-[Roboto] font-[400] text-[16px] leading-[23px] w-[330px]">
              Email us:{" "}
              <a href="mailto:info@waterchampion.com" className="text-black ">
              info@waterchampions.com
              </a>
            </p>
            {/* <p className="text-[#000] font-[Roboto] font-[400] text-[16px] leading-[23px] w-[330px]">
              Call us:{" "}
              <span className="font-medium">866-3WATERS | 866-392-8372</span>
            </p> */}

            <form className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-5  font-[Roboto] text-[14px] font-[400] leading-[14px] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full  py-5 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full  py-5 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
              />
            </form>
          </div>

          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="/desktop-assets/ContactUs/contactUs.webp"
              alt="Person relaxing on the grass"
              className="object-cover w-full h-full max-w-[662px] max-h-[652px]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[120px] py-3 font-semibold font-[Roboto] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] border border-[#073B63] bg-white shadow-inner"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ContactForm;



// sheet.best code for contact form below




// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(null);

//   // Update form state on input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSuccess(null);

//     // Log form data to console
//     console.log("Form Data Submitted:", formData);

//     try {
//       const response = await fetch("YOUR_SHEETBEST_API_URL", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify([formData]),
//       });

//       if (response.ok) {
//         console.log("Response from SheetBest:", await response.json());
//         setSuccess("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         console.error("Failed to send data.");
//         setSuccess("Failed to send message. Try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSuccess("An error occurred. Please try again.");
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="max-w-[1440px] w-full h-full mx-auto">
//       <div className="max-w-[1200px] h-[750px] mx-auto flex flex-col justify-center">
//         <div className="flex flex-col items-start justify-between gap-10 mb-8 bg-white md:flex-row">
//           <div className="w-full space-y-4 md:w-1/2">
//             <h2 className="text-[45px] font-[RFDewiExtended] font-[700] capitalize leading-[53px]">
//               Still Have Questions?
//             </h2>
//             <p className="text-[#000] font-[Roboto] font-[400] text-[16px] leading-[23px] w-[330px]">
//               Email us:{" "}
//               <a href="mailto:info@waterchampion.com" className="text-black">
//                 info@waterchampions.com
//               </a>
//             </p>

//             {/* Form */}
//             <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="w-full py-4 font-[Roboto] text-[14px] font-[400] leading-[14px] border-b-2 border-gray-400 outline-none focus:border-black"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//                 className="w-full py-4 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
//               />
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows="5"
//                 required
//                 className="w-full py-4 font-[Roboto] text-[14px] font-[400] border-b-2 border-gray-400 outline-none focus:border-black"
//               />
//               <button
//                 type="submit"
//                 className="w-[110px] py-2  font-semibold font-[Roboto] text-[#073B63] hover:bg-[#073B63] hover:text-[#FFF] border border-[#073B63] bg-white shadow-inner"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "SENDING..." : "SEND"}
//               </button>
//             </form>

//             {/* Success/Error Message */}
//             {success && (
//               <p className={`mt-3 ${success.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
//                 {success}
//               </p>
//             )}
//           </div>

//           <div className="flex justify-center w-full md:w-1/2">
//             <img
//               src="/desktop-assets/ContactUs/contactUs.webp"
//               alt="Person relaxing on the grass"
//               className="object-cover w-full h-full max-w-[662px] max-h-[652px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



