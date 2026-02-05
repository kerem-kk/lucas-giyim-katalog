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
    const [isAgreementModalOpen, setIsAgreementModalOpen] = useState(false);

    // Phone Number Formatter
    const formatPhoneNumber = (value) => {
        // Remove all non-digit characters
        const numbers = value.replace(/\D/g, '');

        // Limit to 10 digits
        const limited = numbers.slice(0, 10);

        // Apply formatting: (XXX) XXX XX XX
        if (limited.length <= 3) {
            return limited;
        } else if (limited.length <= 6) {
            return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
        } else if (limited.length <= 8) {
            return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)} ${limited.slice(6)}`;
        } else {
            return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)} ${limited.slice(6, 8)} ${limited.slice(8)}`;
        }
    };

    const handlePhoneChange = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setGsm(formatted);
    };

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
                                placeholder="(555) 555 55 55"
                                value={gsm}
                                onChange={handlePhoneChange}
                                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-green-600 transition-colors bg-gray-50/50 placeholder:text-gray-300"
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
                                    <input type="checkbox" className="mt-0.5 accent-green-600" required />
                                    <span>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.preventDefault(); setIsAgreementModalOpen(true); }}
                                            className="underline hover:text-black transition-colors"
                                        >
                                            Üyelik Sözleşmesi
                                        </button>'ni okudum, onaylıyorum.
                                    </span>
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

            {/* Membership Agreement Modal */}
            {isAgreementModalOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsAgreementModalOpen(false)}
                    ></div>

                    <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden animate-fade-in max-h-[85vh] flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                            <button
                                onClick={() => setIsAgreementModalOpen(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <h2 className="text-xl font-bold tracking-wide">KULLANIM KOŞULLARI VE GİZLİLİK POLİTİKASI</h2>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
                            <div>
                                <h3 className="font-bold text-base text-black mb-2">1. SİTENİN AMACI</h3>
                                <p>
                                    Kisve Lucas web sitesi (lucas.com.tr), ürünlerimizi sergilemek ve tanıtmak amacıyla oluşturulmuş dijital bir katalogdur.
                                    Sitemiz üzerinden şu an için doğrudan çevrimiçi satış (e-ticaret), ödeme alma veya kargo ile teslimat işlemi <strong>yapılmamaktadır</strong>.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-base text-black mb-2">2. KİŞİSEL VERİLERİN KORUNMASI (GİZLİLİK)</h3>
                                <p>
                                    Üyelik formunda paylaştığınız Ad, Soyad ve Telefon numarası bilgileriniz; yalnızca sizinle iletişim kurmak,
                                    ürünlerimiz hakkında bilgi vermek ve randevu oluşturmak amacıyla tarafımızca kayıt altına alınmaktadır.
                                    Bu bilgiler, yasal zorunluluklar haricinde kesinlikle üçüncü şahıslarla veya başka firmalarla <strong>paylaşılmaz</strong>.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-base text-black mb-2">3. FİKRİ MÜLKİYET</h3>
                                <p>
                                    Sitede yer alan tüm marka, logo, tasarım, metin ve ürün görselleri <strong>Kisve Lucas Tekstil</strong>'e aittir.
                                    İzinsiz kopyalanması, başka mecralarda ticari amaçla kullanılması yasaktır.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-base text-black mb-2">4. KABUL VE ONAY</h3>
                                <p>
                                    Üye ol butonuna tıklayan kullanıcılar, yukarıdaki maddeleri okuduğunu, anladığını ve iletişim bilgilerinin
                                    bu amaçla kullanılmasını kabul etmiş sayılır.
                                </p>
                            </div>
                        </div>

                        {/* Footer Button */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50">
                            <button
                                onClick={() => setIsAgreementModalOpen(false)}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors tracking-wide text-sm"
                            >
                                OKUDUM, ANLIYORUM
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
