import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import TrafegoImage from './hero_3d_v2.png';
import TitleImage from './ImagemHome.png';

import Logo from './logo.png';

const BentoHero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <section className="relative pt-40 pb-16 overflow-hidden bg-secondary min-h-[90vh] flex items-center justify-center">

            {/* Parallax Background Image (Full Screen) */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 opacity-70 pointer-events-none flex items-center justify-center transition-opacity duration-1000 ease-in-out"
            >
                <img
                    src={TitleImage}
                    alt="Background"
                    className="w-full h-auto md:w-[85%] md:h-auto md:max-h-[90vh] object-contain filter contrast-125 brightness-110 drop-shadow-2xl scale-100 md:scale-110"
                    style={{ imageRendering: 'high-quality' }}
                />
                {/* Gradient Masks for seamless blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary/40"></div>
            </motion.div>

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 items-stretch">

                    {/* Main Content Only (No Box) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full relative min-h-[500px] flex flex-col items-center justify-center p-4"
                    >
                        {/* Content Overlay */}
                        <div className="relative z-10 flex flex-col items-center text-center space-y-8 mt-10">

                            {/* Logo */}
                            <img src={Logo} alt="Nathani Consultoria" className="h-16 md:h-24 w-auto drop-shadow-2xl" />

                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(255,165,0,0.1)] hover:shadow-[0_0_30px_rgba(255,165,0,0.2)] transition-all duration-300 transform hover:scale-105 cursor-default">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#FFA500]"></span>
                                ALTA PERFORMANCE EM VENDAS
                            </div>

                            <p className="text-white text-lg md:text-2xl max-w-2xl leading-relaxed font-light drop-shadow-lg opacity-90">
                                Transforme dados em lucro previsível. Planejamento, execução e otimização de campanhas para escalar seu negócio.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                <a
                                    href="https://wa.me/5531999035404"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-black/50 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 border border-orange-500/50 hover:border-orange-500 shadow-[0_0_20px_rgba(255,100,0,0.15)] hover:shadow-[0_0_40px_rgba(255,100,0,0.3)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center gap-3 text-white font-bold tracking-wide">
                                        AGENDAR ANÁLISE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>

                                <a
                                    href="#services"
                                    className="px-8 py-4 rounded-full text-white/80 font-medium border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm tracking-wide hover:text-white"
                                >
                                    Nossos Serviços
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoHero;
