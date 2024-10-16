import React from 'react';

interface ImageRotatorProps {
  images: string[];
}

const ImageRotator: React.FC<ImageRotatorProps> = ({ images }) => {
  return (
    <div className="relative overflow-hidden h-full flex items-center">
      <div className="w-full h-full flex flex-col gap-10 animate-slide">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-[100px] h-auto md:w-[150px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
