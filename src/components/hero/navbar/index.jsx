import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#advertise", label: "Advertise" },
    { href: "#supports", label: "Supports" },
    { href: "#contact", label: "Contact" },
    { href: "#about-us", label: "About Us" }
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
          <nav className="hidden md:flex space-x-6 text-[#8D448B]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group cursor-pointer"
              >
                <span className="pb-1 transition-all duration-300 ease-in-out">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8D448B] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
          </nav>

          {/* Join Us Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-[#8D448B] text-white rounded-lg hover:bg-[#6D2C6D] transition-colors duration-300">
              Join Us Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              <CiMenuBurger size={40} className="text-[#8D448B]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay with animations */}
        <div
          className={`fixed inset-0 bg-white/50 backdrop-blur-lg md:hidden z-40 pt-20 px-6 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          {/* Mobile menu content */}
          <nav className={`flex flex-col space-y-4 bg-[#eae7fc] text-[#2d2f38] items-center rounded-xl z-50 transition-all duration-500 ease-in-out ${isMenuOpen ? 'transform opacity-100 translate-x-0' : 'transform opacity-0 translate-x-8'
            }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl relative group py-4 cursor-pointer"
                onClick={toggleMenu} // This closes the menu on link click
              >
                <span className="pb-1 transition-all px-4 bg-[#fefdec] duration-300 ease-in-out rounded-lg text-[#8D448B]">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8D448B] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
