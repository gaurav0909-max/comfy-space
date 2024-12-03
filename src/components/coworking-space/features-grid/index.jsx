import React from 'react';
import { FaUsers, FaWifi, FaExpandArrowsAlt } from 'react-icons/fa';

const spaceFeatures = [
  {
    icon: FaExpandArrowsAlt,
    label: '1000 ft²',
    description: 'Spacious Workspace',
  },
  {
    icon: FaUsers,
    label: '80 Members',
    description: 'Active Community',
  },
  {
    icon: FaWifi,
    label: '100 Mbps',
    description: 'High-Speed Internet',
  },
];

const FeaturesGrid = () => {
  return (
    <div className="flex flex-wrap justify-start items-start gap-4 sm:gap-6 md:gap-8">
      {spaceFeatures.map((feature, index) => (
        <div
          key={index}
          className="flex-none w-full sm:w-1/2 lg:w-1/3 bg-[#fbffff] py-6 px-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out"
        >
          <div className="flex flex-col items-start text-left space-y-4">
            <feature.icon className="text-[#8d448b] w-10 h-9 mb-2" />
            <span className="text-xl font-semibold text-gray-800 font-montserrat">
              {feature.label}
            </span>
            <p className="text-gray-600 text-sm font-montserrat">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
