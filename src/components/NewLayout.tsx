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
    <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {Column04.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Transition ${index}`}
          className={`absolute w-full h-full object-cover transform transition-transform duration-1000 ease-in-out ${
            index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionDelay: '0.5s' }}
        />
      ))}
    </div>
  );
};

export default NewLayout;
