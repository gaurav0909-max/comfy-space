import React from 'react';
import FeaturesGrid from './features-grid';
import HeroImage from './hero-image';


const CoworkingSpace = () => {
  return (
    <div
      className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: 'radial-gradient(#8d448b 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        backgroundColor: '#fafafa',
      }}
    >
      <div className="container mx-auto px-4 py-16 max-w-full lg:max-w-[1234px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Title and Features */}
          <div className="space-y-8">
            <h2 className="text-[36px] sm:text-[46px] leading-[45px] sm:leading-[65px] tracking-[-0.5px] font-normal text-[#0F2137] font-sans max-w-[478px]">
              Some good place to where can build your startup business
            </h2>
            <p className="text-[14px] sm:text-[16px] leading-[26px] sm:leading-[30px] text-[#687381] font-normal max-w-[90%]">
              Coworking offers beautifully crafted workspaces where people can
              create, connect, and grow their businesses at prime locations in
              multiple cities.
            </p>
            {/* Features Grid */}
            <FeaturesGrid />
          </div>

          {/* Right Side: Image */}
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default CoworkingSpace;