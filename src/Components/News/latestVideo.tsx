import React, { useState } from "react";
import VideoIframe from "./VideoIframe";
import { Video } from "../../Data/Schema/videoSchema"; // Adjust the path as necessary
import { Slide, Fade } from "react-awesome-reveal";
import { Row, Col } from "react-bootstrap";
import { dateFormat } from "./utils";
import Pagination from "./Pagination";

export default function LatestVideo({ video }: { video: Video[] }) {
  const [activeVideo, setActiveVideo] = useState(video[0]);
  const [startingVideo, setStartingVideo] = useState(0);
  const maxPage = Math.ceil(video.length / 4);

  const getNextPage = () => {
    if (startingVideo < video.length - 4) {
      setStartingVideo(startingVideo + 4);
    }
  };
  const getPreviousPage = () => {
    if (startingVideo > 0) {
      setStartingVideo(startingVideo - 4);
    }
  };

  const getSelectedPage = (pageNumber: number) => {
    setStartingVideo(pageNumber * 4);
  };

  return (
    <Row>
      <Col lg={8}>
        <Slide direction="left" triggerOnce>
          <VideoIframe video={activeVideo} />
        </Slide>
      </Col>
      <Col lg={4}>
        {video
          .slice(startingVideo, startingVideo + 4)
          .map((videoItem, index) => (
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
        {video.length > 4 && (
          <Fade triggerOnce>
            <Pagination
              numbers={maxPage}
              getPreviousPage={getPreviousPage}
              getNextPage={getNextPage}
              getSelectedPage={getSelectedPage}
            />
          </Fade>
        )}
      </Col>
    </Row>
  );
}
