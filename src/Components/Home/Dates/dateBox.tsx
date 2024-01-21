import React from "react";

export default function DateBox(props: {
  eventDate: string;
  eventTitle: string;
  eventDescription: string;
}) {
  return (
    <>
      <div className="event-title">{props.eventDate}</div>
      <h3 style={{ color: "#D92D27 ", fontSize: "large" }}>
        <strong>{props.eventTitle}</strong>
      </h3>
      <p>{props.eventDescription}</p>
    </>
  );
}
