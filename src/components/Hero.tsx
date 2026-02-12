import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto text-center relative z-10">
                <div className="flex justify-center mb-8">
                    <Logo variant="iso" width={80} height={80} className="w-20 h-20" />
                </div>

                <div className="inline-block mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-sm text-secondary font-medium tracking-wide">
                    🚀 Potencia tu negocio con Inteligencia Artificial
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 glow-text leading-[1.1]">
                    Automatización de atención al cliente <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
                        y agendamiento con IA
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
                    Automatizamos tareas repetitivas, integraciones y procesos empresariales para
                    <span className="text-white font-medium"> ahorrar tiempo</span>,
                    <span className="text-white font-medium"> reducir errores</span> y
                    <span className="text-white font-medium"> aumentar la productividad</span> mediante n8n.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="glow" size="lg" className="h-12 px-8 text-base shadow-lg shadow-purple-500/25" asChild>
                        <Link href="#contacto">Automatizar mi negocio</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base hover:bg-white/5" asChild>
                        <Link href="#como-funciona">Ver cómo funciona</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
