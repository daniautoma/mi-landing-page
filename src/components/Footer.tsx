import Link from "next/link";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";
import { Instagram, Linkedin, MessageSquare, ExternalLink, Mail, Phone } from "lucide-react";

export function Footer() {
    const whatsappUrl = getWhatsAppLink(agenciaData.whatsapp.mensajePredeterminado);

    return (
        <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl mt-20">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Columna 1: Información de Marca */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="font-black text-2xl tracking-tight text-white">
                                {agenciaData.nombre}
                            </span>
                            <span className="block text-xs text-emerald-400 font-mono tracking-wider uppercase mt-0.5">
                                {agenciaData.eslogan}
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                            {agenciaData.propuestaValor}
                        </p>
                        <div className="flex flex-col gap-2 pt-2 text-xs text-gray-400">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                            >
                                <Phone className="w-4 h-4 text-emerald-400" />
                                <span>WhatsApp: {agenciaData.whatsapp.displayNumber}</span>
                            </a>
                            <a
                                href={`mailto:${agenciaData.social.email}`}
                                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                            >
                                <Mail className="w-4 h-4 text-cyan-400" />
                                <span>{agenciaData.social.email}</span>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Ecosistema y Demos */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">
                            Demos & Ecosistema
                        </h3>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link href="#demos" className="hover:text-emerald-400 transition-colors">
                                    Demos en Vivo
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={agenciaData.urls.demoDental}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <span>Demo Dra. Bianca (Dental)</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={agenciaData.urls.crm}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                                >
                                    <span>CRM de la Agencia</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                                >
                                    <span>Probar Agente WhatsApp</span>
                                    <MessageSquare className="w-3.5 h-3.5" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Navegación y Enlaces */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">
                            Navegación
                        </h3>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link href="#servicios" className="hover:text-white transition-colors">
                                    Servicios de Automatización
                                </Link>
                            </li>
                            <li>
                                <Link href="#como-funciona" className="hover:text-white transition-colors">
                                    Cómo funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="#beneficios" className="hover:text-white transition-colors">
                                    Beneficios de Negocio
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacto" className="hover:text-white transition-colors">
                                    Diagnóstico Gratuito
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Barra Inferior */}
                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} {agenciaData.nombreCompleto}. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-5 items-center">
                        <a
                            href={agenciaData.social.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-all hover:scale-110"
                            aria-label="Instagram de daniautoma"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href={agenciaData.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-all hover:scale-110"
                            aria-label="LinkedIn de daniautoma"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-emerald-400 transition-all hover:scale-110"
                            aria-label="WhatsApp de daniautoma"
                        >
                            <MessageSquare className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
