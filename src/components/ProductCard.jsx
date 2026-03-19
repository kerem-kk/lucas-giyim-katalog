import { Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { slugify } from '../utils/slugify';

export default function ProductCard({ id, image, title, price, category, slug }) {
    const { toggleFavorite, isFavorite } = useAuth();
    const isFav = isFavorite(id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite({ id, image, title, price, category });
    };

    const productUrl = `/category/${slugify(category)}/${slug || slugify(title)}/detay`;

    return (
        <Link to={productUrl} className="group cursor-pointer relative block">

            {/* Favorite Button */}
            <button
                onClick={handleFavoriteClick}
                className="absolute top-2 right-2 z-20 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
            >
                <Heart
                    className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'}`}
                />
            </button>

            <div className="relative overflow-hidden mb-3 aspect-[3/4]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick Action Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider hover:text-gold-accent transition-colors">
                        <Eye className="w-4 h-4" /> İncele
                    </span>
                </div>
            </div>

            <div className="text-center">
                <h3 className="font-sans text-sm font-medium text-gray-800 mb-1 group-hover:text-gold-accent transition-colors">{title}</h3>
            </div>
        </Link>
    );
}
