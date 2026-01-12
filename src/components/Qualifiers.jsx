import React from 'react';
import { XCircle } from 'lucide-react';

const Qualifiers = () => {
    return (
        <section className="py-24 bg-secondary border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Para quem <span className="text-red-500">NÃO</span> é este serviço?</h2>
                    <p className="text-gray-400 text-lg">
                        Prezamos pela transparência. Se você se encaixa em um dos perfis abaixo, talvez não sejamos a melhor opção para você agora.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-4 shadow-xl hover:bg-white/10 transition-all hover:border-red-500/30 group">
                        <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-red-400 transition-colors">Busca "Fique Rico Rápido"</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Tráfego pago é investimento, construção e otimização constante. Não existe pílula mágica para enriquecer da noite para o dia.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-4 shadow-xl hover:bg-white/10 transition-all hover:border-red-500/30 group">
                        <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-red-400 transition-colors">Não quer acompanhar métricas</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Nosso trabalho é pautado em dados. Precisamos que você (ou seu time) esteja disposto a alinhar números e resultados conosco.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifiers;
