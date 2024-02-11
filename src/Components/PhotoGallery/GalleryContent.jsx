import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import GalleryImage from "./GalleryImage";
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

  var photoIndex = 0;

  const getPhoto = () => {

    if (photos.length === 0) {
      return "https://placehold.co/600x400";
    }

    if (photoIndex >= photos.length) {
      photoIndex = 0;
    }
    return photos[photoIndex++].url;
  }

  return (
    
    <>
      <div className="md:block hidden container mx-auto md:px-5">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex flex-row">
              <div className="w-2/3 p-1 md:p-2">
                <GalleryImage url={getPhoto()}/>
              </div>
              <div className="flex flex-col w-1/3">
                <div className="w-full p-1 md:p-2">
                  <GalleryImage url={getPhoto()}/>
                </div>
                <div className="w-full p-1 md:p-2">
                  <GalleryImage url={getPhoto()}/>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-1/3 p-1 md:p-2">
                <GalleryImage url={getPhoto()}/>
              </div>
              <div className="w-2/3 p-1 md:p-2">
                <GalleryImage url={getPhoto()}/>
              </div>
            </div>
          </div>
        </div>

        <Carousel className=" mx-auto md:hidden pb-5">
          {photos.map((photo) => (
            <Carousel.Item key={photo.id}>
              <img
                className="w-full object-cover object-center"
                src={photo.url}
                alt="First slide"
                height="300px"
              />
            </Carousel.Item>
        
          ))}
        
      </Carousel>
    </>
      
    
  );
};

export default Gallery;
