import { useState, useEffect } from 'react';

export default function Hero() {
    // Array of slider images
    const slides = [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
        "/slider/slider-2.jpg",
        "/slider/slider-3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality - change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Handle manual navigation via indicator click
    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            {/* Slider Images */}
            {slides.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Lucas Collection Slide ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            ))}


            {/* Static Logo Overlay */}
            <div className="absolute inset-0 flex justify-center items-end pb-8 md:pb-10 z-30 pointer-events-none">
                <img
                    src="/lucas-logo.jpg"
                    alt="LUCAS Official Logo"
                    className="w-72 md:w-96 h-auto invert brightness-200 mix-blend-screen"
                />
            </div>

            {/* Bottom Navigation Indicators - Rectangular Bars */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`h-1 md:h-1.5 rounded-sm transition-all duration-300 cursor-pointer ${index === currentIndex
                            ? 'w-10 md:w-12 bg-white'
                            : 'w-8 md:w-10 bg-white/50 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
