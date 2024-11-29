import React from "react";

const Subscription = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-[#0b1120]
     text-white font-poppins space-y-2 sm:items-center sm:text-center sm:px-6 sm:w-full">
            <h2 className="text-[24px] md:text-[36px] font-normal leading-[50px] text-center 
      tracking-[-0.5px] max-w-[340px] sm:text-left sm:w-full px-4 md:px-0">
                Subscribe to get best offers.
            </h2>

            <p className="text-[12px] md:text-[14px] leading-[20px] md:leading-[50px] sm:text-center
       tracking-[-0.5px] opacity-60 pt-[-10px] text-left sm:w-full px-10 md:px-0">
                By subscribing with your mail, you will agree with terms
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center justify-start sm:w-full px-8 md:px-0">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 text-sm w-[280px] md:w-[300px] bg-[#1e293b] text-white 
          rounded-md placeholder-gray-400 focus:outline-none"
                />
                <button className="px-6 py-3 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 w-full md:w-fit">
                    Subscribe us
                </button>
            </div>
        </div>
    );
};

export default Subscription;
