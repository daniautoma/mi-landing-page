export function Process() {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico",
            description: "Analizamos tus canales de comunicación y detectamos cuellos de botella."
        },
        {
            number: "02",
            title: "Diseño de Agente",
            description: "Creamos un agente inteligente con la personalidad y conocimientos de tu negocio."
        },
        {
            number: "03",
            title: "Integración",
            description: "Conectamos el agente a tu WhatsApp, CRM y herramientas de agendamiento."
        },
        {
            number: "04",
            title: "Lanzamiento",
            description: "Tu negocio comienza a automatizar ventas y citas de inmediato."
        }
    ];

    return (
        <section id="como-funciona" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Tu camino a la automatización
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all">
                            <span className="text-5xl font-black text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                            <p className="text-muted-foreground text-sm relative z-10">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
