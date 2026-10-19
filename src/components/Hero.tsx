import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";

export function Hero() {
    const whatsappUrl = getWhatsAppLink(agenciaData.whatsapp.mensajePredeterminado);

    return (
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[92vh]">
            {/* Luces y efectos decorativos de fondo */}
            <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[130px] pointer-events-none" />

            <div className="container px-4 mx-auto text-center relative z-10">
                {/* Badge Superior */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm text-secondary font-medium tracking-wide">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span>Agencia de Automatización & Inteligencia Artificial</span>
                </div>

                {/* Título Principal */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 glow-text leading-[1.1]">
                    Transformamos tu negocio local con <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
                        Agentes de WhatsApp con IA
                    </span>
                </h1>

                {/* Propuesta de Valor */}
                <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
                    Sistemas de citas automáticas, atención al cliente 24/7 y flujos de trabajo inteligentes con{" "}
                    <span className="text-white font-semibold">n8n</span> para multiplicar tus ventas sin contratar más personal.
                </p>

                {/* Llamadas a la acción (CTAs) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button
                        size="lg"
                        className="h-14 px-8 text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 w-full sm:w-auto"
                        asChild
                    >
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Hablar con un Asesor
                        </a>
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 px-8 text-base border-white/15 bg-white/5 hover:bg-white/10 text-white w-full sm:w-auto"
                        asChild
                    >
                        <Link href="#demos" className="flex items-center justify-center gap-2">
                            <span>Probar Demos en Vivo</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Puntos destacados de confianza */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Respuesta en menos de 5 segundos</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>Sincronización con Google Calendar & CRM</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400" />
                        <span>Implementación a medida con n8n</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
