import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, HeartHandshake, Database, ArrowRight } from 'lucide-react';

const Differentiators = () => {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Nossos Diferenciais</span>
                        <h2 className="text-4xl font-bold text-white">Muito além do <br />"Gerenciador de Anúncios"</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 01 - Dark */}
                    <div className="bg-secondary/50 backdrop-blur-sm p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
                        <div className="text-gray-500 font-bold text-lg mb-8 group-hover:text-white transition-colors">01.</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Psicologia do Consumidor</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Não vendemos para robôs. Entendemos os gatilhos mentais e desejos do usuário para criar ofertas irresistíveis.
                        </p>
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                            <BrainCircuit size={24} />
                        </div>
                    </div>

                    {/* Card 02 - Highlighted (Primary) */}
                    <div className="bg-primary p-10 rounded-3xl shadow-glow transform md:-translate-y-4 relative overflow-hidden">
                        <div className="text-white/80 font-bold text-lg mb-8">02.</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Estratégia Orientada por Dados</h3>
                        <p className="text-white/90 leading-relaxed mb-8 font-medium">
                            Decisões baseadas em KPIs matemáticos. Otimização constante para garantir que cada centavo traga retorno.
                        </p>
                        <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center box-content p-1">
                            <ArrowRight size={24} />
                        </div>
                    </div>

                    {/* Card 03 - Dark */}
                    <div className="bg-secondary/50 backdrop-blur-sm p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
                        <div className="text-gray-500 font-bold text-lg mb-8 group-hover:text-white transition-colors">03.</div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Comunicação Humanizada</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Construímos autoridade sem táticas agressivas. Crescimento sustentável que respeita a sua marca.
                        </p>
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                            <HeartHandshake size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
