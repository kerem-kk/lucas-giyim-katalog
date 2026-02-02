import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Mail, Phone } from 'lucide-react';

export default function AccountPage() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!currentUser) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <p>Görüntülenecek hesap bilgisi bulunamadı. Lütfen giriş yapınız.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 text-center">
                    <h1 className="text-2xl font-serif font-bold text-gray-900">Hesap Bilgilerim</h1>
                </div>

                <div className="p-8 space-y-6">
                    {/* Name & Surname */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ad</label>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                                <User className="w-4 h-4 text-gray-400" />
                                <span>{currentUser.firstName}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Soyad</label>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                                <span className="w-4"></span> {/* Spacer for alignment */}
                                <span>{currentUser.lastName}</span>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">E-posta</label>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{currentUser.email}</span>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Telefon</label>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{currentUser.phone || '-'}</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleLogout}
                            className="w-full py-3 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-2 group"
                        >
                            <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Oturumu Kapat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
