import React from 'react';
import {
  GalleryItemstyled,
  ImageGalleryImg,
} from 'components/ImageGalleryItem/ImageGalleryItemStyle';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <GalleryItemstyled>
      <ImageGalleryImg
        src={image.webformatURL}
        alt={image.tags}
        id={image.id}
        onClick={() => onClick(image.webformatURL)}
      />
    </GalleryItemstyled>
  );
};
