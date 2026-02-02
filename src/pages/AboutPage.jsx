import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* 2-Column Split Layout */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8 md:pr-8">

                        {/* Title */}
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                            Hakkımızda
                        </h1>

                        {/* Body Text */}
                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed text-justify">
                                1992 yılında, 50 metrekarelik mütevazı bir üretim alanında başlayan yolculuğumuz; kaliteye, emeğe ve sürekliliğe olan inancımız sayesinde bugün 5.000 metrekarelik modern üretim tesisimize ulaşmıştır. Kurulduğumuz günden bu yana takım elbise, pantolon, mont ve kaban üretiminde uzmanlaşarak, erkek giyiminde güvenilir bir marka olmayı başardık.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-justify">
                                İlk günden itibaren benimsediğimiz istikrarlı büyüme anlayışı, bizi yalnızca yurt içinde değil, yurt dışında da bayilik ağına sahip, sektörde söz sahibi bir konuma taşımıştır. Geleneksel terzilik birikimini, çağdaş tasarım ve üretim teknikleriyle birleştirerek; şıklığı, konforu ve kaliteyi bir arada sunan koleksiyonlar üretmekteyiz.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-justify">
                                Üretimin her aşamasında titizlikle hareket eden firmamız, kumaş seçiminden dikişe, kalıptan son kontrole kadar yüksek kalite standartlarını esas alır. Müşteri memnuniyetini temel değerimiz kabul ederek, uzun ömürlü, zamansız ve güçlü tasarımlar ortaya koymayı hedefleriz.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-justify">
                                Bugün geldiğimiz noktada, geçmişimizden aldığımız güçle geleceğe bakıyor; sürekli gelişen, yenilenen ve büyüyen bir marka olma yolunda emin adımlarla ilerlemeye devam ediyoruz.
                            </p>
                        </div>

                        {/* Back to Home Button */}
                        <div className="pt-4">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Ana Sayfaya Dön
                            </Link>
                        </div>

                    </div>

                    {/* Right Column: Image */}
                    <div className="h-[400px] md:h-full md:min-h-[600px] overflow-hidden rounded-lg shadow-xl">
                        <img
                            src="/magaza.jpg.png"
                            alt="Kisve Lucas Mağazası"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}
