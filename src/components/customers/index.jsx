import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Customers = () => {
    const customers = [
        {
            image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Emily Chen",
            role: "Startup Founder",
            quote:
                "Our team's productivity skyrocketed after using this coworking space.",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Michael Rodriguez",
            role: "Freelance Designer",
            quote: "The collaborative environment is incredibly inspiring.",
        },
        {
            image: "https://images.unsplash.com/photo-1616776005756-4dca36124bf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sarah Kim",
            role: "Tech Entrepreneur",
            quote: "Perfect workspace that adapts to my evolving business needs.",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
            <div className="max-w-[1024px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="flex flex-col justify-center items-center w-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 max-w-md">
                            Happy  <span className="text-[#8D448B]">Customers</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                            Coworking offers beautifully crafted workspaces where people can create,
                            connect, and grow their businesses at prime locations in multiple cities.
                        </p>
                    </div>
                </motion.div>

                {/* Customer Cards */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                    {customers.map((customer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group w-full md:w-1/3"
                        >
                            {/* Decorative Shape */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#8D448B] group-hover:bg-[#c66fc3] transition-all duration-300"></div>

                            {/* Customer Info */}
                            <div className="flex items-center relative z-10 mb-4">
                                <img
                                    src={customer.image}
                                    alt={customer.name}
                                    className="w-24 h-24 rounded-full object-cover border-2 border-indigo-100"
                                />
                                <div className="px-5">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {customer.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{customer.role}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative text-gray-600 italic font-poppins">
                                <FaQuoteLeft className="absolute text-indigo-300 text-xl -top-2 left-0" />
                                <p className="ml-6 mr-6">{customer.quote}</p>
                                <FaQuoteRight className="absolute text-indigo-300 text-xl -top-2 right-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#learn-more"
                        className="inline-flex items-center px-6 py-3 bg-[#8D448B] text-white font-medium rounded-full hover:bg-[#c66fc3] transition duration-300"
                    >
                        Explore Spaces
                        <FaArrowRight className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Customers;
