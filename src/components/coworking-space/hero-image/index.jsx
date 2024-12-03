import React from 'react';

const HeroImage = () => {
  return (
    <div className="relative group overflow-visible rounded-2xl shadow-xl">
      <img
        src="/Mask Group.jpg"
        alt="Coworking Space"
        className="w-full h-[480px] sm:h-[640px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-[-20px] left-[20px] md:top-10 md:left-[-70px] bg-[#8D448B] text-white text-sm font-semibold px-4 py-6 rounded-md flex items-center space-x-4">
        <div className="flex flex-col items-center space-y-1">
          <img
            src="/play.svg"
            alt="Pause Icon"
            className="w-10 h-10"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-[176px] font-dm-sans font-bold text-[18px] leading-none tracking-[-0.5px] text-white">
            Kin Coworking Space
          </p>
          <p className="w-[173px] font-dm-sans font-medium text-[14px] leading-none tracking-[-0.5px] text-white opacity-60">
            442 Broadway, New York
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
