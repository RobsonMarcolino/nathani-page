import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingDown, HelpCircle } from 'lucide-react';
import TechBg from './tech_bg_audience.png';

const audiences = [
    {
        icon: <TrendingDown size={32} />,
        title: "Já anuncia, mas não tem retorno",
        description: "Você investe em tráfego, mas sente que está queimando dinheiro e não vê o retorno voltando para o caixa da empresa."
    },
    {
        icon: <HelpCircle size={32} />,
        title: "Quer começar do jeito certo",
        description: "Sabe que precisa anunciar online, mas tem medo de errar e perder orçamento por falta de conhecimento técnico."
    },
    {
        icon: <Target size={32} />,
        title: "Busca previsibilidade",
        description: "Suas vendas oscilam muito e você precisa de um fluxo constante de novos clientes qualificados todos os meses."
    }
];

const TargetAudience = () => {
    return (
        <section id="about" className="py-24 bg-secondary border-t border-white/5 relative overflow-hidden">
            {/* Background Image & Effects */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img
                    src={TechBg}
                    alt="Background Tech"
                    className="w-full h-full object-cover mix-blend-screen"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-white">Para quem é o meu trabalho?</h2>
                    <p className="text-gray-400 text-lg">
                        Não importa o seu nicho, se você se identifica com uma dessas situações, eu posso te ajudar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 p-8 rounded-[2rem] shadow-xl border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 backdrop-blur-md"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,69,0,0.3)]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
