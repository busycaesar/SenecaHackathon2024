import TestimonialSection from "./testimonialSection";
import { Testimonial } from "../../../Data/Schema/testimonialSchema";
import { Row, Col } from "react-bootstrap";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <>
      <h2>
        <strong>Testimonials</strong>
      </h2>
      <Row>
        {testimonials.map((testimonialItem, index) => (
          <Col key={index} sm={6}>
            <TestimonialSection testimonial={testimonialItem} />
          </Col>
        ))}
      </Row>
    </>
  );
}
