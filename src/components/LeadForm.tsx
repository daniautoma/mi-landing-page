"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";
import { Loader2, CheckCircle2, AlertCircle, MessageSquare, Send, Sparkles } from "lucide-react";

// Google Analytics Event Helper
const trackLead = (method: "webhook_n8n" | "whatsapp_direct") => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_submission", {
            event_category: "Leads",
            event_label: method,
        });
    }
};

export function LeadForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        businessType: "",
        serviceInterest: agenciaData.servicios[0],
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || agenciaData.webhooks.n8nLeadWebhook;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const payload = {
                ...formData,
                source: "landing_page_daniautoma",
                originDomain: typeof window !== "undefined" ? window.location.origin : "https://daniautoma.cloud",
                submittedAt: new Date().toISOString(),
            };

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                trackLead("webhook_n8n");
                setStatus("success");
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    businessType: "",
                    serviceInterest: agenciaData.servicios[0],
                    message: "",
                });
            } else {
                throw new Error(`Error en el servidor (${response.status})`);
            }
        } catch (error: any) {
            console.error("Error al enviar formulario a n8n:", error);
            setStatus("error");
            setErrorMessage("No pudimos enviar tu mensaje directamente al sistema automático. Puedes enviarlo por WhatsApp con un solo clic.");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Construye un mensaje estructurado para WhatsApp con los datos que el usuario ya digitó
    const buildWhatsAppDirectMessage = () => {
        const parts = [
            `*Hola daniautoma, solicito un Diagnóstico / Presupuesto:*`,
            formData.fullName ? `👤 *Nombre:* ${formData.fullName}` : "",
            formData.businessType ? `🏢 *Negocio / Nicho:* ${formData.businessType}` : "",
            formData.serviceInterest ? `⚡ *Servicio de Interés:* ${formData.serviceInterest}` : "",
            formData.phone ? `📱 *Teléfono:* ${formData.phone}` : "",
            formData.email ? `✉️ *Email:* ${formData.email}` : "",
            formData.message ? `📝 *Necesidad:* ${formData.message}` : "Me gustaría agendar una llamada de valoración sobre automatizaciones e IA.",
        ].filter(Boolean);

        return parts.join("\n");
    };

    const handleWhatsAppDirect = () => {
        trackLead("whatsapp_direct");
        const directUrl = getWhatsAppLink(buildWhatsAppDirectMessage());
        window.open(directUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="contacto" className="py-24 relative overflow-hidden">
            {/* Luces decorativas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12 bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl relative z-10">
                    
                    {/* Header del formulario */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs md:text-sm text-primary font-medium mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            Diagnóstico Gratuito
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
                            Solicitar Diagnóstico / Presupuesto
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                            Cuéntanos sobre tu negocio y te mostraremos cómo automatizar tus procesos con IA y n8n para multiplicar tus conversiones.
                        </p>
                    </div>

                    {/* Estado de Éxito */}
                    {status === "success" ? (
                        <div className="text-center py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 animate-fade-in space-y-4">
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                            <p className="text-emerald-300 max-w-md mx-auto text-base">
                                ¡Gracias! Un especialista o nuestro asistente virtual te contactará en breve para coordinar tu diagnóstico.
                            </p>
                            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setStatus("idle")}
                                    className="border-white/10 hover:bg-white/5"
                                >
                                    Enviar otra consulta
                                </Button>
                                <Button
                                    onClick={handleWhatsAppDirect}
                                    className="bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2"
                                >
                                    <MessageSquare className="w-4 h-4" />
                                    Continuar por WhatsApp
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Fila 1: Nombre completo y Correo */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-sm font-medium text-gray-200">
                                        Nombre completo <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                        placeholder="Ej: Daniel Morales"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                                        Correo electrónico <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                        placeholder="tu@negocio.com"
                                    />
                                </div>
                            </div>

                            {/* Fila 2: Teléfono / WhatsApp y Tipo de Negocio */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-200">
                                        Teléfono / WhatsApp <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                        placeholder="+503 7000 0000"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="businessType" className="text-sm font-medium text-gray-200">
                                        Tipo de Negocio / Nicho <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        id="businessType"
                                        name="businessType"
                                        type="text"
                                        required
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                        placeholder="Ej: Clínica Dental, Inmobiliaria, Servicios"
                                    />
                                </div>
                            </div>

                            {/* Servicio de Interés */}
                            <div className="space-y-2">
                                <label htmlFor="serviceInterest" className="text-sm font-medium text-gray-200">
                                    Servicio de Interés <span className="text-primary">*</span>
                                </label>
                                <select
                                    id="serviceInterest"
                                    name="serviceInterest"
                                    value={formData.serviceInterest}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                >
                                    {agenciaData.servicios.map((s) => (
                                        <option key={s} value={s} className="bg-slate-900 text-white">
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Mensaje / Necesidad principal */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-200">
                                    Mensaje / Necesidad principal <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                                    placeholder="Describe brevemente qué proceso te gustaría automatizar o qué problema buscas resolver..."
                                />
                            </div>

                            {/* Alerta de Error si ocurre */}
                            {status === "error" && (
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            {/* Botones de acción */}
                            <div className="space-y-3 pt-2">
                                <Button
                                    type="submit"
                                    variant="glow"
                                    size="lg"
                                    disabled={status === "loading"}
                                    className="w-full text-base py-6 font-semibold shadow-lg shadow-primary/25"
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Enviando a n8n...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Solicitar Diagnóstico / Presupuesto
                                        </span>
                                    )}
                                </Button>

                                {/* Botón Secundario de Respaldo WhatsApp */}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="lg"
                                    onClick={handleWhatsAppDirect}
                                    className="w-full text-sm py-5 border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                                    Preferir enviar datos por WhatsApp directo
                                </Button>
                            </div>

                            <p className="text-center text-xs text-muted-foreground pt-2">
                                🔒 Tus datos están protegidos y solo se utilizarán para coordinar tu sesión de diagnóstico.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
