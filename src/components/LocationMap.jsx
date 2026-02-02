import { Hand } from 'lucide-react';

export default function LocationMap() {
    return (
        <section className="container mx-auto px-4 pb-12">
            {/* Google Maps Embed - Full Width */}
            <div className="w-full h-[500px] relative bg-gray-200 rounded-sm shadow-sm overflow-hidden">
                <iframe
                    src="https://maps.google.com/maps?q=Kisve+Tekstil+Akdeniz+Mimar+Kemalettin+Cd+35210+Konak+Izmir&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </section>
    );
}
