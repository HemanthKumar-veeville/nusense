import React from 'react';
// import FlipCard from "./FlipCard"
import ImageSlider from './ImageSlider';
interface ImageRotatorProps {
  images: Object[];
  direction: 'top-to-bottom' | 'bottom-to-top'; // New prop to control direction
}

const ImageRotator: React.FC<ImageRotatorProps> = ({ images, direction }) => {
  return (
    <div className="relative overflow-hidden h-full flex items-center justify-center bg-gray-100">
      <div
        className={`w-full h-full flex flex-col gap-10 ${
          direction === 'bottom-to-top' ? 'animate-slide-up' : 'animate-slide-down'
        } mx-auto`}
      >
        {/* Duplicate the image list for seamless looping */}
        {images.concat(images).map((image) => (
        //  <FlipCard index={index} image={image} />
        <ImageSlider images={Object.values(image)}/>
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
