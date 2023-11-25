import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from 'components/ImageGallery/ImageGalleryStyle';
export const ImageGallery = ({ images, openModal }) => {
  return (
    <GalleryList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={openModal} />
      ))}
    </GalleryList>
  );
};
