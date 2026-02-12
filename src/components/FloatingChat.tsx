"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "¡Hola! Soy el asistente de danIAutoma. ¿Cómo puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch(siteConfig.webhooks.chat, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      if (!response.ok) throw new Error("Error en la respuesta");
      const data = await response.json();
      
      setMessages((prev) => [...prev, { role: "assistant", content: data.output || "Lo siento, hubo un error." }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Lo siento, no puedo responder en este momento." }]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#0a0e33] border border-white/10 w-[350px] md:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-purple-600 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">Chat Asistente</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-[80%] p-3 rounded-2xl",
                  msg.role === "user"
                    ? "bg-purple-600 text-white ml-auto rounded-tr-none"
                    : "bg-white/5 text-gray-200 rounded-tl-none"
                )}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white/5 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Escribiendo...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-white/5">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white/10 border-none rounded-full px-4 text-white focus:ring-1 focus:ring-purple-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-purple-600 text-white shadow-xl shadow-purple-900/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
}
