import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import TechBackground from './components/TechBackground';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import TargetAudience from './components/TargetAudience';
import ProblemSection from './components/ProblemSection';
import Differentiators from './components/Differentiators';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Qualifiers from './components/Qualifiers';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ExitIntent from './components/ExitIntent';
import SectionDivider from './components/SectionDivider';

function App() {
    return (
        <Layout>
            <TechBackground />
            <FloatingWhatsapp />
            <Hero />
            <TechTicker />
            <SectionDivider />
            <TargetAudience />
            <SectionDivider />
            <ProblemSection />
            <SectionDivider />
            <Differentiators />
            <ExitIntent />
            <Methodology />
            <SectionDivider />
            <Services />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <Qualifiers />
            <SectionDivider />
            <FAQ />

            {/* CTA Section (Final Call) */}
            <section id="contact" className="py-24 bg-secondary border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="bg-[#050505] rounded-3xl p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 text-white shadow-2xl border border-white/5">
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
