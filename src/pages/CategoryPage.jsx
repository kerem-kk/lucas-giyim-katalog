import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { LayoutGrid, List, AlertCircle } from 'lucide-react';
import { slugify } from '../utils/slugify';

export default function CategoryPage() {
    const { categoryName } = useParams();

    // Category List to match against (Single Source of Truth)
    const categories = [
        'Damatlık', 'Takım Elbise', 'Mont', 'Ceket', 'Aksesuar', 'Pantolon', 'Katalog'
    ];

    // Find the matching category by comparing slugs
    // If categoryName from URL is 'takim-elbise', slugify('Takım Elbise') -> 'takim-elbise', so it matches.
    const currentCategory = categories.find(c => slugify(c) === categoryName) || categoryName;

    // Mock Data
    const allProducts = [
        // Takım Elbise
        { id: 101, title: "Slim Fit Lacivert Takım", price: "12.999,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },
        { id: 102, title: "Kruvaze Gri Takım", price: "14.500,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop" },
        { id: 103, title: "Siyah Klasik Takım", price: "11.250,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" },
        { id: 104, title: "Bej Keten Takım", price: "15.999,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop" },
        { id: 105, title: "İtalyan Kesim Yeşil", price: "16.500,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop" },
        { id: 106, title: "Desenli Yelekli Takım", price: "18.750,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop" },
        { id: 107, title: "Lacivert Çizgili Takım", price: "13.450,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop" },
        { id: 108, title: "Gri Ekose Takım", price: "14.200,00 TL", category: "Takım Elbise", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop" },

        // Ceket
        { id: 201, title: "Keten Bej Ceket", price: "8.500,00 TL", category: "Ceket", image: "https://images.unsplash.com/photo-1551488852-d809c952946c?q=80&w=2070&auto=format&fit=crop" },
        { id: 202, title: "Klasik Lacivert Blazer", price: "9.200,00 TL", category: "Ceket", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" },
        { id: 203, title: "Yünlü Gri Ceket", price: "10.000,00 TL", category: "Ceket", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },

        // Pantolon
        { id: 301, title: "Siyah Kumaş Pantolon", price: "3.500,00 TL", category: "Pantolon", image: "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=2787&auto=format&fit=crop" },
        { id: 302, title: "Gri Flanel Pantolon", price: "4.200,00 TL", category: "Pantolon", image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop" },
        { id: 303, title: "Lacivert Chino", price: "3.200,00 TL", category: "Pantolon", image: "https://images.unsplash.com/photo-1598808503846-570ecf513a1d?q=80&w=2069&auto=format&fit=crop" },

        // Damatlık
        { id: "310-396", title: "Model 310-396", category: "Damatlık", slug: "310-396", image: "/damatlik/310-396/row-1-column-1.png" },
        { id: "357-204", title: "Model 357-204", category: "Damatlık", slug: "357-204", image: "/damatlik/357-204/row-1-column-1.png" },
        { id: "357-205", title: "Model 357-205", category: "Damatlık", slug: "357-205", image: "/damatlik/357-205/row-1-column-1.png" },
        { id: "357-216", title: "Model 357-216", category: "Damatlık", slug: "357-216", image: "/damatlik/357-216/row-1-column-1.png" },
        { id: "357-217", title: "Model 357-217", category: "Damatlık", slug: "357-217", image: "/damatlik/357-217/row-1-column-1.png" },
        { id: "357-230", title: "Model 357-230", category: "Damatlık", slug: "357-230", image: "/damatlik/357-230/row-1-column-1.png" },
        { id: "357-231", title: "Model 357-231", category: "Damatlık", slug: "357-231", image: "/damatlik/357-231/row-1-column-1.png" },
        { id: "357-794", title: "Model 357-794", category: "Damatlık", slug: "357-794", image: "/damatlik/357-794/row-1-column-1.png" },
        { id: "357-818", title: "Model 357-818", category: "Damatlık", slug: "357-818", image: "/damatlik/357-818/row-1-column-1.png" },
        { id: "357-824", title: "Model 357-824", category: "Damatlık", slug: "357-824", image: "/damatlik/357-824/row-1-column-1.png" },
        { id: "357-981", title: "Model 357-981", category: "Damatlık", slug: "357-981", image: "/damatlik/357-981/row-1-column-1.png" },
        { id: "388-432", title: "Model 388-432", category: "Damatlık", slug: "388-432", image: "/damatlik/388-432/row-1-column-1.png" },
        { id: "388-586", title: "Model 388-586", category: "Damatlık", slug: "388-586", image: "/damatlik/388-586/row-1-column-1.png" },

        // Mont
        { id: 501, title: "Siyah Şişme Mont", price: "5.500,00 TL", category: "Mont", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop" },
        { id: 502, title: "Haki Mevsimlik Mont", price: "4.800,00 TL", category: "Mont", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2190&auto=format&fit=crop" },

        // Kaban
        { id: 601, title: "Deve Tüyü Kaban", price: "9.500,00 TL", category: "Kaban", image: "https://images.unsplash.com/photo-1512413316925-fd5432420433?q=80&w=2070&auto=format&fit=crop" },
        { id: 602, title: "Antrasit Kaşe Kaban", price: "11.000,00 TL", category: "Kaban", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2772&auto=format&fit=crop" },
    ];

    // Filter using robust slug comparison
    const filteredProducts = allProducts.filter(product => {
        // We compare the slug of the product category with the categoryName param
        return slugify(product.category) === categoryName;
    });

    const breadcrumbItems = [
        { label: "Ana Sayfa", path: "/" },
        { label: currentCategory, path: "#" }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex flex-col md:flex-row gap-8">
                {/* Flat Sidebar - Controlled by URL prop */}
                <Sidebar
                    selectedCategory={currentCategory}
                />

                <div className="flex-1">
                    {/* Toolbar */}
                    <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-400">
                            <button className="p-2 hover:bg-gray-100 rounded-md text-black transition-colors"><LayoutGrid className="w-5 h-5" /></button>
                            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><List className="w-5 h-5" /></button>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-medium">SIRALA:</span>
                            <select className="text-sm border border-gray-200 rounded-sm px-2 py-1 focus:outline-none focus:border-gold-accent bg-white">
                                <option>Akıllı Sıralama</option>
                                <option>En Düşük Fiyat</option>
                                <option>En Yüksek Fiyat</option>
                                <option>En Yeniler</option>
                            </select>
                        </div>
                    </div>

                    {/* 3. Product Grid or Empty State */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 animate-fade-in">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg text-center">
                            <AlertCircle className="w-12 h-12 text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Aradığınız kriterlere uygun ürün bulunamadı.</h3>
                            <p className="text-sm text-gray-500">Lütfen filtrelerinizi temizleyin veya farklı bir kategori seçin.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
