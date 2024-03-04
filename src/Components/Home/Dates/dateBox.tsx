import React from "react";

export default function DateBox(props: {
  eventDate: string;
  eventTitle: string;
  eventDescription: string;
}) {
  return (
    <>
      <div className="event-title">{props.eventDate}</div>
      <h3 style={{ color: "#fff", fontSize: "large" }}>
        <strong>{props.eventTitle}</strong>
      </h3>
      <p className="text-white">{props.eventDescription}</p>
    </>
  );
}
