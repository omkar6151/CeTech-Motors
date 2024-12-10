import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="../assets/production_id_4824781 (2160p).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Grayish Layer */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 lg:items-baseline lg:pl-20">
        <h1 className="text-6xl sm:text-8xl font-bold mb-4 opacity-80 text-center">Building a Smarter</h1>
        <h1 className="text-6xl sm:text-8xl font-bold mb-4 opacity-80 text-center">Journey.</h1>
        <p className="text-xl sm:text-3xl opacity-80 text-center">Future-focus, innovative and inspiring</p>

        {/* Arrow Container */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0">
          <div className="relative bg-black bg-opacity-40 rounded-full p-3 cursor-pointer hover:animate-bounce" style={{ width: '4rem', height: '4rem' }}>
            <FaArrowDown className="text-4xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
