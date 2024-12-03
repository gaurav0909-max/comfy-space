import Gallery from "../grid-gallery";
import { PiGreaterThan } from "react-icons/pi";

const Decoration = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Title */}
            <h2 className="text-center text-[#8D448B] font-sans text-[18px] leading-[40px] capitalize w-full sm:w-[131px]">
                Working space
            </h2>

            {/* Description */}
            <p className="text-center text-[#0F2137] font-sans font-normal text-[30px] leading-[50px] tracking-[-0.5px] 
                sm:w-[504px] sm:h-[50px] sm:text-[30px] sm:leading-[50px] w-full px-4">
                Let’s meet our interior room decoration
            </p>

            {/* Gallery Component */}
            <div className="mx-auto w-full sm:w-[90%] lg:w-[80%] px-4">
                <Gallery />
            </div>
            <div className="mt-4 bg-[#EDF0F2] h-[60px] rounded-md flex items-center justify-center w-[75%] md:w-[80%] lg:w-[67%] px-4">
                <p className="text-center text-lg">Explore More</p>
                <div className="flex items-center">
                    <PiGreaterThan width={7} height={7} className="ml-[10px] mt-1" />
                </div>
            </div>

        </div>
    );
};

export default Decoration;
