import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/5531999035404"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] group"
        >
            <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110">

                {/* Ping Animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>

                {/* Icon */}
                <MessageCircle size={32} className="text-white relative z-10 fill-white" />

                {/* Tooltip (Desktop only) */}
                <div className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg hidden md:block pointer-events-none">
                    Fale Conosco
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-[10px] border-l-white border-b-8 border-b-transparent"></div>
                </div>
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
