import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Images from "../../Data/JSONData/gallery.json";

export default function ImageGallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div className="container mx-auto pt-2 py-5 md:px-9 px-8 lg:pt-24">
        <div className="-m-1 flex flex-wrap">
          {Images.map((image, index:any) => (
            <div
              key={index}
              
              className="lg:w-1/3 md:w-1/2 p-1 md:p-2 cursor-pointer overflow-hidden bg-cover rounded-lg"
             
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg  object-cover object-center hover:shadow-xl md:hover:scale-110 transition-all duration-400 ease-in-out "
                src={image.src}
                height={image.height}
                width={image.width}
                onClick={() => setIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container mx-auto pt-2 py-5 md:px-9 px-8 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-1">
          {Images.map((image, index) => (
            <div
              key={index}
  
              className="lg:w-1/3 md:w-1/2 p-1 md:p-2 cursor-pointer overflow-hidden bg-cover rounded-lg"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg  object-cover object-center hover:shadow-xl md:hover:scale-110 transition-all duration-400 ease-in-out "
                src={image.src}
                height={image.height}
                width={image.width}
                onClick={() => setIndex(index)}
              />
            </div>
          ))}
        </div>
      </div> */}

      <Lightbox
        index={index}
        slides={Images}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Zoom]}
        animation={{ zoom: 500 }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 0,
          borderRadius: 4,
          padding: 4,
          gap: 16,
          showToggle: false,
        }}
        zoom={{
          maxZoomPixelRatio: 1,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: false,
        }}
      />
    </>
  );
}
