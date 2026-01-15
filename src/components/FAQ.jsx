import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Existe fidelidade contratual?",
        answer: "Trabalhamos com contratos flexíveis, mas recomendamos um período mínimo de 3 meses para maturação das campanhas e colheita de dados estatisticamente relevantes."
    },
    {
        question: "Quanto preciso investir em anúncios?",
        answer: "Não existe um valor fixo, mas é necessário ter verba suficiente para 'comprar dados' e testar hipóteses. Recomendamos um investimento mínimo que seja saudável para o seu fluxo de caixa e permita escala."
    },
    {
        question: "Vocês atendem quais nichos?",
        answer: "Somos especialistas em alta performance, atendendo desde E-commerce e Infoprodutos até Negócios Locais e B2B. A estratégia muda, mas o princípio de análise de dados é o mesmo."
    },
    {
        question: "Como é feito o acompanhamento?",
        answer: "Você terá reuniões mensais de alinhamento e acesso a um dashboard ou relatórios quinzenais transparentes para acompanhar cada centavo investido."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Dúvidas Frequentes</span>
                    <h2 className="text-4xl font-bold mb-6 text-white">Perguntas <span className="text-primary">Frequentes</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors bg-white/5 backdrop-blur-lg">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full bg-transparent p-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                <div className={`p-1 rounded-full ${activeIndex === index ? 'bg-primary text-white' : 'bg-white/10 text-white'} transition-colors`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 bg-transparent text-gray-300 leading-relaxed border-t border-white/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
