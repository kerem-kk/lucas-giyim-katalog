import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

export default function CategoryGrid({ items }) {
    return (
        <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={`/category/${slugify(item.label)}`}
                        className="relative group overflow-hidden rounded-sm cursor-pointer h-[400px] md:h-[500px] block"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-beige-btn/90 backdrop-blur-sm px-8 py-3 text-black font-serif tracking-widest text-sm md:text-base border border-white/50 hover:bg-white transition-all shadow-lg uppercase min-w-[160px] pointer-events-none">
                                {item.label}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
