import { agenciaData, getWhatsAppLink } from "@/data/agencia";

export const siteConfig = {
    name: agenciaData.nombre,
    title: `${agenciaData.nombre} | Agencia de Automatización con IA & Agentes de WhatsApp`,
    description: agenciaData.descripcionCorta,
    propuestaValor: agenciaData.propuestaValor,
    author: "daniautoma",
    domain: agenciaData.dominio,
    whatsappNumber: agenciaData.whatsapp.displayNumber,
    whatsappRaw: agenciaData.whatsapp.rawNumber,
    whatsappLink: getWhatsAppLink(),
    links: {
        crm: agenciaData.urls.crm,
        demoDental: agenciaData.urls.demoDental,
        instagram: agenciaData.social.instagram,
        tiktok: agenciaData.social.tiktok,
        linkedin: agenciaData.social.linkedin,
        email: agenciaData.social.email,
    },
    webhooks: {
        leadForm: agenciaData.webhooks.n8nLeadWebhook,
        chat: agenciaData.webhooks.n8nChatWebhook,
    },
    analytics: {
        gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
    },
};
