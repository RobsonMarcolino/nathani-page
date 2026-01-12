import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Check, ArrowRight } from 'lucide-react';

const Strategy = () => {
    return (
        <section id="about" className="py-24 overflow-hidden bg-dark">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[300px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-200 bg-white shadow-xl"
                >
                    {/* Real Image: Analytics/Strategy */}
                    <img
                        src="https://i.pinimg.com/1200x/f8/e7/20/f8e720d7bffbf95231624bf6be7be5c4.jpg"
                        alt="Digital Strategy Analytics"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-8 right-[-20px] bg-white text-secondary px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg border border-gray-100">
                        <CheckCircle size={20} className="text-accent" />
                        <span className="text-base">Google Partner Premier</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-secondary leading-tight">Sua Marca, <span className="text-primary">No Topo</span> do Mercado</h2>
                    <p className="text-text-muted text-lg mb-8 leading-relaxed">
                        Não basta apenas anunciar. É preciso estratégia. Nossa metodologia proprietária analisa dados em tempo real para otimizar cada centavo do seu investimento.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Gestão de Google Ads e Facebook Ads",
                            "Copywriting Persuasivo",
                            "Otimização de Landing Pages",
                            "Relatórios de Performance Semanais"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="flex items-center gap-3 text-lg text-secondary font-medium"
                            >
                                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <Check size={14} strokeWidth={3} />
                                </span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-primary text-lg font-bold hover:gap-4 transition-all inline-flex items-center gap-2 border-b-2 border-transparent hover:border-primary pb-1"
                    >
                        Saiba mais sobre nós <ArrowRight size={20} />
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
};

export default Strategy;
