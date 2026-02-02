import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
    return (
        <nav className="flex items-center text-xs text-gray-400 mb-6 font-light tracking-wide">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && <ChevronRight className="w-3 h-3 mx-2" />}
                    {index === items.length - 1 ? (
                        <span className="text-black font-medium">{item.label}</span>
                    ) : (
                        <Link to={item.path} className="hover:text-black transition-colors">{item.label}</Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
