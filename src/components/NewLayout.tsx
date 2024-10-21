import React, { useState, useEffect } from 'react';
import { Column04, fonts } from '../assets/assets'; // Assuming Column04 contains your image URLs

interface TextProps {
  currentIndex: number;
  isVisible: boolean;
}

const Text: React.FC<TextProps> = ({ currentIndex, isVisible }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-[4000ms] ease-in-out z-30
      ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-4'} 
      will-change: opacity, transform // Hint to the browser for optimization
      `}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      <img
        src={fonts[currentIndex]} // Display image from fonts array
        alt={`Font Image ${currentIndex}`} // Ensure alt text is meaningful
        className="max-w-[80%] max-h-[80%] object-contain"
      />
    </div>
  );
};

const NewLayout: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Column04.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // 8 seconds for full image + text timeline

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // 1 second delay for text after the image

    const hideTextTimeout = setTimeout(() => {
      setShowText(false);
    }, 7000); // 6 seconds total (show text for 5 seconds)

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(hideTextTimeout);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {Column04.map((image, index) => (
        <div key={index} className="absolute w-full h-full">
          <img
            src={image}
            alt={`Transition ${index}`} // Ensure meaningful alt text
            className={`absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100 filter-none scale-100 z-20'
                : 'opacity-0 filter-blur-md scale-110 z-10'
            }`}
            style={{ transitionProperty: 'opacity, filter, transform' }}
          />
          {index === currentImageIndex && (
            <Text currentIndex={currentImageIndex} isVisible={showText} />
          )}
        </div>
      ))}
    </div>
  );
};

export default NewLayout;
