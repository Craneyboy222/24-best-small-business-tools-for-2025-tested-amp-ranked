import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`gallery-image-${index}`} className="object-cover w-full h-full" />
      ))}
    </div>
  );
};

export default Gallery;
