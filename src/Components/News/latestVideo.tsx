import React, { useState } from "react";
import VideoIframe from "./VideoIframe";
import { Video } from "../../Data/Schema/videoSchema"; // Adjust the path as necessary

export default function LatestVideo({ video }: { video: Video[] }) {
  const [activeVideo, setActiveVideo] = useState(video[0]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <VideoIframe video={activeVideo} />
      </div>
      <div className="col-span-1">
        {video.slice(0, 4).map((videoItem, index) => (
          <div
            key={index}
            className={`news-list summarize ${
              videoItem === activeVideo ? "activeLatestNews" : ""
            }`}
            onClick={() => setActiveVideo(videoItem)}
          >
            <span>
              <b>{videoItem.title}</b>
            </span>
            <p className="text-sm">{videoItem.publishDate.toUTCString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
