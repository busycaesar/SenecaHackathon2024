import React, { useState } from "react";
import VideoIframe from "./VideoIframe";
import { Video } from "../../Data/Schema/videoSchema"; // Adjust the path as necessary
import { Slide, Fade } from "react-awesome-reveal";
import { Row, Col } from "react-bootstrap";
import { dateFormat } from "./utils";
import Pagination from "./Pagination";

export default function LatestVideo({ video }: { video: Video[] }) {
  const [activeVideo, setActiveVideo] = useState(video[0]);

  const getNextPage = () => {
    // Add logic to get the next page of videos
  };
  const getPreviousPage = () => {
    // Add logic to get the previous page of videos
  };

  const getSelectedPage = (pageNumber: number) => {
    // Add logic to get the selected page of videos
  };

  return (
    <Row>
      <Col lg={8}>
        <Slide direction="left" triggerOnce>
          <VideoIframe video={activeVideo} />
        </Slide>
      </Col>
      <Col lg={4}>
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
              <h4 className="text-sm lg:text-base m-0">
                <b>{videoItem.title}</b>
              </h4>
              <p className="text-sm">
                {dateFormat(videoItem.publishDate.toUTCString())}
              </p>
            </div>
          </Slide>
        ))}
        <Fade triggerOnce>
          <Pagination
            numbers={8}
            getPreviousPage={getPreviousPage}
            getNextPage={getNextPage}
            getSelectedPage={getSelectedPage}
          />
        </Fade>
      </Col>
    </Row>
  );
}
