import React from 'react';
import Layout from './components/Layout';
import BentoHero from './components/BentoHero';
import BentoGrid from './components/BentoGrid';
import TechTicker from './components/TechTicker';
import TechBackground from './components/TechBackground';

import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ExitIntent from './components/ExitIntent';
import SectionDivider from './components/SectionDivider';

import TechBg from './components/footer_bg.png';

function App() {
    return (
        <Layout>
            <TechBackground />
            <BentoHero />
            <TechTicker />
            <SectionDivider />
            <BentoGrid />
            <SectionDivider />
            <TargetAudience />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <FAQ />
            <ExitIntent />

            {/* CTA Section (Final Call) */}
            <section id="contact" className="py-24 bg-secondary border-t border-white/10 relative z-10 overflow-hidden">
                {/* Standard Tech Background - High Visibility */}
                <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                    <img src={TechBg} alt="" className="w-full h-full object-cover scale-110" />
                    {/* Gradients to blend smoothly */}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary opacity-90"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 text-white shadow-2xl hover:border-primary/40 transition-colors group">
                        <div className="absolute top-0 right-0 w-[500px] h-full bg-primary/5 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-4xl font-bold mb-4">Pronto para <span className="text-primary">Escalar?</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Agende uma análise gratuita agora mesmo. Sem compromisso, apenas uma conversa sincera sobre o futuro do seu negócio.
                            </p>
                        </div>

                        <div className="relative z-10">
                            <a href="https://wa.me/5531999035404" target="_blank" rel="noopener noreferrer" className="btn bg-primary text-white hover:bg-primary-hover hover:-translate-y-1 text-lg px-10 py-4 shadow-[0_0_30px_rgba(255,69,0,0.3)] font-bold border-none rounded-full transition-all">
                                Solicitar Análise
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
}

export default App;
