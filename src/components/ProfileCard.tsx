import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import RajeshProfile from "../assets/rajesh.jpg";
import { FaXTwitter } from "react-icons/fa6";

interface ProfileCardProps {
  isMobile: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ isMobile }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md max-w-sm mx-auto border border-gray-200 md:ml-3">
      <div
        className={`flex ${
          isMobile ? "items-center" : "flex-col items-center"
        }`}
      >
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={RajeshProfile}
            alt="Profile"
            className="rounded-xl w-24 h-24 border-4 border-white"
          />
        </div>
        <div className="flex flex-col w-full max-w-52">
          {/* Name and Role */}
          <div className={`text-center mt-4 ${isMobile ? "ml-4" : ""}`}>
            <h2 className="text-2xl font-semibold text-gray-900">
              Rajesh Vorkady
            </h2>
            {/* Bio - Only for desktop */}
            {!isMobile && (
              <p className="text-sm text-gray-600 mt-4">
                Sometimes I see through the cracks in my head. Sometimes, I fall
                through them. Just like all of you.
              </p>
            )}
          </div>

          {/* Social Links */}
          <div
            className={`flex mt-6 ${
              isMobile ? "ml-auto space-x-2" : "space-x-4"
            }`}
          >
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <FaXTwitter size={24} />
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
    </div>
  );
};

export default ProfileCard;
