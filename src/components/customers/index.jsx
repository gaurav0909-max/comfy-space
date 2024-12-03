import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CustomerCard from "./customer-card";
import { customers } from "../../data/customers";

const Customers = () => {

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
                            Happy <span className="text-[#8D448B]">Customers</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                            Coworking offers beautifully crafted workspaces where people
                            can create, connect, and grow their businesses at prime locations
                            in multiple cities.
                        </p>
                    </div>
                </motion.div>

                {/* Customer Cards */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                    {customers.map((customer, index) => (
                        <CustomerCard key={index} customer={customer} index={index} />
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
