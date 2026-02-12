import { MessageSquare, Calendar, Zap, Bot } from "lucide-react";

const services = [
    {
        title: "Atención al Cliente con IA",
        description: "Modelos de lenguaje entrenados para responder preguntas frecuentes y resolver dudas las 24/7.",
        icon: MessageSquare
    },
    {
        title: "Agendamiento Automático",
        description: "Sincronización directa con tu calendario para que tus clientes agenden sin intervención humana.",
        icon: Calendar
    },
    {
        title: "Automatización de Workflows",
        description: "Conectamos todas tus herramientas para que los datos fluyan automáticamente entre ellas.",
        icon: Zap
    },
    {
        title: "Agentes de Voz e IA",
        description: "Implementamos asistentes que pueden hablar y razonar para mejorar la experiencia del cliente.",
        icon: Bot
    }
];

export function Services() {
    return (
        <section id="servicios" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Nuestros Servicios
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
