import React from "react";

const EducationCourses = () => {
  const courses = [
    {
      title: "Greywater Recycling Technology Course",
      description:
        "Learn how to sell, design or install innovative systems that recycle greywater into germ-free, clear water used for irrigation, flushing toilets and more.",
    },
    {
      title: "Rainwater Harvesting Systems Course",
      description:
        "For architects, installers, and consultants it covers the installation of rainwater harvesting systems to conserve and optimize water use.",
    },
    {
      title: "Water-Efficient Fixtures Installation Course",
      description:
        "Plumbers, contractors, and installers can upgrade properties with water-saving fixtures, creating measurable reductions in water usage.",
    },
    {
      title: "Permaculture Installation Course",
      description:
        "Offered to sustainability professionals and landscape designers for installing permaculture systems that reduce water needs by 30%.",
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

          <h1 className="text-[45px] font-[700] leading-[53px] font-[RFDewiExtended] capitalize">
            Creating Change <br /> Through Education
          </h1>
          <p className="text-[16px] font-[400] leading-[21px] font-[Roboto]">
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
                className="relative flex flex-col gap-4 px-10 py-4 bg-[#ffffff29] border border-[#ffffff7A] bg-opacity-60 rounded-xl overflow-hidden shadow-lg w-[511px] h-[170px]"
              >
                <h2 className="w-[345px] text-[25px] font-[700] text-[#00D4F1] leading-[24px] font-[RFDewi-Light]">
                  {course.title}
                </h2>
                <p className="w-[345px] text-[16px] font-[400] leading-[18px] font-[Roboto]">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <a href="https://www.renovaacademy.com" rel="noopener noreferrer">
              <button className="px-6 py-3 border tracking-[0.9px] font-[Roboto] border-white text-white uppercase   hover:bg-white hover:text-[#073B63] transition">
                Renova Academy
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCourses;
