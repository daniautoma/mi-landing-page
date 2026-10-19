import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";

export function CTASection() {
    const whatsappUrl = getWhatsAppLink(agenciaData.whatsapp.mensajePredeterminado);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/15 blur-[140px] rounded-full -z-10" />

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-[2.5rem] bg-slate-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                        <Sparkles className="w-28 h-28 text-emerald-400" />
                    </div>

                    <span className="inline-block text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
                        Da el siguiente paso
                    </span>

                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10 text-white tracking-tight">
                        ¿Listo para multiplicar tus citas y clientes con IA?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed">
                        Deja de perder prospectos por demoras al responder en WhatsApp. Automatiza tus respuestas, sincroniza tu agenda y escala las ventas de tu negocio local.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-base rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center gap-2 w-full sm:w-auto"
                            asChild
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageSquare className="w-5 h-5" />
                                Hablar con un Asesor por WhatsApp
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-base rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 w-full sm:w-auto"
                            asChild
                        >
                            <Link href="#contacto">
                                <span>Solicitar Diagnóstico Gratuito</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
