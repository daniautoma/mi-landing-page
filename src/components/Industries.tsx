import { CheckCircle2 } from "lucide-react";

const industries = [
    "Clínicas dentales",
    "Barberías y salones",
    "Negocios de servicios",
    "Inmobiliarias",
    "Centros médicos",
    "Consultores"
];

export function Industries() {
    return (
        <section className="py-20 bg-background/30 backdrop-blur-sm border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Soluciones ideales para negocios que trabajan con citas y clientes recurrentes
                    </h2>

                    <p className="text-muted-foreground text-center mb-12 text-lg">
                        Nuestros agentes inteligentes son ideales para negocios que reciben mensajes constantemente
                        y gestionan citas o consultas diarias. Si tu negocio recibe mensajes de clientes,
                        podemos automatizar gran parte del proceso.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors group"
                            >
                                <CheckCircle2 className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                                <span className="font-medium text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
