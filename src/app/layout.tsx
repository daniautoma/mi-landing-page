import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { agenciaData } from "@/data/agencia";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL(agenciaData.dominio),
    title: {
        default: "daniautoma | Agencia de Automatización con IA & Agentes de WhatsApp",
        template: "%s | daniautoma",
    },
    description: "Transformamos la captación de clientes de tu negocio con agentes virtuales en WhatsApp, automatizaciones con n8n y desarrollo web de alta velocidad.",
    keywords: [
        "automatización de procesos",
        "agentes de whatsapp con ia",
        "n8n el salvador",
        "automatización para negocios",
        "agendamiento automático",
        "crm citas whatsapp",
        "inteligencia artificial para pymes",
        "daniautoma",
        "landing pages astro",
        "nextjs",
    ],
    authors: [{ name: "daniautoma", url: agenciaData.dominio }],
    creator: "daniautoma",
    openGraph: {
        type: "website",
        locale: "es_ES",
        url: agenciaData.dominio,
        title: "daniautoma | Agencia de Automatización con IA & Agentes de WhatsApp",
        description: "Transformamos la captación de clientes de tu negocio con agentes virtuales en WhatsApp, automatizaciones con n8n y desarrollo web de alta velocidad.",
        siteName: agenciaData.nombreCompleto,
        images: [
            {
                url: "/logo-daniautoma.svg",
                width: 1200,
                height: 630,
                alt: "daniautoma - Agencia de Automatización & IA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "daniautoma | Agencia de Automatización con IA & Agentes de WhatsApp",
        description: "Transformamos la captación de clientes de tu negocio con agentes virtuales en WhatsApp, automatizaciones con n8n y desarrollo web de alta velocidad.",
        images: ["/logo-daniautoma.svg"],
    },
    icons: {
        icon: "/isotipo-daniautoma.svg",
        shortcut: "/isotipo-daniautoma.svg",
        apple: "/isotipo-daniautoma.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-emerald-500/30 selection:text-white`}>
                {Boolean(siteConfig.analytics.gaId) && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${siteConfig.analytics.gaId}');
                            `}
                        </Script>
                    </>
                )}
                {children}
            </body>
        </html>
    );
}
