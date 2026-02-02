import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
    const { favorites } = useAuth();

    const breadcrumbItems = [
        { label: "Ana Sayfa", path: "/" },
        { label: "Favorilerim", path: "/favorites" }
    ];

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="font-serif text-2xl font-bold mb-8">Favori Listem</h1>

            {favorites.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 animate-fade-in">
                    {favorites.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg text-center">
                    <Heart className="w-16 h-16 text-gray-300 mb-6" />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Favori listeniz henüz boş.</h3>
                    <p className="text-gray-500 mb-8 max-w-md">
                        Beğendiğiniz ürünleri kalp ikonuna tıklayarak favorilerinize ekleyebilirsiniz.
                    </p>
                    <Link
                        to="/"
                        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors uppercase font-bold text-sm tracking-wide"
                    >
                        Alışverişe Başla
                    </Link>
                </div>
            )}
        </div>
    );
}
