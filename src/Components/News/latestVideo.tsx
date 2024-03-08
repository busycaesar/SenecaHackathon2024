import { Row, Col } from "react-bootstrap";
import VideoIframe from "./VideoIframe";
import { Video } from "../../Data/Schema/videoSchema";
import { useState } from "react";
import { dateFormat } from "./utils";

export default function LatestVideo({ video }: { video: Video[] }) {
  const [activeVideo, setLastestVideo] = useState(video[0]);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
      </div>
      <div className="col-span-1">
        {video.slice(0, 4).map((newsItem, index) => (
          <div
            key={index}
            className={`news-list summarize ${
              newsItem === activeVideo ? "activeLatestNews" : ""
            }`}
            onClick={() => setLastestVideo(newsItem)}
          >
            <span>
              <b>{newsItem.title}</b>
            </span>
            <p className="text-sm">
              {dateFormat(newsItem.publishDate)} by {newsItem.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

//<VideoIframe video={} />
//