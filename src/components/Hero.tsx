import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Logo variant="isotype" width={80} height={80} className="mx-auto mb-8 animate-fade-in" />
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6 leading-tight">
          Automatización de atención al cliente y agendamiento con IA
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Escalamos tu negocio implementando asistentes inteligentes que atienden a tus clientes 24/7.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            href="#contacto"
            className="w-full md:w-auto px-8 py-4 bg-white text-[#080d2f] rounded-full font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2"
          >
            Agenda una Demo <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="#servicios"
            className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
