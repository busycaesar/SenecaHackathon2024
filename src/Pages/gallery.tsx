import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GalleryContent from "../Components/PhotoGallery/GalleryContent";
export default function Gallery() {
  return (
    <>
      <h3 className="font-semibold md:px-4 md:pb-5">Photos</h3>
      <div className="md:block hidden container mx-auto md:px-5">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex flex-row">
            <div className="w-2/3 p-1 md:p-2">
              <GalleryContent />
            </div>
            <div className="flex flex-col w-1/3">
              <div className="w-full p-1 md:p-2">
                <GalleryContent />
              </div>
              <div className="w-full p-1 md:p-2">
                <GalleryContent />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/3 p-1 md:p-2">
              <GalleryContent />
            </div>
            <div className="w-2/3 p-1 md:p-2">
              <GalleryContent />
            </div>
          </div>
        </div>
      </div>

      <Carousel className=" mx-auto md:hidden pb-5">
        <Carousel.Item>
          <img
            className="w-full object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="w-full object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>

      <h3 className="font-semibold md:px-4 md:pt-10 md:pb-5">Videos</h3>

      {/* max-w-[900px] */}
      <div className="mx-auto md:px-4 flex flex-row flex-wrap">
        <div className="aspect-video w-full">
          <iframe
            className=" h-full w-full"
            src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
            width="100%"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-row flex-wrap w-full">
          <div className="aspect-video w-1/2 pr-[2px]">
            <iframe
              className=" h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4uD7pRyIkygJ-_tM&amp;controls=0"
              width="100%"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video w-1/2 pl-[2px]">
            <iframe
              className=" h-full w-full"
              src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
              width="100%"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>

  
  );
}
