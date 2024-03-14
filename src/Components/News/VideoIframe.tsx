import React from "react";
import { Video } from "../../Data/Schema/videoSchema"; // Assuming you have updated the schema
import { dateFormat } from "./utils";

// Prop type adjusted to match the YouTubeVideo interface
export default function VideoIframe({ video }: { video: Video }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <a href={`/video/${video.id}`} className="no-underline">
          {/* Using iframe for YouTube video instead of img tag */}
          <iframe
            src={`${video.videoUrl}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </a>
        <div className="mx-auto my-1 red-background flex flex-col items-center justify-center gap-y-2 rounded-lg p-1.5 md:p-4 w-full shadow-xl ">
          <p className="text-wrap text-center text-base md:text-lg xl:text-xl m-0">
            {video.title}
          </p>
          <p className="text-sm md:text-base xl:text-lg m-0">
            {dateFormat(video.publishDate.toISOString())}
          </p>
        </div>
      </div>
    </div>
  );
}
