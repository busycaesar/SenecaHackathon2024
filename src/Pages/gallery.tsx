// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import ImageGallery from "../Components/PhotoGallery/ImageGallery";

export default function Gallery() {
  return (
    <>
      <div className="bg-gray-900 -mx-20  -mt-8 -mb-20 p-8 ">
        <div className="font-semibold pb-4 text-center text-white text-3xl md:text-5xl">
          Captured Moments of Hackathon
        </div>

        <ImageGallery/>
      </div>
    </>
  );
}
