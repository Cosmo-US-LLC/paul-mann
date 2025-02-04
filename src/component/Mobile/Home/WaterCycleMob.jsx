const solutionsData = [
    {
      icon: "/desktop-assets/WaterCycleRestoration/icon1.webp",
      title: "Climate Education",
      description:
        "Implement education that empowers individuals, businesses and government to be part of the solution to help restore the flow of the water cycle.",
    },
    {
      icon: "/desktop-assets/WaterCycleRestoration/icon2.webp",
      title: "Economic Incentives",
      description:
        "The creation of meaningful policies, carbon reduction credits, and rebates to help communities and businesses be part of the solution to restore the water cycle.",
    },
    {
      icon: "/desktop-assets/WaterCycleRestoration/icon3.webp",
      title: "Sustainable Practices",
      description:
        "Permaculture techniques improve drought resilience, reduce fire risk, and recharge aquifers and the water table.",
    },
    {
      icon: "/desktop-assets/WaterCycleRestoration/icon4.webp",
      title: "Reforestation",
      description:
        "Regreening through planting more trees, plants, and shrubs improves soil health, sequesters carbon, and cools environments for more healthy rain and snowfall cycles.",
    },
    {
      icon: "/desktop-assets/WaterCycleRestoration/icon5.webp",
      title: "Water Efficiency",
      description:
        "Reducing potable water usage through water reuse and efficiency solutions helps secure a sustainable supply of fresh water for generations to come.",
    },
  ];
  
  function WaterCycleMob() {
    return (
      <div className="WaterCycleRestorationBGmob">
        <div className="w-[90%] py-[30px] mx-auto">
          <div className="gap-10 mx-auto flex flex-col justify-center text-white">
            <div className="">
              <h2 className="text-[20px] font-[700] leading-[140%] capitalize">
                How We Can Restore <br /> The Flow Of The Water Cycle
              </h2>
            </div>
  
            <div className="space-y-[35px]">
              {solutionsData.map((solution, index) => (
                <div
                  key={index}
                  className="flex flex-col   gap-[14px] rounded-xl "
                >
                  <img
                    src={solution.icon}
                    alt={solution.title}
                    className="w-12 h-12"
                  />
                  <h4 className="text-[18px] font-[600]">{solution.title}</h4>
                  <p className="text-[15px] font-[400] leading-[125%]">{solution.description}</p>
                </div>
              ))}
            </div>
  
            <div className="flex justify-center ">
              <button className="px-6 py-3 border border-white text-white uppercase text-[12px]  hover:bg-white hover:text-[#073B63] transition">
                The Solution
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WaterCycleMob;
  