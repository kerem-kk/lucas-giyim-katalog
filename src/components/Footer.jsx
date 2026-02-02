import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-6">
            <div className="container mx-auto px-4">

                {/* Main 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 pb-12 border-b border-gray-800 max-w-4xl mx-auto">

                    {/* Left Side: Contact */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-bold tracking-wide text-white mb-6">BİZE ULAŞIN</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>0(232) 441 15 82</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>kisve@kisve.com.tr</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>Akdeniz, Mimar Kemalettin Cd., 35210 Konak/İzmir</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side: Instagram (Prominent) */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-bold tracking-wide text-white mb-6">TAKİP EDİN</h3>
                        <a
                            href="https://www.instagram.com/lucas_giyim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="border-2 border-white/20 rounded-lg p-6 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                                        <Instagram className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Instagram'da Bizi Takip Edin</p>
                                        <p className="text-white font-semibold text-lg">@lucas_giyim</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-gray-600 tracking-wider">
                        © 2026 LUCAS. Tüm hakları saklıdır.
                    </p>
                </div>

            </div>
        </footer>
    );
}
