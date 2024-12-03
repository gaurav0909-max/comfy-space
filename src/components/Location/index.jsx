import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

// Coordinates for India
const indiaCoordinates = { lat: 3.5937, lng: -30.9629 };

const LocationCard = () => {
    const globeRef = useRef();

    useEffect(() => {
        if (globeRef.current) {
            // Set the globe view to India initially (zoom in)
            globeRef.current.pointOfView(indiaCoordinates, 2000); // Adjust the zoom speed and target point
        }
    }, []);

    return (
        <div className="w-full h-full bg-[#d6d9df] p-8">
            <div className="flex flex-col md:flex-row bg-[#d6d9df] bg-opacity-70 backdrop-blur-3xl shadow-xl rounded-lg 
                 overflow-hidden max-w-4xl mx-auto p-6 border border-white/20 border-blue-800">
                {/* Left Section: Map */}
                <div className="w-full md:w-1/2 bg-transparent flex items-center justify-center p-4 relative rounded-lg 
                     overflow-hidden">
                    <Globe
                        ref={globeRef}
                        globeImageUrl="https://plus.unsplash.com/premium_photo-1712729851260-a1a88224ac36?q=80&w=1932&auto=format&
                        fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        arcsData={[]}
                        width={300}
                        height={300}
                        labelsData={[]}
                        hexBinPointsData={[]}
                        backgroundColor="#d6d9df"
                        atmosphereColor="yellow"
                        pointsData={[
                            {
                                lat: indiaCoordinates.lat,
                                lng: indiaCoordinates.lng,
                                size: 0.5, 
                            },
                        ]}
                        pointRadius={0.5} // Adjusted radius for better visibility
                        pointLabel="India" // Label for the highlighted point
                        onGlobeReady={() => {
                            globeRef.current.pointOfView(indiaCoordinates, 2000);
                        }}
                    />
                </div>

                {/* Right Section: Title and Description */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800 leading-tight">
                        Feels Like Home
                    </h2>
                    <p className="text-xl text-gray-700">
                        Whether you’re an established enterprise or a growing startup, discover spaces that inspire the best work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
