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

function WhoWeServe() {
  return (
    <div className="whoWeServeBG">
      <div className="max-w-[1440px] w-full h-full mx-auto">
        <div className="max-w-[1200px] h-[750px] mx-auto flex flex-col justify-center">
          <div className="relative flex flex-col items-center justify-center gap-8 text-white">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="w-[624px] text-[45px] font-[700] leading-[53px] capitalize">
                Who We Serve
              </h2>
              <p className="text-[16px] leading-[21.24px] font-[400]">
                At Water Champions, we provide expert water management solutions
                for a variety of clients:
              </p>
            </div>

            <div className="flex items-center justify-center gap-6">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="relative p-4 bg-[#ffffff29] bg-opacity-60 rounded-xl overflow-hidden shadow-lg w-[387px] h-[457px]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[223px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-4 py-8">
                    <h4 className=" text-[28px] font-[500] leading-[40px]">
                      {card.title}
                    </h4>
                    <p className="text-[18px] font-[400] leading-[26px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-18 leading-[26px] text-center font-[400]">
              No matter the scale, we tailor our approach to meet your unique
              water needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeServe;
