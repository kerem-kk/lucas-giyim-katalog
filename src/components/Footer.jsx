import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">

                    {/* Column 1: Kurumsal */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 tracking-wide">KURUMSAL</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Mağazalarımız</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><span className="text-gray-400">0(232) 441 15 82</span></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gizlilik ve Güvenlik Politikası</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Hesap İşlemleri */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 tracking-wide">HESAP İŞLEMLERİ</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Hesabım</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Siparişlerim</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kolay İade</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Satış Öncesi */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 tracking-wide">SATIŞ ÖNCESİ</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Ödeme Seçenekleri</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Teslimat Seçenekleri</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mesafeli Satış Sözleşmesi</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Satış Sonrası */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 tracking-wide">SATIŞ SONRASI</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Sipariş Takibi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">İade & İptal İşlemleri</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cayma Hakkı</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section: Social & Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gold-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-gold-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="https://www.instagram.com/lucas_giyim/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-accent transition-colors text-white">
                            <Instagram className="w-5 h-5" />
                            <span className="text-sm font-medium">@lucas_giyim</span>
                        </a>
                        <a href="#" className="hover:text-gold-accent transition-colors"><Youtube className="w-5 h-5" /></a>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-auto">
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="E-Bültene Kaydol"
                                className="bg-transparent border-b border-gray-600 py-2 px-2 text-sm focus:outline-none focus:border-gold-accent w-full md:w-64"
                            />
                            <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-sm ml-2 transition-colors">
                                <Mail className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-[10px] text-gray-600 tracking-wider">
                        © 2026 LUCAS. TÜM HAKLARI SAKLIDIR.
                    </div>

                </div>

            </div>
        </footer>
    );
}
