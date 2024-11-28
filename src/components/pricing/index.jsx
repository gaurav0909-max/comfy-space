import React, { useState } from "react";
import PricingCard from "./pricing-card";
import PricingToggle from "./pricing-toggle";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true); // State to manage selected duration

  return (
    <div className="pricing-section w-full h-full bg-[#020718] px-4">
      {/* Top Section */}
      <div className="top-section flex flex-col justify-center items-center py-6 gap-3">
        <p className="text-white text-2xl md:text-3xl font-semibold leading-8 md:leading-10 text-center">
          Pricing Plan
        </p>
        <p className="text-white text-sm md:text-xl font-thin leading-5 text-center">
          What deal suits you perfectly
        </p>
      </div>

      {/* Toggle Section */}
      <PricingToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />

      {/* Cards Section */}
      <div className="w-full h-full flex flex-wrap justify-center items-center font-poppins gap-6 py-8">
        <PricingCard
          recommended={true}
          name="Family Pack"
          crossIcon={true}
          isMonthly={isMonthly}
        />
        <PricingCard
          recommended={false}
          name="Starter Pack"
          crossIcon={false}
          isMonthly={isMonthly}
        />
      </div>
    </div>
  );
};

export default Pricing;
