import Link from "next/link";
import { MessageSquare, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Zap, ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";

export function LiveDemos() {
    const whatsappDemoUrl = getWhatsAppLink(agenciaData.whatsapp.mensajeDemoAgencia);

    return (
        <section id="demos" className="py-24 relative overflow-hidden">
            {/* Luces y brillos de fondo */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-secondary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header de la Sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm text-xs md:text-sm text-emerald-400 font-medium mb-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Tecnología probada en producción
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-gray-400">
                        Prueba nuestras Demos en Vivo
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Experimenta de primera mano la velocidad de nuestras soluciones y cómo un asistente inteligente interactúa y agenda citas sin intervención humana.
                    </p>
                </div>

                {/* Grid de Tarjetas de Demos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Tarjeta 1: Agente WhatsApp & CRM */}
                    <div className="group relative rounded-3xl p-8 md:p-10 bg-slate-900/60 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
                        {/* Brillo dinámico en hover */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />

                        <div>
                            {/* Badges de estado y categoría */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                    Agente 24/7 Activo
                                </span>
                                <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                    WhatsApp Cloud + n8n
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                                        Agente de WhatsApp & CRM de Citas
                                    </h3>
                                    <p className="text-xs text-emerald-400 font-medium">Ecosistema daniautoma</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                Interactúa en tiempo real con nuestro agente inteligente de WhatsApp. Responde preguntas frecuentes, califica prospectos y gestiona agendamientos sincronizados automáticamente en nuestro CRM central.
                            </p>

                            {/* Lista de características */}
                            <div className="space-y-2.5 mb-8 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span>Respuestas instantáneas y lenguaje natural adaptado a tu negocio</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span>Verificación y bloqueo de horarios de citas sin solapamientos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span>Panel CRM conectado a base de datos para seguimiento de clientes</span>
                                </div>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                            <Button
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-600/25 flex-1 py-6"
                                asChild
                            >
                                <a
                                    href={whatsappDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Probar Agente en Vivo
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white/10 hover:bg-white/5 text-gray-300 hover:text-white py-6"
                                asChild
                            >
                                <a
                                    href={agenciaData.urls.crm}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <span>Ver CRM</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Tarjeta 2: Demo Dental Dra. Bianca */}
                    <div className="group relative rounded-3xl p-8 md:p-10 bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden">
                        {/* Brillo dinámico en hover */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

                        <div>
                            {/* Badges de estado y categoría */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Sector Salud / Dental
                                </span>
                                <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                    Astro Web + IA
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                                    <Stethoscope className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        Sitio Web + Asistente Dental
                                    </h3>
                                    <p className="text-xs text-cyan-400 font-medium">Clínica Dra. Bianca</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                Demostración interactiva en vivo diseñada para el sector odontológico y médico. Descubre la velocidad de carga instantánea de Astro, diseño moderno y su asistente integrado para pacientes.
                            </p>

                            {/* Lista de características */}
                            <div className="space-y-2.5 mb-8 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <span>Carga ultra-rápida (Score 100 en Google Lighthouse con Astro)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <span>Asistente para orientación en tratamientos, costos y reservas</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <span>Diseño responsive con enfoque en conversión de pacientes</span>
                                </div>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="pt-6 border-t border-white/5">
                            <Button
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-cyan-600/25 py-6"
                                asChild
                            >
                                <a
                                    href={agenciaData.urls.demoDental}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <span>Abrir Demo en Vivo (drabianca.daniautoma.cloud)</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
