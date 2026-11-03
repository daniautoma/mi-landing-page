export interface ServicioDetallado {
    id: string;
    titulo: string;
    precioReferencial: string;
    incluye: string;
    descripcionCorta: string;
    popular?: boolean;
    etiqueta?: string;
}

export const catalogoServicios: ServicioDetallado[] = [
    {
        id: "agente-whatsapp-crm",
        titulo: "Agente de IA en WhatsApp & CRM de Citas",
        precioReferencial: "Desde $250 USD",
        descripcionCorta: "Atención y agendamiento 24/7 directo en la aplicación más usada por tus clientes.",
        incluye: "Asistente conversacional 24/7 en WhatsApp, agendamiento de citas en calendario, panel CRM con bandeja de entrada omnicanal e intervención humana en tiempo real.",
        popular: true,
        etiqueta: "Más solicitado"
    },
    {
        id: "widget-chat-web",
        titulo: "Widget de Chat Web Omnicanal (IA en tu Web)",
        precioReferencial: "Desde $180 USD",
        descripcionCorta: "Convierte visitas web en clientes potenciales sin fricción ni esperas.",
        incluye: "Widget flotante de IA incrustado en el sitio web para resolver dudas de visitantes en tiempo real, agendar llamadas y derivar a WhatsApp si el cliente lo requiere.",
        popular: false
    },
    {
        id: "automatizacion-n8n",
        titulo: "Automatización de Procesos con n8n",
        precioReferencial: "Desde $150 USD",
        descripcionCorta: "Conecta todas tus herramientas para eliminar tareas manuales y errores.",
        incluye: "Creación de flujos automáticos entre formularios web, bases de datos en Google Sheets, envíos de correo transaccionales (vía Resend) y notificaciones instantáneas.",
        popular: false
    },
    {
        id: "landing-page-conversion",
        titulo: "Landing Pages de Alta Conversión (Astro / Next.js)",
        precioReferencial: "Desde $200 USD",
        descripcionCorta: "Sitios web rápidos como un rayo diseñados específicamente para vender.",
        incluye: "Sitio web estático ultra-rápido (95+ en PageSpeed), optimizado para dispositivos móviles e integrado directamente a WhatsApp y formularios.",
        popular: false,
        etiqueta: "Ultra Rápido"
    }
];

export const agenciaData = {
    nombre: "daniautoma",
    nombreCompleto: "daniautoma | Agencia de Automatización & IA",
    eslogan: "Agencia de Automatización & IA",
    propuestaValor: "Conectamos tu negocio con Agentes de WhatsApp con IA, CRMs de agendamiento automático y flujos de trabajo inteligentes con n8n.",
    descripcionCorta: "Transformamos la captación de clientes de tu negocio con agentes virtuales en WhatsApp, automatizaciones con n8n y desarrollo web de alta velocidad.",

    // Canales y ecosistema
    dominio: "https://daniautoma.cloud",
    urls: {
        crm: "https://crm.daniautoma.cloud",
        demoDental: "https://drabianca.daniautoma.cloud",
        webOficial: "https://daniautoma.cloud",
    },

    // WhatsApp corporativo (+503 7990 8530)
    whatsapp: {
        rawNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50379908530",
        displayNumber: "+503 7990 8530",
        mensajePredeterminado: "Hola daniautoma, vi su sitio web y quiero agendar una llamada de valoración para mi negocio.",
        mensajeDemoAgencia: "Hola daniautoma, quiero probar el agente de WhatsApp con IA de la agencia y conocer más sobre el sistema de citas.",
    },

    // Integraciones y webhooks
    webhooks: {
        n8nLeadWebhook: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://daniautoma.cloud/webhook/landing-leads",
        n8nChatWebhook: process.env.NEXT_PUBLIC_WEBHOOK_CHAT || "https://daniautoma.cloud/webhook/ai-chat",
    },

    // Catálogo y servicios
    catalogoServicios,
    notaInfraestructura: "* Las tarifas corresponden a la implementación, diseño y configuración personalizada del sistema. Los costos de infraestructura (servidor VPS, dominio corporativo y consumo de API de IA) se cotizan de forma transparente en la sesión de valoración según la escala de tu negocio.",

    // Lista de servicios para el formulario selector
    servicios: [
        "Agente de IA en WhatsApp & CRM de Citas",
        "Widget de Chat Web Omnicanal (IA en tu Web)",
        "Automatización de Procesos con n8n",
        "Landing Pages de Alta Conversión (Astro / Next.js)",
        "Consultoría General / Diagnóstico Integral",
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
    const cleanNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || agenciaData.whatsapp.rawNumber).replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
