import { FaCheckCircle } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { MdCancel, MdOutlinePeople } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const PricingCard = ({ recommended, crossIcon, name, isMonthly }) => {
  return (
    <div className="max-w-sm w-full sm:w-[90%] md:w-[45%] xl:w-[30%] rounded-xl border
     border-slate-200 bg-white shadow-lg relative hover:opacity-100 opacity-75 transition-transform duration-500 
     ease-in">
      {/* Recommended Badge */}
      <div className="absolute top-[-10px] left-[50%] transform -translate-x-[50%]">
        <span className="bg-[#8D448B] text-white text-sm md:text-md px-3 py-1 rounded-md">
          {recommended ? "Recommended" : "Standard"}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Icons */}
        {name === "Family Pack" ? (
          <MdOutlinePeople className="w-16 h-16 ml-2" color="#8D448B" />
        ) : (
          <RxAvatar className="w-16 h-16 ml-2" color="#8D448B" />
        )}

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mt-4 text-gray-800 ml-3">{name}</h3>

        {/* Features */}
        <ul className="space-y-3 mt-4 text-sm md:text-base text-gray-600">
          <li className="flex items-start gap-3 px-4">
            <FaCheckCircle className="text-green-500 mr-2 w-5 h-5" />
            <p className="text-sm md:text-base leading-6">
              Ultimate access to all courses, exercises, and assessments
            </p>
          </li>
          <li className="flex items-start gap-3 px-4">
            <FaCheckCircle className="text-green-500 mr-2 w-5 h-5" />
            <p className="text-sm md:text-base leading-6">
              Free access for all types of exercise corrections with downloads
            </p>
          </li>
          <li className="flex items-start gap-3 px-4">
            <FaCheckCircle className="text-green-500 mr-2 w-5 h-5" />
            <p className="text-sm md:text-base leading-6">
              Total assessment corrections with free download access system
            </p>
          </li>
          <li className="flex items-start gap-3 px-4">
            {crossIcon ? (
              <MdCancel className="text-gray-500 w-6 h-6" />
            ) : (
              <FaCheckCircle className="text-green-500 w-5 h-5" />
            )}
            <p className="text-sm md:text-base leading-6">
              Unlimited download of courses on the mobile app contents
            </p>
          </li>
        </ul>
      </div>

      {/* Price and Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#F0F0F5] rounded-b-lg">
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-semibold text-gray-800">Starting from </span>
          <span className="text-xl md:text-2xl text-[#8D448B]">
            {isMonthly ? (name === "Family Pack" ? "$49.99/mo" : "$29.99/mo") : (name === "Family Pack" ? "$499.99/yr" : "$299.99/yr")}
          </span>
        </div>
        <button className="bg-[#8D448B] text-white px-4 py-2 mt-4 sm:mt-0 rounded-md flex items-center" aria-label='forward'>
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};


export default PricingCard;
