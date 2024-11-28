import React from "react";

const PricingToggle = ({ isMonthly, setIsMonthly }) => {
  return (
    <div className="flex items-center justify-center pt-4 pb-6">
      {/* Toggle container */}
      <div className="relative flex w-64 border-2 border-[#001f3d] rounded-md overflow-hidden">
        {/* Slider Background */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-white rounded-md transition-transform duration-300 ${
            isMonthly ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        {/* Monthly Plan Button */}
        <button
          className={`relative z-10 flex-1 py-2 text-sm font-medium transition-all duration-300 ${
            isMonthly ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly Plan
        </button>

        {/* Annual Plan Button */}
        <button
          className={`relative z-10 flex-1 py-2 text-sm font-medium transition-all duration-300 ${
            !isMonthly ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Annual Plan
        </button>
      </div>
    </div>
  );
};

export default PricingToggle;
