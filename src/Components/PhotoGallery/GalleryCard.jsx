import React from "react";

const GalleryCard = ({ photo }) => {
  return (
    <div className="card">
      <img src={photo.url} alt={photo.title || "Image"} />
      <div className="card-body">{photo.title && <h3>{photo.title}</h3>}</div>
    </div>
  );
};


export default GalleryCard;