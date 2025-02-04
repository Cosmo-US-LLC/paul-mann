import React from "react";

const EducationCourses = () => {
  const courses = [
    {
      title: "Greywater Recycling Technology Course",
      description:
        "Learn how to recycle greywater effectively to reduce water usage in homes and businesses.",
    },
    {
      title: "Rainwater Harvesting Systems Course",
      description:
        "Discover techniques to collect, store, and utilize rainwater for irrigation and other uses.",
    },
    {
      title: "Water-Efficient Fixtures Installation Course",
      description:
        "Purchase, configure, and maintain eco-friendly water fixtures for optimal use.",
    },
    {
      title: "Permaculture Installation Course",
      description:
        "Learn sustainable agricultural practices to improve soil water retention and biodiversity.",
    },
  ];

  return (
    <div className="EducationCoursesBG">
      <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px] h-[750px] gap-6 mx-auto flex flex-col justify-center text-white relative">
          <img
            className="absolute top-10 right-0 w-[333px] h-[60px]"
            src="/desktop-assets/EducationCourses/EducationCourses-logo.webp"
            alt="Founder Highlight with water conservation system"
          />

          <h1 className="text-[45px] font-[700] leading-[53px] capitalize">
            Creating Change <br /> Through Education
          </h1>
          <p className="text-[16px] font-[400] leading-[21px] ">
            Renova Academy is an educational platform dedicated to driving
            global change through water literacy and training. Designed for
            architects, builders, sustainability professionals, and community
            leaders, Renova Academy offers courses in greywater recycling
            technology, rainwater harvesting systems, water-efficient fixture
            installation, and permaculture solutions. By equipping participants
            with practical knowledge and skills, Renova Academy empowers them to
            implement impactful water-saving solutions, supporting a sustainable
            future and fostering innovation in water management practices.
          </p>
          <div className="flex flex-wrap items-start justify-center gap-6 text-white">
            {courses.map((course, index) => (
              <div
                key={index}
                className="relative px-10 py-4 bg-[#ffffff29] bg-opacity-60 rounded-xl overflow-hidden shadow-lg w-[511px] h-[170px]"
              >
                <h2 className="w-[345px] text-[25px] font-[700] text-[#00D4F1]">
                  {course.title}
                </h2>
                <p className="w-[345px] text-[14px] font-[400] leading-[16px]">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <button className="px-6 py-3 border border-white text-white uppercase   hover:bg-white hover:text-[#073B63] transition">
              The Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCourses;
