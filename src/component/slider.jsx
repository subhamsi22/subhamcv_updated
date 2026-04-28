import React, { useState, useEffect } from 'react';

const slideData = [
    {
        id: 1,
        title: "TubeViews",
        description: "A analytics tool for help youtubers to grow their channel.",
        image:"",
    },
    {
        id: 2,
        title: "School Management System",
        description: "A school management system for schools to manage their students, teachers, and staff.",
        color: "from-pink-500 to-rose-500",
    },
    {
        id: 3,
        title: "Digitel Risk",
        description: "A comprehensive risk management platform for digital businesses.",
        color: "from-green-500 to-teal-500",
    },
    {
        id: 4,
        title: "Auto Youtube Video Uploader",
        description: "auto upload youtube videos.",
        color: "from-yellow-400 to-orange-500",
    },
    {
        id: 5,
        title: "Trust point Tax Solution",
        description: "Tax Solution website ",
        color: "from-indigo-500 to-cyan-500",
    },
    {
        id: 6,
        title: "Myntra clone",
        description: "E-commerce website ",
        color: "from-indigo-500 to-cyan-500",
    }
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
    };

    // Automatically slide every 3 seconds, pause on hover
    useEffect(() => {
        if (isHovered) return;

        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, isHovered]);

    return (
        <div className='w-full py-16  flex flex-col items-center justify-center relative'>
            <div className="text-center mb-10 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">Featured Projects</h2>
                <p className="text-black max-w-lg mx-auto">A showcase of some of my recent work and creations.</p>
            </div>

            <div
                className="relative w-full max-w-5xl px-4 md:px-12 flex items-center justify-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Prev Button */}
                <button
                    onClick={prevSlide}
                    className='absolute left-2 md:left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100'
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Slides Container */}
                <div className="overflow-hidden w-full relative h-[350px] md:h-[450px] rounded-3xl shadow-2xl bg-zinc-900 border border-zinc-800">
                    <div
                        className="flex h-full transition-transform duration-700 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slideData.map((slide, index) => (
                            <div key={slide.id} className="min-w-full h-full flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>

                                {/* Abstract Shapes */}
                                <div className={`absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br ${slide.color} rounded-full blur-3xl opacity-30`}></div>
                                <div className={`absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr ${slide.color} rounded-full blur-3xl opacity-30`}></div>

                                {/* Content */}
                                <div className="relative z-10 text-center max-w-3xl flex flex-col items-center">
                                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                                        Project 0{index + 1}
                                    </span>
                                    <h3 className="text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                                        {slide.title}
                                    </h3>
                                    <p className="text-base md:text-xl text-zinc-200 leading-relaxed drop-shadow max-w-2xl mb-8">
                                        {slide.description}
                                    </p>
                                    <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all transform hover:scale-105 duration-200 shadow-xl">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className='absolute right-2 md:right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100'
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
                {slideData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full ${currentIndex === index
                            ? 'w-8 h-2.5 bg-white'
                            : 'w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
