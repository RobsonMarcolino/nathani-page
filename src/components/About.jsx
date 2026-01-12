import React from 'react';

const About = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-2xl"></div>
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                        alt="Estrategista Digital"
                        className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500"
                    />
                </div>

                <div>
                    <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Quem sou eu</span>
                    <h2 className="text-4xl font-bold mb-6 text-secondary">Olá, sou Nathani Oliveira</h2>
                    <h3 className="text-xl font-medium text-text-muted mb-6">Egestora de Tráfego e Estrategista Digital</h3>

                    <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                        <p>
                            Acredito que por trás de cada clique existe uma pessoa, e por trás de cada empresa existe um sonho. Minha missão não é apenas "rodar anúncios", mas sim conectar o seu propósito com quem realmente precisa da sua solução.
                        </p>
                        <p>
                            Com anos de experiência e milhões gerenciados em mídia paga, desenvolvi a metodologia <strong>A.F.E.T.O</strong> para trazer humanização para um mercado dominado por números frios.
                        </p>
                        <p>
                            Aqui, agimos com ética, transparência e foco total no seu crescimento sustentável.
                        </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100 flex gap-12">
                        <div>
                            <span className="block text-3xl font-extrabold text-secondary">3+</span>
                            <span className="text-sm text-text-muted">Anos de Experiência</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-secondary">100+</span>
                            <span className="text-sm text-text-muted">Projetos Atendidos</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
