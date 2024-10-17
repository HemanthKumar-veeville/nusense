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
    <div className="relative w-screen h-screen bg-black flex items-center justify-center">
      {Column04.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Transition ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Optional stealth-like effect overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default NewLayout;
