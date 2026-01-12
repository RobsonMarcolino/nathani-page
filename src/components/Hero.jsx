import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import TrafegoImage from './hero_3d_v2.png';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-secondary">
            {/* Background Gradients (Black & Orange) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Main Orange Gradient - Right Side */}
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

                {/* Secondary Gradient - Bottom Left */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Texture Overlay (Optional - Subtle Noise/Grid) */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="h-px w-12 bg-primary"></span>
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Alta Performance</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-white tracking-tight">
                        Gestão Estratégica de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Tráfego Pago</span>
                    </h1>

                    <p className="text-gray-400 text-2xl mb-12 max-w-2xl leading-relaxed font-light">
                        Planejo, executo e otimizo campanhas de anúncios para transformar investimento em resultado previsível.
                    </p>



                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/5531999035404" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white text-xl px-10 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-[0_4px_20px_rgba(255,69,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,69,0,0.6)] transition-all hover:-translate-y-1">
                            Agendar Análise <ArrowRight size={24} />
                        </a>
                        <a href="#services" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xl px-10 py-5 rounded-2xl font-bold transition-all flex items-center">
                            Como funciona?
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center items-center h-[500px]"
                >
                    {/* Standard Glow Behind Image (Static) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

                    {/* Main 3D Image - Static Premium with Depth */}
                    <div className="relative z-10 w-full max-w-2xl scale-110 lg:scale-125 transform translate-y-6 lg:translate-x-6">
                        <img
                            src={TrafegoImage}
                            alt="Gestão de Tráfego 3D"
                            className="w-full h-auto drop-shadow-2xl filter contrast-125 saturate-110"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        />

                        {/* Static Badge - Clean */}
                        <div className="absolute -bottom-5 -left-5 bg-black/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#ff8c00] rounded-xl flex items-center justify-center text-white shadow-lg">
                                <TrendingUp size={28} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Resultado Comprovado</p>
                                <p className="text-white font-bold text-2xl">5x ROI</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
