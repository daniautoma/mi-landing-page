import { MessageSquare, Bot, Zap, Globe, CheckCircle2, ArrowRight, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { catalogoServicios, agenciaData, getWhatsAppLink } from "@/data/agencia";

// Mapeo de íconos según servicio
const serviceIcons: Record<string, any> = {
    "agente-whatsapp-crm": MessageSquare,
    "widget-chat-web": Bot,
    "automatizacion-n8n": Zap,
    "landing-page-conversion": Globe,
};

export function Services() {
    return (
        <section id="servicios" className="py-24 relative overflow-hidden">
            {/* Luces sutiles de fondo */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[160px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header de la sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-xs md:text-sm text-primary font-medium mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Catálogo de Soluciones & Precios Referenciales
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-gray-400">
                        Servicios Diseñados para Escalar tu Negocio
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Implementaciones profesionales llave en mano. Precios transparentes adaptados al tamaño de tu operación.
                    </p>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {catalogoServicios.map((servicio) => {
                        const Icon = serviceIcons[servicio.id] || Sparkles;
                        const whatsappServiceUrl = getWhatsAppLink(
                            `Hola daniautoma, me interesa el servicio de "${servicio.titulo}". Quisiera agendar una llamada de valoración.`
                        );

                        return (
                            <div
                                key={servicio.id}
                                className={`relative flex flex-col justify-between rounded-3xl p-8 md:p-10 border transition-all duration-300 shadow-xl ${
                                    servicio.popular
                                        ? "bg-slate-900/80 border-emerald-500/50 shadow-emerald-500/10"
                                        : "bg-slate-900/50 border-white/10 hover:border-white/25"
                                }`}
                            >
                                {servicio.etiqueta && (
                                    <div className="absolute -top-3.5 right-8">
                                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 shadow-md">
                                            <Sparkles className="w-3 h-3" />
                                            {servicio.etiqueta}
                                        </span>
                                    </div>
                                )}

                                <div>
                                    {/* Icono y Precio */}
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <div className={`p-3.5 rounded-2xl border ${
                                            servicio.popular
                                                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                                                : "bg-primary/10 border-primary/20 text-primary"
                                        }`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs uppercase font-mono tracking-wider text-muted-foreground block">
                                                Inversión
                                            </span>
                                            <span className="text-2xl font-black text-white">
                                                {servicio.precioReferencial}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Título y Descripción */}
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                        {servicio.titulo}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        {servicio.descripcionCorta}
                                    </p>

                                    {/* Qué incluye el desarrollo */}
                                    <div className="pt-6 border-t border-white/5 space-y-3 mb-8">
                                        <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                            Qué incluye este desarrollo:
                                        </p>
                                        <div className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span>{servicio.incluye}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón de acción */}
                                <div className="pt-2">
                                    <Button
                                        className={`w-full py-6 font-semibold flex items-center justify-center gap-2 ${
                                            servicio.popular
                                                ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25"
                                                : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                                        }`}
                                        asChild
                                    >
                                        <a
                                            href={whatsappServiceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>Cotizar {servicio.titulo.split(" ")[0]}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Nota al pie sobre costos de infraestructura */}
                <div className="max-w-4xl mx-auto mt-12 p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-muted-foreground text-xs md:text-sm leading-relaxed flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>
                        {agenciaData.notaInfraestructura}
                    </p>
                </div>
            </div>
        </section>
    );
}
