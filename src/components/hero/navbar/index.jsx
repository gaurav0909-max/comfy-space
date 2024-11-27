// Navbar.tsx
const Navbar = () => {
    return (
        <div className="flex justify-center items-center">
            <header className="absolute top-0 w-[1350px] h-[50px] bg-transparent flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        {/* Logo image */}
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h1 className="text-[#02073E] font-semibold text-xl">comfy space</h1>
                </div>
                <nav className="flex space-x-6 text-[#02073E]">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#advertise" className="hover:underline">Advertise</a>
                    <a href="#supports" className="hover:underline">Supports</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                    <a href="#about-us" className="hover:underline">About Us</a>
                </nav>
                <button className="px-4 py-2 bg-[#8D448B] text-white rounded-lg">
                    Join Us Now
                </button>
            </header>
        </div>
    );
};

export default Navbar;
