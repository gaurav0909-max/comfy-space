import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CustomerCard = ({ customer, index }) => {
    return (
        <motion.div
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
    );
};

export default CustomerCard;
