"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { agenciaData, getWhatsAppLink } from "@/data/agencia";

export function WhatsAppFloatingButton() {
    const [showTooltip, setShowTooltip] = useState(true);
    const whatsappUrl = getWhatsAppLink(agenciaData.whatsapp.mensajePredeterminado);

    return (
        <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            {/* Tooltip / Globo de atención */}
            {showTooltip && (
                <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 border border-emerald-500/30 text-white px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md animate-bounce-subtle text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                        <p className="font-semibold text-emerald-400">¿Hablamos por WhatsApp?</p>
                        <p className="text-gray-300">Asesor disponible en línea</p>
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowTooltip(false);
                        }}
                        className="text-gray-400 hover:text-white ml-1 p-0.5"
                        aria-label="Cerrar notificación"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}

            {/* Botón Flotante Principal de WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chatear por WhatsApp con daniautoma"
                className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 hover:shadow-emerald-500/50 transition-all duration-300"
            >
                {/* Ondas pulsantes */}
                <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

                {/* Ícono de WhatsApp */}
                <svg
                    className="w-7 h-7 fill-current transition-transform group-hover:rotate-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.102-.477-.15-.678.15-.2.301-.778.98-.953 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.899.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.04 2C6.536 2 2.067 6.47 2.067 11.975c0 1.968.57 3.87 1.65 5.503L2 22l4.673-1.666a9.92 9.92 0 0 0 5.367 1.642h.004c5.503 0 9.973-4.471 9.973-9.976C22.017 6.47 17.545 2 12.04 2zm0 18.232h-.003a8.23 8.23 0 0 1-4.197-1.149l-.301-.179-3.117 1.11 1.134-3.038-.196-.312a8.22 8.22 0 0 1-1.265-4.689c0-4.549 3.701-8.251 8.253-8.251 4.551 0 8.252 3.702 8.252 8.251 0 4.55-3.701 8.253-8.253 8.253z" />
                </svg>
            </a>
        </aside>
    );
}
