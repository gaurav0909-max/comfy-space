import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const MobileMenu = ({ isMenuOpen, toggleMenu, navLinks }) => {
  return (
    <div
      className={`fixed inset-0 bg-white/50 backdrop-blur-lg md:hidden z-40 pt-20 px-6 transition-opacity duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-6 right-6 text-[#8D448B] focus:outline-none"
      >
        <MdOutlineCancel size={36} />
      </button>
      <nav
        className={`flex flex-col space-y-4 bg-[#eae7fc] text-[#2d2f38] items-center rounded-xl z-50 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'transform opacity-100 translate-x-0' : 'transform opacity-0 translate-x-8'
        }`}
      >
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
  );
};

export default MobileMenu;
