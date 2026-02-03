import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import InfoCards from '../components/InfoCards';
import StoreExperience from '../components/StoreExperience';
import LocationMap from '../components/LocationMap';

export default function Home() {
    const row1Categories = [
        { label: "DAMATLIK", image: "https://images.unsplash.com/photo-1593032465175-d81f0f93fb09?q=80&w=2070&auto=format&fit=crop" },
        { label: "TAKIM ELBİSE", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop" },
        { label: "MONT", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2787&auto=format&fit=crop" }
    ];

    const row2Categories = [
        { label: "CEKET", image: "https://images.unsplash.com/photo-1551488852-d809c952946c?q=80&w=2070&auto=format&fit=crop" },
        { label: "AKSESUAR", image: "https://images.unsplash.com/photo-1512413316925-fd5432420433?q=80&w=2070&auto=format&fit=crop" },
        { label: "PANTOLON", image: "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=2787&auto=format&fit=crop" }
    ];

    return (
        <div className="flex-grow">
            <Hero />

            <div className="py-8"></div>

            {/* Category Rows */}
            <div className="flex flex-col gap-4">
                <CategoryGrid items={row1Categories} />
                <CategoryGrid items={row2Categories} />
            </div>

            <div className="py-12"></div>

            <div className="container mx-auto px-4 mb-4">
                <h2 className="text-center font-serif text-2xl md:text-3xl font-bold tracking-widest text-gray-900 mb-2">KEŞFET</h2>
                <div className="w-24 h-0.5 bg-gold-accent mx-auto mb-8"></div>
            </div>

            <InfoCards />

            <div className="py-12 bg-gray-50/50 mb-12">
                <h2 className="text-center font-serif text-2xl md:text-3xl font-bold mb-8 tracking-widest text-gray-800">MAĞAZA DENEYİMİ</h2>
                <div className="w-full flex justify-center pb-8">
                    <StoreExperience />
                </div>
            </div>

            <div className="py-8">
                <LocationMap />
            </div>
        </div>
    );
}
