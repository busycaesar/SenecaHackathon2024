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
        <Col lg={8}>
          <Slide direction="left" triggerOnce>
            <NewsOnPhoto news={activeLatestNews} />
          </Slide>
        </Col>
        <Col lg={4}>
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
                <h4 className="text-sm lg:text-base m-0">
                  <b>{newsItem.title}</b>
                </h4>
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
