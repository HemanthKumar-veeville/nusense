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
      <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-4 justify-around bg-gray-100 h-full px-12">
        <ImageRotator images={Column01} direction="bottom-to-top" />
        <ImageRotator images={Column02} direction="top-to-bottom" />
        <ImageRotator images={Column03} direction="bottom-to-top" />
      </div>
    </div>
  );
};

export default Layout;
