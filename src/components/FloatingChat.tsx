"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// GA Event Helper
const trackChatClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "chat_click", {
            event_category: "Chat",
            event_label: "Open Chat Widget",
        });
    }
};

export function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
        { role: 'bot', content: '¡Hola! Soy el asistente virtual de danIAutoma. ¿En qué puedo ayudarte hoy?' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            inputRef.current?.focus();
        }
    }, [messages, isOpen]);

    const toggleChat = () => {
        if (!isOpen) trackChatClick();
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInputValue("");
        setIsTyping(true);

        // Keep focus on input
        setTimeout(() => inputRef.current?.focus(), 10);

        try {
            const response = await fetch(siteConfig.webhooks.chat, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg, sessionId: "session_" + Math.random().toString(36).substr(2, 9) })
            });

            const data = await response.json();

            let botResponse = "";
            if (Array.isArray(data) && data.length > 0) {
                botResponse = data[0].output || data[0].message || "No recibí una respuesta clara.";
            } else {
                botResponse = data.output || data.message || "No recibí una respuesta clara.";
            }

            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);

        } catch (e) {
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'bot', content: "Lo siento, hubo un error de conexión." }]);
        }
    };

    return (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">

            {/* Chat Window */}
            <div
                className={cn(
                    "bg-slate-900 border border-white/10 rounded-2xl shadow-2xl w-[350px] mb-4 overflow-hidden transition-all duration-300 origin-bottom-right",
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none h-0"
                )}
            >
                <div className="bg-primary/10 p-4 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-semibold text-sm text-white">Soporte danIAutoma</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-black/40">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={cn("max-w-[80%] rounded-lg p-3 text-sm", msg.role === 'user' ? "ml-auto bg-primary text-white" : "bg-white/10 text-gray-200")}>
                            {msg.content}
                        </div>
                    ))}
                    {isTyping && <div className="text-xs text-gray-500 animate-pulse">Escribiendo...</div>}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-3 border-t border-white/5 bg-slate-900 flex gap-2">
                    <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Escribe un mensaje..."
                        className="flex-1 bg-black/20 text-sm rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                    <Button size="icon" variant="ghost" onClick={handleSend} className="h-9 w-9">
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Floating Toggle Button */}
            <Button
                onClick={toggleChat}
                variant="glow"
                className="h-14 w-14 rounded-full shadow-lg shadow-primary/20 p-0 flex items-center justify-center group"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />}
            </Button>
        </div>
    );
}
