import { IoLocationSharp } from "react-icons/io5";
import DropdownWithLocationPin from "./dropdown-location";

const Card = () => {
    return (
        <div className="max-w-lg mx-auto bg-white bg-opacity-90 p-8 shadow-xl rounded-xl
                       transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            {/* Title */}
            <h2 className="font-dm-sans font-bold text-3xl leading-snug tracking-tight text-[#0F2137] mb-6">
                Coworking space that will feel like home.
            </h2>

            {/* Subtitle/Description */}
            <p className="font-dm-sans text-lg leading-relaxed text-[#0F2137] mb-8">
                Whether you’re an established enterprise or a growing startup, discover spaces that inspire the best work.
            </p>

            {/* Find Workplace Dropdown */}
            <div className="mb-6">
                <label htmlFor="workspace" className="block text-gray-600 font-medium mb-2">
                    Find Workplace
                </label>
                <DropdownWithLocationPin/>
            </div>

            {/* Subscribe Button */}
            <button className="w-full h-12 bg-[#8D448B] text-white rounded-lg text-lg font-medium hover:bg-[#7d2f74] 
                    focus:outline-none focus:ring-2 focus:ring-[#8D448B] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
                Subscribe
            </button>
        </div>
    );
};

export default Card;
