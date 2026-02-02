import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import FavoritesPage from './pages/FavoritesPage';
import AccountPage from './pages/AccountPage';
import AboutPage from './pages/AboutPage';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white font-sans">
          <Header isScrolled={isScrolled} />
          <AuthModal />

          <div style={{ height: isScrolled ? '160px' : '0px' }} className="transition-all duration-300"></div>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/category/:categoryName/:subCategory" element={<CategoryPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
            </Routes>
          </main>

          <Footer />
          <FloatingWidget />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
