"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

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
                    ? "bg-background/80 backdrop-blur-md border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Logo Icon representation based on description */}
                    <div className="relative w-8 h-8">
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-lg opacity-80 group-hover:opacity-100 transition-opacity blur-[2px]"></div>
                        <div className="absolute inset-0.5 bg-background rounded-lg flex items-center justify-center">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 font-bold">dI</span>
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        dan<span className="text-secondary">IA</span>utoma
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
                    <Link href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</Link>
                    <Link href="#beneficios" className="hover:text-white transition-colors">Beneficios</Link>
                </nav>

                <Button variant="glow" size="sm" asChild>
                    <Link href="#contacto">Solicitar automatización</Link>
                </Button>
            </div>
        </header>
    );
}
