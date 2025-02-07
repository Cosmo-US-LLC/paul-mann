const cardsData = [
  {
    icon: "/desktop-assets/we-need-to-rethink/icon1.webp",
    title: "40%",
    description: <p>of water demand will exceed <br /> supply by 2030</p>,
  },
  {
    icon: "/desktop-assets/we-need-to-rethink/icon2.webp",
    title: "8%",
    description: <p>of U.S. GDP could decline by 2050 <br/> due to water scarcity</p>,
  },
  {
    icon: "/desktop-assets/we-need-to-rethink/icon3.webp",
    title: "2M+",
    description: <p>Americans lack access to clean drinking <br/> water at home</p>,
  },
];

function WeNeedReThink() {
  return (
    <div className="bg-[#073B63]">
      <div className="max-w-[1440px] h-[750px] w-full  mx-auto  text-white">
        <div className="max-w-[1200px] gap-8 h-full mx-auto flex flex-col justify-center items-center">
          <div className=" w-[718px] flex flex-col items-center justify-center text-center gap-6">
            <h2 className=" text-[45px] font-[700] leading-[53px] capitalize font-[RFDewiExtended]">
              We Need To Rethink Our Relationship With Water
            </h2>
            <p className=" w-[670px] text-[16px] leading-[21.24px] font-[400] font-[Roboto]">
              The lakes are shrinking. The rivers are disappearing. Crops are
              withering in fields, and drinking water is becoming toxic. This
              isn't the distant future—it's happening now.
            </p>

            <p className=" w-[670px] text-[16px] leading-[21.24px] font-[400] font-[Roboto]">
              With water demand set to exceed supply by 40% by 2030, we are
              heading toward an era of mass starvation, disease, and violent
              conflict. If we do nothing, entire regions will turn to dust. The
              time for action is now.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#0E4C72] p-6 rounded-xl shadow-lg text-center w-[387px]"
              >
                <img
                  src={card.icon}
                  alt={`Icon ${index + 1}`}
                  className="w-12 h-12 mb-4"
                />
                <h4 className="mb-2 text-[30px] font-[700] font-[RFDewiExtended]">{card.title}</h4>
                <p className="text-[16px] font-[400] leading-[23px] font-[Roboto]">{card.description}</p>
              </div>
            ))}
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default WeNeedReThink;
