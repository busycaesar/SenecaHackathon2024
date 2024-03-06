import React from "react";
import items from '../Data/JSONData/roadMap'

function Roadmap() {
  

  return (
    <div>
      {/* Desktop view */}
      <div className="hidden lg:inline">
        <ol className="items-center sm:flex overflow-x-scroll list-none">
          {items.map((item, index) => {
            return (
              <li className="relative mb-6 sm:mb-0">
                <div className="h-60 w-80 text-center relative">
                  {index % 2 !== 0 && (
                    <>
                      <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-2 w-full">
                        {item.info && <p className="text-sm">{item.info}</p>}
                        <h1 className="text-xl font-bold">{item.title}</h1>
                      </div>
                    </>
                  )}
                  {index % 2 === 0 && (
                    <>
                      <p className="text-lg text-center w-80 font-bold">
                        {item.cardTitle}
                      </p>
                      <div className="h-4/5 mx-auto">
                        <img
                          src={item.media.source.horizontalUrl}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="hidden sm:flex w-full bg-red-700 h-0.5 0"></div>
                  <div className="z-10 w-5 h-5 bg-red-700 rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-200 shrink-0"></div>
                  <div className="hidden sm:flex w-full bg-red-700 h-0.5 0"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-60 w-80 text-center">
                  {index % 2 === 0 && (
                    <>
                      <div className="flex justify-center flex-col w-80 ">
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        {item.info && <p className="text-sm">{item.info}</p>}
                      </div>
                    </>
                  )}
                  {index % 2 !== 0 && (
                    <>
                      <div className="h-4/5 mx-auto flex items-center justify-center w-80">
                        <img
                          src={item.media.source.horizontalUrl}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                      <p className="text-lg text-center w-80 font-bold">
                        {item.cardTitle}
                      </p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {/* Small screen view */}
      <div className="lg:hidden w-full">
        <ol className="items-center overflow-x-scroll list-none">
          {items.map((item, index) => {
            return (
              <li className="relative flex">
                <div className="h-60 w-2/5 text-center relative flex flex-col items-center justify-center">
                  {index % 2 !== 0 && (
                    <>
                      <div>
                        <h1 className="text-lg mx-0.5 font-bold">
                          {item.title}
                        </h1>
                        {item.info && <p className="text-sm">{item.info}</p>}
                      </div>
                    </>
                  )}
                  {index % 2 === 0 && (
                    <>
                      <div className="h-2/5">
                        <img
                          src={item.media.source.url}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                      <p className="text-base text-center font-bold">
                        {item.cardTitle}
                      </p>
                    </>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <div className=" h-full bg-red-700 w-0.5 0"></div>
                  <div className="z-10 w-5 h-5 bg-red-700 rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-200 shrink-0"></div>
                  <div className=" h-full bg-red-700 w-0.5 0"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-60 w-2/5 text-center flex flex-col items-center justify-center">
                  {index % 2 === 0 && (
                    <>
                      <div>
                        <h1 className="text-lg mx-0.5 font-bold">
                          {item.title}
                        </h1>
                        {item.info && <p className="text-sm">{item.info}</p>}
                      </div>
                    </>
                  )}
                  {index % 2 !== 0 && (
                    <>
                      <div className="h-2/5">
                        <img
                          src={item.media.source.url}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                      <p className="text-base text-center font-bold">
                        {item.cardTitle}
                      </p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Roadmap;
