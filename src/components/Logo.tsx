import React from 'react';
import LogoImage from "../assets/Logo.png";

const Logo: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={LogoImage} alt="Logo" className="w-40 md:w-60 h-auto" />
    </div>
  );
};

export default Logo;
