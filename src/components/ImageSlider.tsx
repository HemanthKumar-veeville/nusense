import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard"; // Importing the FlipCard component

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomInterval = Math.random() * 5000 + 2000; // Random interval between 2s and 5s
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, randomInterval); // Randomize the transition interval

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [images.length, currentIndex]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden">
        {/* Use the FlipCard component to display the current image */}
        <FlipCard index={currentIndex} image={images[currentIndex]} />
      </div>

      {/* Round indicators for the current image */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              currentIndex === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
