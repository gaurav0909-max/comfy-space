import { IoLocationSharp } from "react-icons/io5";

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
                <div className="relative">
                    <select
                        id="workspace"
                        className="w-full h-12 bg-white text-gray-700 border-[1px] border-gray-300 rounded-lg
                                   focus:ring-2 focus:ring-[#8D448B] focus:border-[#8D448B] pl-12 pr-4
                                   appearance-none cursor-pointer transition-all duration-300 ease-in-out outline-none
                                   focus:shadow-md focus:rounded-lg"
                    >
                        <option className="px-4 py-3 rounded-md font-medium">Chicago, New York</option>
                        <option className="px-4 py-3 rounded-md font-medium">Los Angeles</option>
                        <option className="px-4 py-3 rounded-md font-medium">San Francisco</option>
                    </select>

                    {/* Location Pin Icon */}
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                        <IoLocationSharp className="h-5 w-5" />
                    </span>
                </div>
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
