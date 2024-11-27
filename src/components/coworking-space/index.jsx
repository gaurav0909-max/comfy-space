import React from 'react';
import {
    FaUsers,
    FaWifi,
    FaMapMarkerAlt,
    FaExpandArrowsAlt,
    FaPause
} from 'react-icons/fa';

const CoworkingSpace = () => {
    const spaceFeatures = [
        {
            icon: FaExpandArrowsAlt,
            label: "1000 ft²",
            description: "Spacious Workspace"
        },
        {
            icon: FaUsers,
            label: "80 Members",
            description: "Active Community"
        },
        {
            icon: FaWifi,
            label: "100 Mbps",
            description: "High-Speed Internet"
        }
    ];

    return (
        <div
            className="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out"
            style={{
                backgroundImage: 'radial-gradient(#8d448b 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                backgroundColor: '#fafafa'
            }}
        >
            <div className="container mx-auto px-4 py-16 max-w-[1234px]">

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side (Text and Details) */}
                    <div className="space-y-8">
                        {/* Title */}
                        <h2 className="text-[46px] leading-[65px] tracking-[-0.5px] font-normal text-[#0F2137] font-sans max-w-[478px]">
                            Some good place to where can build your startup business
                        </h2>

                        {/* Description */}
                        <p className="text-[16px] leading-[30px] text-[#687381] font-normal max-w-[90%]">
                            Coworking offers beautifully crafted workspaces where people can create, connect,
                            and grow their businesses at prime locations in multiple cities.
                        </p>

                        {/* Features Grid */}
                        <div className="flex justify-start items-start space-x-3">
                            {spaceFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-full sm:w-1/2 md:w-1/3 bg-[#fbffff] py-6 px-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out"
                                >
                                    <div className="flex flex-col items-start text-left space-y-4">
                                        {/* Dynamic Icon */}
                                        <feature.icon className="text-[#8d448b] w-10 h-9 mb-2" />

                                        {/* Feature Label */}
                                        <span className="text-xl font-semibold text-gray-800 font-montserrat">
                                            {feature.label}
                                        </span>

                                        {/* Feature Description */}
                                        <p className="text-gray-600 text-sm font-montserrat">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Right Side (Image) */}
                    <div className="relative group overflow-visible rounded-2xl shadow-xl">
                        <img
                            src="/Mask Group.jpg"
                            alt="Coworking Space"
                            className="w-full h-[640px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Absolute positioned chip */}
                        <div className="absolute top-10 left-[-70px] bg-[#8D448B] text-white text-sm font-semibold px-4 py-6 rounded-md flex items-center space-x-4">
                            {/* SVG Icon with progress indicator */}
                            <div className="flex flex-col items-center space-y-1">
                                <img
                                    src="/play.svg"
                                    alt="Pause Icon"
                                    className="w-10 h-10"
                                />
                            </div>

                            {/* Text lines */}
                            <div className="flex flex-col gap-4">
                                <p className=" w-[176px] font-dm-sans font-bold text-[18px] leading-none tracking-[-0.5px] text-white">
                                    Kin Coworking Space
                                </p>

                                <p className=" w-[173px] font-dm-sans font-medium text-[14px] leading-none tracking-[-0.5px] text-white opacity-60">
                                    442 Broadway, New York
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoworkingSpace;