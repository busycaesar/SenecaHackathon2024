import { Row, Col } from "react-bootstrap";
import NewsOnPhoto from "./newsOnPhoto";
import { News } from "../../Data/Schema/newsSchema";
import { useState } from "react";
import { dateFormat } from "./utils";

export default function LatestNews({ news }: { news: News[] }) {
  const [activeLatestNews, setActiveLatestNews] = useState(news[0]);
  return (
    <>
      <Row>
        <Col md={8}>
          <NewsOnPhoto news={activeLatestNews} />
        </Col>
        <Col md={4}>
          {news.slice(0, 4).map((newsItem, index) => (
            <div
              key={index}
              className={`news-list summarize ${
                newsItem === activeLatestNews ? "activeLatestNews" : ""
              }`}
              onClick={() => setActiveLatestNews(newsItem)}
            >
              <span>
                <b>{newsItem.title}</b>
              </span>
              <p className="text-sm">
                {dateFormat(newsItem.creationDate)} by {newsItem.author}
              </p>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}
