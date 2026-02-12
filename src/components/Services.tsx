import { MonitorPlay, MessageSquare, Zap, Target } from "lucide-react";

const services = [
  {
    title: "Chatbots de Atención",
    desc: "Atención 24/7 en tu web o WhatsApp para resolver dudas frecuentes al instante.",
    icon: MessageSquare,
  },
  {
    title: "Agendamiento Automático",
    desc: "Sincronización directa con tu calendario. Tus clientes reservan sin intervención humana.",
    icon: Zap,
  },
  {
    title: "Calificación de Leads",
    desc: "Filtramos a los curiosos de los clientes reales mediante preguntas inteligentes.",
    icon: Target,
  },
  {
    title: "Demos Interactivas",
    desc: "Sistemas que muestran el potencial de tu servicio de manera automática.",
    icon: MonitorPlay,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-[#080d2f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-[#0a0e33] border border-white/5 hover:bg-purple-500/5 transition-all">
              <s.icon className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
