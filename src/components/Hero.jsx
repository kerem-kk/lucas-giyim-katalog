export default function Hero() {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop"
                alt="Suit Sartoria Collection"
                className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end items-center pb-12 md:pb-24">
                <h2 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center drop-shadow-lg px-4">
                    LUCAS <br className="md:hidden" />
                    <span className="text-2xl md:text-4xl block mt-2 md:mt-4 font-light italic">SONBAHAR/KIŞ KOLEKSİYONU</span>
                </h2>
            </div>
        </section>
    );
}
