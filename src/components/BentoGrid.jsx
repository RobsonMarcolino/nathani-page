import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView, useScroll } from 'framer-motion';
import { BarChart3, Users, BrainCircuit, Target, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

const BentoCard = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-primary/40 transition-colors group relative overflow-hidden ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 h-full">{children}</div>
    </motion.div>
);


import TechBg from './footer_bg.png';

const BentoGrid = () => {
    return (
        <section className="py-32 bg-secondary relative z-10 overflow-hidden" id="services">
            {/* Standard Tech Background - High Visibility */}
            <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <img src={TechBg} alt="" className="w-full h-full object-cover scale-110" />
                {/* Gradients to blend smoothly with adjacent sections */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary opacity-90"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Ecossistema de Performance</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Tudo o que você precisa para <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Escalar com Previsibilidade</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Value Prop (Large 2x2) */}
                    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-white/5 to-white/0">
                        <div>
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/20">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Gestão 360º de Tráfego</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Não fazemos apenas "anúncios". Criamos um ecossistema completo de captação, desde o criativo até a conversão final. Cuidamos de toda a jornada do seu cliente.
                            </p>
                        </div>
                        <ul className="space-y-3">
                            {["Planejamento Estratégico", "Gestão de Criativos", "Copywriting Persuasivo", "Rastreamento Avançado"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </BentoCard>

                    {/* Card 2: Segmentation (Tall 1x2) */}
                    <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col" delay={0.1}>
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                            <Users size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Segmentação Sniper</h3>
                        <p className="text-gray-400 text-sm mb-6">Encontramos seu público ideal através de inteligência de dados.</p>

                        <div className="mt-auto space-y-2">
                            <div className="p-3 bg-black/20 rounded-lg border border-white/5 text-xs text-gray-400 flex justify-between">
                                <span>Lookalike 1%</span>
                                <span className="text-green-400">Alta Conv.</span>
                            </div>
                            <div className="p-3 bg-black/20 rounded-lg border border-white/5 text-xs text-gray-400 flex justify-between">
                                <span>Interesses</span>
                                <span className="text-green-400">Escala</span>
                            </div>
                            <div className="p-3 bg-black/20 rounded-lg border border-white/5 text-xs text-gray-400 flex justify-between">
                                <span>Remarketing</span>
                                <span className="text-green-400">Retenção</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 3: Psychology (Standard 1x1) */}
                    <BentoCard delay={0.2} className="group hover:bg-primary/5 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                                <BrainCircuit size={20} />
                            </div>
                            <ArrowUpRight className="text-gray-500 group-hover:text-primary transition-colors" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Neuromarketing</h3>
                        <p className="text-sm text-gray-400">
                            Anúncios projetados para ativar os gatilhos mentais certos.
                        </p>
                    </BentoCard>

                    {/* Card 4: Data Driven (Standard 1x1) */}
                    <BentoCard delay={0.3}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                                <BarChart3 size={20} />
                            </div>
                            <ArrowUpRight className="text-gray-500 group-hover:text-primary transition-colors" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Data Driven</h3>
                        <p className="text-sm text-gray-400">
                            Decisões baseadas em estatística, não em palpites.
                        </p>
                    </BentoCard>

                    {/* Card 5: Result (Wide 2x1) */}
                    <BentoCard className="md:col-span-2 flex items-center justify-between" delay={0.4}>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Foco em ROI</h3>
                            <p className="text-gray-400 max-w-sm">
                                No final do dia, o que importa é dinheiro no bolso.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-gray-500 uppercase font-bold">Média de Clientes</p>
                                <p className="text-3xl font-bold text-primary">
                                    +<Counter value={340} suffix="%" />
                                </p>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div className="text-right">
                                <p className="text-xs text-gray-500 uppercase font-bold">ROAS Médio</p>
                                <p className="text-3xl font-bold text-white">
                                    <Counter value={5} suffix="x" />
                                </p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 6: CTA (Standard 1x1) - Optional filler */}
                    <BentoCard className="group flex flex-col items-center justify-center text-center cursor-pointer hover:scale-[1.02] transition-all bg-black/50 border-orange-500/50 hover:border-orange-500 shadow-[0_0_20px_rgba(255,100,0,0.15)] hover:shadow-[0_0_40px_rgba(255,100,0,0.3)] overflow-hidden" delay={0.5}>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <Target size={32} className="text-white mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white">Começar Agora</h3>
                            <p className="text-orange-200/80 text-sm mt-2">Agende sua análise</p>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};

const Counter = ({ value, suffix = "", duration = 2 }) => {
    const { scrollYProgress } = useScroll(); // Dummy hook to ensure framer context if needed, but we use useInView mostly
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default BentoGrid;
