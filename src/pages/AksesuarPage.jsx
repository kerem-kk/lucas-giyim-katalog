import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AksesuarPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <div className="relative w-full h-[40vh] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-wide mb-4">
                        Aksesuar Koleksiyonu
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-light">
                        Stilinizi tamamlayan özel detaylar
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">

                <div className="max-w-3xl mx-auto text-center space-y-8">

                    {/* Description */}
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Şıklığı tamamlayan aksesuar koleksiyonumuz yakında burada olacak.
                            Kravat, kemer, kol düğmesi ve daha fazlası ile stilinize son dokunuşları yapın.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Premium kalitede, özenle seçilmiş aksesuar ürünlerimizle tanışmak için bizi takip etmeye devam edin.
                        </p>
                    </div>

                    {/* Decorative Divider */}
                    <div className="w-24 h-0.5 bg-gold-accent mx-auto my-8"></div>

                    {/* Back Button */}
                    <div className="pt-8">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
}
