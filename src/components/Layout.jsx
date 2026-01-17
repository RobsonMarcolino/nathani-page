import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, BarChart2, Instagram, Linkedin, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import NavBg from './navbar_bg.png';
import FooterBg from './footer_bg.png';
import FloatingWhatsApp from './FloatingWhatsApp';
import SpotlightFollower from './SpotlightFollower';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const footerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end start"]
    });

    const yFooter = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-secondary font-sans selection:bg-primary/30 selection:text-white">
            <header
                className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled
                    ? 'top-4 w-[90%] md:w-[70%] lg:w-[60%] py-2 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-[#0A0A0A]/90 backdrop-blur-xl border-primary/20'
                    : 'top-6 w-[95%] md:w-[85%] lg:w-[80%] py-3 px-8 bg-transparent border-white/5 backdrop-blur-sm'
                    } rounded-full border flex justify-between items-center overflow-hidden group hover:border-primary/40`}
            >
                {/* Custom Tech Texture Background */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none ${isScrolled ? 'opacity-30' : 'opacity-10'}`}>
                    <img src={NavBg} alt="" className="w-full h-full object-cover mix-blend-overlay filter contrast-125" />
                </div>

                {/* Glass Reflection Top */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>

                <div className="flex justify-between items-center w-full relative">
                    {/* Brand / Logo */}
                    {/* Brand / Logo */}
                    <a href="#" className="block hover:opacity-80 transition-opacity">
                        <img src="/src/components/LOGO.png" alt="Nathani Consultoria" className="h-12 md:h-16 w-auto object-contain" />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            { name: 'Diferenciais', href: '#about' },
                            { name: 'Serviços', href: '#services' },
                            { name: 'Resultados', href: '#results' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all group overflow-hidden rounded-lg hover:bg-white/5"
                            >
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/5531999035404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-6 py-2.5 bg-black/50 overflow-hidden rounded-full transition-all duration-300 hover:scale-105 border border-orange-500/50 hover:border-orange-500 shadow-[0_0_15px_rgba(255,100,0,0.15)] hover:shadow-[0_0_30px_rgba(255,100,0,0.3)] flex items-center gap-2 text-white font-bold"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                Fale Conosco <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Premium Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-secondary/95 z-[60] flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                        >
                            <X size={28} />
                        </button>

                        <nav className="flex flex-col gap-6 text-center w-full px-8">
                            <div className="mb-8 flex flex-col items-center gap-2">
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/20 mb-4 shadow-[0_0_30px_rgba(255,69,0,0.3)]">
                                    <BarChart2 className="text-primary" size={36} />
                                </div>
                                <span className="text-2xl font-bold text-white">Nathani Consultoria</span>
                            </div>

                            {[
                                { name: 'Diferenciais', href: '#about' },
                                { name: 'Serviços', href: '#services' },
                                { name: 'Resultados', href: '#results' }
                            ].map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-bold text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5 hover:border-white/20"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="https://wa.me/5531999035404"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group relative px-8 py-4 bg-black/50 overflow-hidden rounded-xl mt-6 transition-all duration-300 hover:scale-105 border border-orange-500/50 hover:border-orange-500 shadow-[0_0_20px_rgba(255,100,0,0.15)] hover:shadow-[0_0_40px_rgba(255,100,0,0.3)] flex items-center justify-center gap-3 text-white font-bold"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-3">
                                    <Phone size={20} /> Fale Conosco
                                </span>
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Extended Footer Background (Covers FAQ + CTA + Footer) */}
            <motion.div
                style={{ y: yFooter }}
                className="absolute bottom-0 left-0 right-0 h-[150vh] md:h-[1200px] z-0 opacity-100 pointer-events-none"
            >
                <img src={FooterBg} alt="" className="w-full h-full object-cover scale-110" />
                {/* Gradient to fade top into background */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-black"></div>
            </motion.div>

            <main className="flex-grow relative z-10">
                {children}
            </main>

            <footer ref={footerRef} className="bg-transparent text-white py-20 relative overflow-hidden border-t border-white/5 z-10">
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-16">
                        {/* Brand Column */}
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <a href="#" className="block w-fit">
                                <img src={Logo} alt="Nathani Consultoria" className="h-24 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                            </a>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                Transformamos dados em estratégias de crescimento previsível. Especialistas em gestão de tráfego pago para negócios que buscam escalar.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Navegação</h4>
                            <div className="flex flex-col gap-3">
                                <a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm w-fit">Nossos Diferenciais</a>
                                <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm w-fit">Serviços Exclusivos</a>
                                <a href="#results" className="text-gray-400 hover:text-primary transition-colors text-sm w-fit">Casos de Sucesso</a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Contato</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white shadow-lg group">
                                    <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white shadow-lg group">
                                    <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://wa.me/5531999035404" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-gray-400 hover:text-white shadow-lg group">
                                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                        <p>&copy; 2025 Nathani Consultoria. Todos os direitos reservados.</p>
                        <div className="flex gap-6 font-medium">
                            <a href="#" className="hover:text-gray-400 transition-colors">Privacidade</a>
                            <a href="#" className="hover:text-gray-400 transition-colors">Termos</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Global Interactive Elements */}
            <FloatingWhatsApp />
            <SpotlightFollower />
        </div>
    );
};

export default Layout;
