import DateBox from "./dateBox";
import React from "react";
import "./importantDate.css";

export default function ImportantDates(props: { dates: any }) {
  // Sorting the data received according to the date.
  const eventDates = props.dates.sort((a: any, b: any) => {
    return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
  });

  return (
    <section className="py-20 lg:py-40 bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-6xl sm:text-7xl xl:text-8xl font-bold text-white mb-10 text-center">
          Important Dates (2024)
        </h2>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4">
          {eventDates.map((date: any) => {
            let eventDateWhole = new Date(date.eventDate),
              eventMonth = eventDateWhole.toLocaleString("en-US", {
                month: "long",
              }),
              eventDate = eventDateWhole.getUTCDate().toString();
            return (
              <div key={date._id} className="md:w-1/5 w-full inline-block h-full mb-auto">
                <DateBox
                  eventDate={`${eventMonth} ${eventDate}`}
                  eventTitle={date.eventTitle}
                  eventDescription={date.eventDescription}
                />
              </div>
            );
          })}
        </div>
        <div className="button pt-4 text-center md:mx-auto hover:scale-125 transition-all duration-150 ease-in-out hover:cursor-pointer">
          <a href={`/roadmap`} rel="noreferrer">
            <button className="font-bold ">Check Our Roadmap</button>
          </a>
        </div>
      </div>
    </section>
  );
}
