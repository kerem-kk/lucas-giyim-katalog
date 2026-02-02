import { Grid3x3 } from 'lucide-react';

export default function InfoCards() {
    const cards = [
        { label: "ÇOK SATANLAR", bg: "bg-soft-red", text: "text-red-900" },
        { label: "YENİ GELEN ÜRÜNLER", bg: "bg-soft-beige", text: "text-yellow-900" },
        { label: "KOMBİN ÖNERİLERİ", bg: "bg-soft-pink", text: "text-pink-900" },
    ];

    return (
        <section className="container mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <div key={idx} className={`${card.bg} h-64 md:h-80 flex flex-col items-center justify-center relative cursor-pointer hover:shadow-lg transition-shadow rounded-sm`}>
                        <h3 className={`font-serif text-xl md:text-2xl tracking-widest ${card.text} font-medium text-center px-4`}>
                            {card.label}
                        </h3>
                        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 ${card.text} opacity-50`}>
                            <Grid3x3 className="w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
