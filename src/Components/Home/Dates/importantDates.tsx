import DateBox from "./dateBox";
import { Row, Col } from "react-bootstrap";
import "./importantDate.css";

export default function ImportantDates(props: { dates: any }) {
  // Sorting the data received according to the date.
  const eventDates = props.dates.sort((a: any, b: any) => {
    return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
  });
  return (
    <>
    <div className="page-content">

      <h2>
        <strong>Important Dates (2024)</strong>
      </h2>
      <Row>
        {eventDates.map((date: any) => {
          let eventDateWhole: Date = new Date(date.eventDate),
            eventMonth: string = eventDateWhole.toLocaleString("en-US", {
              month: "long",
            }),
            eventDate: string = eventDateWhole.getUTCDate().toString();
            return (
              <Col md={2} index={date._id}>
              <DateBox
                eventDate={`${eventMonth} ${eventDate}`}
                eventTitle={date.eventTitle}
                eventDescription={date.eventDescription}
                />
            </Col>
          );
        })}
      </Row>
      {/* <div className="button pt-4 text-center md:mx-auto">
                  
                  <a
                    href={`/roadmap`}
                    rel="noreferrer"
                  >
                    <button className="font-bold ">
                      Check Our Roadmap 
                    </button>
                  </a>
                </div> */}
        </div>
    </>
  );
}
