import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {/* Background Image */}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9BAVm2KL-myJ2efR5aFSxbbp0b5WUhPdPg&s"
                alt="Tree Dasher Shoe"
                className="absolute inset-0 w-full h-full object-cover brightness-90"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
                <p className="text-yellow-400 text-sm tracking-widest uppercase">
                    Introducing the latest in running technology
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold mt-4 text-yellow-500">
                    TREE DASHER
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-100">
                    Street-smart style that goes for miles.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                        Shop Men
                    </button>
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                        Shop Women
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
