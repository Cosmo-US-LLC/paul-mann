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
        <div className="max-w-[1200px] h-[750px] gap-10 mx-auto flex flex-col justify-center text-white">
          <section className="px-20 py-12 bg-blue-100">
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
              Creating Change Through Education
            </h1>
            <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-gray-600">
              Renova Academy empowers students with the knowledge and skills to
              implement impactful solutions, creating a sustainable future
              through global water literacy and training programs.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 text-center bg-white shadow-lg rounded-2xl"
                >
                  <h2 className="mb-2 text-xl font-semibold text-blue-700">
                    {course.title}
                  </h2>
                  <p className="text-base text-gray-600">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducationCourses;
