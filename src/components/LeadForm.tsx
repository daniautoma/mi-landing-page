"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Loader2 } from "lucide-react";

// Google Analytics Event Helper
const trackLead = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_sent", {
            event_category: "Leads",
            event_label: "Formulario Contacto",
        });
    }
};

export function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        description: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch(siteConfig.webhooks.leadForm, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source: "landing_page", timestamp: new Date().toISOString() }),
            });

            if (response.ok) {
                trackLead();
                setStatus("success");
                setFormData({ name: "", company: "", email: "", description: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contacto" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative z-10">
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none -z-10" />

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Empieza a Automatizar Hoy!</h2>
                        <p className="text-muted-foreground">
                            Déjanos tus datos y te contactaremos para diseñar tu solución a medida.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre</label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-300">Empresa</label>
                                <input
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="Nombre de tu empresa"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo Electrónico</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium text-gray-300">¿Qué te gustaría automatizar?</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors resize-none"
                                placeholder="Describe brevemente tu proceso actual..."
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="glow"
                            size="lg"
                            className="w-full text-base py-6"
                            disabled={status === "loading" || status === "success"}
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                                </>
                            ) : status === "success" ? (
                                "¡Solicitud Enviada con Éxito!"
                            ) : (
                                "Solicitar Automatización"
                            )}
                        </Button>

                        {status === "success" && (
                            <p className="text-center text-green-400 text-sm mt-2">
                                Gracias. Hemos recibido tus datos y te contactaremos pronto.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-center text-red-400 text-sm mt-2">
                                Hubo un error al enviar. Por favor intenta de nuevo.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
