import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Rocket, Shield, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: <BarChart size={32} />,
        title: "Análise de Dados",
        description: "Decisões baseadas em métricas reais, não em achismos. Tracking avançado de conversões para maximizar resultados.",
        active: false
    },
    {
        icon: <Rocket size={32} />,
        title: "Escala Acelerada",
        description: "Identificamos as campanhas campeãs e escalamos o orçamento mantendo o ROI saudável e consistente.",
        active: true
    },
    {
        icon: <Shield size={32} />,
        title: "Segurança & Compliance",
        description: "Seguimos todas as políticas das plataformas para evitar bloqueios e garantir a longevidade da sua conta.",
        active: false
    }
];

const Features = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Nossos Diferenciais</span>
                    <h2 className="text-4xl font-bold mb-4 text-secondary">Por que escolher a <span className="text-primary">Nathani Consultoria</span>?</h2>
                    <p className="text-text-muted text-lg">Tecnologia e expertise humana trabalhando juntas pelo seu resultado.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-8 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden ${feature.active
                                ? 'bg-white border-primary shadow-2xl scale-105 z-10'
                                : 'bg-white border-transparent shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30'
                                }`}
                            style={{
                                boxShadow: feature.active
                                    ? '0 20px 40px -10px rgba(255, 102, 0, 0.2)'
                                    : '0 10px 30px -10px rgba(0, 51, 102, 0.1)'
                            }}
                        >
                            <div className={`w-14 h-14 rounded-md flex items-center justify-center mb-6 transition-colors duration-300 ${feature.active ? 'bg-primary text-white' : 'bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white'
                                }`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary">{feature.title}</h3>
                            <p className="text-text-muted mb-8 leading-relaxed">{feature.description}</p>
                            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${feature.active ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-primary group-hover:text-white'
                                }`}>
                                <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
