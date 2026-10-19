export const agenciaData = {
    nombre: "daniautoma",
    nombreCompleto: "daniautoma | Agencia de Automatización & IA",
    eslogan: "Agencia de Automatización & IA",
    propuestaValor: "Transformamos tu negocio local con Agentes de WhatsApp con IA, Sistemas de Citas Automáticas y Flujos de Trabajo con n8n.",
    descripcionCorta: "Optimizamos la captación de clientes de tu negocio con agentes de IA en WhatsApp, formularios automatizados y desarrollo web ultra-rápido.",
    
    // Canales y ecosistema
    dominio: "https://daniautoma.cloud",
    urls: {
        crm: "https://crm.daniautoma.cloud",
        demoDental: "https://drabianca.daniautoma.cloud",
        webOficial: "https://daniautoma.cloud",
    },

    // WhatsApp corporativo (El Salvador +503 7757 6329)
    whatsapp: {
        rawNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50377576329",
        displayNumber: "+503 7757 6329",
        mensajePredeterminado: "Hola daniautoma, vi su sitio web y me gustaría agendar una llamada de valoración sobre automatizaciones.",
        mensajeDemoAgencia: "Hola daniautoma, quiero probar el agente de WhatsApp con IA de la agencia y conocer más sobre el sistema de citas.",
    },

    // Integraciones y webhooks
    webhooks: {
        n8nLeadWebhook: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://daniautoma.cloud/webhook/landing-leads",
        n8nChatWebhook: process.env.NEXT_PUBLIC_WEBHOOK_CHAT || "https://daniautoma.cloud/webhook/ai-chat",
    },

    // Servicios de interés para el formulario
    servicios: [
        "Agente de WhatsApp + CRM",
        "Automatización con n8n",
        "Landing Page Web",
        "Consultoría General",
    ],

    // Enlaces de redes sociales
    social: {
        instagram: "https://instagram.com/daniautoma",
        tiktok: "https://tiktok.com/@daniautoma",
        linkedin: "https://linkedin.com/in/daniautoma",
        email: "contacto@daniautoma.cloud",
    },
};

// Generador de enlace directo a WhatsApp
export function getWhatsAppLink(customMessage?: string) {
    const message = customMessage || agenciaData.whatsapp.mensajePredeterminado;
    const cleanNumber = agenciaData.whatsapp.rawNumber.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
