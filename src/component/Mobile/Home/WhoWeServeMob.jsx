const cardData = [
    {
      image: "/desktop-assets/WhoWeServe/card-img1.webp",
      title: "Residential",
      description:
        "Homeowners looking to optimize water usage, improve efficiency, and reduce costs.",
    },
    {
      image: "/desktop-assets/WhoWeServe/card-img2.webp",
      title: "Commercial",
      description:
        "Businesses seeking sustainable water solutions to enhance operations and comply with regulations.",
    },
    {
      image: "/desktop-assets/WhoWeServe/card-img3.webp",
      title: "Multi-Unit Properties",
      description:
        "Apartment complexes, condos, and housing communities requiring customized water management strategies.",
    },
  ];
  
  function WhoWeServeMob() {
    return (
      <div className="whoWeServeBG">
        <div className=" w-[90%] py-[30px] mx-auto">
          <div className="mx-auto flex flex-col justify-center">
            <div className="relative flex flex-col items-center justify-center gap-8 text-white">
              <div className="flex flex-col items-center space-y-[10px] text-center">
                <h2 className=" text-[20px] font-[700] leading-[53px] capitalize">
                  Who We Serve
                </h2>
                <p className="text-[15px] leading-[21.24px] font-[400]">
                  At Water Champions, we provide expert water management solutions
                  for a variety of clients:
                </p>
              </div>
  
              <div className="space-y-[10px]">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="relative p-4 bg-[#ffffff29] bg-opacity-60 rounded-xl overflow-hidden shadow-lg max-w-[334px] mma-auto"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[223px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col space-y-[10px] pb-8 pt-4">
                      <h4 className=" text-[24.165px] font-[500] leading-[40px]">
                        {card.title}
                      </h4>
                      <p className="text-[14.314px] font-[400] leading-[156.761%]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhoWeServeMob;
  