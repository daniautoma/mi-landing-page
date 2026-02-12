export const siteConfig = {
  name: "danIAutoma",
  description: "Especialistas en automatización de procesos con IA.",
  webhooks: {
    lead: process.env.NEXT_PUBLIC_WEBHOOK_LEAD || "https://tu-n8n.com/webhook/lead",
    chat: process.env.NEXT_PUBLIC_WEBHOOK_CHAT || "https://tu-n8n.com/webhook/chat",
  }
};
