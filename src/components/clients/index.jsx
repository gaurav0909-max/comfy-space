import React from 'react';
import { PiUserBold } from 'react-icons/pi';

const Clients = () => {
    // Placeholder client logos (you'd replace these with actual client logos)
    const clientLogos = [
        { id: 1, name: 'TechCorp', placeholder: '/dribble.png' },
        { id: 2, name: 'InnovateSolutions', placeholder: '/microsoft.png' },
        { id: 3, name: 'GlobalEnterprise', placeholder: '/paypal.png' },
        { id: 4, name: 'CreativeLabs', placeholder: '/google.png' },
        { id: 5, name: 'DigitalFrontiers', placeholder: '/uber.png' },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <div className="flex justify-center items-center mb-4">
                    <PiUserBold className="mr-3 text-[#8D448B]" size={32} />
                    <h2 className="text-3xl font-bold text-gray-800">
                        Meet Our Clients
                    </h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    We are proud to collaborate with innovative organizations that 
                    are driving change and pushing boundaries in their respective industries. 
                    Our partnerships are built on trust, mutual growth, and shared vision.
                </p>
            </div>

            {/* Client Logos Section */}
            <div className="flex flex-wrap justify-center gap-6">
                {clientLogos.map((client) => (
                    <div 
                        key={client.id} 
                        className="flex justify-center items-center p-4 bg-gray-200 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-32 h-32"
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <img 
                                src={client.placeholder} 
                                alt={`${client.name} logo`} 
                                className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
