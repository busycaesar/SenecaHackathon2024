import hFirst from "../svgs/Prize/hFisrt.png";
import hSecond from "../svgs/Prize/hSecond.png";
import hThird from "../svgs/Prize/hThird.png";
import vFirst from "../svgs/Prize/vFirst.png";
import vSecond from "../svgs/Prize/vSecond.png";
import vThird from "../svgs/Prize/vThird.png";
import houseFirst from "../svgs/Prize/houseFirst.png";
import houseSecond from "../svgs/Prize/houseSecond.png";
import houseThird from "../svgs/Prize/houseThird.png";
import houseForth from "../svgs/Prize/houseForth.png";
import { useState } from "react";

const prizeList = [
  {
    price: 5724,
    note: "Optional note here",
    housingImg: houseFirst,
    title: "First Prize",
    vImg: vFirst,
    hImg: hFirst,
    customColor: "bg-green-500",
  },
  {
    price: 2085,
    note: "Optional note here",
    housingImg: houseSecond,
    title: "Second Prize",
    vImg: vSecond,
    hImg: hSecond,
    customColor: "bg-blue-500",
  },
  {
    price: 1359,
    note: "Optional note here",
    housingImg: houseThird,
    title: "Third Prize",
    vImg: vThird,
    hImg: hThird,
    customColor: "bg-yellow-500",
  },
  {
    price: 500,
    note: "Optional note here",
    housingImg: houseForth,
    title: "Forth Prize",
    vImg: vThird,
    hImg: hThird,
    customColor: "bg-orange-500",
  },
];
function Prize() {
  const [selectedPrize, setSelectedPrize] = useState(prizeList[0]);
  const secondOptionClick = (data) => {
    setSelectedPrize(data);
  };
  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center bg-red-700 rounded-3xl">
        <h1 className="text-center text-white">Prize</h1>
        <h2>Laptop view</h2>
        <div
          id="prizeHolder"
          className="w-3/4  flex justify-center items-end h-[640px] mt-10"
        >
          <div className="h-[70%] w-1/4 flex items-end  ">
            <div className="h-[90%] w-full bg-orange-500 rounded-t-3xl relative flex items-end mx-0.5">
              <img
                src={hThird}
                alt="First Prize"
                className="w-full absolute top-0 -translate-y-1/2"
              />
              <div className="flex flex-col items-center h-5/6 justify-between mb-5">
                <div className="text-center mt-10">
                  <p className="text-4xl font-bold">$500</p>
                  <p>Optional note here</p>
                </div>

                <img src={houseForth} alt="First Prize" className="w-3/4" />
              </div>
            </div>
          </div>
          <div className="h-full w-1/4 flex items-end">
            <div className="h-[90%] w-full bg-green-500 rounded-t-3xl relative flex items-end mx-0.5">
              <img
                src={hFirst}
                alt="First Prize"
                className="w-full absolute top-0 -translate-y-1/2"
              />
              <div className="flex flex-col items-center h-5/6 justify-between mb-5">
                <div className="text-center mt-10">
                  <p className="text-4xl font-bold">$5724</p>
                  <p>Optional note here</p>
                </div>

                <img src={houseFirst} alt="First Prize" className="w-3/4" />
              </div>
            </div>
          </div>
          <div className="h-[90%] w-1/4 flex items-end">
            <div className="h-[90%] w-full bg-blue-500 rounded-t-3xl relative flex items-end mx-0.5">
              <img
                src={hSecond}
                alt="First Prize"
                className="w-full absolute top-0 -translate-y-1/2"
              />
              <div className="flex flex-col items-center h-5/6 justify-between mb-5">
                <div className="text-center mt-10">
                  <p className="text-4xl font-bold">$2085</p>
                  <p>Optional note here</p>
                </div>

                <img src={houseSecond} alt="First Prize" className="w-3/4" />
              </div>
            </div>
          </div>
          <div className="h-[80%] w-1/4 flex items-end">
            <div className="h-[90%] w-full bg-yellow-500 rounded-t-3xl relative flex items-end mx-0.5">
              <img
                src={hThird}
                alt="First Prize"
                className="w-full absolute top-0 -translate-y-1/2"
              />
              <div className="flex flex-col items-center h-5/6 justify-between mb-5">
                <div className="text-center mt-10">
                  <p className="text-4xl font-bold">$1359</p>
                  <p>Optional note here</p>
                </div>

                <img src={houseThird} alt="First Prize" className="w-3/4" />
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-10">phone view</h2>
        <div id="prizeHolder" className="w-11/12 sm:w-5/6 mb-20">
          {prizeList.map((prize, index) => (
            <div
              className={`${prize.customColor} w-full flex border-solid border-white border-4 my-2 rounded-md p-2`}
            >
              <div className="w-2/5 flex items-center justify-center">
                <img src={prize.hImg} alt={prize.title} className="w-full" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base">{prize.title}</h3>
                <p className="text-sm">${prize.price}</p>
                <p className="text-sm">{prize.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-screen w-full flex flex-col items-center border-solid border-red-700 border-8 rounded-3xl mt-20 py-10">
        <h1 className="text-center">Prize</h1>
        <div
          id="prizeHolder"
          className="w-11/12 sm:w-5/6 flex-1 flex flex-col justify-center items-end h-3/4"
        >
          <div
            id="prizeInfo"
            className="flex-1 w-full bg-red-700 rounded-3xl px-2 py-4 sm:py-8 sm:px-5 flex justify-around items-center flex-col-reverse sm:flex-row"
          >
            {selectedPrize && (
              <>
                <div className="flex flex-col justify-center items-center sm:w-1/2 w-full">
                  <div className="text-white sm:text-left text-center">
                    <h2 className="text-2xl font-bold">
                      {selectedPrize.title}
                    </h2>
                    <p className="text-xl font-bold">${selectedPrize.price}</p>
                    <p>{selectedPrize.note}</p>
                  </div>
                  <div className="w-full">
                    <img
                      src={selectedPrize.housingImg}
                      alt={selectedPrize.title}
                      className="w-1/5"
                    />
                    <img
                      src={selectedPrize.housingImg}
                      alt={selectedPrize.title}
                      className="w-1/5"
                    />
                    <img
                      src={selectedPrize.housingImg}
                      alt={selectedPrize.title}
                      className="w-1/5"
                    />
                    <img
                      src={selectedPrize.housingImg}
                      alt={selectedPrize.title}
                      className="w-1/5"
                    />
                    <img
                      src={selectedPrize.housingImg}
                      alt={selectedPrize.title}
                      className="w-1/5"
                    />
                  </div>
                </div>

                <div className="w-3/4 sm:w-1/5 ">
                  <img
                    src={selectedPrize.vImg}
                    alt={selectedPrize.title}
                    className="w-full"
                  />
                </div>
              </>
            )}
          </div>
          <div
            id="prizeList"
            className="flex w-full justify-center mt-10 flex-wrap "
          >
            {prizeList.map((prize, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer w-1/5 min-w-28 ${prize.customColor} mx-1 rounded-xl  p-2`}
                onClick={() => secondOptionClick(prize)}
              >
                <div className="w-full text-center">
                  <img src={prize.vImg} alt={prize.title} className="w-1/2" />
                </div>
                <p className="text-center text-lg font-bold">{prize.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Prize;
