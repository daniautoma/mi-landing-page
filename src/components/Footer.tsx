import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block">
                            dan<span className="text-secondary">IA</span>utoma
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Potenciando empresas mediante la automatización inteligente de procesos con n8n y tecnologías modernas.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Enlaces</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link href="#beneficios" className="hover:text-primary transition-colors">Beneficios</Link></li>
                            <li><Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacidad</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Términos</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter/X</a>
                        <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
