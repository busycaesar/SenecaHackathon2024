import { Row, Col } from "react-bootstrap";
import NewsOnPhoto from "./newsOnPhoto";
import { News } from "../../Data/Schema/newsSchema";
import { useState } from "react";
import { dateFormat } from "./utils";
import { Slide } from "react-awesome-reveal";

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
            <Slide direction="right" triggerOnce key={index}>
              <div
                className={`news-list summarize hover:cursor-pointer ${
                  newsItem === activeLatestNews
                    ? "bg-my-red text-white"
                    : "bg-gray-200"
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
            </Slide>
          ))}
        </Col>
      </Row>
    </>
  );
}
