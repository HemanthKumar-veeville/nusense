import React from 'react';
import Logo from './Logo';
import ImageRotator from './ImageRotator';
import { Column01, Column02, Column03 } from '../assets/assets';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side with Logo */}
      <div className="w-full md:w-1/4 bg-gray-100 flex justify-center items-center">
        <Logo />
      </div>

      {/* Right side with 3 full-height vertical image rotators */}
      <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-4 justify-around bg-white h-full">
        <ImageRotator images={Column01} />
        <ImageRotator images={Column02} />
        <ImageRotator images={Column03} />
      </div>
    </div>
  );
};

export default Layout;
