const solutionsData = [
  {
    image: "/desktop-assets/EndToEndSolutions/card1.webp",
    title: "Site Assessments & Estimates",
    description:
      "On-site and web-based meetings to evaluate your project and provide customized estimates based on your needs.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card2.webp",
    title: "Project Design & Engineering",
    description:
      "Customized solutions informed by rigorous analysis and cutting-edge water reuse technologies.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card3.webp",
    title: "Drafting & Documentation for Permits",
    description:
      "Long-term partnership; system monitoring, maintenance instructions, and optimization to maximize efficiency and value over time.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card4.webp",
    title: (
      <p>
        Field <br /> Training
      </p>
    ),
    description:
      "Hands-on guidance for field crews, ensuring seamless installation and maintenance of water systems.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card5.webp",
    title: "Product Procurement & Delivery",
    description:
      "Customized solutions informed by rigorous analysis and cutting-edge water reuse technologies.",
  },
  {
    image: "/desktop-assets/EndToEndSolutions/card6.webp",
    title: (
      <p>
        Implementation & <br /> Support
      </p>
    ),
    description:
      "Long-term partnership; system monitoring, maintenance instructions, and optimization to maximize efficiency and value over time.",
  },
];

function EndToEndSolutions() {
  return (
    <div className="EndToEndSolutionsBG">
      <div className="max-w-[1440px] w-full h-full mx-auto   overflow-hidden">
        <div className="max-w-[1200px] h-[1387px] mx-auto flex flex-col text-white justify-center gap-12  ">
          <div className="max-w-[644px]">
            <h2 className="text-[48px] font-[500] leading-[58px]">
              End-to-End Solutions for Water Management
            </h2>
          </div>

          <div className="flex flex-wrap items-stretch gap-4">
            {solutionsData.map((solution, index) => (
              <div
                key={index}
                className="flex flex-col p-4 bg-[#ffffff29] bg-opacity-60 rounded-xl overflow-hidden shadow-lg w-[387px] h-[470px]"
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-[232px] object-cover rounded-lg"
                />
                <div className="flex flex-col gap-4 py-6">
                  <h4 className="text-[28px] font-[500] leading-[40px]">
                    {solution.title}
                  </h4>
                  <p className="text-[18px] font-[400] leading-[26px]">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndToEndSolutions;
