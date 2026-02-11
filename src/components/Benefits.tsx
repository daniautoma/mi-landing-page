import { Repeat, Network, ShieldCheck, Clock } from "lucide-react";

const features = [
    {
        name: "Automatización de Tareas",
        description: "Elimina el trabajo manual repetitivo. Deja que los bots se encarguen de la entrada de datos, reportes y notificaciones.",
        icon: Repeat,
    },
    {
        name: "Integraciones Totales",
        description: "Conectamos tu CRM, correo, hojas de cálculo y herramientas favoritas en un solo flujo unificado.",
        icon: Network,
    },
    {
        name: "Reducción de Errores",
        description: "Minimiza los errores humanos en procesos críticos. La automatización garantiza consistencia y precisión al 100%.",
        icon: ShieldCheck,
    },
    {
        name: "Ahorro de Tiempo y Costos",
        description: "Recupera horas valiosas de tu equipo para que puedan enfocarse en estrategia y creatividad, no en copiar y pegar.",
        icon: Clock,
    },
];

export function Benefits() {
    return (
        <section id="beneficios" className="py-24 relative bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ¿Por qué elegir <span className="text-primary">danIAutoma</span>?
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Transformamos la operativa de tu negocio mediante flujos de trabajo inteligentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.name}
                            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
