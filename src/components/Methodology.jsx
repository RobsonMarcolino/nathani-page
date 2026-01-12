import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        letter: "A",
        title: "Análise Humanizada",
        desc: "Mergulhamos no seu negócio. Entendemos sua oferta, seu público-alvo e seus concorrentes antes de gastar 1 real."
    },
    {
        letter: "F",
        title: "Funil Estratégico",
        desc: "Desenhamos a jornada do cliente, desde o primeiro impacto até a compra, garantindo que nenhum lead se perca no caminho."
    },
    {
        letter: "E",
        title: "Execução Inteligente",
        desc: "Configuração técnica impecável das campanhas, pixels e tags de rastreamento para garantir que tudo funcione como um relógio."
    },
    {
        letter: "T",
        title: "Testes Guiados por Dados",
        desc: "Validamos criativos, públicos e ofertas constantemente. O que funciona a gente escala, o que não funciona a gente corta."
    },
    {
        letter: "O",
        title: "Otimização e Escala",
        desc: "Com o lucro garantido, aumentamos o investimento para multiplicar os resultados, sempre mantendo o ROI saudável."
    }
];

const Methodology = () => {
    return (
        <section className="py-24 bg-secondary text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa Metodologia <span className="text-primary">A.F.E.T.O</span></h2>
                    <p className="text-gray-300 text-lg">
                        Um processo validado para garantir consistência e crescimento sustentável para o seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="text-5xl font-extrabold text-primary mb-4 opacity-80">{item.letter}</div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
