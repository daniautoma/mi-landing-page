export const siteConfig = {
    name: "danIAutoma",
    title: "danIAutoma | Automatización de Procesos con n8n",
    description: "Automatizamos tareas repetitivas, integraciones y procesos empresariales para ahorrar tiempo, reducir errores y aumentar la productividad mediante n8n.",
    author: "Daniel - Expert Automation",
    links: {
        twitter: "https://twitter.com/daniautoma",
        linkedin: "https://linkedin.com/in/daniautoma",
        email: "contacto@daniautoma.com",
    },
    webhooks: {
        leadForm: process.env.NEXT_PUBLIC_WEBHOOK_LEAD || "https://daniautoma.cloud/webhook/landing-leads",
        chat: process.env.NEXT_PUBLIC_WEBHOOK_CHAT || "https://daniautoma.cloud/webhook/ai-chat",
    },
    analytics: {
        gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
    },
};
