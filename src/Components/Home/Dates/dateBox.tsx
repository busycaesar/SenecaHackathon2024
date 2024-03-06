import React from "react";

export default function DateBox(props: {
  eventDate: string;
  eventTitle: string;
  eventDescription: string;
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="inline-block bg-my-red p-3 rounded-lg text-white mb-2">
          {props.eventDate}
        </div>
        <div className="">
          <h3
            style={{ color: "#fff", fontSize: "large" }}
            className="font-bold"
          >
            {props.eventTitle}
          </h3>
        </div>

        <p className="text-white">{props.eventDescription}</p>
      </div>
    </>
  );
}
