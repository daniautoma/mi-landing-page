import { NextResponse } from "next/server";
import { agenciaData } from "@/data/agencia";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || agenciaData.webhooks.n8nLeadWebhook;

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `n8n webhook error: ${response.status}` },
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

