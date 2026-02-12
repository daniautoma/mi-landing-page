import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <Sparkles className="w-24 h-24 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                        ¿Listo para escalar tu atención al cliente?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 relative z-10">
                        Deja de perder clientes por falta de respuesta. Automatiza hoy mismo y enfócate en lo que realmente importa: hacer crecer tu negocio.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full" asChild>
                            <Link href="#contacto">Solicitar Demo Gratis</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10" asChild>
                            <Link href="#servicios">Ver Servicios</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
