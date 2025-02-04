const cardsData = [
    {
      icon: "/desktop-assets/we-need-to-rethink/icon1.webp",
      title: "40%",
      description: <p>of water demand will exceed supply by 2030</p>,
    },
    {
      icon: "/desktop-assets/we-need-to-rethink/icon2.webp",
      title: "8%",
      description: <p>of U.S. GDP could decline by 2050  due to water scarcity</p>,
    },
    {
      icon: "/desktop-assets/we-need-to-rethink/icon3.webp",
      title: "2M+",
      description: <p>Americans lack access to clean drinking  water at home</p>,
    },
  ];
  
  function WeNeedReThinkMob() {
    return (
      <div className="bg-[#073B63]">
        <div className=" w-[90%]  mx-auto  text-white">
          <div className="gap-8 py-[30px] mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center text-center gap-6">
              <h2 className=" text-[20px] font-[700] leading-[140%] capitalize">
                We Need To Rethink Our <br /> Relationship With Water
              </h2>
              <p className="  text-[15px] text-center leading-[21.24px] font-[400]">
                The lakes are shrinking. The rivers are disappearing. Crops are
                withering in fields, and drinking water is becoming toxic. This
                isn't the distant future—it's happening now.
              </p>
  
              <p className="text-[15px] text-center leading-[21.24px] font-[400]">
                With water demand set to exceed supply by 40% by 2030, we are
                heading toward an era of mass starvation, disease, and violent
                conflict. If we do nothing, entire regions will turn to dust. The
                time for action is now.
              </p>
            </div>
  
            <div className="space-y-[20px] w-[100%]">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[100%]  bg-[#0E4C72] py-6 px-10 rounded-xl shadow-lg text-center "
                >
                  <img
                    src={card.icon}
                    alt={`Icon ${index + 1}`}
                    className="w-12 h-12 mb-4"
                  />
                  <h4 className="mb-2 text-[20px] font-[500]">{card.title}</h4>
                  <p className="text-[14.47px] font-[400] max-w-[290px] mx-auto">{card.description}</p>
                </div>
              ))}
            </div>
   
          </div>
        </div>
      </div>
    );
  }
  
  export default WeNeedReThinkMob;
  