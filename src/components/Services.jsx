import React from 'react';
import { Check, Plus } from 'lucide-react';

const mainServices = [
    "Planejamento estratégico de tráfego",
    "Análise de público e comportamento",
    "Estruturação e organização de campanhas",
    "Criação e gestão de anúncios",
    "Testes estratégicos de públicos e mensagens",
    "Otimizações contínuas baseadas em dados",
    "Análise de métricas e indicadores",
    "Relatórios claros e acompanhamento próximo"
];

const complementaryServices = [
    "Diagnóstico e análise de campanhas existentes",
    "Consultoria estratégica de tráfego pago",
    "Ajustes de comunicação e posicionamento para anúncios"
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-secondary border-t border-white/5 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Left Side: Services List */}
                <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/20"></div>

                    <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        O que está incluído
                    </h3>
                    <ul className="space-y-5 relative z-10">
                        {mainServices.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 group/item">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1 transition-colors group-hover/item:bg-primary group-hover/item:text-white border border-primary/20">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="text-lg text-gray-300 font-medium group-hover/item:text-white transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Text & Complementary */}
                <div className="flex flex-col h-full justify-between">
                    <div>
                        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Serviços Premium</span>
                        <h2 className="text-4xl font-bold mb-8 text-white">
                            Gestão completa do seu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecossistema de Anúncios</span>
                        </h2>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 mb-8 hover:border-primary/30 transition-colors">
                            <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                                <Plus size={20} className="text-primary" />
                                Serviços Estratégicos Complementares
                            </h4>
                            <ul className="space-y-4">
                                {complementaryServices.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-60"></div>
                                        <span className="text-gray-400 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <a href="https://wa.me/5531999035404" target="_blank" rel="noopener noreferrer" className="btn bg-primary text-white shadow-[0_0_25px_rgba(255,69,0,0.3)] hover:bg-primary-hover px-10 py-5 rounded-full text-lg font-bold text-center hover:scale-105 transition-all flex items-center justify-center gap-3">
                        Solicitar Proposta Personalizada
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
