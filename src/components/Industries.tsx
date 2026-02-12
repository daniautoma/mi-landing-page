export default function Industries() {
  const industries = [
    "Clínicas Dentales",
    "Barberías y Salones",
    "Agencias de Servicios",
    "Servicios Médicos",
    "E-commerce y Retail",
    "Consultorías"
  ];

  return (
    <section className="py-20 bg-[#0a0e33] border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Enfocados en resultados</h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Especializados en sectores que requieren agendamiento y atención constante.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((item, idx) => (
            <div 
              key={idx} 
              className="px-8 py-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold hover:bg-purple-500/20 transition-all cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
