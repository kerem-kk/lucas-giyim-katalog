import { Maximize2 } from 'lucide-react';

export default function StoreExperience() {
    return (
        <section className="container mx-auto px-4 pb-12">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-1/2 h-64 md:h-96 group overflow-hidden cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
                        alt="Store Interior 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-5 h-5 text-gray-800" />
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 h-64 md:h-96 group overflow-hidden cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop"
                        alt="Store Interior 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-5 h-5 text-gray-800" />
                    </div>
                </div>
            </div>
        </section>
    );
}
