import React, { useState, useEffect } from 'react';
import logo from '../assets/Golden wolf logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
            AKASH M.
          </span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
