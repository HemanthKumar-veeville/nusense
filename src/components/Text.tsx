import React, { useEffect } from 'react';
import { fonts } from '../assets/assets'; // Assuming Column04 contains your image URLs

interface TextProps {
  currentIndex: number;
}

const Text: React.FC<TextProps> = ({ currentIndex }) => {
  useEffect(() => {
    // No need to set interval here, as the currentIndex is coming as a prop
  }, [currentIndex]);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {fonts.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Transition ${index}`}
          className={`absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out ${
            index === currentIndex
              ? 'opacity-100 filter-none scale-100 z-20' // Active image fully visible, no blur, normal size
              : 'opacity-0 filter-blur-md scale-110 z-10' // Previous image fades out, blurs, and scales up
          }`}
          style={{ transitionProperty: 'opacity, filter, transform' }} // Ensure all properties (opacity, filter, transform) transition
        />
      ))}
    </div>
  );
};

export default Text;
