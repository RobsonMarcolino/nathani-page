import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Ricardo Silva",
        role: "CEO, TechSolutions",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        content: "A Nathani Consultoria transformou nosso processo de vendas. O ROI das campanhas triplicou em apenas 3 meses. Profissionalismo impecável.",
        stars: 5
    },
    {
        name: "Fernanda Costa",
        role: "Diretora de Marketing, Moda & Co.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        content: "Finalmente encontramos uma agência que entende de dados. Os relatórios são claros e o resultado é visível no caixa da empresa.",
        stars: 5
    },
    {
        name: "Carlos Eduardo",
        role: "Fundador, EduTech",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        content: "Escalamos de 10 para 150 leads diários mantendo o custo controlado. A estratégia de criativos deles é de outro nível.",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden text-white border-t border-white/5">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block"
                    >
                        Prova Social
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold mb-4 text-white"
                    >
                        O que dizem nossos <span className="text-primary">Parceiros</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Resultados reais de quem decidiu escalar o negócio com tráfego de alta performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative group"
                        >
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                                <Quote size={20} fill="currentColor" />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border-2 border-primary/50"
                                />
                                <div>
                                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} size={16} className="text-primary fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
