import React, { useState } from "react";
import VideoIframe from "./VideoIframe";
import { Video } from "../../Data/Schema/videoSchema"; // Adjust the path as necessary
import { Slide } from "react-awesome-reveal";
import { Row, Col } from "react-bootstrap";
import { dateFormat } from "./utils";

export default function LatestVideo({ video }: { video: Video[] }) {
  const [activeVideo, setActiveVideo] = useState(video[0]);

  return (
    <Row>
      <Col md={8}>
        <VideoIframe video={activeVideo} />
      </Col>
      <Col md={4}>
        {video.map((videoItem, index) => (
          <Slide direction="right" triggerOnce key={index}>
            <div
              className={`news-list summarize hover:cursor-pointer ${
                videoItem === activeVideo
                  ? "bg-my-red text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveVideo(videoItem)}
            >
              <span>
                <b>{videoItem.title}</b>
              </span>
              <p className="text-sm">
                {dateFormat(videoItem.publishDate.toUTCString())}
              </p>
            </div>
          </Slide>
        ))}
      </Col>
    </Row>
  );
}
