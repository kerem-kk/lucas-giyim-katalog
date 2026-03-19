import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { slugify } from '../utils/slugify';

export default function ProductDetailPage() {
    const { categoryName, productSlug } = useParams();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImageIndex(null);
        };
        
        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex]);

    // Same product data as CategoryPage (single source of truth ideally)
    const allProducts = [
        // Takım Elbise
        { id: 101, title: "Slim Fit Lacivert Takım", category: "Takım Elbise", description: "İtalyan kesim, slim fit lacivert takım elbise. %100 yün kumaş ile üstün konfor ve şıklık.", images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
        ]},
        { id: 102, title: "Kruvaze Gri Takım", category: "Takım Elbise", description: "Modern kruvaze kesim, gri renk takım elbise. Özel günleriniz için mükemmel tercih.", images: [
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
        ]},
        { id: 103, title: "Siyah Klasik Takım", category: "Takım Elbise", description: "Zamansız siyah klasik takım elbise. Her daim şık ve zarif görünüm.", images: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop"
        ]},
        { id: 104, title: "Bej Keten Takım", category: "Takım Elbise", description: "Yazlık bej keten takım elbise. Hafif ve nefes alabilir kumaş ile yaz mevsiminin vazgeçilmezi.", images: [
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop"
        ]},
        { id: 105, title: "İtalyan Kesim Yeşil", category: "Takım Elbise", description: "İtalyan kesim yeşil takım elbise. Cesur ve modern bir seçim.", images: [
            "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        ]},
        { id: 106, title: "Desenli Yelekli Takım", category: "Takım Elbise", description: "Yelekli desenli takım elbise. Üç parça set ile komple şıklık.", images: [
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop"
        ]},
        { id: 107, title: "Lacivert Çizgili Takım", category: "Takım Elbise", description: "Çizgili lacivert takım elbise. Profesyonel ve modern bir görünüm.", images: [
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        ]},
        { id: 108, title: "Gri Ekose Takım", category: "Takım Elbise", description: "Ekose desenli gri takım elbise. Klasik İngiliz tarzı.", images: [
            "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop"
        ]},

        // Ceket
        { id: 201, title: "Keten Bej Ceket", category: "Ceket", description: "Keten bej ceket. Yaz aylarında şık ve rahat bir tercih.", images: [
            "https://images.unsplash.com/photo-1551488852-d809c952946c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop"
        ]},
        { id: 202, title: "Klasik Lacivert Blazer", category: "Ceket", description: "Klasik lacivert blazer ceket. Her kombine uyum sağlar.", images: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551488852-d809c952946c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop"
        ]},
        { id: 203, title: "Yünlü Gri Ceket", category: "Ceket", description: "Yünlü gri ceket. Kış sezonunun vazgeçilmez parçası.", images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551488852-d809c952946c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop"
        ]},

        // Pantolon
        { id: 301, title: "Siyah Kumaş Pantolon", category: "Pantolon", description: "Siyah kumaş pantolon. Klasik kesim, her tarza uyumlu.", images: [
            "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=2787&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop"
        ]},
        { id: 302, title: "Gri Flanel Pantolon", category: "Pantolon", description: "Gri flanel pantolon. Yumuşak dokusu ile konforlu giyim.", images: [
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=2787&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop"
        ]},
        { id: 303, title: "Lacivert Chino", category: "Pantolon", description: "Lacivert chino pantolon. Günlük ve şık.", images: [
            "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=2787&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop"
        ]},

        // Damatlık
        { id: "310-396", title: "Model 310-396", category: "Damatlık", slug: "310-396", description: "Damatlık Model 310-396. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/310-396/row-1-column-1.png",
            "/damatlik/310-396/row-1-column-2.png",
            "/damatlik/310-396/row-2-column-1.png",
            "/damatlik/310-396/row-2-column-2.png"
        ]},
        { id: "357-204", title: "Model 357-204", category: "Damatlık", slug: "357-204", description: "Damatlık Model 357-204. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-204/row-1-column-1.png",
            "/damatlik/357-204/row-1-column-2.png",
            "/damatlik/357-204/row-2-column-1.png",
            "/damatlik/357-204/row-2-column-2.png"
        ]},
        { id: "357-205", title: "Model 357-205", category: "Damatlık", slug: "357-205", description: "Damatlık Model 357-205. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-205/row-1-column-1.png",
            "/damatlik/357-205/row-1-column-2.png",
            "/damatlik/357-205/row-2-column-1.png",
            "/damatlik/357-205/row-2-column-2.png"
        ]},
        { id: "357-216", title: "Model 357-216", category: "Damatlık", slug: "357-216", description: "Damatlık Model 357-216. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-216/row-1-column-1.png",
            "/damatlik/357-216/row-1-column-2.png",
            "/damatlik/357-216/row-2-column-1.png",
            "/damatlik/357-216/row-2-column-2.png"
        ]},
        { id: "357-217", title: "Model 357-217", category: "Damatlık", slug: "357-217", description: "Damatlık Model 357-217. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-217/row-1-column-1.png",
            "/damatlik/357-217/row-1-column-2.png",
            "/damatlik/357-217/row-2-column-1.png",
            "/damatlik/357-217/row-2-column-2.png"
        ]},
        { id: "357-230", title: "Model 357-230", category: "Damatlık", slug: "357-230", description: "Damatlık Model 357-230. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-230/row-1-column-1.png",
            "/damatlik/357-230/row-1-column-2.png",
            "/damatlik/357-230/row-2-column-1.png",
            "/damatlik/357-230/row-2-column-2.png"
        ]},
        { id: "357-231", title: "Model 357-231", category: "Damatlık", slug: "357-231", description: "Damatlık Model 357-231. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-231/row-1-column-1.png",
            "/damatlik/357-231/row-1-column-2.png",
            "/damatlik/357-231/row-2-column-1.png",
            "/damatlik/357-231/row-2-column-2.png"
        ]},
        { id: "357-794", title: "Model 357-794", category: "Damatlık", slug: "357-794", description: "Damatlık Model 357-794. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-794/row-1-column-1.png",
            "/damatlik/357-794/row-1-column-2.png",
            "/damatlik/357-794/row-2-column-1.png",
            "/damatlik/357-794/row-2-column-2.png"
        ]},
        { id: "357-818", title: "Model 357-818", category: "Damatlık", slug: "357-818", description: "Damatlık Model 357-818. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-818/row-1-column-1.png",
            "/damatlik/357-818/row-1-column-2.png",
            "/damatlik/357-818/row-2-column-1.png",
            "/damatlik/357-818/row-2-column-2.png"
        ]},
        { id: "357-824", title: "Model 357-824", category: "Damatlık", slug: "357-824", description: "Damatlık Model 357-824. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-824/row-1-column-1.png",
            "/damatlik/357-824/row-1-column-2.png",
            "/damatlik/357-824/row-2-column-1.png",
            "/damatlik/357-824/row-2-column-2.png"
        ]},
        { id: "357-981", title: "Model 357-981", category: "Damatlık", slug: "357-981", description: "Damatlık Model 357-981. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/357-981/row-1-column-1.png",
            "/damatlik/357-981/row-1-column-2.png",
            "/damatlik/357-981/row-2-column-1.png",
            "/damatlik/357-981/row-2-column-2.png"
        ]},
        { id: "388-432", title: "Model 388-432", category: "Damatlık", slug: "388-432", description: "Damatlık Model 388-432. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/388-432/row-1-column-1.png",
            "/damatlik/388-432/row-1-column-2.png",
            "/damatlik/388-432/row-2-column-1.png",
            "/damatlik/388-432/row-2-column-2.png"
        ]},
        { id: "388-586", title: "Model 388-586", category: "Damatlık", slug: "388-586", description: "Damatlık Model 388-586. Özel gününüz için tasarlanmış şık ve zarif bir model.", images: [
            "/damatlik/388-586/row-1-column-1.png",
            "/damatlik/388-586/row-1-column-2.png",
            "/damatlik/388-586/row-2-column-1.png",
            "/damatlik/388-586/row-2-column-2.png"
        ]},

        // Mont
        { id: 501, title: "Siyah Şişme Mont", category: "Mont", description: "Siyah şişme mont. Kış soğuklarına karşı sıcak ve şık.", images: [
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2190&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        ]},
        { id: 502, title: "Haki Mevsimlik Mont", category: "Mont", description: "Haki mevsimlik mont. İlkbahar ve sonbahar için ideal.", images: [
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2190&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        ]},

        // Kaban
        { id: 601, title: "Deve Tüyü Kaban", category: "Kaban", description: "Deve tüyü kaban. Lüks ve sıcak, kış mevsiminin yıldızı.", images: [
            "https://images.unsplash.com/photo-1512413316925-fd5432420433?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2772&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        ]},
        { id: 602, title: "Antrasit Kaşe Kaban", category: "Kaban", description: "Antrasit kaşe kaban. Şık ve dayanıklı.", images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2772&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512413316925-fd5432420433?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
        ]},
    ];

    // Find product by matching slug
    // Support slug field (for SKU-based products like Damatlık) or fallback to slugify(title)
    const product = allProducts.find(p => p.slug === productSlug || slugify(p.title) === productSlug);

    // Category display name
    const categories = ['Damatlık', 'Takım Elbise', 'Mont', 'Ceket', 'Aksesuar', 'Pantolon', 'Katalog', 'Kaban'];
    const currentCategory = categories.find(c => slugify(c) === categoryName) || categoryName;

    if (!product) {
        return (
            <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Ürün Bulunamadı</h1>
                <p className="text-gray-500 mb-8">Aradığınız ürün mevcut değil.</p>
                <Link to="/" className="text-gold-accent hover:underline font-medium">
                    Ana Sayfaya Dön
                </Link>
            </div>
        );
    }

    const whatsappMessage = encodeURIComponent(`Merhaba, ${product.title} modeli hakkında bilgi almak istiyorum.`);
    const whatsappLink = `https://wa.me/905555555555?text=Merhaba,%20${whatsappMessage}`;

    return (
        <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
            {/* Back Button */}
            <Link
                to={`/category/${categoryName}`}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{currentCategory} Kategorisine Dön</span>
            </Link>

            {/* 2-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                {/* Left Column — Image Gallery (2x2) */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
                    {product.images.slice(0, 4).map((img, index) => (
                        <div 
                            key={index} 
                            className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 cursor-pointer relative group"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <img
                                src={img}
                                alt={`${product.title} - Görsel ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay on hover to indicate clickability */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Right Column — Product Info & CTA */}
                <div className="lg:col-span-1 flex flex-col justify-center">
                    {/* Category Badge */}
                    <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold mb-3">
                        {product.category}
                    </span>

                    {/* Product Title */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight font-serif">
                        {product.title}
                    </h1>

                    {/* Divider */}
                    <div className="w-16 h-0.5 bg-gold-accent mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base mb-10">
                        {product.description}
                    </p>

                    {/* WhatsApp CTA Button */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        {/* WhatsApp Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Bilgi Al
                    </a>

                    {/* Helper Text */}
                    <p className="text-xs text-gray-400 mt-3 text-center lg:text-left">
                        WhatsApp üzerinden hızlıca bilgi alabilirsiniz
                    </p>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full hover:bg-black/80"
                        title="Kapat (ESC)"
                    >
                        <X className="w-8 h-8 text-yellow-500" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) => 
                                prev === 0 ? product.images.slice(0, 4).length - 1 : prev - 1
                            );
                        }}
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-50 p-2 sm:p-3 bg-black/40 hover:bg-black/80 rounded-full"
                    >
                        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>

                    {/* Image Container */}
                    <div 
                        className="relative w-full h-full flex items-center justify-center p-4 sm:p-16"
                        onClick={() => setSelectedImageIndex(null)} 
                    >
                        <img 
                            src={product.images[selectedImageIndex]} 
                            alt={`${product.title} - Büyük Görsel`}
                            className="max-w-full max-h-full object-contain select-none shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) => 
                                prev === product.images.slice(0, 4).length - 1 ? 0 : prev + 1
                            );
                        }}
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-50 p-2 sm:p-3 bg-black/40 hover:bg-black/80 rounded-full"
                    >
                        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest font-medium bg-black/50 px-4 py-2 rounded-full">
                        {selectedImageIndex + 1} / {product.images.slice(0, 4).length}
                    </div>

                    {/* Inline CSS animation */}
                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: scale(0.98); }
                            to { opacity: 1; transform: scale(1); }
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
}
