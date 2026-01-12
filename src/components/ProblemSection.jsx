import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ProblemSection = () => {
    return (
        <section className="py-24 bg-secondary border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="bg-white/5 backdrop-blur-sm text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl border border-white/10">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                                <AlertCircle size={16} /> O Problema Real
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Por que seus anúncios <span className="text-primary">não funcionam?</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Muitos acreditam que basta apertar o botão "Impulsionar" ou subir uma campanha de qualquer jeito para vender. A verdade é que <strong>ferramenta sem estratégia é apenas gasto.</strong>
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Sem entender o comportamento do seu público, sem monitorar as métricas certas e sem uma comunicação persuasiva, você está apenas alugando espaço na tela das pessoas.
                            </p>
                        </div>

                        <div className="bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative">
                            <h3 className="text-xl font-bold mb-4 text-primary">O Ciclo da Frustração</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold mt-1">✕</span>
                                    <p className="text-gray-300">Criação de anúncios genéricos que não conectam.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold mt-1">✕</span>
                                    <p className="text-gray-300">Falta de testes e otimização diária.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold mt-1">✕</span>
                                    <p className="text-gray-300">Desperdício de orçamento com cliques desqualificados.</p>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="font-bold text-white text-lg">
                                    O problema raramente é o anúncio em si, mas a <span className="text-primary">estratégia</span> por trás dele.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
