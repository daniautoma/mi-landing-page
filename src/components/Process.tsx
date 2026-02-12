const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos tus procesos actuales y detectamos cuellos de botella."
  },
  {
    num: "02",
    title: "Diseño de Flujo",
    desc: "Creamos la lógica del asistente para que hable como tú marca."
  },
  {
    num: "03",
    title: "Implementación",
    desc: "Conectamos todo: WhatsApp, Web, Calendario y tu CRM."
  },
  {
    num: "04",
    title: "Lanzamiento",
    desc: "Tu sistema empieza a trabajar 24/7. Monitoreamos y optimizamos."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-[#080d2f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-black text-purple-500/10 absolute -top-10 -left-4 group-hover:text-purple-500/20 transition-colors">
                {s.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
