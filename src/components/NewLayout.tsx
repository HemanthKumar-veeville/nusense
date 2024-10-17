import React, { useState, useEffect } from 'react';
import { Column04 } from '../assets/assets'; // Assuming Column04 contains your image URLs

const NewLayout: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Column04.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds for a slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {Column04.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Transition ${index}`}
          className={`absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out ${
            index === currentImageIndex
              ? 'opacity-100 filter-none scale-100 z-20' // Active image fully visible, no blur, normal size
              : 'opacity-0 filter-blur-md scale-110 z-10' // Previous image fades out, blurs, and scales up
          }`}
          style={{ transitionProperty: 'opacity, filter, transform' }} // Ensure all properties (opacity, filter, transform) transition
        />
      ))}
    </div>
  );
};

export default NewLayout;
