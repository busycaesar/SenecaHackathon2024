import { Row, Col } from "react-bootstrap";
import NewsOnPhoto from "./newsOnPhoto";
import { News } from "../../Data/Schema/newsSchema";
import { useState } from "react";
import { dateFormat } from "./utils";

export default function LatestNews({ news }: { news: News[] }) {
  const [activeLatestNews, setActiveLatestNews] = useState(news[0]);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <NewsOnPhoto news={activeLatestNews} />
      </div>
      <div className="col-span-1">
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
      </div>
    </div>
  );
}
