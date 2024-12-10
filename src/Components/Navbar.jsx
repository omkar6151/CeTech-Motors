import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrollingDown(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b ${scrollingDown ? 'from-black to-black' : 'from-black to-transparent'} text-white p-4 transition-all duration-300`}>
      <div className={`container mx-auto flex justify-between items-center ${showDrawer ? 'lg:justify-around' : ''}`}>
        <div>
          <h1 className="text-xl font-bold">CeTech Motors</h1>
          <p className="text-sm">Engineered for Excellence</p>
        </div>
        {/* Navbar Elements for Desktop */}
        <ul className="hidden lg:flex space-x-8">
          <li><Link to="/" className= "hover:text-gray-400 text-lg">Home</Link></li>
          <li><a href="#about-us" className="hover:text-gray-400 text-lg">About Us</a></li>
          <li><a href="#products" className="hover:text-gray-400 text-lg">Products</a></li>
          <li><a href="#clients" className="hover:text-gray-400 text-lg">Clients</a></li>
          <li><Link to="/contact-us" className= "hover:text-gray-400 text-lg">Contact Us</Link></li>
        </ul>
        {/* Email and Social Icons for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <span>cetechmotors@gmail.com |</span>
          <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
        {/* Drawer Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleDrawer} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Drawer */}
      {showDrawer && (
        <div className="lg:hidden">
          <ul className="bg-black text-white py-2 px-4">
            <li className="py-1"><Link to="/" onClick={toggleDrawer}>Home</Link></li>
            <li className="py-1"><a href="#about-us" onClick={toggleDrawer}>About Us</a></li>
            <li className="py-1"><a href="#products" onClick={toggleDrawer}>Products</a></li>
            <li className="py-1"><a href="#clients" onClick={toggleDrawer}>Clients</a></li>
            <li className="py-1"><Link to="/contact-us" onClick={toggleDrawer}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
