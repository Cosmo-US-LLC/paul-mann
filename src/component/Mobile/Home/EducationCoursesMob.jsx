import React from "react";

const EducationCoursesMob = () => {
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
      title: "Permaculture Installation Course",
      description:
        "Offered to sustainability professionals and landscape designers for installing permaculture systems that reduce water needs by 30%.",
    },
    {
      title: "Water-Efficient Fixtures Installation Course",
      description:
        "Plumbers, contractors, and installers can upgrade properties with water-saving fixtures, creating measurable reductions in water usage.",
    },
  ];

  return (
    <div className="EducationCoursesBG">
      <div className="w-[90%] py-[30px] mx-auto">
        <div className="space-y-[40px] mx-auto flex flex-col justify-center text-white">
          <h1 className="text-[20px] font-[RFDewi-bold] text-center font-[700] leading-[140%] capitalize">
            Creating Change <br /> Through Education
          </h1>
          <div className="flex  justify-center max-w-[292.999px] mx-auto">
            <img src="/mobile-assets/Creating/group_7.webp" alt="" />
          </div>
          <p className="text-[16px] font-[RFDewi-Light] font-[400] leading-[21px] ">
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
                className="w-[350px] relative z-10 px-4 space-y-[10px] py-4 bg-[#ffffff29] border-2 border-[#ffffff29] bg-opacity-60 rounded-xl overflow-hidden shadow-lg  h-[170px]"
              >
                <h2 className=" font-[RFDewi-Light] text-[25.072px] font-[700] leading-[96%] text-[#00D4F1]">
                  {course.title}
                </h2>
                <p className=" font-[RFDewi-Light] text-[14.04px] font-[400] leading-[117.404%]">{course.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
          <a href="https://www.renovaacademy.com" rel="noopener noreferrer">
          <button className="font-[RFDewi-Light] tracking-[0.9px] px-4 py-3 border border-white text-[14px] font-[500] text-white uppercase   hover:bg-white hover:text-[#073B63] transition">
          Renova Academy
          </button>
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCoursesMob;
