import { NextResponse } from "next/server";
import { agenciaData } from "@/data/agencia";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Obtener la URL del webhook y asegurar que use el subdominio n8n.
        let webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || agenciaData.webhooks.n8nLeadWebhook;
        if (webhookUrl.includes("daniautoma.cloud/webhook") && !webhookUrl.includes("n8n.daniautoma.cloud")) {
            webhookUrl = webhookUrl.replace("https://daniautoma.cloud/webhook", "https://n8n.daniautoma.cloud/webhook");
        }

        // Mapear los campos con los nombres exactos que el nodo de validación de n8n requiere:
        // 'name', 'email', 'company', 'description'
        const payload = {
            name: body.name || body.fullName || "",
            fullName: body.fullName || body.name || "",
            email: body.email || "",
            company: body.company || body.businessName || body.businessType || "",
            businessName: body.businessName || body.company || "",
            description: body.description || body.message || "",
            message: body.message || body.description || "",
            phone: body.phone || "",
            service: body.service || body.serviceInterest || "",
            serviceInterest: body.serviceInterest || body.service || "",
            source: body.source || "landing_page_daniautoma",
            originDomain: body.originDomain || "https://daniautoma.cloud",
            submittedAt: body.submittedAt || new Date().toISOString(),
        };

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`n8n webhook error (${response.status}):`, errorText);
            return NextResponse.json(
                { error: `n8n webhook error: ${response.status}`, details: errorText },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error forwarding lead to n8n:", error);
        return NextResponse.json(
            { error: error?.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
