import React from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    // Add your background image here
    backgroundImage: `url('https://images-ext-1.discordapp.net/external/0gJ9S2_6gWm0kynQif-SlfOQnIpafnQZRH5JBC5_dfY/%3Fsize%3D626%26ext%3Djpg/https/img.freepik.com/free-photo/complex-aerial-view-city_23-2148975284.jpg?width=860&height=573')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const overlayStyle = {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)', // Adjust the alpha value for the desired opacity
    pointerEvents: 'none', // Allow clicks to go through the overlay
  };

  return (
    <div className="relative">
      <div style={overlayStyle}></div> {/* Overlay for the background image */}
      <div className="flex flex-col items-start justify-around w-full p-20 bg-white h-1/2 md:flex-row" style={footerStyle}>
        {/* MRCC Section */}
        <div className="p-5" style={{zIndex: 2}}>
          <ul>
            <p className="pb-6 text-3xl font-bold text-white-800">
              <span className="text-white">MRCC</span>
            </p>
            <div className="flex gap-6 pb-5" >
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" style={{ color: 'white' }}/>
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: 'white' }}/>
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600"style={{ color: 'white' }} />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600"style={{ color: 'white' }} />
            </div>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="p-5" style={{zIndex: 2}}>
          <ul>
            <p className="pb-4 text-2xl font-bold text-white">Quick Links</p>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              <Link href='/#about'>About</Link>
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              <Link href='/project'>Project</Link>
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              <Link href='/resources'>Resources</Link>
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="p-5" style={{zIndex: 2}}>
          <ul>
            <p className="pb-4 text-2xl font-bold text-white">Contact Info</p>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              Riyadh, Saudi Arabia
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              Phone: 011-244-8491
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-blue-600">
              Email: AARS1@HOTMAIL.COM
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center bg-gray-800" style={{zIndex: 2}}>
        <h1 className="font-semibold text-white">
          © 2023 All rights reserved | Build by{" "}
          <span className="font-semibold cursor-pointer hover:text-blue-600">
            BS Team
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;