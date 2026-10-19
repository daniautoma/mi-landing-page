"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";
import { MessageSquare } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const whatsappUrl = getWhatsAppLink(agenciaData.whatsapp.mensajePredeterminado);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-background/85 backdrop-blur-md border-white/10 py-3 shadow-lg"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                        {agenciaData.nombre}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] tracking-wider uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        IA & Auto
                    </span>
                </Link>

                {/* Navegación Desktop */}
                <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
                    <Link href="#demos" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Demos en Vivo
                    </Link>
                    <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
                    <Link href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</Link>
                    <Link href="#beneficios" className="hover:text-white transition-colors">Beneficios</Link>
                    <Link href="#contacto" className="hover:text-white transition-colors">Diagnóstico</Link>
                </nav>

                {/* CTAs Header */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden sm:flex text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 border border-emerald-500/20"
                        asChild
                    >
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                        >
                            <MessageSquare className="w-4 h-4" />
                            WhatsApp
                        </a>
                    </Button>

                    <Button variant="glow" size="sm" asChild>
                        <Link href="#contacto">Solicitar Diagnóstico</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
