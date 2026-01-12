import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

const ExitIntent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        };

        const timer = setTimeout(() => {
            if (!hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        }, 30000); // Trigger after 30 seconds on mobile/desktop as fallback

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasTriggered]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#0F172A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="bg-primary p-6 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                            <div className="flex justify-center mb-4">
                                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                                    <Gift size={40} className="text-white animate-bounce" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Espere! Não vá ainda...</h3>
                            <p className="opacity-90">Temos um presente especial para potencializar sua operação.</p>
                        </div>

                        <div className="p-8 text-center">
                            <h4 className="text-xl font-bold text-white mb-3">Checklist de Otimização Gratuito</h4>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                Baixe nosso checklist exclusivo com os 10 pontos cegos que fazem você perder dinheiro em anúncios hoje.
                            </p>

                            <a
                                href="https://wa.me/5531999035404?text=Olá,%20vim%20pelo%20site%20e%20quero%20o%20Checklist!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-primary hover:bg-primary-hover text-white w-full flex justify-center shadow-lg py-4 rounded-xl text-lg font-bold group items-center gap-2 transition-all"
                                onClick={() => setIsVisible(false)}
                            >
                                Quero meu presente <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <button
                                onClick={() => setIsVisible(false)}
                                className="mt-6 text-xs text-gray-500 hover:text-gray-400 underline transition-colors"
                            >
                                Não, obrigado. Prefiro continuar sem otimizar.
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntent;
