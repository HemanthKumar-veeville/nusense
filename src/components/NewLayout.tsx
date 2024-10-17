import React, { useState, useEffect } from 'react';
import { Column04 } from '../assets/assets'; // Assuming Column04 contains your image URLs

const NewLayout: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Column04.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {Column04.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Transition ${index}`}
          className={`absolute w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
            index === currentImageIndex
              ? 'translate-x-0 z-20' // Current image stays in place
              : index === (currentImageIndex - 1 + Column04.length) % Column04.length
              ? 'translate-x-0 z-10' // Previous image stays in place until fully covered
              : 'translate-x-full z-0' // Hide other images
          }`}
        />
      ))}
    </div>
  );
};

export default NewLayout;
