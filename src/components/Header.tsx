"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
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
                    <Logo
                        variant="full"
                        height={40}
                        className="h-8 md:h-10 w-auto"
                    />
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
