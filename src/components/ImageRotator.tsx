import React from 'react';

interface ImageRotatorProps {
  images: string[];
  direction: 'top-to-bottom' | 'bottom-to-top'; // New prop to control direction
}

const ImageRotator: React.FC<ImageRotatorProps> = ({ images, direction }) => {
  return (
    <div className="relative overflow-hidden h-full flex items-center">
      <div
        className={`w-full h-full flex flex-col gap-10 ${
          direction === 'bottom-to-top' ? 'animate-slide-up' : 'animate-slide-down'
        }`}
      >
        {/* Duplicate the image list for seamless looping */}
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-[100px] h-auto md:w-[95%] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
