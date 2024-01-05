import { Row, Col } from "react-bootstrap";
import NewsOnPhoto from "./newsOnPhoto";
import { News } from "../../Data/Schema/newsSchema";
import { useState } from "react";
import { dateFormat } from "./utils";

export default function LatestNews({ news }: { news: News[] }) {
  const [activeLatestNews, setActiveLatestNews] = useState(news[0]);
  return (
    <Row style={{ marginBottom: "1.5em" }}>
      <Col lg={7}>
        <NewsOnPhoto news={activeLatestNews} />
      </Col>
      <Col lg={5}>
        {news.map((newsItem) => (
          <>
            <div
              className={`news-list summarize ${
                newsItem === activeLatestNews && "activeLatestNews"
              }`}
              onClick={() => {
                setActiveLatestNews(newsItem);
              }}
            >
              <p>
                <strong>{newsItem.title}</strong>
              </p>
              <p>
                {dateFormat(newsItem.creationDate)} by {newsItem.author}
              </p>
            </div>
            <hr />
          </>
        ))}
      </Col>
    </Row>
  );
}
