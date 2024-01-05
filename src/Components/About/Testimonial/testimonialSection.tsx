import { Testimonial } from "../../../Data/Schema/testimonialSchema";
import SampleImage from "../../../svgs/sampleAvatar.png";
import "../about.css";

export default function TestimonialSection({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div id="testimonial">
      <p>
        <span style={{ color: "red", fontWeight: "bolder" }}>"</span>
        {testimonial.review}
        <span style={{ color: "red", fontWeight: "bolder" }}>"</span>
      </p>
      <img src={SampleImage} alt="Headshot" />
      <p style={{ color: "red", margin: 0 }}>{testimonial.name}</p>
    </div>
  );
}
