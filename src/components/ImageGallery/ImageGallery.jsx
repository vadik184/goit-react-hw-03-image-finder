import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from 'components/ImageGallery/ImageGalleryStyle';
export const ImageGallery = () => {
  return (
    <GalleryList class="gallery">
      <ImageGalleryItem />
    </GalleryList>
  );
};
