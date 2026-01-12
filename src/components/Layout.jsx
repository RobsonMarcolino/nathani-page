import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2, Instagram, Linkedin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    ? 'top-4 w-[90%] md:w-[85%] max-w-6xl rounded-2xl bg-secondary/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6 md:px-8'
                    : 'top-0 w-full bg-transparent py-6 px-6 md:px-12 border-b border-white/0'
                    }`}
            >
                <div className="flex justify-between items-center text-white relative">
                    {/* Brand / Logo */}
                    {/* Brand / Logo */}
                    <a href="#" className="block hover:opacity-80 transition-opacity">
                        <img src="/src/components/LOGO.png" alt="Nathani Consultoria" className="h-16 md:h-20 w-auto object-contain" />
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
                            className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(255,69,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,69,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                        >
                            Fale Conosco
                            <Phone size={16} />
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
                                className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-xl mt-6 shadow-[0_10px_40px_rgba(255,69,0,0.4)] flex items-center justify-center gap-3"
                            >
                                <Phone size={20} /> Fale Conosco
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-gradient-to-b from-secondary to-[#050810] text-white py-20 relative overflow-hidden border-t border-white/5">
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-16">
                        {/* Brand Column */}
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <a href="#" className="block w-fit">
                                <img src="/src/components/LOGO.png" alt="Nathani Consultoria" className="h-24 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
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
        </div>
    );
};

export default Layout;
