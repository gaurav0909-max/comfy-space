import { FaGreaterThan } from "react-icons/fa";
import Gallery from "../grid-gallery";
import { PiGreaterThan } from "react-icons/pi";

const Decoration = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Title */}
            <h2 className=" w-[131px] h-[40px] text-center text-[#8D448B] 
                            font-sans text-[18px] leading-[40px] capitalize">
                Working space
            </h2>

            {/* Description */}
            <p className="w-[504px] h-[50px] text-center text-[#0F2137] 
                         font-sans font-normal text-[30px] leading-[50px] tracking-[-0.5px]">
                Let’s meet our interior room decoration
            </p>

            {/* Gallery Component */}
            <div className=" mx-12 px-4 w-full">
                <Gallery />
            </div>
            <div className="mt-4 bg-[#EDF0F2] h-[60px] rounded-md flex items-center justify-center w-[82%] px-4">
                <p className="text-center text-lg">Explore More</p>
                <div className="flex items-center">
                    <PiGreaterThan width={7} height={7} className="ml-[10px] mt-1" />
                </div>
            </div>

        </div>
    );
};

export default Decoration;
