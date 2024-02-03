import React from "react";

const GalleryCard = (props) => {
  return (
    <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={props.url}
    />
  );
};


export default GalleryCard;