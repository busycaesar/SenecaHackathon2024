import DateBox from "./dateBox";
import { Row, Col } from "react-bootstrap";
import "./importantDate.css";

export default function ImportantDates(props: { dates: any }) {
  // Sorting the data received according to the date.
  const eventDates = props.dates.sort((a: any, b: any) => {
    return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
  });
  return (
    <section className="py-20 lg:py-40 bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h2 className="text-6xl sm:text-7xl xl:text-8xl font-heading font-semibold text-white mb-10">
            Important Dates (2024)
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
          <div className="button pt-4 text-center md:mx-auto hover:scale-125 transition-all duration-150 ease-in-out hover:cursor-pointer">
            <a href={`/roadmap`} rel="noreferrer">
              <button className="font-bold ">Check Our Roadmap</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
