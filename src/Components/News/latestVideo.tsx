import React, { useState } from "react";
import VideoIframe from "./VideoIframe";
import { Video } from "../../Data/Schema/videoSchema"; // Adjust the path as necessary
import { Slide } from "react-awesome-reveal";

export default function LatestVideo({ video }: { video: Video[] }) {
  const [activeVideo, setActiveVideo] = useState(video[0]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <VideoIframe video={activeVideo} />
      </div>
      <div className="col-span-1">
        {video.map((videoItem, index) => (
          <Slide direction="right" triggerOnce key={index}>
            <div
              className={`news-list summarize hover:cursor-pointer ${
                videoItem === activeVideo ? "bg-my-red text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveVideo(videoItem)}
            >
              <span>
                <b>{videoItem.title}</b>
              </span>
              <p className="text-sm">{videoItem.publishDate.toUTCString()}</p>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}
