import Link from "next/link";
import { siteConfig } from "@/config/site";

import { Instagram, Facebook, MonitorPlay as TikTok } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="mb-4 block">
                            <span className="font-bold text-xl">danIAutoma</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Potenciando empresas mediante la automatización inteligente de atención al cliente y agendamiento con IA.
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

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
                    <div className="flex gap-6 items-center">
                        <a href="https://instagram.com/daniautoma" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://tiktok.com/@daniautoma" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110">
                            <TikTok className="w-5 h-5" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
