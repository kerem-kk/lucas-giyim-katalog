import { useState, useEffect } from 'react';

export default function Hero() {
    // Array of slider images
    const sliderImages = [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality - change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [sliderImages.length]);

    // Handle manual navigation via indicator click
    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            {/* Slider Images */}
            {sliderImages.map((image, index) => (
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

            {/* Content Overlay - Text stays centered on top */}
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end items-center pb-20 md:pb-32 z-10 pointer-events-none">
                <h2 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center drop-shadow-lg px-4">
                    LUCAS <br className="md:hidden" />
                    <span className="text-2xl md:text-4xl block mt-2 md:mt-4 font-light italic">SONBAHAR/KIŞ KOLEKSİYONU</span>
                </h2>
            </div>

            {/* Bottom Navigation Indicators - Rectangular Bars */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {sliderImages.map((_, index) => (
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
