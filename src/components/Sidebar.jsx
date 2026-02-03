import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

export default function Sidebar({ selectedCategory }) {

    // We compare active state by checking if the slug matches the normalized selectedCategory
    // selectedCategory passed from CategoryPage is the Display Name (e.g. "Takım Elbise")
    // But let's act robustly -> normalize both.
    const isActive = (name) => {
        return slugify(name) === slugify(selectedCategory);
    };

    const activeClass = "text-orange-600 font-bold";
    const inactiveClass = "text-gray-600 hover:text-black";

    const categories = [
        'Damatlık',
        'Takım Elbise',
        'Mont',
        'Ceket',
        'Aksesuar',
        'Pantolon',
        'Katalog'
    ];

    return (
        <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0 hidden md:block">
            <div className="border-r border-gray-100 pr-0 md:pr-4 h-full">
                <h3 className="font-serif font-bold text-lg mb-4">Kategoriler</h3>
                <ul className="space-y-1 text-sm">
                    {categories.map(cat => (
                        <li key={cat}>
                            <Link
                                to={`/category/${slugify(cat)}`}
                                className={`py-2 border-b border-gray-50 flex items-center justify-between cursor-pointer transition-colors ${isActive(cat) ? activeClass : inactiveClass}`}
                            >
                                <span>{cat}</span>
                                <ChevronRight className="w-4 h-4 text-gray-300" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
