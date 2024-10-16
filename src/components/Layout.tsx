import React from 'react';
import Logo from './Logo';
import ImageRotator from './ImageRotator';
import { Column01, Column02, Column03 } from '../assets/assets';

const Layout: React.FC = () => {
  // Combine all images into one array for mobile
  const combinedImages = [...Column01, ...Column02, ...Column03];

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Mobile View: Logo on top and single image rotator */}
      <div className="w-full flex justify-center items-center p-4 bg-gray-100 md:hidden">
        <Logo />
      </div>

      <div className="w-full flex justify-center items-center flex-grow md:hidden">
        <ImageRotator images={combinedImages} direction="bottom-to-top" />
      </div>

      {/* Desktop View: Logo on the left and 3 image rotators */}
      <div className="hidden md:flex w-full md:w-1/4 bg-gray-100 justify-center items-center">
        <Logo />
      </div>

      <div className="hidden md:flex w-full md:w-3/4 gap-4 justify-around bg-gray-100 h-full px-12">
        <ImageRotator images={Column01} direction="bottom-to-top" />
        <ImageRotator images={Column02} direction="top-to-bottom" />
        <ImageRotator images={Column03} direction="bottom-to-top" />
      </div>
    </div>
  );
};

export default Layout;
