import { Search, User, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { slugify } from '../utils/slugify';

export default function Header({ isScrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, openModal } = useAuth();
    const location = useLocation();

    // Helper to determine if a menu item is active
    const isActive = (item) => {
        const slug = slugify(item);
        const path = `/category/${slug}`;
        return location.pathname === path;
    };

    // Styling Classes
    const activeClass = "text-gold-accent";
    const inactiveClass = "hover:text-gold-accent";

    return (
        <header
            className={`w-full bg-white z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 shadow-md' : 'relative shadow-sm'}`}
        >
            {/* Upper Header */}
            <div className={`container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4 md:py-6'}`}>

                {/* Mobile Menu Button */}
                <button className="md:hidden order-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Logo */}
                <div className="text-center md:text-left order-2 md:order-1 flex-grow md:flex-grow-0 w-full md:w-auto flex justify-center md:justify-start">
                    <Link to="/" className="flex items-center gap-3 cursor-pointer">
                        <img
                            src="/logo.png"
                            alt="LUCAS Icon"
                            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8 md:h-9' : 'h-10 md:h-12'}`}
                        />
                        <span className={`font-serif font-bold tracking-tight text-black leading-none pt-1 transition-all duration-300 ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                            LUCAS
                        </span>
                    </Link>
                </div>

                {/* Search */}
                <div className="w-full order-4 md:order-2 md:max-w-xl relative group mt-2 md:mt-0">
                    <input
                        type="text"
                        placeholder="Spor ayakkabı"
                        className={`w-full border border-gray-200 rounded-lg pl-4 pr-10 text-sm focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent transition-all bg-gray-50/30 placeholder:text-gray-400 font-light ${isScrolled ? 'py-1.5' : 'py-2.5'}`}
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-gold-accent transition-colors" />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 md:gap-6 order-3 md:order-3 ml-auto md:ml-0">

                    {currentUser ? (
                        <Link to="/account" className="hidden md:flex flex-col items-center group cursor-pointer">
                            <User className="w-5 h-5 text-gray-700 group-hover:text-gold-accent transition-colors" strokeWidth={1.5} />
                            <span className={`text-[10px] mt-1 text-gray-500 group-hover:text-gold-accent ${isScrolled ? 'hidden' : 'block'}`}>
                                {currentUser.firstName}
                            </span>
                        </Link>
                    ) : (
                        <div
                            className="hidden md:flex flex-col items-center group cursor-pointer"
                            onClick={() => openModal()}
                        >
                            <User className="w-5 h-5 text-gray-700 group-hover:text-gold-accent transition-colors" strokeWidth={1.5} />
                            <span className={`text-[10px] mt-1 text-gray-500 group-hover:text-gold-accent ${isScrolled ? 'hidden' : 'block'}`}>
                                Giriş Yap
                            </span>
                        </div>
                    )}


                    <div className="hidden md:flex flex-col items-center group cursor-pointer">
                        {/* Link to Favorites Page if logged in, else open modal */}
                        {currentUser ? (
                            <Link to="/favorites" className="flex flex-col items-center">
                                <Star className="w-5 h-5 text-gray-700 group-hover:text-gold-accent transition-colors" strokeWidth={1.5} />
                                <span className={`text-[10px] mt-1 text-gray-500 group-hover:text-gold-accent ${isScrolled ? 'hidden' : 'block'}`}>Favoriler</span>
                            </Link>
                        ) : (
                            <div
                                className="flex flex-col items-center"
                                onClick={() => openModal()}
                            >
                                <Star className="w-5 h-5 text-gray-700 group-hover:text-gold-accent transition-colors" strokeWidth={1.5} />
                                <span className={`text-[10px] mt-1 text-gray-500 group-hover:text-gold-accent ${isScrolled ? 'hidden' : 'block'}`}>Favoriler</span>
                            </div>
                        )}
                    </div>

                    <Link to="/hakkimizda" className="hidden md:flex items-center">
                        <span className="text-sm font-medium text-gray-700 hover:text-gold-accent transition-colors tracking-wide">
                            HAKKIMIZDA
                        </span>
                    </Link>

                </div>
            </div>

            {/* Toptan Text - Hide on Scroll */}
            <div className={`hidden md:flex justify-end container mx-auto px-4 -mt-2 mb-2 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden mb-0' : 'h-auto opacity-100'}`}>
                <span className="text-[10px] text-gray-400 tracking-wider">SATIŞLARIMIZ TOPTANDIR</span>
            </div>

            {/* Navigation */}
            <nav className={`md:block border-t border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 overflow-hidden'}`}>
                <ul className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8 text-sm font-medium text-gray-800">
                    {['DAMATLIK', 'TAKIM ELBİSE', 'MONT', 'CEKET', 'AKSESUAR', 'PANTOLON', 'KATALOG'].map((item) => (
                        <li key={item} className="w-full md:w-auto text-center border-b border-gray-50 md:border-none">
                            <Link
                                to={`/category/${slugify(item)}`}
                                className={`transition-colors block ${isScrolled ? 'py-2 ' : 'py-3 md:py-4'} ${isActive(item) ? activeClass : inactiveClass}`}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
