import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import GalleryCard from "./GalleryCard";
import { storage } from "../../model/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const listRef = ref(storage, "Senecahackathon2024");

      listAll(listRef)
        .then(async (res) => {
          const urls = await Promise.all(
            res.items.map((itemRef) => getDownloadURL(itemRef))
          );
          setPhotos(urls.map((url, index) => ({ id: index, url })));
          console.log(photos); // Log the updated state
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <Carousel>
        {photos.map((photo) => (
          <Carousel.Item key={photo.id}>
            <img
              className="d-block w-100"
              src={photo.url}
              alt={photo.title || "Image"}
            />
            <Carousel.Caption>
              {photo.title && <h3>{photo.title}</h3>}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
