"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfilePopup from "./ProfilePopup";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 ${
          isScrolled ? "floating-navbar" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* <a href="#home" className="text-2xl font-bold">Portfolio</a> */}
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={toggleProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
            >
              Profile
            </button>
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000319] bg-opacity-95 mt-4 rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
              <button 
                onClick={() => {
                  toggleProfile();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
              >
                Profile
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
      
      {isProfileOpen && <ProfilePopup onClose={toggleProfile} />}
    </>
  );
};

export default Navbar;