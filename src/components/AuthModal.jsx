import { X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal() {
    const { isModalOpen, closeModal, activeTab, setActiveTab, login, register } = useAuth();

    // Login State
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Register State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [gsm, setGsm] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    if (!isModalOpen) return null;

    const handleLogin = (e) => {
        e.preventDefault();
        const result = login(loginEmail, loginPassword);
        if (!result.success) {
            setError(result.message);
        } else {
            setError('');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (regPassword !== confirmPassword) {
            setError('Şifreler uyuşmuyor.');
            return;
        }

        register({
            firstName,
            lastName,
            email: regEmail,
            gsm,
            password: regPassword
        });
        setError('');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closeModal}
            ></div>

            <div className="relative bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden animate-fade-in">

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => { setActiveTab('login'); setError(''); }}
                        className={`flex-1 py-4 text-sm font-bold tracking-wide transition-colors ${activeTab === 'login' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        GİRİŞ YAP
                    </button>
                    <button
                        onClick={() => { setActiveTab('register'); setError(''); }}
                        className={`flex-1 py-4 text-sm font-bold tracking-wide transition-colors ${activeTab === 'register' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        ÜYE OL
                    </button>
                </div>

                <div className="p-8">
                    {error && <div className="mb-4 bg-red-50 text-red-600 text-xs p-3 rounded">{error}</div>}

                    {activeTab === 'login' ? (
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="E-Posta"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Şifre"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="accent-green-600" /> Beni Hatırla
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="accent-green-600" defaultChecked /> Oturum Açık Kalsın
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors tracking-wide text-sm"
                            >
                                GİRİŞ YAP
                            </button>

                            <div className="text-center">
                                <a href="#" className="text-xs text-gray-400 hover:text-black underline">Şifrenizi mi unuttunuz?</a>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleRegister} className="space-y-3">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Adınız"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-1/2 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Soyadınız"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-1/2 border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="E-Posta"
                                value={regEmail}
                                onChange={(e) => setRegEmail(e.target.value)}
                                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="GSM"
                                value={gsm}
                                onChange={(e) => setGsm(e.target.value)}
                                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Şifre"
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Şifreyi Onayla"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50"
                                required
                            />

                            <div className="space-y-2 pt-2">
                                <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight">
                                    <input type="checkbox" className="mt-0.5 accent-green-600" />
                                    Kampanyalardan SMS ile haberdar olmak istiyorum.
                                </label>
                                <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight">
                                    <input type="checkbox" className="mt-0.5 accent-green-600" />
                                    Kampanyalardan E-posta ile haberdar olmak istiyorum.
                                </label>
                                <label className="flex items-start gap-2 cursor-pointer text-[10px] text-gray-500 leading-tight">
                                    <input type="checkbox" className="mt-0.5 accent-green-600" required />
                                    <span><a href="#" className="underline">Üyelik Sözleşmesi</a>'ni okudum, onaylıyorum.</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors tracking-wide text-sm mt-2"
                            >
                                ÜYE OL
                            </button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
}
