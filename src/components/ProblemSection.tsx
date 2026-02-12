import { AlertCircle, Clock, XCircle, TrendingDown } from "lucide-react";

const problems = [
  {
    title: "Atención Lenta",
    desc: "Clientes cansados de esperar respuestas básicas o citas por WhatsApp.",
    icon: Clock,
  },
  {
    title: "Pérdida de Leads",
    desc: "Mensajes fuera de horario que nunca se responden y se van a la competencia.",
    icon: XCircle,
  },
  {
    title: "Errores de Agendamiento",
    desc: "Confusión en fechas, cancelaciones no gestionadas y agendas vacías.",
    icon: AlertCircle,
  },
  {
    title: "Baja Conversión",
    desc: "Muchos preguntan pero pocos agendan debido a la fricción en el proceso.",
    icon: TrendingDown,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#080d2f] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">El problema de no estar automatizado</h2>
          <p className="text-xl text-gray-400 italic">"Si tardas más de 5 minutos en responder, las probabilidades de cerrar una venta caen un 80%."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#0a0e33] border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <p.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
