import React from "react";
import { Video } from "../../Data/Schema/videoSchema"; // Assuming you have updated the schema

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
        <div className="mx-auto my-10 red-background flex flex-col items-center justify-center gap-y-2 rounded-lg mb-10 p-4 max-w-full">
          <span className="text-wrap text-center text-xl md:text-2xl">
            {video.title}
          </span>
          <p>{video.publishDate.toISOString()}</p>
        </div>
      </div>
    </div>
  );
}
