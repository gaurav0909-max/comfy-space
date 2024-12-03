import Card from "./card";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.jpg')" }} // Reference the image from the public folder
    >
      {/* Full-screen overlay */}
      <div className="absolute inset-0 bg-gray-700 opacity-20 z-0"></div> {/* Ensure the overlay is below other content */}

      {/* Navbar: Positioning and responsiveness */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start p-4 z-10">
        <Navbar />
      </div>

      {/* Card: Positioning and responsiveness */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 p-4">
        <Card />
      </div>
    </div>
  );
};

export default Hero;
