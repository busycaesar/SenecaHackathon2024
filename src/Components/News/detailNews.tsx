import { Row, Col } from "react-bootstrap";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import "./news.css";
import { News } from "../../Data/Schema/newsSchema";

export default function DetailNews({ newsItem }: { newsItem: News }) {
  return (
    <Row>
      <Col md={5} className="mb-4">
        <h1 style={{ color: "red", margin: "1em 0" }}>
          <strong>{newsItem.title}</strong>
        </h1>
        <p>Written by {newsItem.author}</p>
        <div className="red-background curved-border">
          <SocialMediaIcons />
        </div>
      </Col>
      <Col md={7}>
        <img src={newsItem.photo} alt="Sample" style={{ width: "75%" }} />
        <p>
          <span style={{ fontSize: "xxx-large", fontWeight: "700" }}>
            {newsItem.body.charAt(0)}
          </span>
          {newsItem.body.slice(1)}
        </p>
      </Col>
    </Row>
  );
}
