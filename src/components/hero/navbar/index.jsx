import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import DesktopNavbar from './desktop-navbar';
import MobileMenu from './mobile-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#locations", label: "Advertise" },
    { href: "#workspaces", label: "Supports" },
    { href: "#blog", label: "Contact" },
    { href: "#about-us", label: "About Us" },
    { href: "#membership", label: "Membership" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-[1350px] mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-[#8D448B] font-semibold text-xl">Comfy Space</h1>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavbar navLinks={navLinks} />

          {/* Join Us Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-[#8D448B] text-white rounded-lg hover:bg-[#6D2C6D] transition-colors duration-300">
              Join Us Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <CiMenuBurger size={40} className="text-[#8D448B]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          navLinks={navLinks}
        />
      </header>
    </div>
  );
};

export default Navbar;

