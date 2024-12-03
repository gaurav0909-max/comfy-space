import { GalleryImages } from "../../data/gallery-images";
export default function Gallery() {

    return (
        <div className="container mx-auto px-5 py-10 lg:px-24 lg:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {GalleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group 
                        max-w-[650px] max-h-[300px] w-full h-full"
                    >
                        <img
                            alt={image.alt}
                            src={image.src}
                            className="block w-full h-full object-cover transition-transform 
                            duration-300 ease-in-out group-hover:scale-105"
                        />

                        {/* Overlay with uppercase text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 
                        group-hover:opacity-90 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                            <span className="text-[#f7f7f7] text-2xl font-bold uppercase opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 ease-in-out">
                                {image.alt}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
