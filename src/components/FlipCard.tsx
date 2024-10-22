import React from "react";

interface FlipCardProps {
  index: number;
  image: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ index, image }) => {
  return (
    <img
      key={index}
      src={image}
      alt={`Image ${index}`}
      className="w-[90%] h-auto md:w-[95%] object-contain mx-auto rounded-2xl"
    />
  );
};

export default FlipCard;
