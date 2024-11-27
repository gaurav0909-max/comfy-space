import Card from "./card";
import Navbar from "./navbar";

const Hero = () => {
    return (
        <div className="relative w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/BG.jpg')" }} // Reference the image from the public folder
        >
            {/* Full screen container */}
            <div className="absolute inset-0 bg-gray-700 opacity-10"></div> {/* Optional: To add a dark overlay for better visibility of text */}
            
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                <Navbar />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                <Card />
            </div>
        </div>
    );
};

export default Hero;
