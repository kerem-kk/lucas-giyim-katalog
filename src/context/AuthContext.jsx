import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'

    // Load data from LocalStorage on mount
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const storedSession = JSON.parse(localStorage.getItem('currentUser'));
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        setUsers(storedUsers);
        setFavorites(storedFavorites);
        if (storedSession) {
            setCurrentUser(storedSession);
        }
    }, []);

    // Save favorites to LocalStorage whenever they change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const register = (userData) => {
        const newUser = { ...userData, id: Date.now() };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Auto login after register
        login(userData.email, userData.password);
    };

    const login = (email, password) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            setIsModalOpen(false);
            return { success: true };
        }
        return { success: false, message: 'E-posta veya şifre hatalı.' };
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    const openModal = (tab = 'login') => {
        setActiveTab(tab);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleFavorite = (product) => {
        if (!currentUser) {
            openModal('login');
            return;
        }

        const isFav = favorites.some(fav => fav.id === product.id);
        let newFavs;
        if (isFav) {
            newFavs = favorites.filter(fav => fav.id !== product.id);
        } else {
            newFavs = [...favorites, product];
        }
        setFavorites(newFavs);
    };

    const isFavorite = (productId) => {
        return favorites.some(fav => fav.id === productId);
    };

    const value = {
        currentUser,
        users, // Exposed for debugging or admin check if needed
        isModalOpen,
        activeTab,
        favorites,
        login,
        register,
        logout,
        openModal,
        closeModal,
        setActiveTab,
        toggleFavorite,
        isFavorite
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
