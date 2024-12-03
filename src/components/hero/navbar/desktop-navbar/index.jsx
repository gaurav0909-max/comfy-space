import React from 'react';

const DesktopNavbar = ({ navLinks }) => {
  return (
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
  );
};

export default DesktopNavbar;
