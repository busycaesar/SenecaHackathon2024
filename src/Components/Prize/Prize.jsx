import hFirst from "../../svgs/Prize/hFisrt.png";
import hSecond from "../../svgs/Prize/hSecond.png";
import hThird from "../../svgs/Prize/hThird.png";
import hForth from "../../svgs/Prize/hForth.png";
import houseFirst from "../../svgs/Prize/houseFirst.png";
import houseSecond from "../../svgs/Prize/houseSecond.png";
import houseThird from "../../svgs/Prize/houseThird.png";
import houseForth from "../../svgs/Prize/houseForth.png";
import { useState } from "react";

const prizeList = [
  {
    id: 0,
    price: 5724,
    note: "2 month Toronto rent | 1 bedroom condo",
    housingImg: houseFirst,
    title: "First Prize",
    hImg: hFirst,
    customColor: "bg-yellow-500",
  },
  {
    id: 1,
    price: 2085,
    note: "1 month Ottawa rent | 1 bedroom condo",
    housingImg: houseSecond,
    title: "Second Prize",
    hImg: hSecond,
    customColor: "bg-zinc-400",
  },
  {
    id: 2,
    price: 1359,
    note: "2 month Edmonton rent | 1 bedroom condo",
    housingImg: houseThird,
    title: "Third Prize",
    hImg: hThird,
    customColor: "bg-green-500",
  },
  {
    id: 3,
    price: 500,
    note: "*4 individual winners will receive this prize",
    housingImg: houseForth,
    title: "Forth Prize",
    hImg: hForth,
    customColor: "bg-blue-500",
  },
];
function Prize() {
  const [selectedPrize, setSelectedPrize] = useState(prizeList[0]);
  const secondOptionClick = (data) => {
    setSelectedPrize(data);
  };

  const housingImgDecoration = (
    <div
      aria-hidden="true"
      className="flex xl:flex-col w-full xl:w-1/12 md:h-full overflow-hidden justify-center items-center"
    >
      <img
        src={selectedPrize.housingImg}
        alt="house icon"
        className="xl:w-full sm:w-2/12 w-1/4"
      />
      <img
        src={selectedPrize.housingImg}
        alt="house icon"
        className="xl:w-full sm:w-2/12 w-1/4"
      />
      <img
        src={selectedPrize.housingImg}
        alt="house icon"
        className="xl:w-full sm:w-2/12 w-1/4"
      />
      <img
        src={selectedPrize.housingImg}
        alt="house icon"
        className="xl:w-full sm:w-2/12 w-1/4"
      />
      <img
        src={selectedPrize.housingImg}
        alt="house icon"
        className="xl:w-full sm:w-2/12 w-1/4"
      />
    </div>
  );
  return (
    <>
      <section className=" flex flex-col items-center border-solid border-red-700 border-8 rounded-3xl mt-20 py-10 mx-3 md:mx-5">
        <h2>
          <strong>Important Dates (2024)</strong>
        </h2>
        <div
          id="prizeHolder"
          className="w-11/12 sm:w-5/6 flex-1 flex flex-col justify-center items-end h-3/4"
        >
          <div
            id="prizeInfo"
            className="flex-1 w-full bg-red-700 rounded-3xl px-5 py-4 sm:py-8 sm:px-10 flex justify-around items-center flex-col xl:flex-row shadow-2xl relative"
          >
            {housingImgDecoration}
            {selectedPrize && (
              <>
                <div className="flex flex-col justify-center items-center w-full flex-1 z-10">
                  <div className="text-white sm:text-left text-center w-full">
                    <p className="text-2xl font-bold xl:text-8xl md:text-5xl sm:text-3xl">
                      {selectedPrize.title}
                    </p>
                    <p className="text-xl font-bold xl:text-6xl xl:tracking-widest md:text-4xl tracking-wide sm:text-2xl">
                      ${selectedPrize.price}
                    </p>
                    <p className="text-sm">{selectedPrize.note}</p>
                  </div>
                  <div className="w-full sm:w-3/5 ">
                    {selectedPrize.hImg && selectedPrize.id !== 3 && (
                      <img
                        src={selectedPrize.hImg}
                        alt={selectedPrize.title}
                        className="w-full"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
            {housingImgDecoration}
          </div>
          <div
            id="prizeList"
            className="flex w-full justify-center mt-10 flex-wrap "
          >
            {prizeList.map((prize, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-end cursor-pointer w-1/5 min-w-28 ${prize.customColor} mx-1 my-0.5 rounded-xl  py-2 px-0.5 shadow-xl`}
                onClick={() => secondOptionClick(prize)}
              >
                <div className="w-full text-center relative">
                  {prize.hImg && prize.id !== 3 && (
                    <img
                      src={prize.hImg}
                      alt={prize.title}
                      className="w-full"
                    />
                  )}

                  {prize.hImg && prize.id === 3 && (
                    <img src={prize.hImg} alt={prize.title} className="w-1/3" />
                  )}
                </div>
                <p className="text-center text-sm md:text-base lg:text-lg font-bold">
                  {prize.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Prize;
