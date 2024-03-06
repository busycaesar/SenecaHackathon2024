import { Row, Col } from "react-bootstrap";
import NewsThumbnail from "./newsThumbnail";
import { News } from "../../Data/Schema/newsSchema";

export default function CategoryNews({
  categoryTitle,
  news,
}: {
  categoryTitle: string;
  news: News[];
}) {
  return (
    <div id="category-news">
      <h2>
        <strong>{categoryTitle}</strong>
      </h2>
      <hr />
      <Row>
        {news.map((newsItem) => (
          <>
            <Col md={3}>
              <NewsThumbnail news={newsItem} />
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
}
