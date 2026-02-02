import { MessageCircle } from 'lucide-react';

export default function FloatingWidget() {
    return (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 animate-bounce-slow">
            <div className="bg-white shadow-lg rounded-lg px-4 py-2 text-sm text-gray-700 hidden md:block border border-gray-100 relative">
                Merhaba, Size nasıl yardımcı olabilirim?
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform rotate-45 -translate-y-1/2 border-t border-r border-gray-100"></div>
            </div>
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            >
                <MessageCircle className="w-8 h-8 fill-current" />
            </a>
        </div>
    );
}
