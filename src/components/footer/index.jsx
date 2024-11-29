import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#0b1120] text-white py-6 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
                {/* Logo and Copyright Section */}
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <div className="text-[#00B4B7] font-semibold text-lg">StartupLanding</div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                    <a href="#" className="text-sm text-[#A0AEC0] hover:text-white mb-2 md:mb-0">Home</a>
                    <a href="#" className="text-sm text-[#A0AEC0] hover:text-white mb-2 md:mb-0">Advertise</a>
                    <a href="#" className="text-sm text-[#A0AEC0] hover:text-white mb-2 md:mb-0">Supports</a>
                    <a href="#" className="text-sm text-[#A0AEC0] hover:text-white mb-2 md:mb-0">FAQ</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
