import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";
import RajeshProfile from "../assets/rajesh.jpg";

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md max-w-sm mx-auto border border-gray-200 md:ml-3">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={RajeshProfile}
            alt="Profile"
            className="rounded-full w-24 h-24 border-4 border-white"
          />
          <span className="absolute bottom-0 right-2 bg-green-500 rounded-full p-1">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.707a1 1 0 00-1.414-1.414L8 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {/* Name and Role */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Rajesh Vorkady
          </h2>
          <p className="text-sm text-gray-500">CEO</p>
        </div>

        {/* Stats */}
        <div className="flex justify-between w-full mt-6 px-6">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">824</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">977</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">1224</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-center text-gray-600 mt-4 px-4">
          Sometimes I see through the cracks in my head. Sometimes, I fall
          through them. Just like all of you.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-red-600 hover:text-red-500">
            <FaGooglePlusG size={24} />
          </a>
          <a href="#" className="text-red-400 hover:text-red-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
