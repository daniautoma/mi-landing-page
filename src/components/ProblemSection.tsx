import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

const problems = [
    {
        title: "Mensajes acumulados",
        description: "Clientes esperando horas por una respuesta, perdiendo interés o yéndose con la competencia.",
        icon: AlertTriangle
    },
    {
        title: "Gestión de citas manual",
        description: "Perder tiempo valioso coordinando horarios por WhatsApp o teléfono constantemente.",
        icon: Clock
    },
    {
        title: "Pérdida de ventas",
        description: "No poder atender a todos los leads que llegan fuera del horario comercial.",
        icon: TrendingDown
    }
];

export function ProblemSection() {
    return (
        <section className="py-20 bg-red-950/10 border-y border-red-500/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        ¿Tu negocio está sobrepasado por los mensajes?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Sabemos lo difícil que es gestionar un negocio exitoso cuando la atención al cliente consume todo tu tiempo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/20 transition-all text-center"
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-500/10 mb-6">
                                <problem.icon className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                            <p className="text-muted-foreground text-sm">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
